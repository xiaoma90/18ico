<?php
namespace app\home\controller;

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use app\home\controller\Qrcode as QR;

class User extends Base{
	const USER = 'users';
	const USER_SESSION = 'home_user';
	const PERSON = 'person_auth';
	const AGENCY = 'organization_auth';
	#用户中心首页
	public function index(){
		$id = session(self::USER_SESSION)['id'];
		$user = db(self::USER)->where(['id'=>$id])->find();
		$user['updated_at'] = date('Y-m-d H:i:s',$user['updated_at']);
		$user['created_at'] = date('Y-m-d H:i:s',$user['created_at']);
		$return = [
			'user' => $user
		];
		return view('view/personal',$return);
	}
	#判断用户信息
	public function judge(){
		$id = session(self::USER_SESSION)['id'];
		$user = db(self::USER)->where(['id'=>$id])->find();
		if(empty($user['email'])){
			return json(['status'=>0,'msg'=>'请完善个人信息','data'=>'/home/user/index']);
		}else if($user['type'] != 3){
			return json(['status'=>0,'msg'=>'请先实名认证','data'=>'/home/user/identity']);
		}else if(empty($user['two_password'])){
			return json(['status'=>0,'msg'=>'您还未设置资金密码，快去设置吧','data'=>'/home/user/security']);
		}
		return json(['status'=>1]);
	}
	#账户总览
	public function my_count()
	{
		$id = session(self::USER_SESSION)['id'];
		$user = db(self::USER)->where(['id'=>$id])->find();
		$user['updated_at'] = date('Y-m-d H:i:s',$user['updated_at']);
		$user['created_at'] = date('Y-m-d H:i:s',$user['created_at']);
		#我支持的项目
		$project = db('pro_to_users')->where(['uid'=>$id])->select();
		foreach ($project as $k => $v) {
			$pp = db('project')->where(['id'=>$v['proid']])->find();
			if(!empty($pp)){
				$project[$k]['project_name'] = $pp['name'];
				if(time()>=$pp['start_times'] && time()<=$pp['end_time']){
					$project[$k]['status'] = '正在进行';
				}elseif($pp['is_do'] == 3 || time()>$pp['end_time']){
					$project[$k]['status'] = '已结束';
				}else{
					$project[$k]['status'] = '预售中';
				}
			}
		}
		$p_num = count($project);
		#我发起的项目
		$rise = db('project')->where(['link_account'=>$id])->order('created_at desc')->select();
		$r_num = count($rise);
		#推荐项目
		$projects = db('project')->order('created_at','desc')->limit(0,3)->select();
		if(!empty($projects)){
			foreach ($projects as $k => $v) {
				if($v['is_do'] == 2 && time()>=$v['start_times'] && time()<=$v['end_time']){
					$projects[$k]['status'] = '正在进行';
				}elseif(time()>$v['end_time']){
					$projects[$k]['status'] = '已结束';
				}else{
					$projects[$k]['status'] = '预售中';
				}
			}
		}
		$time = time();
		$nostart_project = db('project')->where(['end_time'=>['>',$time]])->select();
		foreach($nostart_project as $k=>$v){
			if($v['start_times'] < $time){
				unset($nostart_project[$k]);
			}
		}
		// dump($nostart_project);exit;
		$return = [
			'user' => $user,
			'project' => $project,
			'projects' => $projects,
			'p_num' => $p_num,
			'rise' => $rise,
			'r_num' => $r_num,
			'nostart_project'=>$nostart_project

		];
		#
		return view('view/my_count',$return);
	}

	#资金充值
	public function exchange()
	{
		$id = session(self::USER_SESSION)['id'];
		$user = db(self::USER)->where(['id'=>$id])->find();
		$user['updated_at'] = date('Y-m-d H:i:s',$user['updated_at']);
		$user['created_at'] = date('Y-m-d H:i:s',$user['created_at']);

		/*$this->qrcodess($user['btc_num']);
		$this->qrcodess($user['eth_num']);
		$this->qrcodess($user['ltc_num']);*/
		$return = [
			'user' => $user
		];
		return view('view/recharge',$return);
	}
	#获取二维码
	private function qrcodess($num){
	   $path = "./uploads/qrcode/$num.png";
	   $errorCorrectionLevel =4 ;//容错级别
	   $matrixPointSize = 150;//生成图片大小
	   //生成二维码图片
	   $object = new QR();
	   $img = $object->png($num,$path, $errorCorrectionLevel, $matrixPointSize, 2,false);
	}
	#资金提现
	public function withdrawal()
	{
		$id = session(self::USER_SESSION)['id'];
		$user = db(self::USER)->where(['id'=>$id])->find();
		$user['updated_at'] = date('Y-m-d H:i:s',$user['updated_at']);
		$user['created_at'] = date('Y-m-d H:i:s',$user['created_at']);
		$return = [
			'user' => $user
		];
		return view('view/withdrawal',$return);
	}
	#资金明细
	public function capital()
	{
		$id = session(self::USER_SESSION)['id'];
		$user = db(self::USER)->where(['id'=>$id])->find();
		$user['updated_at'] = date('Y-m-d H:i:s',$user['updated_at']);
		$user['created_at'] = date('Y-m-d H:i:s',$user['created_at']);
		$data = db('account')->where(['uid'=>$id])->select();
		$num = count($data);
		$return = [
			'user' => $user,
			'data' => $data,
			'num' => $num
		];
		return view('view/capital',$return);
	}
	#安全设置
	public function security()
	{
		$id = session(self::USER_SESSION)['id'];
		$user = db(self::USER)->where(['id'=>$id])->find();
		$user['updated_at'] = date('Y-m-d H:i:s',$user['updated_at']);
		$user['created_at'] = date('Y-m-d H:i:s',$user['created_at']);
		$return = [
			'user' => $user
		];
		return view('view/security',$return);
	}
	#个人认证
	public function personAuth(){
		$data = input('data');
		$dd   = parseToArr($data);
		foreach ($dd as $k => $v) {
			if(empty($v)){
				unset($dd[$k]);
			}
		}
		if(count($dd)<5){
			return json(['code'=>0,'msg'=>'请完善信息!']);
		}
		foreach ($dd as $k => $v) {
			if($k == 'hand_front1' || $k == 'front1'){
				$dd[$k] = $dd['hand_front'];
				$dd[$k] = $dd['front'];
				unset($dd[$k]);

			}else if($k == 'year' || $k =='month'|| $k =='days'){
				$dd['birthday'] = $dd['year'].'-'.$dd['month'].'-'.$dd['days'];
				unset($dd[$k]);
			}
		}
		$id = session(self::USER_SESSION)['id'];
		if(db(self::PERSON)->where(['uid'=>$id,'status'=>['neq','2']])->find() || db(self::AGENCY)->where(['uid'=>$id,'status'=>['neq','2']])->find()){
			return json(['code'=>0,'msg'=>'已提交过请等待审核结果']);
		}
		$user = db(self::USER)->where(['id'=>$id])->find();

		$dd['uid'] = $id;
		$dd['phone'] = $user['phone'];
		$dd['status'] = 0;
		$dd['created_at'] = $dd['updated_at'] = time();
		// dump($dd);exit;
		$res = db(self::PERSON)->insertGetId($dd);
		if($res>0){
			return json(['code'=>1,'msg'=>'提交成功!']);
		}else{
			return json(['code'=>0,'msg'=>'提交失败!']);
		}

	}
	#机构认证
	public function agencyAuth(){
		$data = input('data');
		$dd   = parseToArr($data);
		foreach ($dd as $k => $v) {
			if(empty($v)){
				unset($dd[$k]);
			}
		}
		// dump($dd);exit;
		if(count($dd)<5){
			return json(['code'=>0,'msg'=>'请完善信息!']);
		}
		/*
array(9) {
  ["state"] => string(6) "中国"
  ["company"] => string(3) "ghj"
  ["register_num"] => string(4) "fdgh"
  ["legal_person"] => string(3) "dgh"
  ["register_year"] => string(3) "dfd"
  ["register_month"] => string(3) "ghd"
  ["register_day"] => string(3) "gth"
  ["register_address"] => string(2) "gh"
  ["license"] => string(54) "/uploads/20170907/10f059e7f8529fb9b5064c3f8ff36217.jpg"
}

		*/
		if($dd['register_year'] || $dd['register_month'] || $dd['register_day']){
			$dd['register_num'] = $dd['register_year'].'-'.$dd['register_month'].'-'.$dd['register_day'];
			unset($dd['register_year']);
			unset($dd['register_month']);
			unset($dd['register_day']);
		}
		$dd['status'] = 0;
		$dd['created_at'] = $dd['updated_at'] = time();
		$id = session(self::USER_SESSION)['id'];
		if(db(self::PERSON)->where(['uid'=>$id,'status'=>['neq','2']])->find() || db(self::AGENCY)->where(['uid'=>$id,'status'=>['neq','2']])->find()){
			return json(['code'=>0,'msg'=>'您已提交过了，请等待审核结果']);
		}
		// $user = db(self::USER)->where(['id'=>$id])->find();
		$dd['uid'] = $id;
		// $dd['phone'] = $user['phone'];
		$res = db(self::AGENCY)->insertGetId($dd);
		if($res>0){
			return json(['code'=>1,'msg'=>'提交成功!']);
		}else{
			return json(['code'=>0,'msg'=>'提交失败!']);
		}
	}

	#发送验证码
	public function to_email(){
		$email = input('email');
		if(!$email){
			return json(['code'=>2,'msg'=>'邮箱地址不能为空!']);
		}
		// session('user_email',$email);
		session('email_code',null);
		session('email',null);
		$email_code = mt_rand(1000,9999);
		try {
		   	$mail = new PHPMailer(true); 
			$mail->IsSMTP(); 
			$mail->CharSet='UTF-8'; //设置邮件的字符编码，这很重要，不然中文乱码 
			$mail->SMTPAuth = true; //开启认证 
			$mail->Port = 25; 
			$mail->Host = "smtp.qq.com"; 
			$mail->Username = "邮箱"; 
			$mail->Password = "邮箱密码"; 
			//$mail->IsSendmail(); //如果没有sendmail组件就注释掉，否则出现“Could not execute: /var/qmail/bin/sendmail ”的错误提示 
			$mail->AddReplyTo("回复地址","18ICO");//回复地址 
			$mail->From = "显示发送来自"; 
			$mail->FromName = "18ICO"; 
			$to = $email; 	//发送地址
			$mail->AddAddress($to); 
			$mail->Subject = "18ICO邮箱验证码"; 
			$mail->Body = "<h1>您的邮箱验证码</h1>这是18ICO的邮箱验证码（<font color=red style='font-size:2
			0px;'>".$email_code."</font>），10分钟内有效！"; 
			$mail->WordWrap = 80; // 设置每行字符串的长度 
			//$mail->AddAttachment("f:/test.png"); //可以添加附件 
			$mail->IsHTML(true); 
			$mail->Send();
			session('email_code',$email_code);
			session('user_email',$email);
			return json(['code'=>1,'msg'=>'邮件发送成功!']);
		} catch (Exception $e) {
		    return json(['code'=>3,'msg'=>'邮件发送失败!']);
		}
	}

	#修改用户信息
	public function userEdit(){
		$user = session(self::USER_SESSION);
		
		/*$search = db(self::USER)->where(['email'=>input('email'),'id'=>['neq',$user['id']]])->count();
		if($search>0){
			return json(['code'=>1,'msg'=>'-邮箱已存在']);
		}	*/
		if(!empty(input('email_code')) && input('email') == session('user_email')){	//如果修改邮箱
			if(input('email_code') == session('email_code') && $user['email'] != input('email')){
				$yz = db(self::USER)->where(['email'=>['neq',$user['email']]])->where(['email'=>input('email')])->find();
				if(!$yz){
					$update['email'] = input('email');
					session('email_code',null);
					session('user_email',null);
				}else{
					return json(['code'=>1,'msg'=>'-邮箱已存在']);
					// $msg .= '-邮箱已存在';
				}	
			}else{
				return json(['code'=>1,'msg'=>'-邮箱修改失败']);
				// $msg .= '-邮箱修改失败';
			}
		}
		if(!empty(input('phone_code'))){			//如果修改手机号
			if(input('phone_code') == session('phone_code') && $user['phone'] != input('phone')){
				$yz = db(self::USER)->where(['phone'=>['neq',$user['phone']]])->where(['phone'=>input('phone')])->find();
				if(!$yz){
					$update['phone'] = input('phone');
					session('phone_code',null);
				}else{
					return json(['code'=>1,'msg'=>'-手机号已存在.']);
					// $msg .= '-手机号已存在.';
				}
			}else{
				return json(['code'=>1,'msg'=>'-手机号修改失败.']);
				// $msg .= '-手机号修改失败.';
			}
		}
		$update['nickname'] = input('nickname');
		$update['detail_address'] = input('detail_address');
		$update['company'] = input('company');
		$update['remark'] = input('remark');
		$update['state'] = input('state');
		$update['sex'] = input('sex');
		db(self::USER)->where(['id'=>$user['id']])->update($update);
		session(self::USER_SESSION,db(self::USER)->where(['id'=>$user['id']])->find());
		$msg = '修改完成';
		return json(['code'=>1,'msg'=>$msg]);
	}

	#修改头像
	public function headimgEdit(){
		$id = session(self::USER_SESSION)['id'];
		db(self::USER)->where(['id'=>$id])->update(['headimg'=>input('headimg')]);
		return json(['code'=>1,'msg'=>'修改头像成功']);
	}

	#实名认证
	public function identity(){
		$id = session(self::USER_SESSION)['id'];
		$user = db(self::USER)->where(['id'=>$id])->find();
		$user['updated_at'] = date('Y-m-d H:i:s',$user['updated_at']);
		$user['created_at'] = date('Y-m-d H:i:s',$user['created_at']);
		$return = [
			'user' => $user
		];
		if($user['type'] == 3){
			$data1 = db('person_auth') -> where(['uid'=>$id,'status'=>3])->find();
			$type=1;
			if(empty($data1)){
				$type=2;
				$data1 = db('organization_auth') -> where(['uid'=>$id,'status'=>3])->find();
			}
			$return['data'] = $data1;
			$return['type'] = $type;

			return view('view/identity1',$return);
		}else{
			return view('view/identity',$return);
		}	
		
	}
	#实名认证
	public function identity1(){
		$id = session(self::USER_SESSION)['id'];
		$user = db(self::USER)->where(['id'=>$id])->find();
		$user['updated_at'] = date('Y-m-d H:i:s',$user['updated_at']);
		$user['created_at'] = date('Y-m-d H:i:s',$user['created_at']);
		$return = [
			'user' => $user
		];
	
			return view('view/identity',$return);
	
		
	}
	#站内通知
	public function notify(){
		$id = session(self::USER_SESSION)['id'];
		$user = db(self::USER)->where(['id'=>$id])->find();
		$user['updated_at'] = date('Y-m-d H:i:s',$user['updated_at']);
		$user['created_at'] = date('Y-m-d H:i:s',$user['created_at']);
		$notice = db('news')->where(['type'=>'7'])->order('id desc');
        $return['notice'] = $notice->select();
        $return['num'] = $notice->count();
        foreach ($return['notice'] as $k => $v) {
            // $return['notice'][$k]['type'] = $this -> type[$v['type']];
            $return['notice'][$k]['updated_at'] = date('Y-m-d H:i:s',$v['updated_at']);
        }
		$return['user'] = $user;

		return view('view/notify',$return);
	
		
	}
	/*#测试
	public function  test(){
		if(request()->file()){
			// 获取表单上传文件 例如上传了001.jpg
			$file = request()->file('file');
			// 移动到框架应用根目录/public/uploads/ 目录下
			$info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
			if($info){
				// 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
				$path =  $info->getExtension();
				// 成功上传后 返回上传信息
				return json(array('state'=>1,'path'=>$path));
			}else{
				// 上传失败返回错误信息
				return json(array('state'=>0,'errmsg'=>'上传失败'));
			}
		}
		
		return view('index/test');
	}*/

}


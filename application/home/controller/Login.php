<?php
namespace app\home\controller;

use think\Controller;

class Login extends Controller{
	const USER_SESSION = 'home_user';
	#登录
	public function login(){
		if(!empty(session(self::USER_SESSION))){
			echo "<script>location.href='/home/user/index';</script>";exit;
		}
		if(request()->isAjax()){
			$input = input('post.');
			$account = $input['account'];
			$password = md5($input['password']);
			$login = db('users')->where(['phone'=>$account,'password'=>$password])->find();
			if(!$login){
				$login = db('users')->where(['email'=>$account,'password'=>$password])->find();
			}
			if(empty($login)){
				return json(['code'=>2,'msg'=>'账号或密码错误']);
			}else{
				db('users')->where(['id'=>$login['id']])->update(['updated_at'=>time()]);
				$login['updated_at'] = time();
				session(self::USER_SESSION,$login);
				return json(['code'=>1,'msg'=>'登录成功']);
			}
		}
		return view('view/login');
	}
	#注册
	public function register(){
		if(!empty(session(self::USER_SESSION))){
			echo "<script>location.href='/home/user/index';</script>";exit;
		}
		if(request()->isAjax()){
			$input = input('post.');
			$phone = $input['phone'];
			$password = $input['password'];
			$two_password = $input['two_password'];
			$code = $input['code'];
			// if($code != session(self::CODE)){
			// 	return json(['code'=>2,'msg'=>'验证码错误']);
			// }
			if(empty($phone)){
				return json(['code'=>5,'msg'=>'手机号不能为空']);
			}
			if(empty($password)){
				return json(['code'=>5,'msg'=>'密码不能为空']);
			}
			if($password != $two_password){
				return json(['code'=>3,'msg'=>'两次密码不相同']);
			}
			$login = db('users')->where(['phone'=>$phone])->find();
			if(!empty($login)){
				return json(['code'=>4,'msg'=>'手机号已注册']);
			}
			$insert['phone'] = $phone;
			$insert['password'] = md5($password);
			$insert['created_at'] = time();
			$insert['updated_at'] = time();
			$eth_ciphertext = db('ciphertext')->where(['type'=>1,'status'=>1])->find();
			$ltc_ciphertext = db('ciphertext')->where(['type'=>2,'status'=>1])->find();
			$btc_ciphertext = db('ciphertext')->where(['type'=>3,'status'=>1])->find();
			$insert['eth_num'] = $eth_ciphertext['content'];
			$insert['ltc_num'] = $ltc_ciphertext['content'];
			$insert['btc_num'] = $btc_ciphertext['content'];
			if(empty($insert['eth_num']) || empty($insert['ltc_num']) || empty($insert['btc_num'])){
				return json(['code'=>5,'msg'=>'冷钱包账号不足，请联系网站管理员添加']);
			}
			$up_status = [$eth_ciphertext['id'],$ltc_ciphertext['id'],$btc_ciphertext['id']];
			db('ciphertext')->where(['id'=>['in',$up_status]])->update(['status'=>2]);
			$user_id = db('users')->insertGetId($insert);
			$user = db('users')->where(['id'=>$user_id])->find();
			session(self::USER_SESSION,$user);
			return json(['code'=>1,'msg'=>'注册成功']);
		}
		return view('view/register');
	}

	//找回密码
	public function getpwd(){
		if(request()->isAjax()){
			$phone_code = input('phone_code');
			$phone = input('phone');
			if(empty($phone_code) || empty($phone)){
				return json(['code'=>2,'msg'=>'请完善信息']);
			}
			if($phone_code != session('phone_code')){
				return json(['code'=>2,'msg'=>'验证码错误']);
			}
			if($phone != session('home_phone')){
				return json(['code'=>2,'msg'=>'非法操作']);
			}
			return json(['code'=>1,'msg'=>'通过']);
		}
		return view('view/getpwd');
	}
	//更改密码
	public function pwdEdit(){
		$pwd = input('pwd');
		$two_pwd = input('two_pwd');
		if($pwd != $two_pwd){
			return json(['code'=>2,'msg'=>'两次密码不相同']);
		}
		if(empty($pwd)){
			return json(['code'=>2,'msg'=>'密码不能为空']);
		}
		if(empty(session('home_phone'))){
			return json(['code'=>2,'msg'=>'非法操作']);
		}
		$update['password'] = md5($pwd);
		db('users')->where(['phone'=>session('home_phone')])->update($update);
		session('phone_code',null);
        session('home_phone',null);
		return json(['code'=>1,'msg'=>'更改成功']);
	}
	//验证二次密码
	public function investment_twopwd(){
		$update['two_password'] = input('two_pwd');
		$id = session(self::USER_SESSION)['id'];
		$user = db('users')->where(['id'=>$id])->find();
		if(empty($user['two_password'])){
			return json(['code'=>2,'msg'=>'请前往安全中心设置密码']);
		}
		if(!session(self::USER_SESSION)){
			return json(['code'=>2,'msg'=>'网络错误']);
		}
		if($user['two_password'] != md5($update['two_password'])){
			return json(['code'=>2,'msg'=>'支付密码错误!']);
		}
		return json(['code'=>1,'msg'=>'验证通过']);
	}
	//设置资金密码
    public function towPwdEdit(){
    	$pwd = input('pwd');
		$two_pwd = input('two_pwd');
		$phone_code = input('phone_code');
		if($pwd != $two_pwd){
			return json(['code'=>2,'msg'=>'两次密码不相同']);
		}
		if(empty($pwd)){
			return json(['code'=>2,'msg'=>'密码不能为空']);
		}
		/*if(empty($phone_code)){
			return json(['code'=>2,'msg'=>'验证码不能为空']);
		}*/
		/*if(empty(session('home_phone')) || empty(session('phone_code'))){
			return json(['code'=>2,'msg'=>'非法操作']);
		}*/
		/*if(session('phone_code') != $phone_code){
			return json(['code'=>2,'msg'=>'验证码错误']);
		}*/
		$update['two_password'] = md5($pwd);
		$update['updated_at'] = time();
		// db('users')->where(['phone'=>session('home_phone')])->update($update);
		db('users')->where(['phone'=>session(self::USER_SESSION)['phone']])->update($update);
		session('phone_code',null);
        session('home_phone',null);
		return json(['code'=>1,'msg'=>'更改成功']);
    }
	#获取手机验证码
    public function getCode(){
        session('phone_code',null);
        session('home_phone',null);
         if(empty(input('phone'))){
            return json(['code'=>2,'msg'=>'手机号不能为空']);
        }
        $phone = input('phone');
        $res = db('users')->where(['phone'=>$phone])->find();
        if(!$res){
        	return json(['code'=>2,'msg'=>'手机号不存在']);
        }
        $result = NewSms($phone);
        if($result['code'] > 0){
            session('phone_code',$result['code']);
            session('home_phone',$phone);
            return json(['code'=>1,'msg'=>'发送成功']);
        }else{
            return json(['code'=>2,'msg'=>'发送失败']);
        }
    }

	#退出登录
	public function login_end(){
		session(self::USER_SESSION,null);
		echo "<script>location.href='/home/login/login';</script>";exit;
	}
}


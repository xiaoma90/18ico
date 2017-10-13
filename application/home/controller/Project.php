<?php
namespace app\home\controller;

use app\admin\model\ProjectModel;
use app\admin\model\ProjectInfo;
use think\Request;
use \think\Session;
use app\admin\model\UsersModel;
class Project extends Base
{	

    //项目详情
    public function finish(Request $request){
        $id =$request->param('id',0,'intval');
        $data = ProjectModel::where(['id'=>$id])->find();
        $data['time'] = time();
        $this->assign('data',$data);
        return $this->fetch('view/finish');
    }

    //发起项目
    public function launch(){
    	$u = session(self::USER_SESSION);
        if(empty($u)){
            echo "<script>location.href='/home/login/login';</script>";exit;
        }
        $row = UsersModel::where(['id'=>$u['id']])->find();

        $data = ProjectInfo::where(['uid'=>$u['id'],'speed'=>array('<',5)])->order('created_at','desc')->find();
      

        $this->assign('data',$data);

        $this->assign('username',$row['phone']);
        $this->assign('email',$row['email']);
        $this->assign('type',$row['type']);
		//判断是否完善个人资料
		return $this->fetch('view/launch');
    }

    public function authentication(){

        $u = session(self::USER_SESSION);
        if(empty($u)){
            echo "<script>location.href='/home/login/login';</script>";exit;
        }
        $row = UsersModel::where(['id'=>$u['id']])->find();
        if($row['type']<3){
            return json(['status'=>false,'message'=>'未进行实名认证']);
        }
        if(empty($row['email'])){
            return json(['status'=>false,'message'=>'未进行邮箱认证']);
        }
        $office_address = $_POST['office_address'];
        if(!$office_address){
            return json(['status'=>false,'message'=>'详细地址为空']);
        }

        
        $da['offical_address'] = $office_address;
        $da['speed']  = 1;
        $da['updated_at'] = time();
        
        $da['created_at'] = time();
       
        $row = ProjectInfo::where(['uid'=>$u['id'],'speed'=>array('<',5)])->order('created_at','desc')->find();
        if($row){ 
            $r = ProjectInfo::where(['id'=>$row['id']])->data($da)->update();
        }else{
            $da['uid'] = $u['id'];
            $da['link_account'] = $u['id'];
            
            $r = ProjectInfo::insert($da); 
        }
        // var_dump($r);exit;
        if($r){          
            return json(['status'=>true,'message'=>'保存成功']);
        }else{
            return json(['status'=>false,'message'=>'保存失败']);
        }
    }
    //上传图片
    public function up(Request $request){
        $u = session(self::USER_SESSION);
        if(empty($u)){
            echo "<script>location.href='/home/login/login';</script>";exit;
        }
        $id = $request->param('id',0,'intval');       
        $file = request()->file('myfile');                      
        if($file){
            $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads/project');
            if($info){
                $str =  '\uploads\project\\'.$info->getSaveName(); 
                $ret['status'] = 1;
                if($id == 1){
                  $ret['num'] = 1;  
                }elseif($id == 2){
                   $ret['num'] = 2;  
                }elseif($id == 3){
                   $ret['num'] = 3;  
                }elseif($id == 4){
                   $ret['num'] = 4;  
                }
                $ret['file'] = str_replace("\\","/",$str);
                echo json_encode($ret);                                                                                             
            }
        }
        
    }
  
    //填入资料
    public function information(){
        $u = session(self::USER_SESSION);
        if(empty($u)){
            echo "<script>location.href='/home/login/login';</script>";exit;
        }
        $u = session(self::USER_SESSION);
        $name = $_POST['name'];
        if(!$name){
            return json(['status'=>false,'message'=>'项目名称为空']);
        }
        $fanic_status = $_POST['fanic_status'];
        if(!$fanic_status){
            return json(['status'=>false,'message'=>'选择融资阶段']);
        }
        $offical_detail = $_POST['offical_detail'];
        if(!$offical_detail){
            return json(['status'=>false,'message'=>'详细地址为空']);
        }
        $remark = $_POST['remark'];
        if(!$remark){
            return json(['status'=>false,'message'=>'项目简介为空']);
        }
        $status = $_POST['status'];
        if(!$status){
            return json(['status'=>false,'message'=>'选择所属阶段']);
        }
        $video = $_POST['video'];

    	$l_banner     = $_POST['l_banner'];

        $project_book = $_POST['project_book'];
        $plan_book    = $_POST['plan_book'];
        $other_data   = $_POST['other_data'];
        
        // $data['uid'] = $u['id'];
        // $data['link_account'] = $u['id'];
        $data['speed'] = 2;
        $data['name'] = $name;
        $data['remark'] = $remark;
        $data['fanic_status'] = $fanic_status;
        $data['offical_detail'] = $offical_detail;
        $data['status'] = $status;

        if($video){
            $data['video'] = $video;
        }                                      
        $data['updated_at']   = time();
        $row = ProjectInfo::where(['uid'=>$u['id'],'speed'=>array('<',5)])->order('created_at','desc')->find();
        if($row){                   
            if($l_banner){
                $data['l_banner'] = $l_banner;                
            }
            if($other_data){
                $data['other_data'] = $other_data; 
            }             
            if($project_book){
                $data['project_book'] = $project_book;
            }  
            if($plan_book){
                $data['plan_book'] = $plan_book;
            }
            $r   = ProjectInfo::where(['id'=>$row['id']])->data($data)->update();
            $res = ProjectInfo::where(['id'=>$row['id']])->find();
          
            if(empty($res['l_banner'])){
                return json(['status'=>false,'message'=>'请上传封面图片']);
            }
           
            if(empty($res['project_book'])){
                return json(['status'=>false,'message'=>'请上传项目白皮书']);
            }
            if(empty($res['plan_book'])){
                return json(['status'=>false,'message'=>'请上传商业计划书']);
            }
            if($r){
                if($l_banner){
                  if(!empty($row['l_banner'])){
                     unlink('.'.$row['l_banner']); 
                  }                                  
                }
                if($other_data){
                  if(!empty($row['other_data'])){
                     unlink('.'.$row['other_data']); 
                  } 
                }             
                if($project_book){
                    if(!empty($row['project_book'])){
                     unlink('.'.$row['project_book']); 
                    }
                  
                }  
                if($plan_book){
                    if(!empty($row['plan_book'])){
                         unlink('.'.$row['plan_book']); 
                       }
                }                                                 
            } 
        }else{
            return json(['status'=>false,'message'=>'请填入详细地址']);
        }     
        if($r){          
            return json(['status'=>true,'message'=>'保存成功']);
        }else{
            return json(['status'=>false,'message'=>'保存失败']);
        }
    }

    
    //项目详细信息
    public function contents(){
        $u = session(self::USER_SESSION);
        if(empty($u)){
            echo "<script>location.href='/home/login/login';</script>";exit;
        }

        $search = array(" ","　","\n","\r","\t");
        $replace = array("","","","","");
        $content = str_replace($search, $replace, $_POST['content']);
        $rule_intro = str_replace($search, $replace, $_POST['rule_intro']);
        $team_intro = str_replace($search, $replace, $_POST['team_intro']);
        if($content == ''){
            return json(['status'=>false,'message'=>'项目介绍为空']);
        }
        
        if($rule_intro == ''){
            return json(['status'=>false,'message'=>'ico细则为空']);
        }
       
        if($team_intro == ''){
            return json(['status'=>false,'message'=>'团队介绍为空']);
        }
        $data['content'] = $_POST['content'];
        $data['rule_intro'] = $_POST['rule_intro'];
        $data['team_intro'] = $_POST['team_intro'];
        
        $data['speed'] = 3;
        $data['updated_at'] = time();
        $row = ProjectInfo::where(['uid'=>$u['id'],'speed'=>array('<',5)])->order('created_at','desc')->find();
        if(!$row){
            return json(['status'=>false,'message'=>'请先录入基本信息']);
        }
        if($row['speed']  == 2){
            $r = ProjectInfo::where(['id'=>$row['id']])->data($data)->update();     
            if($r){
                return json(['status'=>true,'message'=>'保存成功']);
            }else{
                return json(['status'=>false,'message'=>'保存失败']);
            }
        }
       
    }
    //设置投资回报
    public function amount(){
        $u = session(self::USER_SESSION);
        if(empty($u)){
            echo "<script>location.href='/home/login/login';</script>";exit;
        }
        $eth_target = $_POST['eth_target'];
        
        $btc_target = $_POST['btc_target'];

        $ltc_target = $_POST['ltc_target'];
        if(!$eth_target && !$btc_target && !$ltc_target){
            return json(['status'=>false,'message'=>'至少选择一种投资金额']);
        }
        if($eth_target < 0 || !is_numeric($eth_target)){
            return json(['status'=>false,'message'=>'ETH投资金额填写不正确']);
        }
       
        if($btc_target < 0 || !is_numeric($btc_target)){
            return json(['status'=>false,'message'=>'BTC投资金额填写不正确']);
        }
        
        if($ltc_target < 0 || !is_numeric($ltc_target)){
            return json(['status'=>false,'message'=>'LTC投资金额填写不正确']);
        }
        
        $return_instr= $_POST['return_instr'];
        if(!$return_instr){
            return json(['status'=>false,'message'=>'回报说明为空']);
        }
        $quota_retric = $_POST['quota_retric'];
        if($quota_retric < 0 || !is_numeric($quota_retric)){
            return json(['status'=>false,'message'=>'现在名额填写不正确']);
        }
        $return_time= $_POST['return_time'];
        if(!$return_time){
            return json(['status'=>false,'message'=>'回报时间为空']);
        }
        if($return_time < 0 || !is_numeric($return_time)){
            return json(['status'=>false,'message'=>'回报时间填写不正确']);
        }
        
        $data['eth_target'] = $eth_target;
        $data['btc_target'] = $btc_target;
        $data['ltc_target'] = $ltc_target;
        $data['return_instr'] = $return_instr;
        $data['quota_retric'] = $quota_retric;
        $data['return_time']  = $return_time;
        $data['speed'] = 4;
        $data['updated_at'] = time();
        $row = ProjectInfo::where(['uid'=>$u['id'],'speed'=>array('<',5)])->order('created_at','desc')->find();
        if(!$row){
            return json(['status'=>false,'message'=>'请先录入基本信息']);
        }
        if($row['speed']  == 2){
            return json(['status'=>false,'message'=>'请先录入项目基本信息']);
        }
        
        if($row['speed']  == 3){
            $r = ProjectInfo::where(['id'=>$row['id']])->data($data)->update();
            if($r){
                return json(['status'=>true,'message'=>'保存成功']);
            }else{
                return json(['status'=>false,'message'=>'保存失败']);
            }
        }       
    }

    //提交审核
    public function examine(){
        $u = session(self::USER_SESSION);
        if(empty($u)){
            echo "<script>location.href='/home/login/login';</script>";exit;
        }
        $ico_days=$_POST['ico_days'];
        if(!$ico_days){
            return json(['status'=>false,'message'=>'ico天数为空']);
        }
        if($ico_days < 0 || !is_numeric($ico_days)){
            return json(['status'=>false,'message'=>'ico天数填写不正确']);
        }
        $eth_limit=$_POST['eth_limit'];
        $btc_limit=$_POST['btc_limit'];
        $ltc_limit=$_POST['ltc_limit'];

        if(!$eth_limit){
            return json(['status'=>false,'message'=>'BTH限制金额为空']);
        }
        if($eth_limit < 0 || !is_numeric($eth_limit)){
            return json(['status'=>false,'message'=>'BTH限制金额填写不正确']);
        }
        if(!$btc_limit){
            return json(['status'=>false,'message'=>'BTC限制金额为空']);
        }
        if($btc_limit < 0 || !is_numeric($btc_limit)){
            return json(['status'=>false,'message'=>'BTC限制金额填写不正确']);
        }
        if(!$ltc_limit){
            return json(['status'=>false,'message'=>'LTC限制金额为空']);
        }
        if($ltc_limit < 0 || !is_numeric($ltc_limit)){
            return json(['status'=>false,'message'=>'LTC限制金额填写不正确']);
        }
        $linkman=$_POST['linkman'];
        if(!$linkman){
            return json(['status'=>false,'message'=>'联系人为空']);
        }
        $link_job=$_POST['link_job'];  
        if(!$link_job){
            return json(['status'=>false,'message'=>'负责职位为空']);
        } 
        $link_phone=$_POST['link_phone'];

        if(!$link_phone){
            return json(['status'=>false,'message'=>'联系电话为空']);
        } 
        $starttime=$_POST['starttime'];
        if(!$starttime){
            return json(['status'=>false,'message'=>'开始时间为空']);
        }
        if($starttime < 0 || !is_numeric($starttime)){
            return json(['status'=>false,'message'=>'开始时间填写不正确']);
        }
        $data['ico_days']= $ico_days;
        $data['eth_limit']= $eth_limit;
        $data['btc_limit']= $btc_limit;
        $data['ltc_limit']= $ltc_limit;
        $data['linkman']= $linkman;
        $data['link_job']= $link_job;
        $data['link_phone']= $link_phone;
        $data['start_times']= time()+60*60*24*$starttime;
        $data['end_time'] = $data['start_times']+60*60*24*$ico_days;
        $data['speed'] = 5;
        $data['updated_at'] = time();

        $row = ProjectInfo::where(['uid'=>$u['id'],'speed'=>array('<',5)])->order('created_at','desc')->find();
        if(!$row){
            return json(['status'=>false,'message'=>'请先录入基本信息']);
        }
        if($row['speed']  == 3){
            return json(['status'=>false,'message'=>'请先录入项目详细介绍']);
        }
        // if($row['speed']  == 3){
        //     return json(['status'=>false,'message'=>'设置投资回报']);
        // }      
        if($row['speed']  == 4){
            $r = ProjectInfo::where(['id'=>$row['id']])->data($data)->update();           
            if($r){
                $res = ProjectInfo::where(['id'=>$row['id']])->find(); 
                $da['uid'] = $res['uid'];
                $da['link_account'] = $res['uid'];
                $da['l_banner'] = $res['l_banner'];
                $da['name'] = $res['name'];
                $da['is_do'] = 1;
                $da['remark'] = $res['remark'];
                $da['eth_target'] = $res['eth_target'];
                $da['eth_limit'] = $res['eth_limit'];
                $da['btc_target'] = $res['eth_target'];
                $da['btc_limit'] = $res['eth_limit'];
                $da['ltc_target'] = $res['eth_target'];
                $da['ltc_limit'] = $res['eth_limit'];
                $da['content'] = $res['content'];
                $da['rule_intro'] = $res['rule_intro'];
                $da['team_intro'] = $res['team_intro'];
                $da['status'] = $res['status'];
                $da['offical_address'] = $res['offical_address'];
                $da['offical_detail'] = $res['offical_detail'];
                $da['fanic_status'] = $res['fanic_status'];
                $da['video'] = $res['video'];
                $da['project_book'] = $res['project_book'];
                $da['plan_book'] = $res['plan_book'];
                $da['other_data'] = $res['other_data'];
                $da['return_instr'] = $res['return_instr'];
                $da['quota_retric'] = $res['quota_retric'];
                $da['return_time'] = $res['return_time'];
                $da['ico_days'] = $res['ico_days'];
                $da['start_times'] = $res['start_times'];
                $da['end_time'] = $res['end_time'];
                $da['linkman'] = $res['linkman'];
                $da['link_job'] = $res['link_job'];
                $da['link_phone'] = $res['link_phone'];               
                $da['project_status'] = 3;
                $da['created_at'] = $res['created_at'];
                $p = ProjectModel::insert($da);
                if($p){
                    return json(['status'=>true,'message'=>'已成功审核']);
                }else{
                    return json(['status'=>false,'message'=>'提交失败']);
                }
                
            }else{
                return json(['status'=>false,'message'=>'提交失败']);
            }
        }
    }

    //协议
    public function condition(){
        return $this->fetch('view/condition-init');
    }
}
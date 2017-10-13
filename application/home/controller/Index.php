<?php
namespace app\home\controller;

use think\Controller;
use app\admin\model\Carousel as dbCa;
use app\admin\model\ProjectModel as Project;
class Index extends Controller
{
	const PROJECT = 'project';
    const USERS   = 'users';
	const NEWS    = 'news';
    const USER_SESSION = 'home_user';
    private $type = [
                '1' => '业务公告',
                '2' => '18ico',
                '3' => '关于18ico',
                '4' => '条款和协议',
                '5' => '常见问题',
                '6' => '我想发起众筹...'
            ]; 
    
    public function index(){
    	$return['market'] = config('market');      
         //
        $cas = dbCa::select();
        //已完成项目
        $pro = db(self::PROJECT)->where(['is_do'=>['<',3]])->select();
        foreach($pro as $k=>$v){
            if($v['end_time'] < time()){
                db(self::PROJECT)->where(['id'=>$v['id']])->update(['is_do'=>3,'created_at'=>time()]);
            }
            if($v['eth_target'] <= $v['eth_ed'] && $v['btc_target'] <= $v['btc_ed'] && $v['ltc_target'] <= $v['ltc_ed']){
                db(self::PROJECT)->where(['id'=>$v['id']])->update(['is_do'=>3,'created_at'=>time()]);
            }
            if($v['start_times'] > time() && $v['end_time'] > time()){
                db(self::PROJECT)->where(['id'=>$v['id']])->update(['is_do'=>1,'created_at'=>time()]);
            }
            if($v['start_times'] < time() && $v['end_time'] > time()){
                db(self::PROJECT)->where(['id'=>$v['id']])->update(['is_do'=>2,'created_at'=>time()]);
            }
        }
        $projects = Project::where(['is_do'=>3])->order('updated_at','desc')->limit(4)->select();
        //精选项目
        $jing = Project::where(['is_do'=>array('<',3),'is_jing'=>1,'project_status'=>1])->order('updated_at','desc')->limit(4)->select();
        foreach ($projects as $k => $vo) {
            $projects[$k]['na']  = 0;
            $projects[$k]['naa'] = 0;
            $projects[$k]['nb']  = 0;
            $projects[$k]['nbb'] = 0;
            $projects[$k]['nc']  = 0;
            $projects[$k]['ncc'] = 0;
            if($vo['eth_target']>0 && $vo['eth_ed']>0){
                $projects[$k]['na']  = $vo['eth_ed']/$vo['eth_target']*100;
                $projects[$k]['naa'] = $vo['eth_ed']/$vo['eth_target']*100;
            }
            if($vo['btc_target']>0 && $vo['btc_ed']>0){
                $projects[$k]['nb']  = $vo['btc_ed']/$vo['btc_target']*100;
                $projects[$k]['nbb'] = $vo['btc_ed']/$vo['btc_target']*100;
            }
            if($vo['ltc_target']>0 && $vo['ltc_ed']>0){
                $projects[$k]['nc']  = $vo['ltc_ed']/$vo['ltc_target']*100;
                $projects[$k]['ncc'] = $vo['ltc_ed']/$vo['ltc_target']*100;
            }     
        }
        foreach ($jing as $k => $vo) {
            $jing[$k]['na']  = 0;
            $jing[$k]['naa'] = 0;
            $jing[$k]['nb']  = 0;
            $jing[$k]['nbb'] = 0;
            $jing[$k]['nc']  = 0;
            $jing[$k]['ncc'] = 0;
            if($vo['eth_target']>0 && $vo['eth_ed']>0){
                $jing[$k]['na']  = $vo['eth_ed']/$vo['eth_target']*100;
                $jing[$k]['naa'] = $vo['eth_ed']/$vo['eth_target']*100;
            }

            if($vo['btc_target']>0 && $vo['btc_ed']>0){
                $jing[$k]['nb']  = $vo['btc_ed']/$vo['btc_target']*100;
                $jing[$k]['nbb'] = $vo['btc_ed']/$vo['btc_target']*100;
            }
            if($vo['ltc_target']>0 && $vo['ltc_ed']>0){
                $jing[$k]['nc']  = $vo['ltc_ed']/$vo['ltc_target']*100;
                $jing[$k]['ncc'] = $vo['ltc_ed']/$vo['ltc_target']*100;
            }     
        }
        //公告
        $news = db(self::NEWS)->where(['type'=>1])->order('created_at','desc')->find();
        $this->assign('jing',$jing);
        $this->assign('projects',$projects);
        $this->assign('cas',$cas);
        $this->assign('news',$news);
        return view('view/index',$return);
    }
    #帮助中心
    public function help(){
    	$return['notice'] = db(self::NEWS)->where(['type'=>['in',['1','2']]])->order('id desc')->limit(0,3)->select();     
        foreach ($return['notice'] as $key => $value) {
            $return['notice'][$key]['types'] = $this -> type[$value['type']];
            $return['notice'][$key]['updated_at'] = date('Y-m-d H:i:s',$value['updated_at']);
        }
        return view('view/helpCenter',$return);
    }
    #关于我们
    public function aboutUs(){
        
        return view('view/aboutUs');
    }
    #公告
    public function notice(){
        $notice1 = db(self::NEWS)->where(['type'=>'1'])->order('id desc');
        $notice2 = db(self::NEWS)->where(['type'=>'2'])->order('id desc');
        $return['notice1'] = $notice1->limit(0,6)->select();
        $return['notice2'] = $notice2->limit(0,3)->select();

        foreach ($return['notice1'] as $key => $value) {
            $return['notice'][$key]['type'] = '业务公告';
            $return['notice'][$key]['updated_at'] = date('Y-m-d H:i:s',$value['updated_at']);
        }
        $return['num1'] = $notice1->count();
        foreach ($return['notice2'] as $key => $value) {
            $return['notice'][$key]['type'] = '18ico公告';
            $return['notice'][$key]['updated_at'] = date('Y-m-d H:i:s',$value['updated_at']);
        }
        $return['num2'] = $notice2->count();
        return view('view/notice', $return);
    }
    #使用帮助
    public function useHelp(){
        $notice1 = db(self::NEWS)->where(['type'=>'5'])->order('id desc');
        $notice2 = db(self::NEWS)->where(['type'=>'6'])->order('id desc');
        $return['notice1'] = $notice1->limit(0,6)->select();
        $return['notice2'] = $notice2->limit(0,3)->select();

        foreach ($return['notice1'] as $key => $value) {
            $return['notice'][$key]['type'] = '业务公告';
            $return['notice'][$key]['updated_at'] = date('Y-m-d H:i:s',$value['updated_at']);
        }
        $return['num1'] = $notice1->count();
        foreach ($return['notice2'] as $key => $value) {
            $return['notice'][$key]['type'] = '18ico公告';
            $return['notice'][$key]['updated_at'] = date('Y-m-d H:i:s',$value['updated_at']);
        }
        $return['num2'] = $notice2->count();
        return view('view/useHelp');
    }
    #条款
    public function rules(){
        $view = input('v');
        $id = session(self::USER_SESSION)['id'];
        $user = db(self::USERS)->where(['id'=>$id])->find();
        $user['updated_at'] = date('Y-m-d H:i:s',$user['updated_at']);
        $user['created_at'] = date('Y-m-d H:i:s',$user['created_at']);
        $return = [
            'user' => $user
        ];
        return view("view/$view",$return);
    }

    #业务公告/18ico
    public function notice_yw(){
        $type = input('t');
        if(!in_array($type, ['1','2'])){
            exit("<script>alert('参数错误');history.go(-1)</script");
        }
        $notice = db(self::NEWS)->where(['type'=>$type])->order('id desc');
        $return['notice'] = $notice->select();
        foreach ($return['notice'] as $k => $v) {
            $return['notice'][$k]['type'] = $this -> type[$v['type']];
            $return['notice'][$k]['updated_at'] = date('Y-m-d H:i:s',$v['updated_at']);
        }
        return view('view/notice_yw',$return);
    }
    #关于18ico
    public function about18ico(){
        $notice = db(self::NEWS)->where(['type'=>'3'])->order('id desc');
        $return['notice'] = $notice->select();
        foreach ($return['notice'] as $k => $v) {
            $return['notice'][$k]['type'] = $this -> type[$v['type']];
            $return['notice'][$k]['updated_at'] = date('Y-m-d H:i:s',$v['updated_at']);
        }
        return view('view/aboutico365',$return);
    }
    #条款和协议
    public function termCondition(){
        $notice = db(self::NEWS)->where(['type'=>'4'])->order('id desc');
        $return['notice'] = $notice->select();
        foreach ($return['notice'] as $k => $v) {
            $return['notice'][$k]['type'] = $this -> type[$v['type']];
            $return['notice'][$k]['updated_at'] = date('Y-m-d H:i:s',$v['updated_at']);
        }
        return view('view/termCondition',$return);
    }
    #常见问题 / 我想发起众筹
    public function help_class(){
        $type = input('t');
        if(!in_array($type, ['5','6'])){
            exit("<script>alert('参数错误');history.go(-1)</script");
        }
        $notice = db(self::NEWS)->where(['type'=>$type])->order('id desc');
        $return['notice'] = $notice->select();
        foreach ($return['notice'] as $k => $v) {
            $return['notice'][$k]['type'] = $this -> type[$v['type']];
            $return['notice'][$k]['updated_at'] = date('Y-m-d H:i:s',$v['updated_at']);
        }
        return view('view/help_class',$return);
    }
    #详情
    public function help_c(){
        $id = input('d');
        $notice = db(self::NEWS)->where(['id'=>$id])->find();
        $data = db(self::NEWS)->where(['type'=>$notice['type'],'id'=>['neq',$id]])->select();
        $data1 = db(self::NEWS)->order('id desc')->limit(0,4)->select();
        $return = [
            'notice' => $notice,
            'data' => $data,
            'data1' => $data1
        ];
        return view('view/help_c',$return);
    }
    #使用帮助
    public function items(){
        $pro = db(self::PROJECT)->where(['is_do'=>['<',3]])->select();
        foreach($pro as $k=>$v){
            if($v['end_time'] < time()){
                db(self::PROJECT)->where(['id'=>$v['id']])->update(['is_do'=>3,'created_at'=>time()]);
            }
            if($v['eth_target'] <= $v['eth_ed'] && $v['btc_target'] <= $v['btc_ed'] && $v['ltc_target'] <= $v['ltc_ed']){
                db(self::PROJECT)->where(['id'=>$v['id']])->update(['is_do'=>3,'created_at'=>time()]);
            }
            if($v['start_times'] > time() && $v['end_time'] > time()){
                db(self::PROJECT)->where(['id'=>$v['id']])->update(['is_do'=>1,'created_at'=>time()]);
            }
            if($v['start_times'] < time() && $v['end_time'] > time()){
                db(self::PROJECT)->where(['id'=>$v['id']])->update(['is_do'=>2,'created_at'=>time()]);
            }
        }        
        $projects = Project::where(['project_status'=>1])->order('created_at','desc')->page('1,9')->select(); 
        $projects = $this->info($projects);      
        $con['a']  = Project::where(['project_status'=>1])->count();       
        //精选
        $jing  = Project::where(['project_status'=>1,'is_jing'=>1])->order('created_at','desc')->page('1,9')->select();
        $jing  = $this->info($jing);   
        $con['b'] = Project::where(['project_status'=>1,'is_jing'=>1])->count();
        //进行中
        $start = Project::where(['project_status'=>1,'is_do'=>2])->order('updated_at','desc')->page('1,9')->select();
        $start  = $this->info($start);  
        $con['c'] = Project::where(['project_status'=>1,'is_do'=>2])->count();
        //等待开始
        $stop = Project::where(['project_status'=>1,'is_do'=>1])->order('updated_at','desc')->page('1,9')->select();
        $stop  = $this->info($stop);  
        $con['d'] = Project::where(['project_status'=>1,'is_do'=>1])->count();
        //结束
        $end = Project::where(['project_status'=>1,'is_do'=>3])->order('updated_at','desc')->page('1,9')->select();
        $end  = $this->info($end); 
        $con['e'] = Project::where(['project_status'=>1,'is_do'=>3])->count();

        $type = isset($_POST['type'])?$_POST['type']:'';
        $page = isset($_POST['page'])?$_POST['page']:'';
        //全部
        $data = '';
        if($type == 1){
                    
            $data= Project::where(['project_status'=>1])->order('created_at','desc')->page($page.',9')->select();
            if(empty($data)){
                return json(['status'=>false,'message'=>'没有了']);
            }
            $data = $this->info($data);
            return json(['status'=>true,'data'=>$data,'page'=>$page,'type'=>1,'message'=>'返回成功']);
        }elseif($type == 2){            
            $data = Project::where(['project_status'=>1,'is_jing'=>1])->order('created_at','desc')->page($page.',9')->select();
             if(empty($data)){
                return json(['status'=>false,'message'=>'没有了']);
            }
            $data = $this->info($data);           
            return json(['status'=>true,'data'=>$data,'page'=>$page,'type'=>2,'message'=>'返回成功']);
        }elseif($type == 3){
            
            $data = Project::where(['project_status'=>1,'is_do'=>2])->order('created_at','desc')->page($page.',9')->select();
            if(empty($data)){
                return json(['status'=>false,'message'=>'没有了']);
            }
            $data = $this->info($data);
            return json(['status'=>true,'data'=>$data,'page'=>$page,'type'=>3,'message'=>'返回成功']);
        }elseif($type == 4){
            $data = Project::where(['project_status'=>1,'is_do'=>1])->order('created_at','desc')->page($page.',9')->select();
            if(empty($data)){
                return json(['status'=>false,'message'=>'没有了']);
            }
            $data = $this->info($data);
            return json(['status'=>true,'data'=>$data,'page'=>$page,'type'=>4,'message'=>'返回成功']);
        }elseif($type == 5){           
            $data = Project::where(['project_status'=>1,'is_do'=>3])->order('created_at','desc')->page($page.',9')->select();
            if(empty($data)){
                return json(['status'=>false,'message'=>'没有了']);
            }
            $data = $this->info($data);
            return json(['status'=>true,'data'=>$data,'page'=>$page,'type'=>5,'message'=>'返回成功']);
        }


        $this->assign('projects',$projects);
        $this->assign('jing',$jing);
        $this->assign('start',$start);
        $this->assign('stop',$stop);
        $this->assign('end',$end);
        // $this->assign('pagea',$pagea);
       
        return view('view/items');
    }

    public function info($data = array()){
         foreach ($data as $k => $vo) {
            if($vo['is_do'] ==1){ 
                $data[$k]['stra'] = '<img src="/static/home/images/waiting.png" class="status-tag-img">';
            }elseif($vo['is_do'] ==2){
                $data[$k]['stra'] = '<img src="/static/home/images/progress.png" class="status-tag-img">';
            }elseif($vo['is_do'] ==3){
                $data[$k]['stra'] = '<img src="/static/home/images/end.png" class="status-tag-img">';
            }
            $data[$k]['na'] =0;
            $data[$k]['naa'] = 0;
            $data[$k]['nb'] =0;
            $data[$k]['nbb'] = 0;
            $data[$k]['nc'] =0;
            $data[$k]['ncc'] = 0;
            $data[$k]['remark'] = mb_substr($vo['remark'],0,240);
            if($vo['eth_target']>0 && $vo['eth_ed']>0){
                $data[$k]['na'] = $vo['eth_ed']/$vo['eth_target']*100;
                $data[$k]['naa'] = $vo['eth_ed']/$vo['eth_target']*100;
            }
            if($vo['btc_target']>0 && $vo['btc_ed']>0){
                $data[$k]['nb'] = $vo['btc_ed']/$vo['btc_target']*100;
                $data[$k]['nbb'] = $vo['btc_ed']/$vo['btc_target']*100;
            }
            if($vo['ltc_target']>0 && $vo['ltc_ed']>0){
                $data[$k]['nc']  = $vo['ltc_ed']/$vo['ltc_target']*100;
                $data[$k]['ncc'] = $vo['ltc_ed']/$vo['ltc_target']*100;
            }               
        }
        return $data;
    }

 /*   #使用帮助
    public function useHelp(){
        
        return view('view/useHelp');
    }

    #公告详情
	public function notice_c(){
    	
        return view('view/notice_c');
    }*/
}

<?php

namespace app\home\controller;
use \think\Controller;
use app\admin\model\NewsType as db;
use think\Request;
use app\admin\model\NewsModel;
use app\admin\model\ProjectModel as Project;
class News extends Controller
{
	 
    public function index()
    {   
       
        $list = db::where(['type'=>1])->order('top','desc')->limit(3)->paginate(15);

        foreach ($list as $k => $v) {            
            $list[$k]['time_str'] = $this->tranTime($v['created_at']);
        }
        $page=$list->render();
        //公告
        $news = db::where(['type'=>2])->order('created_at','desc')->limit(5)->select();
        //本周热门
        $thisweek_start=mktime(0,0,0,date('m'),date('d')-date('w')+1,date('Y'));
        $thisweek_end  =mktime(23,59,59,date('m'),date('d')-date('w')+7,date('Y'));
        $data = db::where(['type'=>1,'created_at'=>array('>',$thisweek_start),'created_at'=>array('<',$thisweek_end)])->order('quantity','desc')->limit(3)->select();

        foreach ($data as $k => $v) {            
            $data[$k]['time_str'] = $this->tranTime($v['created_at']);
        }
        //最近项目
        $return['market'] = config('market');      
        //已完成项目
        $pro = Project::where(['is_do'=>['<',3]])->select();
        foreach($pro as $k=>$v){
            if($v['end_time'] < time()){
                Project::where(['id'=>$v['id']])->update(['is_do'=>3,'created_at'=>time()]);
            }
            if($v['eth_target'] <= $v['eth_ed'] && $v['btc_target'] <= $v['btc_ed'] && $v['ltc_target'] <= $v['ltc_ed']){
                Project::where(['id'=>$v['id']])->update(['is_do'=>3,'created_at'=>time()]);
            }
            if($v['start_times'] > time() && $v['end_time'] > time()){
                Project::where(['id'=>$v['id']])->update(['is_do'=>1,'created_at'=>time()]);
            }
            if($v['start_times'] < time() && $v['end_time'] > time()){
                Project::where(['id'=>$v['id']])->update(['is_do'=>2,'created_at'=>time()]);
            }
        }
        $projects = Project::where(['is_do'=>array('<',3),'project_status'=>1])->order('created_at','desc')->limit(3)->select();
        $projects[$k]['st'] = 0;
        foreach ($projects as $k => $v) {
          if($v['is_do'] ==1){//未开始
            $projects[$k]['str'] = '即将开始';
            $projects[$k]['st'] = floor(($v['start_times']-time())/86400);
          }elseif($v['is_do'] ==2){//已开始
            $projects[$k]['str'] = '进行中';   
            $projects[$k]['st'] = floor(($v['end_time']-time())/86400);
          }  
        }
        $this->assign('list',$list);
        $this->assign('news',$news);
        $this->assign('data',$data);
        $this->assign('projects',$projects);
        $this->assign('page', $page);
        return $this->fetch('view/news');	
    }

    public function newsDetail(Request $request){
    	$id =$request->param('id',0,'intval'); 
    	$data = db::where(['id'=>$id])->find();
    	$data['time_str'] = $this->tranTime($data['created_at']);
        //本周热门
        $thisweek_start=mktime(0,0,0,date('m'),date('d')-date('w')+1,date('Y'));
        $thisweek_end  =mktime(23,59,59,date('m'),date('d')-date('w')+7,date('Y'));
        $ben = db::where(['type'=>1,'created_at'=>array('>',$thisweek_start),'created_at'=>array('<',$thisweek_end)])->order('quantity','desc')->limit(3)->select();

        foreach ($ben as $k => $v) {            
            $ben[$k]['time_str'] = $this->tranTime($v['created_at']);
        }
        //最近项目
        $return['market'] = config('market');      
        //已完成项目
        $pro = Project::where(['is_do'=>['<',3]])->select();
        foreach($pro as $k=>$v){
            if($v['end_time'] < time()){
                Project::where(['id'=>$v['id']])->update(['is_do'=>3,'created_at'=>time()]);
            }
            if($v['eth_target'] <= $v['eth_ed'] && $v['btc_target'] <= $v['btc_ed'] && $v['ltc_target'] <= $v['ltc_ed']){
                Project::where(['id'=>$v['id']])->update(['is_do'=>3,'created_at'=>time()]);
            }
            if($v['start_times'] > time() && $v['end_time'] > time()){
                Project::where(['id'=>$v['id']])->update(['is_do'=>1,'created_at'=>time()]);
            }
            if($v['start_times'] < time() && $v['end_time'] > time()){
                Project::where(['id'=>$v['id']])->update(['is_do'=>2,'created_at'=>time()]);
            }
        }
        $projects = Project::where(['is_do'=>array('<',3),'project_status'=>1])->order('created_at','desc')->limit(3)->select();
        $projects[$k]['st'] = 0;
        foreach ($projects as $k => $v) {
          if($v['is_do'] ==1){//未开始
            $projects[$k]['str'] = '即将开始';
            $projects[$k]['st'] = floor(($v['start_times']-time())/86400);
          }elseif($v['is_do'] ==2){//已开始
            $projects[$k]['str'] = '进行中';   
            $projects[$k]['st'] = floor(($v['end_time']-time())/86400);
          }  
        }
       
        $this->assign('data',$data);
        $this->assign('projects',$projects);
    	$this->assign('ben',$ben);
    	return $this->fetch('view/newsDetail');	
    }

    public function tranTime($time)
    {
        $rtime = date("m-d H:i",$time);
        $htime = date("H:i",$time);
        $time = time() - $time;
        if ($time < 60)
        {
            $str = '刚刚';
        }
        elseif ($time < 60 * 60)
        {
            $min = floor($time/60);
            $str = $min.'分钟前';
        }
        elseif ($time < 60 * 60 * 24)
        {
            $h = floor($time/(60*60));
            $str = $h.'小时前 '.$htime;
        }
        elseif ($time < 60 * 60 * 24 * 3)
        {
            $d = floor($time/(60*60*24));
            if($d==1)
                $str = '昨天 '.$rtime;
            else
                $str = '前天 '.$rtime;
        }
        else
        {
            $str = $rtime;
        }
        return $str;
    } 
  
}

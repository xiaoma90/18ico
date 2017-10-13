<?php
namespace app\home\controller;

use app\admin\model\ProjectModel;
use app\admin\model\Pro_to_users;
use app\admin\model\Attention;
use think\Request;

#用户项目管理

class Item extends Base
{	

	#用户ID
	protected $id;
	protected $userss;
	const PROJECT = 'project';
	public function __construct()
	{
		parent::__construct();
		$this->id = session('home_user')['id']; 
		$id = $this->id;
		$user = db('users')->where(['id'=>$id])->find();
		$user['updated_at'] = date('Y-m-d H:i:s',$user['updated_at']);
		$user['created_at'] = date('Y-m-d H:i:s',$user['created_at']);
		$this->userss = $user;
	}
	#用户关注
	public function attention(){
		$pid = input('data');//项目id
		// dump($pid);exit;
		$uid = $this->id;
		$where = ['uid'=>$uid,'gid'=>$pid,'type'=>2];
		$data = db('attention')->where($where)->find();
		if(empty($data)){
			$where['created_at'] = $where['updated_at'] = time();
			$res = db('attention')->insertGetId($where);
			return json(['status'=>1,'msg'=>'关注成功']);
		}else{
			return json(['status'=>1,'msg'=>'已关注']);
		}
	}
	#我支持的项目
	public function index()
	{	
		$status=0;
		null !== input('param.status') ? $status = input('param.status'): $status = 0 ;//项目状态  完成,未完成,全部
		$data = Pro_to_users::where(['uid'=>$this->id])->order('id desc')->select();
		$oldStatus = config('is_do');
		foreach ($data as $k => $v) {
			$data[$k]['sta'] = '';
			$data[$k]['created_at'] = date('Y-m-d H:i:s',$v->created_at);

			switch ( $status ) {
				case 1: //未完成
				$new = $v->project()->where(['is_do'=>['neq',3]])->field('id,name,is_do')->find();
					break;
				case 2: //完成
				$new = $v->project()->where(['is_do'=>3])->field('id,name,is_do')->find();
					break;
			
				default: //全部
				$new = $v->project;
					break;
			}

			if ($status == 1 || $status == 2) {
				
				if ( $v->proid == $new['id'] ) {
					$data[$k]['projectname'] = $new['name'];
					$data[$k]['sta'] = $oldStatus[$new['is_do']];				
				}else{
					unset($data[$k]);
				}

			}else{
				$data[$k]['projectname'] = $new->name;
				$data[$k]['sta'] = $oldStatus[$new->is_do];
			}


		}

		#判断是否切换项目状态
		if(request()->isAjax()){
			return json(['code'=>1,'data'=>$data]);
		}

		$this->assign('data',$data);
		return $this->fetch('view/support',['user'=>$this->userss]);
	}

	#我发起的项目
	public function sendProject()
	{	
		#项目状态
		$where = [];
		$status= 0;		
		$where['link_account'] = $this->id;
		null !== input('param.status')  ? $status = input('param.status'): $status = 0 ;// 0为全部 1为未提交 2待审核 3进行中 4已完成 5即将开始 6失败 7未通过

		switch ($status) {
			case 2:
				$where['project_status'] = 3;
				break;
			case 3:
				$where['project_status'] = 1;
				$where['is_do'] = 2;
				break;
			case 4:
				$where['is_do'] = 3;
				break;
			case 5:
				$where['is_do'] = 1;
				break;
			case 6:
				$where['is_do'] = 4;
				break;
			case 7:
				$where['project_status'] = 2;
				break;			
		}

		$data = ProjectModel::where($where)->order('created_at desc')->select();

		foreach ($data as $k => $v) {
			$data[$k]['created_at'] = date('Y-m-d H:i:s',$v->created_at);
		}

		#判断是否切换项目状态
		if(request()->isAjax()){
			return json(['code'=>1,'data'=>$data]);
		}
		
		$this->assign('data',$data);

		return $this->fetch('view/project',['user'=>$this->userss]);

	}

	#我关注的项目
	public function followProject()
	{	
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
		#查询固定用户关注的项目  type==2 为项目
		$gid = Attention::where(['uid'=>$this->id,'type'=>2])->column('gid');

		$gid = array_unique($gid);

		$data = ProjectModel::where('id','in',$gid)->select();

		foreach ($data as $k=>$v) {
			#项目剩余天数
			if ( $v->start_times < time() ) {
				$time = time() - $v->start_times;
				$data[$k]['ico_days'] = $v->ico_days  - round($time / 86400);
			}
			$data[$k]['na'] =0;
			$data[$k]['naa'] = 0;
			$data[$k]['nb'] =0;
			$data[$k]['nbb'] = 0;
			$data[$k]['nc'] =0;
			$data[$k]['ncc'] = 0;
			if($v['eth_target']>0 && $v['eth_ed']>0){
	                $data[$k]['na']  = $v['eth_ed']/$v['eth_target']*100;
	                // var_dump($data[$k]['na']);exit;
	                $data[$k]['naa'] = $v['eth_ed']/$v['eth_target']*100;
	        }
            if($v['btc_target']>0 && $v['btc_ed']>0){
                $data[$k]['nb'] = $v['btc_ed']/$v['btc_target']*100;
                $data[$k]['nbb'] = $v['btc_ed']/$v['btc_target']*100;
            }
            if($v['ltc_target']>0 && $v['ltc_ed']>0){
                $data[$k]['nc']  = $v['ltc_ed']/$v['ltc_target']*100;
                $data[$k]['ncc'] = $v['ltc_ed']/$v['ltc_target']*100;
            }               
        	}			

		$this->assign('data',$data);
		return $this->fetch('view/favorite',['user'=>$this->userss]);
	}

	#取消关注
	public function removeAttention()
	{	

		if (db('attention')->where(['uid'=>$this->id,'gid'=>input('param.id')])->delete()){
			return json(['code'=>1,'msg'=>'取消成功']);
		}

			return json(['code'=>2,'msg'=>'取消失败']);
	}
}
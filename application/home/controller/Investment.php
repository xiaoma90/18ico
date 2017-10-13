<?php
namespace app\home\controller;

class Investment extends Base{
	const USER = 'users';
	const PROJECT = 'project';
	const USER_SESSION = 'home_user';
	#进行投资
	public function index(){
		$uid = session(self::USER_SESSION)['id'];
		$param = input('param.');
		$id = $param['id'];
		$user = db(self::USER)->where(['id'=>$uid])->find();
		$project = db(self::PROJECT)->where(['id'=>$param['id']])->find();
		if($user['type'] != 3){
			return json(['code'=>3,'msg'=>'请先完善信息！']);
		}
		if($project['is_do'] > 2){
			return json(['code'=>2,'msg'=>'项目已完成!']);
		}
		if($project['end_time'] < time()){
			return json(['code'=>2,'msg'=>'项目已完成!']);
		}
		$param['eth_acc'] = $project['eth_ed'] + $param['eth_acc'] > $project['eth_target']?$project['eth_target'] - $project['eth_ed']:$param['eth_acc'];
		$param['btc_acc'] = $project['btc_ed'] + $param['btc_acc'] > $project['btc_target']?$project['btc_target'] - $project['btc_ed']:$param['btc_acc'];
		$param['ltc_acc'] = $project['ltc_ed'] + $param['ltc_acc'] > $project['ltc_target']?$project['ltc_target'] - $project['ltc_ed']:$param['ltc_acc'];

		if($user['eth_acc'] < $param['eth_acc']){
			return json(['code'=>2,'msg'=>'ETH余额不足']);
		}
		if($user['btc_acc'] < $param['btc_acc']){
			return json(['code'=>2,'msg'=>'BTC余额不足']);
		}
		if($user['ltc_acc'] < $param['ltc_acc']){
			return json(['code'=>2,'msg'=>'LTC余额不足']);
		}
		add_account($uid,$param['eth_acc'],$param['ltc_acc'],$param['btc_acc'],1,time());//添加用户明细
		$user_update['eth_acc'] = $user['eth_acc'] - $param['eth_acc'];
		$user_update['ltc_acc'] = $user['ltc_acc'] - $param['ltc_acc'];
		$user_update['btc_acc'] = $user['btc_acc'] - $param['btc_acc'];
		db(self::USER)->where(['id'=>$uid])->update($user_update);
		if($param['eth_acc'] > 0){
			add_pro_to_users($uid,$id,1,$param['eth_acc'],$user['eth_num']);
		}
		if($param['btc_acc'] > 0){
			add_pro_to_users($uid,$id,2,$param['btc_acc'],$user['btc_num']);
		}
		if($param['ltc_acc'] > 0){
			add_pro_to_users($uid,$id,3,$param['ltc_acc'],$user['ltc_num']);
		}
		$project_update['eth_ed'] = $project['eth_ed'] + $param['eth_acc'];
		$project_update['btc_ed'] = $project['btc_ed'] + $param['btc_acc'];
		$project_update['ltc_ed'] = $project['ltc_ed'] + $param['ltc_acc'];
		db(self::PROJECT)->where(['id'=>$id])->update($project_update);
		return json(['code'=>1,'msg'=>'投资成功']);
	}

	public function suoding(){
		$uid = session(self::USER_SESSION)['id'];
		$param = input('param.');
		if(empty($param['id'])){
			return json(['code'=>2,'msg'=>'未选择项目']);
		}
		$id = $param['id'];
		$user = db(self::USER)->where(['id'=>$uid])->find();
		$project = db(self::PROJECT)->where(['id'=>$param['id']])->find();
		$msg = '';
		if($user['type'] != 3){
			return json(['code'=>3,'msg'=>'请先完善信息！']);
		}
		if($project['is_do'] > 2){
			return json(['code'=>2,'msg'=>'项目已完成!']);
		}
		if($project['end_time'] < time()){
			return json(['code'=>2,'msg'=>'项目已完成!']);
		}
		$param['eth_acc'] = $project['eth_ed'] + $param['eth_acc'] > $project['eth_target']?$project['eth_target'] - $project['eth_ed']:$param['eth_acc'];
		$param['btc_acc'] = $project['btc_ed'] + $param['btc_acc'] > $project['btc_target']?$project['btc_target'] - $project['btc_ed']:$param['btc_acc'];
		$param['ltc_acc'] = $project['ltc_ed'] + $param['ltc_acc'] > $project['ltc_target']?$project['ltc_target'] - $project['ltc_ed']:$param['ltc_acc'];

		if($user['eth_acc'] < $param['eth_acc']){
			return json(['code'=>2,'msg'=>'ETH余额不足']);
		}
		if($user['btc_acc'] < $param['btc_acc']){
			return json(['code'=>2,'msg'=>'BTC余额不足']);
		}
		if($user['ltc_acc'] < $param['ltc_acc']){
			return json(['code'=>2,'msg'=>'LTC余额不足']);
		}
		add_account($uid,$param['eth_acc'],$param['ltc_acc'],$param['btc_acc'],1,time());//添加用户明细
		$user_update['eth_acc'] = $user['eth_acc'] - $param['eth_acc'];
		$user_update['ltc_acc'] = $user['ltc_acc'] - $param['ltc_acc'];
		$user_update['btc_acc'] = $user['btc_acc'] - $param['btc_acc'];
		db(self::USER)->where(['id'=>$uid])->update($user_update);
		if($param['eth_acc'] > 0){
			$msg .= '锁定ETH:'.$param['eth_acc'].'个.';
			add_pro_to_users($uid,$id,1,$param['eth_acc'],$user['eth_num']);
		}
		if($param['btc_acc'] > 0){
			$msg .= '锁定BTC:'.$param['btc_acc'].'个.';
			add_pro_to_users($uid,$id,2,$param['btc_acc'],$user['btc_num']);
		}
		if($param['ltc_acc'] > 0){
			$msg .= '锁定LTC:'.$param['ltc_acc'].'个.';
			add_pro_to_users($uid,$id,3,$param['ltc_acc'],$user['ltc_num']);
		}
		$project_update['eth_ed'] = $project['eth_ed'] + $param['eth_acc'];
		$project_update['btc_ed'] = $project['btc_ed'] + $param['btc_acc'];
		$project_update['ltc_ed'] = $project['ltc_ed'] + $param['ltc_acc'];
		db(self::PROJECT)->where(['id'=>$id])->update($project_update);
		return json(['code'=>1,'msg'=>$msg]);
	}
}
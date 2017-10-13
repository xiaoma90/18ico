<?php

namespace app\admin\controller;

use app\admin\model\UsersModel;

class Users extends Base
{
    //用户列表
    public function index()
    {
        if(request()->isAjax()){

            $param = input('param.');

            $limit = $param['pageSize'];
            $offset = ($param['pageNumber'] - 1) * $limit;

            $where = [];
            if (!empty($param['phone'])) {
                $where['phone'] = ['like', '%' . trim($param['phone']) . '%'];
            }
            if (!empty($param['eth_num'])) {
                $where['eth_num'] = ['like', '%' . trim($param['eth_num']) . '%'];
            }
            if (!empty($param['ltc_num'])) {
                $where['ltc_num'] = ['like', '%' . trim($param['ltc_num']) . '%'];
            }
            if (!empty($param['btc_num'])) {
                $where['btc_num'] = ['like', '%' . trim($param['btc_num']) . '%'];
            }
            $user = new UsersModel();
            $selectResult = $user->getUsersByWhere($where, $offset, $limit);

            $status = config('user_status');

            // 拼装参数
            foreach($selectResult as $key=>$vo){

                $selectResult[$key]['updated_at'] = !empty($vo['updated_at'])?date('Y-m-d H:i:s', $vo['updated_at']):'未登录';
                $selectResult[$key]['status'] = $status[$vo['status']];
                $selectResult[$key]['operate'] = showOperate($this->makeButton($vo['id']));
            }

            $return['total'] = $user->getAllUsers($where);  //总数据
            $return['rows'] = $selectResult;

            return json($return);
        }

        return $this->fetch();
    }

    //用户详情
    public function user_detail(){
        $id = input('id');
        $users = new UsersModel();
        $user = $users->getOneUser($id);
        $return = [
            'user' => $user,
        ];
        return json($return);
    }

    //用户资金充值
    public function user_money(){
        $param = input('post.');
        $users = new UsersModel();
        if($param['eth_acc'] != 0){
            $users->where(['id'=>$param['user_id']])->setInc('eth_acc',$param['eth_acc']);  
        }
        if($param['ltc_acc'] != 0){
            $users->where(['id'=>$param['user_id']])->setInc('ltc_acc',$param['ltc_acc']);
        }
        if($param['btc_acc'] != 0){
            $users->where(['id'=>$param['user_id']])->setInc('btc_acc',$param['btc_acc']);
        }
        add_account($param['user_id'],$param['eth_acc'],$param['ltc_acc'],$param['btc_acc'],2,time());
        return $this->success('资金充值完成');
    }

    //用户资金详情
    public function user_account(){
        $id = input('id');
        $user = db('account')->where(['uid'=>$id])->order('id desc')->select();
        foreach($user as $k=>$v){
            $user[$k]['created_at'] = date('Y-m-d H:i:s',$v['created_at']);
            $user[$k]['type'] = config('account_type')[$v['type']];
        }
        return json($user);
    }

    // 添加用户
    public function userAdd()
    {
        if(request()->isPost()){

            $param = input('param.');
            $param['password'] = md5($param['password']);
            $user = new UsersModel();
            $flag = $user->insertUser($param);

            return json(msg($flag['code'], $flag['data'], $flag['msg']));
        }

        $role = new RoleModel();
        $this->assign([
            'role' => $role->getRole(),
            'status' => config('user_status')
        ]);

        return $this->fetch();
    }

    // 编辑用户
    public function userEdit()
    {
        $user = new UsersModel();

        if(request()->isPost()){

            $param = input('post.');

            if(empty($param['password'])){
                unset($param['password']);
            }else{
                $param['password'] = md5($param['password']);
            }
            $flag = $user->editUser($param);

            return json(msg($flag['code'], $flag['data'], $flag['msg']));
        }

        $id = input('param.id');
        $role = new RoleModel();

        $this->assign([
            'user' => $user->getOneUser($id),
            'status' => config('user_status'),
            'role' => $role->getRole()
        ]);
        return $this->fetch();
    }

    // 删除用户
    public function userDel()
    {
        $id = input('param.id');

        $role = new UsersModel();
        $flag = $role->delUser($id);
        return json(msg($flag['code'], $flag['data'], $flag['msg']));
    }

    /**
     * 拼装操作按钮
     * @param $id
     * @return array
     */
    private function makeButton($id)
    {
        return [
            '编辑' => [
                'auth' => 'users/useredit',
                'href' => url('user/userEdit', ['id' => $id]),
                'btnStyle' => 'primary',
                'icon' => 'fa fa-paste'
            ],
            '详情' => [
                'auth' => 'users/user_detail',
                'href' => "javascript:user_detail(" .$id .")",
                'btnStyle' => 'primary',
                'icon' => 'fa fa-paste'
            ],
            '资金管理' => [
                'auth' => 'users/user_money',
                'href' => "javascript:user_money(" .$id .")",
                'btnStyle' => 'primary',
                'icon' => 'fa fa-paste'
            ],
            '明细' => [
                'auth' => 'users/user_account',
                'href' => "javascript:user_account(" .$id .")",
                'btnStyle' => 'primary',
                'icon' => 'fa fa-paste'
            ],
            '删除' => [
                'auth' => 'users/userdel',
                'href' => "javascript:userDel(" .$id .")",
                'btnStyle' => 'danger',
                'icon' => 'fa fa-trash-o'
            ]
        ];
    }
}

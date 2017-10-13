<?php

namespace app\admin\controller;

use app\admin\model\AuthPersonModel;
use app\admin\model\AuthOrganizationModel;

class Auth extends Base
{
    //个人申请列表
    public function person()
    {
        $status = config('auth_status');
        if(request()->isAjax()){

            $param = input('param.');

            $limit = $param['pageSize'];
            $offset = ($param['pageNumber'] - 1) * $limit;

            $where = [];
            if (!empty($param['status'])) {
                $where['status'] = $param['status'];
            }
            if (!empty($param['user_phone'])) {
                $where['phone'] = ['like','%'.$param['user_phone'].'%'];
            }
            if (!empty($param['user_name'])) {
                $where['name'] = ['like','%'.$param['user_name'].'%'];
            }
            $auth = new AuthPersonModel();
            $selectResult = $auth->getAuthByWhere($where, $offset, $limit);
            // 拼装参数
            foreach($selectResult as $key=>$vo){
                $selectResult[$key]['user_phone'] = "<a href='javascript:user_detail({$vo['uid']})'>".db('users')->where(['id'=>$vo['uid']])->value('phone')."</a>";
                $selectResult[$key]['status'] = $status[$vo['status']];
                $selectResult[$key]['created_at'] = date('Y-m-d H:i:s',$vo['created_at']);
                $selectResult[$key]['operate'] = showOperate($this->makeButton($vo['id']));
            }

            $return['total'] = $auth->getAllAuth($where);  //总数据
            $return['rows'] = $selectResult;

            return json($return);
        }
        $this->assign([
            'status' => $status
        ]);
        return $this->fetch();
    }

    //申请详情
    public function auth_detail(){
        $id = input('id');
        $Auth = new AuthPersonModel();
        $detail = $Auth->getOneAuth($id);
        return json($detail);
    }

    // 编辑申请
    public function authEdit()
    {
        $param = input('get.');

        $id = input('id');
        $Auth = new AuthPersonModel();
        $detail = $Auth->getOneAuth($id);
        $param['updated_at'] = time();
        $flag = $Auth->editAuth($param);

        db('users')->where(['id'=>$detail['uid']])->update(['type'=>$param['status']]);
        return json(msg($flag['code'], $flag['data'], $flag['msg']));
 
    }


    /**
     * 拼装操作按钮
     * @param $id
     * @return array
     */
    private function makeButton($id)
    {
        // dump(session('action'));exit;
        return [
            '详情' => [
                'auth' => 'auth/auth_detail',
                'href' => "javascript:auth_detail(" .$id .")",
                'btnStyle' => 'primary',
                'icon' => 'fa fa-paste'
            ], 
            '审核' => [
                'auth' => 'auth/authedit',
                'href' => "javascript:authedit(" .$id .")",
                'btnStyle' => 'primary',
                'icon' => 'fa fa-paste'
            ], 
        ];   
    }

     //机构申请列表
    public function organization()
    {
        $status = config('auth_status');
        if(request()->isAjax()){

            $param = input('param.');

            $limit = $param['pageSize'];
            $offset = ($param['pageNumber'] - 1) * $limit;

            $where = [];
            if (!empty($param['status'])) {
                $where['status'] = $param['status'];
            }
            if(!empty($param['company'])){
                $where['company'] = ['like','%'.$param['company'].'%'];
            }
            
            $auth = new AuthOrganizationModel();
            $selectResult = $auth->getAuthByWhere($where, $offset, $limit);
            // 拼装参数
            foreach($selectResult as $key=>$vo){
                $selectResult[$key]['user_phone'] = "<a href='javascript:user_detail({$vo['uid']})'>".db('users')->where(['id'=>$vo['uid']])->value('phone')."</a>";
                $selectResult[$key]['status'] = $status[$vo['status']];
                $selectResult[$key]['created_at'] = date('Y-m-d H:i:s',$vo['created_at']);
                $selectResult[$key]['operate'] = showOperate($this->makeButton($vo['id']));
            }

            $return['total'] = $auth->getAllAuth($where);  //总数据
            $return['rows'] = $selectResult;

            return json($return);
        }
        $this->assign([
            'status' => $status
        ]);
        return $this->fetch();
    }

        //申请详情
    public function o_auth_detail(){
        $id = input('id');
        $Auth = new AuthOrganizationModel();
        $detail = $Auth->getOneAuth($id);
        return json($detail);
    }

    // 编辑申请
    public function o_authEdit()
    {
        $param = input('get.');

        $id = input('id');
        $Auth = new AuthOrganizationModel();
        $detail = $Auth->getOneAuth($id);
        $param['updated_at'] = time();
        $flag = $Auth->editAuth($param);

        db('users')->where(['id'=>$detail['uid']])->update(['type'=>$param['status']]);
        return json(msg($flag['code'], $flag['data'], $flag['msg']));
 
    }
}

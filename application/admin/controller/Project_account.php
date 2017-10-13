<?php
namespace app\admin\controller;
use app\admin\model\UsersModel;
use app\admin\model\OrderModel;

class Order extends Base
{
    #项目列表展示
    public function index()
    {   
        if( request()->isAjax() ){   
            #获取参数
            $param = input('param.');
            $where = [];
            $limit = $param['pageSize'];
            $offset = ($param['pageNumber'] - 1) * $limit;
            $name = $param['searchText'];
            #组合查询条件
            if ( !empty($name) ) {
                $where['name'] = ['like','%'.$name.'%'];
            }

            #查询数据
            $ProjectModel = new OrderModel();

            $data = $ProjectModel-> getOrderWhere($where,$limit,$offset);
            $type = [
                '1' => 'ETH',
                '2' => 'BTC',
                '3' => 'LTC'
            ];
            // 拼装参数
            foreach($data as $key=>$vo){

                $data[$key]['created_at'] = date('Y-m-d H:i:s', $vo['created_at']);
                
                $data[$key]['project_name'] = db('project')->where(['id'=>$vo['proid']])->value('name');
                $data[$key]['user_phone'] = "<a href='javascript:user_detail({$vo['uid']})'>".db('users')->where(['id'=>$vo['uid']])->value('phone')."</a>";
                $data[$key]['type'] = $type[$vo['type']];

            }
            $return['total'] = $ProjectModel->getOrderCount($where);  //总数据
            $return['rows'] = $data;
            return json($return);
        }

        return $this->fetch();
    }



    // #添加按钮
    // private function makeButton($id)
    // {   
    //     return [
    //         '详情' => [
    //             'auth' => 'project/detail',
    //             'href' => url('project/detail', ['id' => $id]),
    //             'btnStyle' => 'primary',
    //             'icon' => 'fa fa-paste'
    //         ],
    //         '编辑' => [
    //             'auth' => 'project/edit',
    //             'href' => url('project/edit', ['id' => $id]),
    //             'btnStyle' => 'warning',
    //             'icon' => 'fa fa-paste'
    //         ]
    //     ];
    // }


}

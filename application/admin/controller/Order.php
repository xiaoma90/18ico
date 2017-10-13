<?php
namespace app\admin\controller;

use app\admin\model\UsersModel;
use app\admin\controller\Excel;
use app\admin\model\OrderModel;

class Order extends Base
{
    #项目列表展示
    public function index()
    {   
        $type = [
            '1' => 'ETH',
            '2' => 'BTC',
            '3' => 'LTC'
        ];
        $project = db('project')->select();
        if( request()->isAjax() ){   
            #获取参数
            $param = input('param.');
            $where = [];
            $limit = $param['pageSize'];
            $offset = ($param['pageNumber'] - 1) * $limit;

            if(!empty($param['type'])){
                $where['type'] = $param['type'];
            }
            if(!empty($param['project_name'])){
                $proid = db('project')->where(['name'=>['like','%'.$param['project_name'].'%']])->column('id');
                $where['proid'] = ['in',$proid];
            }
            if(!empty($param['project_id'])){
                $where['proid'] = $param['project_id'];
            }
            #查询数据
            $Order = new OrderModel();

            $data = $Order-> getOrderByWhere($where,$limit,$offset);
            // 拼装参数
            foreach($data as $key=>$vo){

                $data[$key]['created_at'] = date('Y-m-d H:i:s', $vo['created_at']);
                
                $data[$key]['project_name'] = db('project')->where(['id'=>$vo['proid']])->value('name');
                $data[$key]['user_phone'] = "<a href='javascript:user_detail({$vo['uid']})'>".db('users')->where(['id'=>$vo['uid']])->value('phone')."</a>";
                $data[$key]['type'] = $type[$vo['type']];

            }

            if(isset($param['excel']) && $param['excel'] == 'to_excel'){    //导出到excel
                $content = json_decode(json_encode($data),true);
                foreach($content as $k=>$v){
                    $content[$k]['phone'] = db('users')->where(['id'=>$v['uid']])->value('phone');
                    unset($content[$k]['id']);
                    unset($content[$k]['uid']);
                    unset($content[$k]['proid']);
                    unset($content[$k]['money']);
                    unset($content[$k]['updated_at']);
                    unset($content[$k]['status']);
                    unset($content[$k]['user_phone']);
                }
                $excel = new Excel();
                $first = ['A1'=>'编号','B1'=>'使用币种','C1'=>'下单时间','D1'=>'投资数量','E1'=>'冷钱包地址','F1'=>'项目名称','G1'=>'联系人手机号'];
                $excel->toExcel('订单列表',$content,$first);
                return json(['code'=>1]);
            }
            $return['total'] = $Order->getOrderCount($where);  //总数据
            $return['rows'] = $data;
            return json($return);
        }
        $this->assign([
            'type' => $type,
            'project' => $project,
        ]);
        return $this->fetch();
    }

}

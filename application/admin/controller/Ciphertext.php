<?php

namespace app\admin\controller;

use app\admin\model\CiphertextModel;

class Ciphertext extends Base
{
    //用户列表
    public function index()
    {
        $status = [
            '1' => '未使用',
            '2' => '已使用'
        ];
        $type = [
            '1' => 'ETH',
            '2' => 'LTC',
            '3' => 'BTC'
        ];
        if(request()->isAjax()){

            $param = input('param.');

            $limit = $param['pageSize'];
            $offset = ($param['pageNumber'] - 1) * $limit;

            $where = [];
            if (!empty($param['status'])) {
                $where['status'] = $param['status'];
            }
            if (!empty($param['type'])) {
                $where['type'] = $param['type'];
            }
            $ciphertext = new CiphertextModel();
            $selectResult = $ciphertext->getCiphertextByWhere($where, $offset, $limit);

            // 拼装参数
            foreach($selectResult as $key=>$vo){
                $selectResult[$key]['status'] = $status[$vo['status']];
                $selectResult[$key]['type'] = $type[$vo['type']];
                $selectResult[$key]['operate'] = showOperate($this->makeButton($vo['id']));
            }

            $return['total'] = $ciphertext->getAllCiphertext ($where);  //总数据
            $return['rows'] = $selectResult;

            return json($return);
        }
        $this->assign([
            'status'=>$status,
            'type' => $type
        ]);
        return $this->fetch();
    }

    // 导入密文
    public function ciphertextAdd()
    {
        $file = $_FILES['files'];
        if($file['type'] != 'text/plain'){
            return json(['code'=>2,'msg'=>'上传格式错误，请上传txt格式文件']);
        }
        $content = file_get_contents($file['tmp_name']);
        $content = explode("\n",$content);
        $insert['type'] = input('type');
        $insert['status'] = 1;
        foreach($content as $k=>$v){
            $insert['content'] = $v;
            if(db('ciphertext')->where(['type'=>input('type'),'content'=>$v])->value('id')){
                continue;
            }
            db('ciphertext')->insert($insert);
        }
        return json(['code'=>1,'msg'=>'添加成功']);
    }


    // 删除用户
    public function ciphertextDel()
    {
        $id = input('param.id');

        $role = new CiphertextModel();
        $flag = $role->delciphertext($id);
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
                'auth' => 'Ciphertext/ciphertextedit',
                'href' => url('ciphertext/ciphertextEdit', ['id' => $id]),
                'btnStyle' => 'primary',
                'icon' => 'fa fa-paste'
            ],
            '详情' => [
                'auth' => 'Ciphertext/ciphertext_detail',
                'href' => "javascript:ciphertext_detail(" .$id .")",
                'btnStyle' => 'primary',
                'icon' => 'fa fa-paste'
            ],
        ];
    }
}

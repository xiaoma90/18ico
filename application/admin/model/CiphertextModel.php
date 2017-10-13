<?php

namespace app\admin\model;

use think\Model;

class CiphertextModel extends Model
{
    // 确定链接表名
    protected $table = 'ciphertext';

    /**
     * 根据搜索条件获取用户列表信息
     * @param $where
     * @param $offset
     * @param $limit
     */
    public function getCiphertextByWhere($where, $offset, $limit)
    {
        return $this->where($where)->limit($offset, $limit)->order('status,id desc')->select();
    }

    /**
     * 根据搜索条件获取所有的用户数量
     * @param $where
     */
    public function getAllCiphertext($where)
    {
        return $this->where($where)->count();
    }


    /**
     * 根据管理员id获取角色信息
     * @param $id
     */
    public function getOneCiphertext($id)
    {
        return $this->where('id', $id)->find();
    }

    public function editCiphertext($param){
        try{

            $result =  $this->save($param, ['id' => $param['id']]);

            if(false === $result){
                // 验证失败 输出错误信息
                return msg(-1, '', $this->getError());
            }else{

                return msg(1, url('user/index'), '修改成功');
            }
        }catch(PDOException $e){
            return msg(-2, '', $e->getMessage());
        }
    }

}
<?php

namespace app\admin\model;

use think\Model;

class UsersModel extends Model
{
    // 确定链接表名
    protected $table = 'users';

    //建立和project的关联
    public function project()
    {
        return $this->hasMany('projectModel')->field('id,truename,phone');
    }


    /**
     * 根据搜索条件获取用户列表信息
     * @param $where
     * @param $offset
     * @param $limit
     */
    public function getUsersByWhere($where, $offset, $limit)
    {
        return $this->where($where)->limit($offset, $limit)->order('id desc')->select();
    }

    /**
     * 根据搜索条件获取所有的用户数量
     * @param $where
     */
    public function getAllUsers($where)
    {
        return $this->where($where)->count();
    }

    /**
     * 插入管理员信息
     * @param $param
     */
    public function insertUser($param)
    {
        try{

            $result =  $this->validate('UserValidate')->allowField(true)->save($param);
            if(false === $result){
                // 验证失败 输出错误信息
                return msg(-1, '', $this->getError());
            }else{

                return msg(1, url('user/index'), '添加用户成功');
            }
        }catch(PDOException $e){

            return msg(-2, '', $e->getMessage());
        }
    }

    /**
     * 编辑管理员信息
     * @param $param
     */
    public function editUser($param)
    {
        try{

            $result =  $this->validate('UserValidate')->save($param, ['id' => $param['id']]);

            if(false === $result){
                // 验证失败 输出错误信息
                return msg(-1, '', $this->getError());
            }else{

                return msg(1, url('user/index'), '编辑用户成功');
            }
        }catch(PDOException $e){
            return msg(-2, '', $e->getMessage());
        }
    }

    /**
     * 根据管理员id获取角色信息
     * @param $id
     */
    public function getOneUser($id)
    {
        return $this->where('id', $id)->find();
    }

    /**
     * 获取认证过用户
     *
     */
    public function getAuthUser()
    {
        return $this->where(['type'=>['eq',3]])->field(['id','nickname','truename','phone','state'])->select();
    }

    /**
     * 删除管理员
     * @param $id
     */
    public function delUser($id)
    {
        try{

            $this->where('id', $id)->delete();
            return msg(1, '', '删除管理员成功');

        }catch( PDOException $e){
            return msg(-1, '', $e->getMessage());
        }
    }

    /**
     * 根据用户名获取管理员信息
     * @param $name
     */
    public function findUserByName($name)
    {
        return $this->where('user_name', $name)->find();
    }

    /**
     * 更新管理员状态
     * @param array $param
     */
    public function updateStatus($param = [], $uid)
    {
        try{

            $this->where('id', $uid)->update($param);
            return msg(1, '', 'ok');
        }catch (\Exception $e){

            return msg(-1, '', $e->getMessage());
        }
    }
}
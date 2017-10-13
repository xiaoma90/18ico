<?php

namespace app\admin\model;

use think\Model;

class Pro_to_userModel extends Model
{
    // 确定链接表名
    protected $table = 'pro_to_users';



    #关联users表 
    public function users()
    {
        return $this->belongsTo('UsersModel','link_account');
    }

    /**
     * 根据搜索条件获取项目列表信息
     * @param $where
     * @param $offset
     * @param $limit
     */
    public  function getProjectByWhere($where, $offset, $limit)
    {
        return $this->where($where)->limit($offset, $limit)->order('id desc')->select();
    }

    #获取当前条件数据的总条数
    public function getProjectCount($where)
    {
        return $this->where($where)->count();
    }


}
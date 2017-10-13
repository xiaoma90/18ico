<?php

namespace app\admin\model;

use think\Model;

class ProjectModel extends Model
{
    // 确定链接表名
    protected $table = 'project';


    #关联users表 
    public function users()
    {
        return $this->belongsTo('UsersModel','link_account');
    }

    //建立和pro_to_users的关联
    public function pro_to_users()
    {
        return $this->hasMany('Pro_to_users','proid');
    }

    #关联attention表 
    public function attention()
    {
        return $this->belongsTo('Attention','gid','id');
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


    #添加项目
    public function goInsert($data)
    {   
        try{

            $result =  $this->validate('ProjectValidate')->allowField(true)->save($data);
            if(false === $result){
                // 验证失败 输出错误信息
                return msg(-1, '', $this->getError());
            }else{

                return msg(1, url('project/index'), '添加项目成功');
            }
        }catch(PDOException $e){

            return msg(-2, '', $e->getMessage());
        }

    }

    #编辑项目
    public function goEdit($data)
    {   
        try{

            $result =  $this->validate('ProjectValidate')->allowField(true)->update($data);
            if(false === $result){
                // 验证失败 输出错误信息
                return msg(-1, '', $this->getError());
            }else{

                return msg(1, url('project/index'), '编辑项目成功');
            }
        }catch(PDOException $e){

            return msg(-2, '', $e->getMessage());
        }

    }

    /**
     * 更新状态
     * @param array $param
     */
    public function updateStatus($param = [], $uid)
    {
        try{

            $this->where('id', $uid)->update($param);
            $flag = ['code'=>1,'msg'=>'处理成功'];

            return json(msg($flag['code'], '', $flag['msg']));
        }catch (\Exception $e){
            $flag = ['code'=>2,'msg'=>$e->getMessage()];
            return json(msg($flag['code'], '', $flag['msg']));

        }
    }
}
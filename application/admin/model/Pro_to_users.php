<?php

namespace app\admin\model;

use think\Model;

class Pro_to_users extends Model
{
    // 确定链接表名
    protected $table = 'pro_to_users';



    #关联project表 
    public function project()
    {
        return $this->belongsTo('ProjectModel','proid','id');
    }



}
<?php

namespace app\admin\model;

use think\Model;

class Attention extends Model
{
    // 确定链接表名
    protected $table = 'attention';


    #关联项目表
    public function project()
    {
    	return $this->hasOne('ProjectModel','id','gid');
    }

}
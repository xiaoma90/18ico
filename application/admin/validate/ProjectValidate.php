<?php

namespace app\admin\validate;

use think\Validate;

class ProjectValidate extends Validate
{
    protected $rule = [
        ['name', 'require', '项目名称不能为空']
    ];

}
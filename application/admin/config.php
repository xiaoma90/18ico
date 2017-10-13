<?php

return [

    // 模板参数替换
    'view_replace_str'       => array(
        '__CSS__'    => '/static/admin/css',
        '__JS__'     => '/static/admin/js',
        '__IMG__' => '/static/admin/images',
    ),

    // 管理员/用户状态
    'user_status' => [
        '1' => '正常',
        '2' => '禁用'
    ],
    // 角色状态
    'role_status' => [
        '1' => '启用',
        '2' => '禁用'
    ],

    #项目状态
    'project_status' => [
        1 => '通过',
        2 => '驳回',
        3 => '待审核'
    ],

    #公告类别
    'news_type'=>[
        '1' => '业务公告',
        '2' => '18ico',
        '3' => '关于18ico',
        '4' => '条款和协议',
        '5' => '常见问题',
        '7' => '站内通知',
        '6' => '我想发起众筹...'

    ],

    // 多库测试
    'local' => [
        // 数据库类型
        'type'        => 'mysql',
        // 服务器地址
        'hostname'    => '127.0.0.1',
        // 数据库名
        'database'    => 'test',
        // 数据库用户名
        'username'    => 'root',
        // 数据库密码
        'password'    => 'root',
        // 数据库编码默认采用utf8
        'charset'     => 'utf8',
        // 数据库表前缀
        'prefix'      => '',
    ],
];

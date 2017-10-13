<?php

return [

    // 模板参数替换
    'view_replace_str'       => [
        '__CSS__'    => '/static/home/css',
        '__JS__'     => '/static/home/js',
        '__IMG__' => '/static/home/images'
    ],
    'market'                    =>[
        'eth'   => market('eth'),
        'btc'   => market('btc'),
        'ltc'   => market('ltc')
    ],

    'is_do' => [
    1=>'锁定中',
    2=>'进行中',
    3=>'已完成'
    ],
    'type' => 'bootstrap1'
];

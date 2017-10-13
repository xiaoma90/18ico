<?php
namespace app\index\controller;

use think\Controller;

class Index extends Controller
{
    public function index()
    {
    	// for($i = 0;$i < 20;$i++){
    	// 	$insert['phone'] = '130277997'.$i;
    	// 	$insert['email'] = $i.'aa@qq.com';
    	// 	$insert['nickname'] = 'nick'.$i;
    	// 	$insert['truename'] = 'true'.$i;
    	// 	$insert['sex'] = rand(1,3);
    	// 	$insert['state'] = '中国';
    	// 	$insert['detail_address'] = '经'.$i.'路';
    	// 	$insert['password'] = md5('123456');
    	// 	$insert['created_at'] = time();
    	// 	$insert['updated_at'] = time();
    	// 	$insert['btc_num'] = 'btc'.rand(10000,99999).$i;
    	// 	$insert['eth_num'] = 'eth'.rand(10000,99999).$i;
    	// 	$insert['ltc_num'] = 'ltc'.rand(10000,99999).$i;
    	// 	db('users')->insert($insert);
    	// }
    	// echo '完成';
        // return $this->fetch();
    }
}

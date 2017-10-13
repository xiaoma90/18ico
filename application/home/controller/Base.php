<?php
namespace app\home\controller;

use think\Controller;

class Base extends Controller
{
	const USER_SESSION = 'home_user';

	function _initialize(){
		if(empty(session(self::USER_SESSION))){
			echo "<script>location.href='/home/login/login';</script>";exit;
		}
	}	
}
<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:80:"/www/wwwroot/18ico.ewtouch.com/public/../application/admin/view/users/index.html";i:1505201267;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户列表</title>
    <link rel="shortcut icon" href="favicon.ico">
    <link href="__CSS__/bootstrap.min.css?v=3.3.6" rel="stylesheet">
    <link href="__CSS__/font-awesome.min.css?v=4.4.0" rel="stylesheet">
    <link href="__CSS__/plugins/bootstrap-table/bootstrap-table.min.css" rel="stylesheet">
    <link href="__CSS__/animate.min.css" rel="stylesheet">
    <link href="__CSS__/style.min.css?v=4.1.0" rel="stylesheet">
    <link href="__CSS__/plugins/sweetalert/sweetalert.css" rel="stylesheet">
</head>
<body class="gray-bg">
<div class="wrapper wrapper-content animated fadeInRight">
    <!-- Panel Other -->
    <div class="ibox float-e-margins">
        <div class="ibox-title">
            <h5>用户列表</h5>
        </div>
        <div class="ibox-content">
            <div class="form-group clearfix col-sm-1">
                <?php if(authCheck('users/useradd')): ?>
                <a href="<?php echo url('user/userAdd'); ?>">
                    <button class="btn btn-outline btn-primary" type="button">添加用户</button>
                </a>
                <?php endif; ?>
            </div>
            <!--搜索框开始-->
            <form id='commentForm' role="form" method="post" class="form-inline pull-right">
                <div class="content clearfix m-b">
                    <div class="form-group">
                        <label>手机号：</label>
                        <input type="text" class="form-control" id="phone">
                    </div>
                    <div class="form-group">
                        <label>ETH钱包：</label>
                        <input type="text" class="form-control" id="eth_search">
                    </div>
                    <div class="form-group">
                        <label>LTC钱包：</label>
                        <input type="text" class="form-control" id="ltc_search">
                    </div>
                    <div class="form-group">
                        <label>BTC钱包：</label>
                        <input type="text" class="form-control" id="btc_search">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" type="button" style="margin-top:5px" id="search"><strong>搜 索</strong>
                        </button>
                    </div>
                </div>
            </form>
            <!--搜索框结束-->
            <div class="example-wrap">
                <div class="example">
                    <table id="cusTable">
                        <thead>
                        <th data-field="id">用户ID</th>
                        <th data-field="nickname">姓名</th>
                        <th data-field="phone">手机号</th>
                        <th data-field="eth_num">ETH钱包</th>
                        <th data-field="eth_acc">ETH余额</th>
                        <th data-field="ltc_num">LTC钱包</th>
                        <th data-field="ltc_acc">LTC余额</th>
                        <th data-field="btc_num">BTC钱包</th>
                        <th data-field="btc_acc">BTC余额</th>
                        <th data-field="status">状态</th>
                        <th data-field="operate">操作</th>
                        </thead>
                    </table>
                </div>
            </div>
            <!-- End Example Pagination -->
        </div>
    </div>
</div>
<!-- 用户详情 -->
<div class="ibox-content profile-content" id="user_detail" style="display:none;font-size:16px;">
    <table>
        <tr>
            <td>用户手机号：</td>
            <td class="detail_phone"></td>
        </tr>
        <tr>
            <td>邮箱：</td>
            <td class="detail_email"></td>
        </tr>
        <tr>
            <td>昵称：</td>
            <td class="detail_nickname"></td>
        </tr> 
        <tr>
            <td>真实姓名：</td>
            <td class="detail_truename"></td>
        </tr> 
        <tr>
            <td>性别：</td>
            <td class="detail_sex"></td>
        </tr> 
        <tr>
            <td>国籍：</td>
            <td class="detail_state"></td>
        </tr> 
        <tr>
            <td>详细地址：</td>
            <td class="detail_address"></td>
        </tr> 
        <tr>
            <td>所在公司：</td>
            <td class="detail_company"></td>
        </tr> 
        <tr>
            <td>头像：</td>
            <td><img class="detail_headimg" style="max-height:75px;" src="__IMG__/a1.jpg"></td>
        </tr>
        <tr>
            <td>ETH余额：</td>
            <td class="detail_eth_acc"></td>
        </tr> 
        <tr>
            <td>ETH分配号：</td>
            <td class="detail_eth_num"></td>
        </tr> 
        <tr>
            <td>LTC余额：</td>
            <td class="detail_ltc_acc"></td>
        </tr> 
        <tr>
            <td>LTC分配号：</td>
            <td class="detail_ltc_num"></td>
        </tr> 
        <tr>
            <td>BTC余额：</td>
            <td class="detail_btc_acc"></td>
        </tr> 
        <tr>
            <td>BTC分配号：</td>
            <td class="detail_btc_num"></td>
        </tr> 
        <tr>
            <td>注册时间：</td>
            <td class="detail_created_at"></td>
        </tr> 
        <tr>
            <td>最近登录时间：</td>
            <td class="detail_updated_at"></td>
        </tr>    
    </table>
</div>
<!-- 用户详情结束 -->
<!-- 资金管理 -->
<form class="form-inline" method="post" action="/admin/users/user_money" style="display:none;" id="user_money">
    <div class="content clearfix m-b" style="margin-left:50px;margin-top:50px;">
        <input type="hidden" name="user_id" class="user_id" value="">
        <div class="form-group">
            <label>ETH余额增加数：</label>
            <input type="text" class="form-control" name="eth_acc">
        </div><br/><br/>
        <div class="form-group">
            <label>LTC余额增加数：</label>
            <input type="text" class="form-control" name="ltc_acc">
        </div><br/><br/>
        <div class="form-group">
            <label>BTC余额增加数：</label>
            <input type="text" class="form-control" name="btc_acc">
        </div><br/><br/>
        <div class="form-group" style="float:right;margin-right:50px;">
            <button class="btn btn-primary" type="submit" style="margin-top:5px" id="add_money"><strong>确 认</strong>
            </button>
        </div>
    </div>
</form>
<!-- 资金管理结束 -->
<!-- 资金明细开始 -->
<table class='table table-bordered' style="display:none;" id="user_account">
    <thead>
        <th>id</th>
        <th>ETH余额变化</th>
        <th>LTC余额变化</th>
        <th>BTC余额变化</th>
        <th>原因</th>
        <th>时间</th>
    </thead>
    <tbody id="account_content">
        
    </tbody>
</table>
<!-- 资金明细结束 -->
<!-- End Panel Other -->
</div>
<script src="__JS__/jquery.min.js?v=2.1.4"></script>
<script src="__JS__/bootstrap.min.js?v=3.3.6"></script>
<script src="__JS__/content.min.js?v=1.0.0"></script>
<script src="__JS__/plugins/bootstrap-table/bootstrap-table.min.js"></script>
<script src="__JS__/plugins/bootstrap-table/bootstrap-table-mobile.min.js"></script>
<script src="__JS__/plugins/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>
<script src="__JS__/plugins/suggest/bootstrap-suggest.min.js"></script>
<script src="__JS__/plugins/layer/laydate/laydate.js"></script>
<script src="__JS__/plugins/sweetalert/sweetalert.min.js"></script>
<script src="__JS__/plugins/layer/layer.min.js"></script>
<script type="text/javascript">
    function initTable() {
        //先销毁表格
        $('#cusTable').bootstrapTable('destroy');
        //初始化表格,动态从服务器加载数据
        $("#cusTable").bootstrapTable({
            method: "get",  //使用get请求到服务器获取数据
            url: "./index", //获取数据的地址
            striped: true,  //表格显示条纹
            pagination: true, //启动分页
            pageSize: 10,  //每页显示的记录数
            pageNumber:1, //当前第几页
            pageList: [5, 10, 15, 20, 25],  //记录数可选列表
            sidePagination: "server", //表示服务端请求
            paginationFirstText: "首页",
            paginationPreText: "上一页",
            paginationNextText: "下一页",
            paginationLastText: "尾页",
            queryParamsType : "undefined",
            queryParams: function queryParams(params) {   //设置查询参数
                var param = {
                    pageNumber: params.pageNumber,
                    pageSize: params.pageSize,
                    phone:$('#phone').val(),
                    eth_num:$('#eth_search').val(),
                    ltc_num:$('#ltc_search').val(),
                    btc_num:$('#btc_search').val(),
                };
                return param;
            },
            onLoadSuccess: function(res){  //加载成功时执行
                if(111 == res.code){
                    window.location.reload();
                }
                layer.msg("加载成功", {time : 1000});
            },
            onLoadError: function(){  //加载失败时执行
                layer.msg("加载数据失败");
            }
        });
    }

    $(document).ready(function () {
        //调用函数，初始化表格
        initTable();

        //当点击查询按钮的时候执行
        $("#search").bind("click", initTable);
    });

    let thisHeight = window.innerHeight - window.innerHeight * 0.2;
    // function userDel(id){
    //     layer.confirm('确认删除此用户?', {icon: 3, title:'提示'}, function(index){
    //         //do something
    //         $.getJSON("<?php echo url('user/userDel'); ?>", {'id' : id}, function(res){
    //             if(1 == res.code){
    //                 layer.alert(res.msg, {title: '友情提示', icon: 1, closeBtn: 0}, function(){
    //                     initTable();
    //                 });
    //             }else if(111 == res.code){
    //                 window.location.reload();
    //             }else{
    //                 layer.alert(res.msg, {title: '友情提示', icon: 2});
    //             }
    //         });

    //         layer.close(index);
    //     })

    // }
    //详情
    function user_detail(id){
        $.getJSON("<?php echo url('users/user_detail'); ?>", {'id' : id}, function(res){
            let user = res.user;
            user.sex = user.sex == '2'?'男':'女';
            $('.detail_phone').text(user.phone);
            $('.detail_email').text(user.email);
            $('.detail_nickname').text(user.nickname);
            $('.detail_truename').text(user.truename);
            $('.detail_sex').text(user.sex);
            $('.detail_state').text(user.state);
            $('.detail_address').text(user.detail_address);
            $('.detail_company').text(user.company);
            $('.detail_headimg').attr('src',user.headimg);
            $('.detail_eth_acc').text(user.eth_acc);
            $('.detail_eth_num').text(user.eth_num);
            $('.detail_ltc_acc').text(user.ltc_acc);
            $('.detail_ltc_num').text(user.ltc_num);
            $('.detail_btc_acc').text(user.btc_acc);
            $('.detail_btc_num').text(user.btc_num);
            $('.detail_created_at').text(timeToString(user.created_at * 1000));
            $('.detail_updated_at').text(timeToString(user.updated_at * 1000));
            //捕获页
            layer.open({
                type: 1,
                shade: false,
                area: ['400px', thisHeight+'px'], //宽高
                title: '用户详情', //不显示标题
                content: $('#user_detail'),
            });
        });
    }

    //资金管理
    function user_money(id){
        $('.user_id').val(id);
        //捕获页
        layer.open({
            type: 1,
            shade: false,
            area: ['400px', thisHeight+'px'], //宽高
            title: '用户资金管理', //不显示标题
            content: $('#user_money'),
        });
    }

    //资金明细
    function user_account(id){
        $.getJSON("<?php echo url('users/user_account'); ?>", {'id' : id}, function(res){
            var account_content = $('#account_content');
            var content = '';
            account_content.text('');
            for(let i = 0;i < res.length;i++){
                content = '';
                content += '<tr>';
                content += '<td>'+res[i].id+'</td>';
                content += '<td>'+res[i].eth_money+'</td>';
                content += '<td>'+res[i].ltc_money+'</td>';
                content += '<td>'+res[i].btc_money+'</td>';
                content += '<td>'+res[i].type+'</td>';
                content += '<td>'+res[i].created_at+'</td>';
                content += '</tr>';
                account_content.append(content);
            }
            //捕获页
            layer.open({
                type: 1,
                shade: false,
                area: ['500px',thisHeight+'px'], //宽高
                title: '用户资金明细', //不显示标题
                content: $('#user_account'),
            });
        });
    }

    function timeToString(time){
        var date = new Date(time);
        Y = date.getFullYear() + '-';
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        D = date.getDate() + ' ';
        h = date.getHours() + ':';
        m = date.getMinutes() + ':';
        s = date.getSeconds();
        return Y+M+D+h+m+s; 
    }
</script>
</body>
</html>

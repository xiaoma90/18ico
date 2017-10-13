<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:86:"/www/wwwroot/18ico.ewtouch.com/public/../application/admin/view/auth/organization.html";i:1505201416;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>机构实名认证</title>
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
            <h5>机构实名认证</h5>
        </div>
        <div class="ibox-content">
<!--             <div class="form-group clearfix col-sm-1">
                <?php if(authCheck('users/useradd')): ?>
                <a href="<?php echo url('user/userAdd'); ?>">
                    <button class="btn btn-outline btn-primary" type="button">添加用户</button>
                </a>
                <?php endif; ?>
            </div> -->
            <!--搜索框开始-->
            <form id='commentForm' role="form" method="post" class="form-inline pull-right">
                <div class="content clearfix m-b">
                    <div class="form-group">
                        <label>状态：</label>
                        <select class="form-control" id="status">
                            <option value="">请选择</option>
                            <?php foreach($status as $k=>$v): ?>
                                <option value="<?php echo $k; ?>"><?php echo $v; ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>公司名称：</label>
                        <input type="text" id="company">
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
                        <th data-field="id">ID</th>
                        <th data-field="user_phone">账号(点击查看详情)</th>
                        <th data-field="company">公司名称</th>
                        <th data-field="register_num">企业注册号</th>
                        <!-- <th data-field="company_as">公司名称（英文|拼音）</th> -->
                        <th data-field="state">国籍</th>
                        <th data-field="city">城市</th>
                        <th data-field="detail_address">详细地址</th>
                        <!-- <th data-field="detail_address">详细地址</th> -->
                        <th data-field="created_at">申请时间</th>
                        <!-- <th data-field="capitol">州、省、地区</th> -->
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
<!-- 用户实名详情 -->
<div class="ibox-content profile-content" id="auth_detail" style="display:none;font-size:16px;">
    <table >
        <tr>
            <td>国籍：</td>
            <td class="auth_state"></td>
        </tr> 
        <tr>
            <td>公司名称：</td>
            <td class="auth_company"></td>
        </tr>
        <tr>
            <td>企业注册号：</td>
            <td class="auth_register_num"></td>
        </tr>
        <tr>
            <td>法人代表：</td>
            <td class="auth_legal_person"></td>
        </tr> 
        <tr>
            <td>注册地址：</td>
            <td class="auth_register_address"></td>
        </tr> 
        <tr>
            <td>注册时间：</td>
            <td class="auth_register_time"></td>
        </tr> 
        <tr>
            <td>城市：</td>
            <td class="auth_city"></td>
        </tr> 
        <!-- <tr>
            <td>州、省、地区：</td>
            <td class="auth_capitol"></td>
        </tr>  -->
        <tr>
            <td>详细地址：</td>
            <td class="auth_detail_address"></td>
        </tr> 
        <!-- <tr>
            <td>公司名称（英文|拼音）：</td>
            <td class="auth_company_as"></td>
        </tr>  -->
        <tr>
            <td>公司本地名称：</td>
            <td class="auth_company_local"></td>
        </tr> 
        <tr>
            <td>邮编：</td>
            <td class="auth_postage"></td>
        </tr> 

        <!-- <tr>
            <td>邮编：</td>
            <td class="auth_created_at"></td>
        </tr>  -->
        <tr>
            <td>营业执照：</td>
            <td><img class="auth_license" style="max-height:75px;" src="__IMG__/a1.jpg"></td>
        </tr>
        <tr>
            <td>拒绝原因：</td>
            <td class="auth_resaon"></td>
        </tr>
        <tr>
            <td>日期：</td>
            <td class="auth_updated_at"></td>
        </tr>    
    </table>
</div>
<!-- 用户实名详情结束 -->

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
<script src="__JS__/layui/layui.js"></script>
<script type="text/javascript">
    let thisHeight = window.innerHeight - window.innerHeight * 0.2;
    function initTable() {
        //先销毁表格
        $('#cusTable').bootstrapTable('destroy');
        //初始化表格,动态从服务器加载数据
        $("#cusTable").bootstrapTable({
            method: "get",  //使用get请求到服务器获取数据
            url: "./organization", //获取数据的地址
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
                    status:$('#status').val(),
                    company:$('#company').val(),
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
    //用户详情
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

    function auth_detail(id){
        $.getJSON("<?php echo url('auth/o_auth_detail'); ?>", {'id' : id}, function(res){
            $('.auth_state').text(res.state);
            $('.auth_company').text(res.company);
            $('.auth_register_num').text(res.register_num);
            $('.auth_legal_person').text(res.legal_person);
            $('.auth_register_address').text(res.register_address);
            $('.auth_register_time').text(res.register_time);
            $('.auth_city').text(res.city);
            $('.auth_capitol').text(res.capitol);
            $('.auth_detail_address').text(res.detail_address);
            $('.auth_company_as').text(res.company_as);
            $('.auth_company_local').text(res.company_local);
            $('.auth_postage').text(res.postage);
            $('.auth_license').attr('src',res.license);
            $('.auth_license').attr('style','width:800px;height:700px;');
            $('.auth_resaon').text(res.resaon);
            $('.auth_updated_at').text(timeToString(res.updated_at * 1000));
            //捕获页
            layer.open({
                type: 1,
                shade: false,
                area: ['1100px', thisHeight+'px'], //宽高
                title: '用户详情', //不显示标题
                content: $('#auth_detail'),
            });
        });
    }

    layui.use('layer',function(){
        layer = layui.layer;
    })

    function authedit(id){
        layer.confirm('您是否批准实名此认证？', {
            btn: ['批准','拒绝'] //按钮
        }, function(){
            $.getJSON("<?php echo url('auth/o_authEdit'); ?>", {'id' : id,'status':3}, function(res){
                layer.msg('您已批准', {icon: 1},function(){
                    initTable();
                });
            });
        }, function(){
            layer.prompt({title: '请输入拒绝原因', formType: 2}, function(text, index){
                $.getJSON("<?php echo url('auth/o_authEdit'); ?>", {'id' : id,'status':2,'resaon':text}, function(res){
                    layer.close(index);
                    layer.msg('拒绝成功,原因为：'+text,{icon: 2},function(){
                        initTable();
                    });
                });
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

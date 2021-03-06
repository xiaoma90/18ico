<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:83:"/www/wwwroot/18ico.ewtouch.com/public/../application/admin/view/type/add_class.html";i:1504839674;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>添加新闻</title>
    <link rel="shortcut icon" href="favicon.ico">
    <link href="__CSS__/bootstrap.min.css?v=3.3.6" rel="stylesheet">
    <link href="__CSS__/font-awesome.min.css?v=4.4.0" rel="stylesheet">
    <link href="__CSS__/animate.min.css" rel="stylesheet">
    <link href="__CSS__/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="__CSS__/style.min.css?v=4.1.0" rel="stylesheet">
    <!-- Sweet Alert -->
    <link href="__CSS__/plugins/sweetalert/sweetalert.css" rel="stylesheet">
    <link href="__JS__/layui/css/layui.css" rel="stylesheet">
    <link href="__JS__/umeditor/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
</head>
<body class="gray-bg">
<!-- 图片上传 -->
<form id="fmform" action="" method="POST" enctype="multipart/form-data">
    <input type="hidden" value="fmimg" name="imgtype"/>
    <input id="fmimg" style="display: none;" name="files" type="file" onchange="upload('fmform','imgurl')"/>
</form>
<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>添加新闻</h5>
                    <div class="ibox-tools">
                        <a class="collapse-link">
                            <i class="fa fa-chevron-up"></i>
                        </a>
                        <a class="dropdown-toggle" data-toggle="dropdown" href="form_basic.html#">
                            <i class="fa fa-wrench"></i>
                        </a>
                        <a class="close-link">
                            <i class="fa fa-times"></i>
                        </a>
                    </div>
                </div>
                <div class="ibox-content">
                    <form class="form-horizontal m-t" method="post" enctype="multipart/form-data" action="<?php echo url('type/do_insert'); ?>">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">类型</label>
                            <div class="input-group col-sm-4">
                                <select class="form-control" name="type" id="link_account">
                                    <option value="1">新闻</option>
                                    <option value="2">公告</option>                                                                         
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">标题：</label>
                            <div class="input-group col-sm-4">
                                <input id="title" type="text" class="form-control" name="title" required=""
                                       aria-required="true">
                            </div>
                        </div> 
                        <div class="form-group">
                            <label class="col-sm-3 control-label">副标题：</label>
                            <div class="input-group col-sm-4">
                                <input id="auther" type="text" class="form-control" name="name" required="" aria-required="true" />                              
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">标签：</label>
                            <div class="input-group col-sm-4">
                                <input id="auther" type="text" class="form-control" name="labels" required="" aria-required="true" />
                                <span style="color:red">每个标签之间用/分开</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">封面：</label>
                            <div class="input-group col-sm-4">
                                <input  type="file"  name="pic" id="pic"/>                               
                            </div>
                        </div>                          
                        <div class="form-group draggable ui-draggable">
                            <label class="col-sm-3 control-label">选择：</label>
                            <div class="col-sm-4">
                                <label class="checkbox-inline"><input value="1"  name="top" type="checkbox">置顶</label>                                
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">阅读量：</label>
                            <div class="input-group col-sm-4">
                                <input id="quantity" type="text" value="0" class="form-control" name="quantity" required="" aria-required="true" />                             
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">内容：</label>
                            <div class="col-sm-12">
                                <textarea id="myEditor" type="text" class="form-control myEditor" name="content" style="height:500px;"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-4 col-sm-offset-3">
                                
                            	<input type="hidden" name="dosubmit"  value="0">
                                <button class="btn btn-primary" type="submit">提交</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="__JS__/jquery.min.js?v=2.1.4"></script>
<script src="__JS__/bootstrap.min.js?v=3.3.6"></script>
<script src="__JS__/content.min.js?v=1.0.0"></script>
<script src="__JS__/plugins/validate/jquery.validate.min.js"></script>
<script src="__JS__/plugins/validate/messages_zh.min.js"></script>
<script src="__JS__/plugins/iCheck/icheck.min.js"></script>
<script src="__JS__/plugins/sweetalert/sweetalert.min.js"></script>
<script src="__JS__/plugins/layer/laydate/laydate.js"></script>
<script src="__JS__/plugins/suggest/bootstrap-suggest.min.js"></script>
<script src="__JS__/plugins/layer/layer.min.js"></script>
<script src="__JS__/layui/layui.js"></script>
<script type="text/javascript" src="__JS__/umeditor/third-party/jquery.min.js"></script>
<script type="text/javascript" src="__JS__/umeditor/third-party/template.min.js"></script>
<script type="text/javascript" charset="utf-8" src="__JS__/umeditor/umeditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="__JS__/umeditor/umeditor.min.js"></script>
<script type="text/javascript" src="__JS__/umeditor/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript">
    var um = UM.getEditor('myEditor');
</script>
</body>
</html>

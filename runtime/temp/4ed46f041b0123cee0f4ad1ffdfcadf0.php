<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:82:"/www/wwwroot/18ico.ewtouch.com/public/../application/admin/view/news/newsedit.html";i:1504926456;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>编辑文章</title>
    <link rel="shortcut icon" href="favicon.ico">
    <link href="__CSS__/bootstrap.min.css?v=3.3.6" rel="stylesheet">
    <link href="__CSS__/font-awesome.min.css?v=4.4.0" rel="stylesheet">
    <link href="__CSS__/animate.min.css" rel="stylesheet">
    <link href="__CSS__/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="__CSS__/style.min.css?v=4.1.0" rel="stylesheet">
    <!-- Sweet Alert -->
    <link href="__CSS__/plugins/sweetalert/sweetalert.css" rel="stylesheet">
    <link href="__JS__/plugins/layui/css/layui.css" rel="stylesheet">
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
                    <h5>编辑文章</h5>
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
                    <form class="form-horizontal m-t" id="commentForm" method="post" onsubmit="return toVaild()">
                        <div class="form-group">
                            <input type="hidden" name="id" value="<?php echo $news['id']; ?>">
                            <label class="col-sm-3 control-label">文章标题：</label>
                            <div class="input-group col-sm-4">
                                <input id="title" type="text" class="form-control" name="title" required="" aria-required="true" value="<?php echo $news['title']; ?>" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">作者：</label>
                            <div class="input-group col-sm-4">
                                <input id="auther" type="text" class="form-control" name="auther" required="" aria-required="true" value="<?php if($news['auther']): ?><?php echo $news['auther']; else: ?>18ICO<?php endif; ?>" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">文章分类：</label>
                            <div class="input-group col-sm-2">
                                <select name="type" id="type" class="form-control">
                                    <option value="1" <?php if($news['type']=='1'): ?>selected<?php endif; ?>>业务公告</option>
                                    <option value="2" <?php if($news['type']=='2'): ?>selected<?php endif; ?>>18ico</option>
                                    <option value="3" <?php if($news['type']=='3'): ?>selected<?php endif; ?>>关于18ico</option>
                                    <option value="4" <?php if($news['type']=='4'): ?>selected<?php endif; ?>>条款和协议</option>
                                    <option value="5" <?php if($news['type']=='5'): ?>selected<?php endif; ?>>常见问题</option>
                                    <option value="6" <?php if($news['type']=='6'): ?>selected<?php endif; ?>>我想发起众筹...</option>
                                    <option value="6" <?php if($news['type']=='7'): ?>selected<?php endif; ?>>站内通知</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">文章简介：</label>
                            <div class="input-group col-sm-4">
                                <textarea id="remark" type="text" class="form-control" name="remark"
                                          required="" aria-required="true"><?php echo $news['remark']; ?></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-12">
                                <textarea id="myEditor" type="text" class="form-control myEditor" name="content" style="height:500px;"><?php echo $news['content']; ?></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-4 col-sm-offset-3">
                                <!--<input type="button" value="提交" class="btn btn-primary" id="postform"/>-->
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
<script src="__JS__/plugins/layui/layui.js"></script>
<script type="text/javascript" src="__JS__/umeditor/third-party/jquery.min.js"></script>
<script type="text/javascript" src="__JS__/umeditor/third-party/template.min.js"></script>
<script type="text/javascript" charset="utf-8" src="__JS__/umeditor/umeditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="__JS__/umeditor/umeditor.min.js"></script>
<script type="text/javascript" src="__JS__/umeditor/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript">
    var um = UM.getEditor('myEditor');
    //表单提交
    function toVaild() {
        var jz;
        var url = "./newsEdit";
//        console.log($('#commentForm').serialize());

        $.ajax({
            type: "POST",
            url: url,
            data: {'data': $('#commentForm').serialize()},// 你的formid
            async: false,
            beforeSend: function () {
                jz = layer.load(0, {shade: false}); //0代表加载的风格，支持0-2
            },
            error: function (request) {
                layer.close(jz);
                swal("网络错误!", "", "error");
            },
            success: function (data) {
                //关闭加载层
                layer.close(jz);
                if (data.code == 1) {
                    swal(data.msg, "", "success");

                    location.href="./index";
                } else {
                    swal(data.msg, "", "error");
                }
            }
        });
        return false;
    }
</script>
</body>
</html>

<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:81:"/www/wwwroot/18ico.ewtouch.com/public/../application/admin/view/project/edit.html";i:1504943939;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>项目详情</title>
    <link rel="shortcut icon" href="favicon.ico">
    <link href="__CSS__/bootstrap.min.css?v=3.3.6" rel="stylesheet">
    <link href="__CSS__/font-awesome.min.css?v=4.4.0" rel="stylesheet">
    <link href="__CSS__/animate.min.css" rel="stylesheet">
    <link href="__CSS__/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="__CSS__/style.min.css?v=4.1.0" rel="stylesheet">
    <link href="__JS__/umeditor/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">

</head>
<body class="gray-bg">

<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-sm-8">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>项目详情</h5>
                </div>
                <div class="ibox-content">
                    <form  class="form-horizontal m-t" id="commentForm"  method="post" onsubmit="return toVaild()">

                        <div class="form-group">
                            <label class="col-sm-3 control-label">项目名称：</label>
                            <div class="input-group col-sm-4">
                                <input id="name" type="text" class="form-control" name="name"  value="<?php echo $data['name']; ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">首页图：</label>
                            <div class="input-group col-sm-4">
                                <img id="imgurl" name="imgurl" style="width: 100px;height: 50px;border-style: none" class="form-control" src="<?php echo $data['l_banner']; ?>" onclick="javascript:$('#fmimg').click();" alt="点击上传" />
                            </div>
                        </div>
<!--                         <div class="form-group">
                            <label class="col-sm-3 control-label">首页大图：</label>
                            <div class="input-group col-sm-4">
                                <input type="file" name="h_banner" >
                            </div>
                        </div> -->
                        <div class="form-group">
                            <label class="col-sm-3 control-label">关联账户:</label>
                            <div class="input-group col-sm-4">
                                <select class="form-control" name="link_account"  id="link_account">
                                <!-- 遍历认证用户 -->
                                    <option value="0" <?php if($data['link_account'] == 0): ?>selected<?php endif; ?>>平台</option>
                                    <?php if(is_array($user) || $user instanceof \think\Collection || $user instanceof \think\Paginator): $i = 0; $__LIST__ = $user;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?>
                                        <option value="<?php echo $v['id']; ?>" <?php if($data['link_account'] == $v['id']): ?>selected<?php endif; ?>><?php echo $v['truename']; ?>--<?php echo $v['phone']; ?></option>
                                    <?php endforeach; endif; else: echo "" ;endif; ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">所属阶段:</label>
                            <div class="input-group col-sm-4">
                                <select class="form-control" name="status"  id="status">
                                    <option value="">选择所属阶段</option>
                                    <option value="1" <?php if($data['status'] == 1): ?> selected="selected"<?php endif; ?> >测试数据</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">融资阶段:</label>
                            <div class="input-group col-sm-4">
                                <select class="form-control" name="fanic_status"  id="fanic_status">
                                    <option value="">选择融资阶段</option>
                                    <option value="1" <?php if($data['status'] == 1): ?> selected="selected"<?php endif; ?>>测试数据</option>

                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">办公地址:</label>
                            <div class="input-group col-sm-4">
                                <select class="form-control" name="offical_address"  id="offical_address">
                                    <option value="">请选择国家</option>
                                    <option value="1" <?php if($data['status'] == 1): ?> selected="selected"<?php endif; ?>>测试数据</option>

                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">办公详细地址:</label>
                            <div class="input-group col-sm-4">
                                <input type="text" name="offical_detail" class="form-control" value="<?php echo $data['offical_detail']; ?>" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">目标ETH:</label>
                            <div class="input-group col-sm-4">
                                <input id="eth_target" type="text" class="form-control" name="eth_target"  value="<?php echo $data['eth_target']; ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">目标BTC:</label>
                            <div class="input-group col-sm-4">
                                <input id="btc_target" type="text" class="form-control" name="btc_target"  value="<?php echo $data['btc_target']; ?>">

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">目标LTC:</label>
                            <div class="input-group col-sm-4">
                                <input id="ltc_target" type="text" class="form-control" name="ltc_target"  value="<?php echo $data['ltc_target']; ?>">

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">ETH限额:</label>
                            <div class="input-group col-sm-4">
                                <input id="eth_limit" type="text" class="form-control" name="eth_limit"  value="<?php echo $data['eth_limit']; ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">BTC限额:</label>
                            <div class="input-group col-sm-4">
                                <input id="btc_limit" type="text" class="form-control" name="btc_limit"  value="<?php echo $data['btc_limit']; ?>">

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">LTC限额:</label>
                            <div class="input-group col-sm-4">
                                <input id="ltc_limit" type="text" class="form-control" name="ltc_limit"  value="<?php echo $data['ltc_limit']; ?>">

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">项目简介:</label>
                            <div class="input-group col-sm-4">
                                <textarea id="remark" type="text" class="form-control" name="remark"  ><?php echo $data['remark']; ?></textarea>

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">宣传视频地址:</label>
                            <div class="input-group col-sm-4">
                                <input id="video" type="text" class="form-control" name="video"  value="<?php echo $data['video']; ?>">

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">回报说明:</label>
                            <div class="input-group col-sm-4">
                                <input id="return_instr" type="text" class="form-control" name="return_instr"  value="<?php echo $data['return_instr']; ?>">

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">回报天数:</label>
                            <div class="input-group col-sm-4">
                                <input id="return_time" type="number" class="form-control" name="return_time"  value="<?php echo $data['return_time']; ?>">

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">联系人:</label>
                            <div class="input-group col-sm-4">
                                <input id="linkman" type="text" class="form-control" name="linkman"  value="<?php echo $data['linkman']; ?>" >

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">负责职位:</label>
                            <div class="input-group col-sm-4">
                                <input id="link_job" type="text" class="form-control" name="link_job"  value="<?php echo $data['link_job']; ?>" >

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">联系电话:</label>
                            <div class="input-group col-sm-4">
                                <input id="link_phone" type="number" class="form-control" name="link_phone"  value="<?php echo $data['link_phone']; ?>"  >

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">ico天数:</label>
                            <div class="input-group col-sm-4">
                                <input id="ico_days" type="number" class="form-control" name="ico_days"  value="<?php echo $data['ico_days']; ?>" >

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">名额限制:</label>
                            <div class="input-group col-sm-4">
                                <input id="quota_retric" type="number" class="form-control" name="quota_retric" placeholder="请输入名额限制人数" value="<?php echo $data['quota_retric']; ?>">

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">是否精品:</label>
                            <div class="radio i-checks col-sm-4">
                                <label>
                                    <input type="radio" value="1"  name="is_jing" <?php if($data['is_jing'] == 1): ?> checked<?php endif; ?> > <i></i> 是</label>
                                    <input type="radio" value="2"  name="is_jing" <?php if($data['is_jing'] == 2): ?> checked<?php endif; ?> > <i></i> 不是</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">是否7天退:</label>
                            <div class="radio i-checks col-sm-4">
                                <label>
                                    <input type="radio" value="1"  name="is_tui" <?php if($data['is_tui'] == 1): ?> checked<?php endif; ?> > <i></i> 是</label>
                                    <input type="radio" value="2"  name="is_tui" <?php if($data['is_tui'] == 2): ?> checked<?php endif; ?> > <i></i> 不是</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">开始时间段:</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="start_times" name="" value="<?php echo date('Y-m-d H:i:s',($data['start_times'])); ?>">
                                <span class="input-group-addon">到</span>
                                <input type="text" class="form-control" id="end_time" name="" value="<?php echo date('Y-m-d H:i:s',($data['end_time'])); ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">项目介绍:</label>
                            <div class="input-group col-sm-12">
                            <textarea id="content" type="text" class="form-control myEditor" name="content" style="height:500px;"><?php echo $data['content']; ?></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">团队介绍:</label>
                            <div class="input-group col-sm-12">
                            <textarea id="team_intro" type="text" class="form-control myEditor" name="team_intro" style="height:500px;"><?php echo $data['team_intro']; ?></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">ICO细则:</label>
                            <div class="input-group col-sm-12">
                            <textarea id="rule_intro" type="text" class="form-control myEditor" name="rule_intro" style="height:500px;"><?php echo $data['rule_intro']; ?></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">常见问题Q&A:</label>
                            <div class="input-group col-sm-12">
                            <textarea id="faq" type="text" class="form-control myEditor" name="faq" style="height:500px;"><?php echo $data['faq']; ?></textarea>
                            </div>
                        </div>
                        <input type="hidden" name="id" value="<?php echo $data['id']; ?>">
                        <input type="hidden" name="l_banner" value="<?php echo $data['l_banner']; ?>">
                        <div class="form-group">
                            <div class="col-sm-4 col-sm-offset-6">
                                <button class="btn btn-primary" type="submit" id="submitForm">提交</button>
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
<script src="__JS__/plugins/layer/laydate/laydate.js"></script>
<script src="__JS__/plugins/layer/layer.min.js"></script>
<script type="text/javascript" src="__JS__/umeditor/third-party/jquery.min.js"></script>
<script type="text/javascript" src="__JS__/umeditor/third-party/template.min.js"></script>
<script type="text/javascript" charset="utf-8" src="__JS__/umeditor/umeditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="__JS__/umeditor/umeditor.min.js"></script>
<script type="text/javascript" src="__JS__/umeditor/lang/zh-cn/zh-cn.js"></script>
<script src="__JS__/plugins/iCheck/icheck.min.js"></script>
<script src="__JS__/jquery.form.js"></script>
<script>

    function upload(fromID){
        var vars=$("#"+fromID);
        var options={
          type:"post",
          url:"<?php echo url('project/upload'); ?>",
          dataType:'json',
          contentType:"application/json;charset=utf-8",
          success:function(data){
            if (data.code == 1) {
                $('#imgurl').attr("src",data.data);
                $('#l_banner').val(data.data);
            }
          }
        }
        vars.ajaxSubmit(options);
    }

    var um = UM.getEditor('content');
    var um1 = UM.getEditor('team_intro');
    var um2 = UM.getEditor('rule_intro');
    var um3 = UM.getEditor('faq');

    function toVaild() {

        var jz;
        var url = "<?php echo url('project/edit'); ?>";
        $.ajax({
            url:url,
            type:'POST',
            data:$('#commentForm').serialize(),
            beforeSend: function () {
                jz = layer.load(0, {shade: false}); //0代表加载的风格，支持0-2
            },
            error: function (request) {
                layer.close(jz);
                layer.msg("网络错误!", "", "error");
            },
            success: function (data) {
                //关闭加载层
                layer.close(jz);
                if (data.code == 1) {
                    layer.msg(data.msg, "", "success");
                    setTimeout(function(){
                        window.location.href="<?php echo url('project/index'); ?>";
                    },500)
                    
                } else {
                    layer.msg(data.msg, "", "error");
                }
            }
        });  
        return false;
    }

    $(document).ready(function(){
        $(".i-checks").iCheck({checkboxClass:"icheckbox_square-green",radioClass:"iradio_square-green",});

        $('input[type="number"]').bind('input propertychange', function() {  
            var val =  $(this).val(); 
            if (val <0 ) {
                $(this).val('');
            }            
        });  
    });
</script>
</body>
</html>

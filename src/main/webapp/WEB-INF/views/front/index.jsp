<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
    <meta content="ie=8 chrome=1" http-equiv="X-UA-Compatible">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>i贷</title>
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0,user-scalable=no" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="apple-mobile-web-app-capable" content="yes">

    <link rel="stylesheet" href="/static/apply/common.css"/>
    <script src="/static/jquery/jquery-1.9.1.min.js" type="text/javascript"></script>
    <script src="/static/jquery-validation/1.11.1/jquery.validate.js" type="text/javascript"></script>
    <script src="/static/jquery-validation/1.11.1/jquery.validate.method.js" type="text/javascript"></script>
</head>
<body>
<form  name="form1" method="post" action="tj_index?tj=15880600001&amp;cp=11" id="form1">
    <p class="f0" style="position: relative; margin-top:-100px;">
        <img src="/static/apply/images/f95a9160-1887-488e-beed-77eba3e9f5d3.png"
             style="height: 60px; width: 60px; top: 120px; left: 30px;  padding:0px;margin:0px;position:relative; z-index: 999;"/>
        <img src="/static/apply/images/page_01.jpg" width="100%" style="padding:0px;margin:0px;position:relative;"/>
        <img src="/static/apply/images/page_02.jpg" width="100%"/>
        <img src="/static/apply/images/page_03_3.jpg" width="100%"/>
    </p>
    <section class="formWrap">
        <p class="f0"
           style="position: absolute; top: -40%; left: 1.4rem; z-index: 10; text-align: center; color: #000; font-size: 1.6rem; display: block; width: 90%; height: 5rem;">
            仅需填写三步，最快6分钟现金到账 无门槛申请最高可贷3万
        </p>
        <ul class="list-form">
            <li>
                <input name="phone" type="text" maxlength="11" id="phone" class="inp-tel required mobile" placeholder="请输入申请人手机号"/>
                <p class="errInfo" hidden>输入手机号</p>
            </li>
            <li>
                <input name="name" type="text" maxlength="11" id="name" class="inp-tel required" placeholder="请输入申请人姓名"/>
                <p class="errInfo" hidden>输入贷款人姓名</p>
            </li>
            <li>
                <p class="tc">
                    <input type="submit" name="Button1" value="提交申请" id="Button1" class="btn-submit"
                           style="height:80px;"/>
                </p>
            </li>
            <li>
                <p class="tc" style="font-size: 1.4rem; margin-top: 4rem; line-height: 1.4rem; color: #000"></p>
            </li>
        </ul>
        <div>
        </div>
        <img src="/static/apply/images/page_04.jpg" width="100%"/>
    </section>
    <script src="/static/apply/zepto.min.js"></script>
</form>
</body>
<script type="text/javascript">
    $(document).ready(function() {
        //$("#name").focus();
        $("#form1").validate({
            submitHandler: function(form){
                loading('正在提交，请稍等...');
                form.submit();
            },
            errorPlacement: function(error, element) {
                alert("输入有误，请先更正。");
                if (element.is(":checkbox")||element.is(":radio")||element.parent().is(".input-append")){
                    error.appendTo(element.parent().parent());
                } else {
                    error.insertAfter(element);
                }
            }
        });
    });
</script>
</html>

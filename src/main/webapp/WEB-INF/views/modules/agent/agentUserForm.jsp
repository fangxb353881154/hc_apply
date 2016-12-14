<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
	<title>代理管理</title>
	<meta name="decorator" content="default"/>
	<script type="text/javascript">
		$(document).ready(function() {
			$("#no").focus();
			$("#inputForm").validate({
				rules: {
					loginName: {remote: "${ctx}/sys/user/checkLoginName?oldLoginName=" + encodeURIComponent('${user.loginName}')}
				},
				messages: {
					loginName: {remote: "用户登录名已存在"},
					confirmNewPassword: {equalTo: "输入与上面相同的密码"}
				},
				submitHandler: function(form){
					loading('正在提交，请稍等...');
					form.submit();
				},
				errorContainer: "#messageBox",
				errorPlacement: function(error, element) {
					$("#messageBox").text("输入有误，请先更正。");
					if (element.is(":checkbox")||element.is(":radio")||element.parent().is(".input-append")){
						error.appendTo(element.parent().parent());
					} else {
						error.insertAfter(element);
					}
				}
			});
		});
	</script>
</head>
<body>
	<ul class="nav nav-tabs">
		<li><a href="${ctx}/agent/user/">代理列表</a></li>
		<li class="active"><a href="${ctx}/agent/user/form?id=${agentUser.id}">代理<shiro:hasPermission name="agent:agentUser:edit">${not empty agentUser.id?'修改':'添加'}</shiro:hasPermission><shiro:lacksPermission name="agent:agentUser:edit">查看</shiro:lacksPermission></a></li>
	</ul><br/>
	<form:form id="inputForm" modelAttribute="agentUser" action="${ctx}/agent/user/save" method="post" class="form-horizontal">
		<form:hidden path="id"/>
		<sys:message content="${message}"/>
		<div class="control-group">
			<label class="control-label">上级代理:</label>
			<div class="controls">
				<c:if test="${not empty agentUser.id }" >
					${agentUser.parent.user.name}
				</c:if>
				<c:if test="${empty agentUser.id }" >
					<sys:treeselect id="agent" name="parent.id" value="${agentUser.parent.id}" labelName="parent.name" labelValue="${agentUser.parent.user.name}"
									title="上级代理" url="/agent/user/treeData" cssClass="required" />
				</c:if>
			</div>
		</div>
		<%--超级管理员才可操作--%>
		<c:if test="${fns:getUserIsAdmin()}">
			<div class="control-group">
				<label class="control-label">归属部门:</label>
				<div class="controls">
					<sys:treeselect id="office" name="user.office.id" value="${user.office.id}" labelName="office.name" labelValue="${user.office.name}"
									title="部门" url="/sys/office/treeData?type=2" cssClass="required" notAllowSelectParent="true"/>
				</div>
			</div>
		</c:if>
		<div class="control-group">
			<label class="control-label">姓名:</label>
			<div class="controls">
				<form:input path="user.name" htmlEscape="false" maxlength="50" class="required"/>
				<span class="help-inline"><font color="red">*</font> </span>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">登录名:</label>
			<div class="controls">
				<input id="oldLoginName" name="user.oldLoginName" type="hidden" value="${user.loginName}">
				<form:input path="user.loginName" htmlEscape="false" maxlength="50" class="required userName"/>
				<span class="help-inline"><font color="red">*</font> </span>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">密码:</label>
			<div class="controls">
				<input id="newPassword" name="user.newPassword" type="password" value="" maxlength="50" minlength="3" class="${empty user.id?'required':''}"/>
				<c:if test="${empty user.id}"><span class="help-inline"><font color="red">*</font> </span></c:if>
				<c:if test="${not empty user.id}"><span class="help-inline">若不修改密码，请留空。</span></c:if>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">确认密码:</label>
			<div class="controls">
				<input id="confirmNewPassword" name="confirmNewPassword" type="password" value="" maxlength="50" minlength="3" equalTo="#newPassword"/>
				<c:if test="${empty user.id}"><span class="help-inline"><font color="red">*</font> </span></c:if>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">电话:</label>
			<div class="controls">
				<form:input path="user.phone" htmlEscape="false" maxlength="100"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">手机:</label>
			<div class="controls">
				<form:input path="user.mobile" htmlEscape="false" maxlength="100"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">是否允许登录:</label>
			<div class="controls">
				<form:select path="user.loginFlag">
					<form:options items="${fns:getDictList('yes_no')}" itemLabel="label" itemValue="value" htmlEscape="false"/>
				</form:select>
				<span class="help-inline"><font color="red">*</font> “是”代表此账号允许登录，“否”则表示此账号不允许登录</span>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">银行卡：</label>
			<div class="controls">
				<form:input path="bankCard" htmlEscape="false" maxlength="255" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">开户行：</label>
			<div class="controls">
				<form:input path="bankOpen" htmlEscape="false" maxlength="255" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">收款人：</label>
			<div class="controls">
				<form:input path="bankPayee" htmlEscape="false" maxlength="255" class="input-xlarge "/>
			</div>
		</div>
		<%--<div class="control-group">
			<label class="control-label">个人放款：</label>
			<div class="controls">
				<form:input path="lendPersonal" htmlEscape="false" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">旗下放款：</label>
			<div class="controls">
				${agentUser.lendIts}
				<form:input path="lendIts" htmlEscape="false" class="input-xlarge "/>
			</div>
		</div>--%>
		<div class="form-actions">
			<shiro:hasPermission name="agent:agentUser:edit"><input id="btnSubmit" class="btn btn-primary" type="submit" value="保 存"/>&nbsp;</shiro:hasPermission>
			<input id="btnCancel" class="btn" type="button" value="返 回" onclick="history.go(-1)"/>
		</div>
	</form:form>
</body>
</html>
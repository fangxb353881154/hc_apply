<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
	<title>代理管理</title>
	<meta name="decorator" content="default"/>
	<script type="text/javascript">
		$(document).ready(function() {
			
		});
		function page(n,s){
			$("#pageNo").val(n);
			$("#pageSize").val(s);
			$("#searchForm").submit();
        	return false;
        }
	</script>
</head>
<body>
	<ul class="nav nav-tabs">
		<li class="active"><a href="${ctx}/agent/user/">代理用户</a></li>
		<shiro:hasPermission name="agent:agentUser:edit"><li><a href="${ctx}/agent/user/form">代理添加</a></li></shiro:hasPermission>
	</ul>

	<sys:message content="${message}"/>
	<table id="contentTable" class="table table-striped table-bordered table-condensed">
		<thead>
			<tr>
				<th class="sort-column name">姓名</th>
				<th class="sort-column login_name">登录名</th>
				<th>手机</th>
				<th>银行卡</th>
				<th>二维码</th>
				<th>链接</th>
				<shiro:hasPermission name="agent:agentUser:edit"><th width="120">操作</th></shiro:hasPermission>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${page.list}" var="agentUser">
			<tr>
				<td width="90">${agentUser.user.name}</td>
				<td width="120"><a href="${ctx}/agent/user/form?id=${agentUser.id}">${agentUser.user.loginName}</a></td>
				<td>${agentUser.user.mobile}</td>
				<td>${agentUser.bankCard}</td>
				<td>
					<a href="${agentUser.user.qrCode}?${dateTime}" target="_blank">
						<img src="${agentUser.user.qrCode}?${dateTime}" alt="" width="30" height="30" title="右键保存您的二维码！">
					</a>
				</td>
				<td>
					<c:if test="${not empty agentUser.user.url}">
						<a href="${agentUser.user.url}" target="_blank">查看</a>
					</c:if>
				</td>
				<shiro:hasPermission name="agent:agentUser:edit"><td>
    				<a href="${ctx}/agent/user/form?id=${agentUser.id}">修改</a>
					<a href="${ctx}/agent/user/delete?id=${agentUser.id}" onclick="return confirmx('确认要删除该代理吗？', this.href)">删除</a>
				</td></shiro:hasPermission>
			</tr>
		</c:forEach>
		</tbody>
	</table>
	<div class="pagination">${page}</div>
</body>
</html>
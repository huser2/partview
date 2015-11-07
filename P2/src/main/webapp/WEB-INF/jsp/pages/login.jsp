<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title>Login</title>
<link rel="stylesheet" href="resources/css/formoid-solid-green.css"
	type="text/css" />
<script src="resources/js/jquery-2.1.1.min.js" type="text/javascript"></script>
	<script type="text/javascript"
		src="resources/js/formoid-solid-green.js"></script>

<style>
.error {
	padding: 15px;
	margin-bottom: 20px;
	border: 1px solid transparent;
	border-radius: 4px;
	color: #a94442;
	background-color: #f2dede;
	border-color: #ebccd1;
}

.msg {
	padding: 15px;
	margin-bottom: 20px;
	border: 1px solid transparent;
	border-radius: 4px;
	color: #31708f;
	background-color: #d9edf7;
	border-color: #bce8f1;
}

#login-box {
	
	padding: 20px;
	margin: 100px auto;
	background: #fff;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border: 0px solid #000;
}
</style>
</head>
<body onload='document.loginForm.username.focus();'>

<div id="login-box">
	<form class="formoid-solid-green"
		style="background-color: #ffffff; font-size: 14px; font-family: 'Roboto', Arial, Helvetica, sans-serif; color: #34495E; max-width: 480px; min-width: 150px"
		action="<c:url value='j_spring_security_check' />" method='POST'>


		<div class="title">
			<h2>Login</h2>
		</div>
		<c:if test="${not empty error}">
			<div class="error">${error}</div>
		</c:if>
		<c:if test="${not empty msg}">
			<div class="msg">${msg}</div>
		</c:if>
		<div class="element-username">
			<label class="title"></label>
			<div class="item-cont">
				<input class="large" type="text" name="username" value=""
					placeholder="Username" /><span class="icon-place"></span>
			</div>
		</div>
		<div class="element-password">
			<label class="title"></label>
			<div class="item-cont">
				<input class="large" type="password" name="password" value=""
					placeholder="Password" /><span class="icon-place"></span>
			</div>
		</div>
		<div class="submit">
			<input type="submit" value="Login" />
		</div>

		<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />
	</form>

</div>

</body>
</html>
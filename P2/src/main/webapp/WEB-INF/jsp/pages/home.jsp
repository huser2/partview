<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page session="true"%>


<!DOCTYPE link PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
<link href="resources/css/w2ui-1.4.2.css" rel="stylesheet"
	type="text/css" />
<script src="resources/js/jquery-2.1.1.min.js" type="text/javascript"></script>
<link href="resources/css/fontello.css" rel="stylesheet" type="text/css" />
<link href="resources/css/plmt.css" rel="stylesheet" type="text/css" />

<script src="resources/js/w2ui-1.4.2.min.js" type="text/javascript"></script>
<script src="resources/js/plmt.js" type="text/javascript"></script>

<style type="text/css">
.header-class
{
width: 100%;
height: 60px;
position:relative;

border: 0px rgb(89,89,89) solid;

padding: 0px;

-webkit-box-sizing: inherit;
-moz-box-sizing: inherit;
box-sizing: inherit;

background-color: rgb(60,141,188);
font:inherit;

-moz-box-shadow: inset 0px 0px 0px 0px rgb(128,128,128);
-webkit-box-shadow: inset 0px 0px 0px 0px rgb(128,128,128);
box-shadow: inset 0px 0px 0px 0px rgb(128,128,128);
color:#ffffff;
}
</style>


</head>
<body>



<c:url value="/logout" var="logoutUrl" />

	<!-- csrt for log out-->
	<form action="${logoutUrl}" method="post" id="logoutForm">
	  <input type="hidden" 
		name="${_csrf.parameterName}"
		value="${_csrf.token}" />
	</form>

<div class="header-class">
		<div style="float: left;position: absolute;">
			<h2>Part Viewer 1.0</h2>
		</div>
		<div style="float: right">
			<c:if test="${pageContext.request.userPrincipal.name != null}">
		<h4>
			Welcome : ${pageContext.request.userPrincipal.name} | <a 
				href="javascript:formSubmit()" style="color:#ffffff;"> Logout</a>
		</h4>
	</c:if>
		</div>
	</div>

	<div id="layout" style="width: 100%; height: 100%;"></div>

	<script type="text/javascript">
		$(function() {

			//create layout
			var layoutDiv = $('#layout');
			createLayout(layoutDiv);

			// then define the sidebar
			createMenu();

		});
		
		
		function formSubmit() {
			document.getElementById("logoutForm").submit();
		}
	</script>
	

</body>
</html>
<html>
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


background: rgb(178, 188, 208);

}
</style>
</head>		
<body>

<div  style="display: block; top: 50px; overflow: auto; background-color:#3C8DBC;color:#ffffff;">
		<div style="float: left">
			<h2 style="padding: 5px;">Part Viewer 1.0</h2>
		</div>
		<div style="float: right">
			<c:if test="${pageContext.request.userPrincipal.name != null}">
		<h4  >
			Welcome : ${pageContext.request.userPrincipal.name} | <a
				href="javascript:formSubmit()" style="color:#000000;"> Logout</a>
	</h4>
	</c:if>
		</div>
	</div>

</body>
</html>
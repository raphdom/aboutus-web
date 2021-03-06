<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<meta http-equiv=content-type content=text/html; charset=UTF-8> 
<html>
<head>
	<title>::About Church::</title>
	<link rel="SHORTCUT ICON" href="resources/images/favicon.png">
	<!-- Ext JS Files -->
	<link rel="stylesheet" type="text/css" href="ext4.2.1/resources/ext-theme-neptune/ext-theme-neptune-all.css">
    <c:choose>
		<c:when test = "${activeEnv == 'dev'}">
			<script type="text/javascript" src="ext4.2.1/ext-all-dev.js"></script>
		</c:when>
		<c:otherwise>
			<script type="text/javascript" src="ext4.2.1/ext-all.js"></script>
		</c:otherwise>
	</c:choose>
    <script type="text/javascript" src="ext4.2.1/ext-theme-neptune.js"></script>
    <script type="text/javascript" src="resources/js/jquery-1.11.0.js"></script>
    <script type="text/javascript" src="resources/js/lightview.js"></script>
    <script type="text/javascript" src="ext4.2.1/locale/ext-lang-${pageContext.response.locale}.js"></script>
    
    <!-- App Files -->
	<link rel="stylesheet" type="text/css" href="resources/css/aboutus.css">
	<link rel="stylesheet" type="text/css" href="resources/css/ButtonSegment.css">
	<link rel="stylesheet" type="text/css" href="resources/css/BoxSelect.css">
	<link rel="stylesheet" type="text/css" href="resources/css/dataview.css">
	<link rel="stylesheet" type="text/css" href="resources/css/tileview.css">
	<link rel="stylesheet" type="text/css" href="resources/css/daterange.css">
	<link rel="stylesheet" type="text/css" href="resources/css/upload.css">
	<link rel="stylesheet" type="text/css" href="resources/css/calendar.css">
	<link rel="stylesheet" type="text/css" href="resources/css/calendar-colors.css">
	<link rel="stylesheet" type="text/css" href="resources/css/lightview/lightview.css">
	<!--  App Constants -->
	<script type="text/javascript" src="app/util/Constants.js"></script>
	
	<script type="text/javascript" src="app/extjs-override.js"></script>
    <script type="text/javascript" src="app/app.js"></script>
    <script>
    var userListTitle = '<spring:message code="user.list.title" text="Users" />';
    var Tradutor = {
   		calendarWeekday0:	'<spring:message code="calendar-weekday-0" text="Sunday" />',
   		calendarWeekday1:	'<spring:message code="calendar-weekday-1" text="Monday" />',
   		calendarWeekday2:	'<spring:message code="calendar-weekday-2" text="Tuesday" />',
   		calendarWeekday3:	'<spring:message code="calendar-weekday-3" text="Wednesday" />',
   		calendarWeekday4:	'<spring:message code="calendar-weekday-4" text="Thuesday" />',
   		calendarWeekday5:	'<spring:message code="calendar-weekday-5" text="Friday" />',
   		calendarWeekday6:	'<spring:message code="calendar-weekday-6" text="Saturday" />',
    }
    <c:set var="req" value="${pageContext.request}" />
    <c:set var="baseURL" value="${req.scheme}://${req.serverName}:${req.serverPort}${req.contextPath}" />
    var baseURL = "<c:out value='${baseURL}'/>"+"/"; 
    </script>
</head>
<body>

</body>
</html>
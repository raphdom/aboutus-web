<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<meta http-equiv=content-type content=text/html; charset=UTF-8>
<html>
<head>
	<title>::About Church::</title>
	<link rel="SHORTCUT ICON" href="resources/images/favicon.png">
	<!-- Ext JS Files -->
	<link rel="stylesheet" type="text/css" href="ext4.2.1/resources/ext-theme-neptune/ext-theme-neptune-all.css">
    <script type="text/javascript" src="ext4.2.1/ext-all.js"></script>
    <script type="text/javascript" src="ext4.2.1/ext-theme-neptune.js"></script>
    <script type="text/javascript" src="ext4.2.1/locale/ext-lang-pt_PT.js" charset="utf-8"></script>
    
    <!-- App Files -->
	<link rel="stylesheet" type="text/css" href="resources/css/aboutus.css">
    <script type="text/javascript" src="app/login.js"></script>
    <style>
    	#logoTarget{
    		width:503px;
    		height:236px;
    		margin-left: auto ;
		  	margin-right: auto ;
		  	background-image: url("resources/images/aboutChurchLogin.png");
			margin-top:100px;
			margin-bottom:10px;
    	}
    	#version{
    		width:503px;
    		margin-left: auto ;
		  	margin-right: auto ;
		  	font-size:0.7em;
		  	text-align:center;
    	}
	    #senchaTarget {
		  width: 400px ;
		  margin-left: auto ;
		  margin-right: auto ;
		}
    </style>
</head>
<body>
<div id="logoTarget"></div>
<div id="senchaTarget"></div>
<div id="version">2014 - AboutChurch - Vers�o <spring:eval expression="@applicationProperties.getProperty('version')" /></div>
</body>
</html>
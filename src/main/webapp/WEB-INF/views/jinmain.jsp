<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta name="description" content="" />
<meta name="author" content="" />
<title>SEMICOLON; - APT HERE</title>
<!--지도  -->
	<!-- Styles -->
<style>
#chartdiv1 {
	width: 100%;
	height: 500px;
}
#chartdiv2 {
	width: 100%;
	height: 500px;
}
</style>


<!-- Font Awesome icons (free version)-->
<script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js"
	crossorigin="anonymous"></script>
<!-- Google fonts-->
<link
	href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700"
	rel="stylesheet" />
<link
	href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic"
	rel="stylesheet" type="text/css" />

<!-- Third party plugin CSS-->
<link
	href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"
	rel="stylesheet" />
<!-- Core theme CSS (includes Bootstrap)-->
<link href="resources/css/styles.css" rel="stylesheet" />
</head>
<body id="page-top">
	<!-- Styles -->
	<style>
#chartdiv {
	width: 100%;
	height: 500px;
}
</style>

	<!-- Navigation-->
	<nav
		class="navbar navbar-expand-lg bg-light navbar-light fixed-top py-3"
		id="mainNav">
		<div class="container">
			<a class="navbar-brand js-scroll-trigger" href="#page-top"> <img
				src="resources/img/main.png" alt="Logo" style="width: 50%;"></a>
			<button class="navbar-toggler navbar-toggler-right" type="button"
				data-toggle="collapse" data-target="#navbarResponsive"
				aria-controls="navbarResponsive" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto my-2 my-lg-0">
					<li class="nav-item"><a class="nav-link js-scroll-trigger"
						href="#data">Data</a></li>
					<li class="nav-item"><a class="nav-link js-scroll-trigger"
						href="#services">Services</a></li>
						
				</ul>
			</div>
		</div>
	</nav>

	<!-- Masthead-->
	<header class="masthead">
		<video id="myVideo" playsinline="playsinline" autoplay="autoplay"
			muted="muted" loop="loop">
			<source src="resources/assets/seoul4.mp4" type="video/mp4">
		</video>


		<div class="container3 h-100">
			<div
				class="row h-100 align-items-center justify-content-center text-center">
				<div class="col-lg-10 align-self-end">
					<h1 class="text-uppercase text-white font-weight-bold">
						FINDING APTMENT<br> THE FINE ANSWER, <br> APT HERE
					</h1>
					<hr class="divider my-4" />
				</div>
				<div class="col-lg-8 align-self-baseline">
					<a class="btn btn-primary btn-xl js-scroll-trigger" href="../ah/main">START
						SERVICE</a>
				</div>

				<div class="scroll-down-moreinformation">
					<p>더 알아 보실래요?</p>
					<a class="nav-link js-scroll-trigger" href="#data"><img
						src="resources/assets/img/arrowwhite2.png" /></a>
				</div>
			</div>
		</div>
	</header>
	<!-- Services-->
	<section class="page-section" id="data">
		<div class="container2">
			<h1 class="text-center mt-0">DATA</h1>
			<hr class="divider my-2" />

			<div class="row">
				<div class="col-md-6 text-center">
					<h3 class="h4">공동주택 실거래 데이터 </h3>
					<!-- HTML -->
					<div id="chartdiv1"></div>
				</div>

				<div class="col-md-6 text-center">
					<h3 class="h4">지역구별 매매 거래량</h3>
					<!-- HTML -->
					<div id="chartdiv2"></div>
				</div>

			</div>
		</div>
	</section>


	<!--section-->
	<section class="page-section bg-primary" id="services">
	
		<div id="carouselExampleIndicators" class="carousel slide"
			data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0"
					class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner" role="listbox">
				<!-- Slide One - Set the background image for this slide in the line below -->
				<div class="carousel-item active"
					style="background-image: url('resources/assets/img/img1.PNG')">
					<div class="carousel-caption d-none d-md-block">
					</div>
				</div>
				<!-- Slide Two - Set the background image for this slide in the line below -->
				<div class="carousel-item"
					style="background-image: url('resources/assets/img/img2.PNG')">
					<div class="carousel-caption d-none d-md-block">
					</div>
				</div>
				<!-- Slide Three - Set the background image for this slide in the line below -->
				<div class="carousel-item"
					style="background-image: url('resources/assets/img/img3.PNG')">
					<div class="carousel-caption d-none d-md-block">
				
				</div>
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators"
				role="button" data-slide="prev"> <span
				class="carousel-control-prev-icon" aria-hidden="true"></span> <span
				class="sr-only">Previous</span>
			</a> <a class="carousel-control-next" href="#carouselExampleIndicators"
				role="button" data-slide="next"> <span
				class="carousel-control-next-icon" aria-hidden="true"></span> <span
				class="sr-only">Next</span>
			</a>
		</div>
	
	</section>





	
	<!-- Footer-->
	<footer class="bg-light py-5">
		<div class="container">
			<div class="small text-center text-muted">
				Copyright © 2020 - SEMICOLON;<br> All rights reserved.<br>
				민세미 & 김수이 & 이영기 <br> 서울시 강남구 테헤란로 212 멀티캠퍼스 1604호
			</div>
		</div>
	</footer>


	<!-- Bootstrap core JS-->
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
	<!-- Third party plugin JS-->
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

	<!-- Core theme JS-->
	<script src="resources/js/scripts.js"></script>

<!--DATA_CHART CODE -->
	<!-- Resources -->
	<script src="https://www.amcharts.com/lib/4/core.js"></script>
	<script src="https://www.amcharts.com/lib/4/charts.js"></script>
	<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
<!-- Chart1 code -->
<script>
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart1 instance
var chart = am4core.create("chartdiv1", am4charts.PieChart);
chart.startAngle = 160;
chart.endAngle = 380;

// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(40);

// Add data
chart.data = [{
  "data": "1차 가공(아파트만)",
  "datanum": 1176115,
}, {
  "data": "2차 가공(2010년 이후)",
  "datanum": 856458,
}];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "datanum";
pieSeries.dataFields.category = "data";
pieSeries.slices.template.stroke = new am4core.InterfaceColorSet().getFor("background");
pieSeries.slices.template.strokeWidth = 1;
pieSeries.slices.template.strokeOpacity = 1;

// Disabling labels and ticks on inner circle
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

// Disable sliding out of slices
pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries.slices.template.states.getKey("hover").properties.scale = 1;
pieSeries.radius = am4core.percent(80);


var cs = pieSeries.colors;
cs.list = [am4core.color(new am4core.ColorSet().getIndex(1))];

cs.stepOptions = {
  lightness: -0.5,
  hue: 0.2
};
cs.wrap = false;


var label = chart.seriesContainer.createChild(am4core.Label);
label.textAlign = "middle";
label.horizontalCenter = "middle";
label.verticalCenter = "middle";
label.adapter.add("text", function(text, target){
  return "[font-size:20px]실거래가 Total[/]:\n[bold font-size:30px]" + pieSeries.dataItem.values.value.sum + "[/]";
})

}); // end am4core.ready()
</script>

	<!-- Chart2 code -->
	<script>
		am4core.ready(function() {

			// Themes begin
			am4core.useTheme(am4themes_animated);
			// Themes end

			// Create chart instance
			var chart = am4core.create("chartdiv2", am4charts.PieChart);

			// Add data
			chart.data = [ {
				"gu" : "강남구",
				"count" : 52857
			}, {
				"gu" : "강동구",
				"count" : 46826
			}, {
				"gu" : "강북구",
				"count" : 16527
			}, {
				"gu" : "강서구",
				"count" : 49186
			}, {
				"gu" : "관악구",
				"count" : 26541
			}, {
				"gu" : "광진구",
				"count" : 16783
			}, {
				"gu" : "구로구",
				"count" : 41704
			}, {
				"gu" : "금천구",
				"count" : 15324
			}, {
				"gu" : "노원구",
				"count" : 81394
			}, {
				"gu" : "도봉구",
				"count" : 36032
			}, {
				"gu" : "동대문구",
				"count" : 30635
			}, {
				"gu" : "동작구",
				"count" : 32399
			}, {
				"gu" : "마포구",
				"count" : 33361
			}, {
				"gu" : "서대문구",
				"count" : 27191
			}, {
				"gu" : "서초구",
				"count" : 39882
			}, {
				"gu" : "성동구",
				"count" : 34427
			}, {
				"gu" : "성북구",
				"count" : 48072
			}, {
				"gu" : "송파구",
				"count" : 58565
			}, {
				"gu" : "양천구",
				"count" : 40217
			}, {
				"gu" : "영등포구",
				"count" : 35938
			}, {
				"gu" : "용산구",
				"count" : 15977
			}, {
				"gu" : "은평구",
				"count" : 31749
			}, {
				"gu" : "종로구",
				"count" : 7065
			}, {
				"gu" : "중구",
				"count" : 10949
			}, {
				"gu" : "중랑구",
				"count" : 26856
			} ];

			// Set inner radius
			chart.innerRadius = am4core.percent(50);

			// Add and configure Series
			var pieSeries = chart.series.push(new am4charts.PieSeries());
			pieSeries.dataFields.value = "count";
			pieSeries.dataFields.category = "gu";
			pieSeries.slices.template.stroke = am4core.color("#fff");
			pieSeries.slices.template.strokeWidth = 2;
			pieSeries.slices.template.strokeOpacity = 1;

			// This creates initial animation
			pieSeries.hiddenState.properties.opacity = 1;
			pieSeries.hiddenState.properties.endAngle = -90;
			pieSeries.hiddenState.properties.startAngle = -90;

		}); // end am4core.ready()
	</script>

</body>
</html>
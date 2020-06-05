<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="vo.*, java.util.List"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page session="false"%>

<!DOCTYPE html>
<html>
<jsp:include page="header.jsp" />
<body style="overflow-y: scroll">
	<div class="map_wrap">
		<!-- ---------------------------------------------------------------------------- -->
		<div id="map"></div>
		<div class="featurewrap">
			<!-- 3 -->
			<div class="feature-grid">
				<!-- 4 -->
				<div class="feature" style="float: left">
					<table class="type09">
						<thead>
							<tr>
								<th scope="row" colspan="8">아파트명</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row" colspan="2">세대수</th>
								<td colspan="2"></td>
								<th scope="row" colspan="2">준공년월</th>
								<td colspan="2"></td>
							</tr>
							<tr>
								<th scope="row" colspan="2">건설사</th>
								<td colspan="2"></td>
								<th scope="row" colspan="2">총면적</th>
								<td colspan="2"></td>
							</tr>
							<tr>
								<th scope="row" colspan="2">관리방식</th>
								<td colspan="2"></td>
								<th scope="row" colspan="2">복도타입</th>
								<td colspan="2"></td>
							</tr>
							<tr>
								<th scope="row" colspan="2">관리사무소</th>
								<td colspan="6"></td>
							</tr>
							<tr>
								<th scope="row" colspan="2">난방</th>
								<td colspan="6"></td>
							</tr>
							<tr>
								<th scope="row" colspan="2">주소</th>
								<td colspan="6"></td>
							</tr>
						</tbody>
					</table>
					<button class="button button2" onClick="reset()">초기화</button>
					<!-- /4 -->
				</div>
				<!-- 4 -->

				<div class="feature" style="float: left">
					<div id="chartdiv3"></div>
					<button class="button button2" id="myBtn1">Open Modal</button>
				</div>
				<div class="feature" style="float: left">
					<table class="type09">
						<thead>
							<tr>
								<th scope="row" colspan="8">아파트명</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row" colspan="2">세대수</th>
								<td colspan="2"></td>
								<th scope="row" colspan="2">준공년월</th>
								<td colspan="2"></td>
							</tr>
							<tr>
								<th scope="row" colspan="2">건설사</th>
								<td colspan="2"></td>
								<th scope="row" colspan="2">총면적</th>
								<td colspan="2"></td>
							</tr>
							<tr>
								<th scope="row" colspan="2">관리방식</th>
								<td colspan="2"></td>
								<th scope="row" colspan="2">복도타입</th>
								<td colspan="2"></td>
							</tr>
							<tr>
								<th scope="row" colspan="2">관리사무소</th>
								<td colspan="6"></td>
							</tr>
							<tr>
								<th scope="row" colspan="2">난방</th>
								<td colspan="6"></td>
							</tr>
							<tr>
								<th scope="row" colspan="2">주소</th>
								<td colspan="6"></td>
							</tr>
						</tbody>
					</table>
					<button class="button button2" onClick="reset()">초기화</button>
					<!-- /4 -->
				</div>
				<div class="feature" style="float: left">
					<div id="chartdiv4"></div>
					<button class="button button2" id="myBtn2">Open Modal</button>
				</div>
				<!-- /3 -->
			</div>
			<!-- /2 -->
		</div>
		<!-- ---------------------------------------------------------------------------- -->
		<div class="button button2" id="logo">
			<img src="resources/img/main.png"
				style="width: 120px;" onclick="location.href='/ah/main'"/>
		</div>
		<div id="category">
			<ul>
				<li>&nbsp;서울시&nbsp;> 
				<a href="#" id="provName1"
					onclick="showProvince()">&nbsp;전 체&nbsp;</a> > 
					<a href="#" id="townName1" onclick="showTown()">&nbsp;전 체&nbsp;</a>
				</li>
			</ul>
		</div>

		<ul id="category2">
			<li>100m&nbsp;>&nbsp;<a href="#" id="cat1" onclick="showCat1()">카테고리</a>
			</li>
			<li>200m&nbsp;>&nbsp;<a href="#" id="cat2" onclick="showCat2()">카테고리</a>
			</li>
			<li>300m&nbsp;>&nbsp;<a href="#" id="cat3" onclick="showCat3()">카테고리</a>
			</li>
		</ul>

		<ul id="category3">
			<li id="searchLoading"><a href="#" id="search"
				onclick="searchCat()">검색</a></li>
		</ul>

		<ul id="category4">
			<li><a href="#"
				title="resources/images/pregu.PNG" class="img" id="search1"
				onclick="callShowGuGraph()">동별 실거래가</a></li>
		</ul>
		<ul id="category5">
			<li><a href="#"
				title="resources/images/predong.PNG" class="img" id="search2"
				onclick="callShowDongGraph()">아파트별 실거래가</a></li>
		</ul>

		<script>
			$(function() {
				var title_;
				var class_;
				var imgTag;

				$("a")
						.hover(
								function(e) { // <a> hover 시 : mouseEnter

									title_ = $(this).attr("title"); // title을 변수에 저장
									class_ = $(this).attr("class"); // class를 변수에 저장
									$(this).attr("title", ""); // title 속성 삭제( 기본 툴팁 기능 방지 )

									if (class_ == "img") { // class_ 가 img라면, 
										// title_을 주소로 가진 <img>를 변수 imgTag에 저장
										imgTag = "<img src='"+title_+"' width='100px' height:'100px' />";
									}

									$("body").append("<div id='tip'></div>"); // body 내부에 div#tip 생성

									// class_ 값에 따라 이미지 or 텍스트 출력 구분
									if (class_ == "img") {
										$("#tip").html(imgTag);
										$("#tip").css("width", "100px");
									} else {
										$("#tip").css("width", "300px");
										$("#tip").text(title_);
									}

									// 툴팁이 현재 hover 한 요소의 상단에 생성되도록 설정
									var pageX = $(this).offset().left - 20;
									var pageY = $(this).offset().top
											- $("#tip").innerHeight();
									$("#tip").css({
										left : pageX + "px",
										top : pageY + "px"
									}).fadeIn(500);

								}, function() { // <a> hover 시 : mouseLeave

									$(this).attr("title", title_); // title 속성 반환
									$("#tip").remove(); // div#tip 삭제

								});
			});
		</script>

		<div class="dropdown" id="list1">
			<div class="dropdown-content" id="contentList1"></div>
		</div>
		<div class="dropdown" id="list2">
			<div class="dropdown-content" id="contentList2"></div>
		</div>
		<div class="dropdown" id="list3">
			<div class="dropdown-content2" id="contentList3"></div>
		</div>
		<div class="dropdown" id="list4">
			<div class="dropdown-content2" id="contentList4"></div>
		</div>
		<div class="dropdown" id="list5">
			<div class="dropdown-content2" id="contentList5"></div>
		</div>
	</div>

	<!-- 변수 선언은 제일 나중에, 태그 로딩 후.. -->
	<script src="<c:url value="/resources/js/var.js"/>"></script>
	<script src="<c:url value="/resources/js/kakaoapi.js"/>"></script>
	<script src="<c:url value="/resources/js/h2api.js"/>"></script>
	<script src="<c:url value="/resources/js/h2catapi.js"/>"></script>
	<script src="<c:url value="/resources/js/graph1.js"/>"></script>
	<script src="<c:url value="/resources/js/graph2.js"/>"></script>
	<script src="<c:url value="/resources/js/graph3.js"/>"></script>

	<!-- The Modal -->
	<!-- 1  -->
	<div id="myModal1" class="modal">
		<!-- Modal content -->
		<div class="modal-content">
			<!-- 2 -->
			<span class="close">&times;</span>
			<div id="chartdiv3_modal"></div>
			<!-- 2 -->
		</div>
	</div>
	<!-- 1 -->
	<div id="myModal2" class="modal">
		<!-- Modal content -->
		<div class="modal-content">
			<!-- 2 -->
			<span class="close">&times;</span>
			<div id="chartdiv4_modal"></div>
		</div>
		<!-- 2 -->
	</div>
	<div id="myModal3" class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<div id="chartdiv1_modal"></div>
		</div>
	</div>
	<div id="myModal4" class="modal">
		<!-- Modal content -->
		<div class="modal-content">
			<!-- 2 -->
			<span class="close">&times;</span>
			<div id="chartdiv2_modal"></div>
			<!-- 2 -->
		</div>
	</div>
	<script>
		let guname = document.querySelector('#provName1').firstChild.textContent.trim().toString();
		let dongname = document.querySelector('#townName1').firstChild.textContent.trim().toString();
		// Get the modal
		var modal1 = document.getElementById("myModal1");
		var modal2 = document.getElementById("myModal2");
		var modal3 = document.getElementById("myModal3");
		var modal4 = document.getElementById("myModal4");
		// Get the button that opens the modal
		var btn1 = document.getElementById("myBtn1");
		var btn2 = document.getElementById("myBtn2");
		// Get the <span> element that closes the modal
		var span1 = document.getElementsByClassName("close")[0];
		var span2 = document.getElementsByClassName("close")[1];
		var span3 = document.getElementsByClassName("close")[2];
		var span4 = document.getElementsByClassName("close")[3];
		// When the user clicks the button, open the modal 
		btn1.onclick = function() {
			modal1.style.display = "block";
			showAptGraph('chartdiv3_modal',
					document.getElementsByTagName('th')[0].innerText);

		}
		btn2.onclick = function() {
			modal2.style.display = "block";
			showAptGraph('chartdiv4_modal',
					document.getElementsByTagName('th')[10].innerText);
		}
		
		// When the user clicks on <span> (x), close the modal
		span1.onclick = function() {
			modal1.style.display = "none";
		}
		span2.onclick = function() {
			modal2.style.display = "none";
		}

		span3.onclick = function() {
			modal3.style.display = "none";
		}
		span4.onclick = function() {
			modal4.style.display = "none";
		}
		
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal1) {
				modal1.style.display = "none";
			}
		}
		window.onclick = function(event) {
			if (event.target == modal2) {
				modal2.style.display = "none";
			}
		}
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal3) {
				modal3.style.display = "none";
			}
		}
		window.onclick = function(event) {
			if (event.target == modal4) {
				modal4.style.display = "none";
			}
		}
	</script>
</body>
</html>
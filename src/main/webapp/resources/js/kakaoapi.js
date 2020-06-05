// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
	return function() {
		infowindow.open(map, marker);
	};
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
	return function() {
		infowindow.close();
	};
}

// 마커를 생성하고 지도위에 표시하는 함수입니다
function addMarkerCat1(pos, name) {

	var circle = new kakao.maps.Circle({
		center : pos, // 원의 중심좌표 입니다
		radius : 30, // 미터 단위의 원의 반지름입니다
		strokeWeight : 5, // 선의 두께입니다
		strokeColor : '#ff00ff', // 선의 색깔입니다
		strokeOpacity : 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
		fillColor : '#ff00ff', // 채우기 색깔입니다
		fillOpacity : 1, // 채우기 불투명도 입니다
		zIndex : 10
	});

	// 지도에 원을 표시합니다
	circle.setMap(map);
	// 커스텀 오버레이 등록

	kakao.maps.event.addListener(circle, 'mouseover', function(mouseEvent) {

		customOverlayCat1.setContent('<div class="area">' + name + '</div>');
		customOverlayCat1.setPosition(pos);
		customOverlayCat1.setMap(map);
	});

	kakao.maps.event.addListener(circle, 'mouseout', function() {
		customOverlayCat1.setMap(null);
	});

	kakao.maps.event.addListener(circle, 'idle', function() {
		var level = map.getLevel();
		if (level < 8)
			circle.setMap(map);
		else
			circle.setMap(null);
	});
	cat1circle.push(circle);
}

function addMarkerCat2(pos, name) {

	var circle = new kakao.maps.Circle({
		center : pos, // 원의 중심좌표 입니다
		radius : 30, // 미터 단위의 원의 반지름입니다
		strokeWeight : 5, // 선의 두께입니다
		strokeColor : '#ffff00', // 선의 색깔입니다
		strokeOpacity : 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
		fillColor : '#ffff00', // 채우기 색깔입니다
		fillOpacity : 1,
		zIndex : 10
	});

	// 지도에 원을 표시합니다
	circle.setMap(map);
	// 커스텀 오버레이 등록

	kakao.maps.event.addListener(circle, 'mouseover', function(mouseEvent) {

		customOverlayCat2.setContent('<div class="area">' + name + '</div>');
		customOverlayCat2.setPosition(pos);
		customOverlayCat2.setMap(map);
	});

	kakao.maps.event.addListener(circle, 'mouseout', function() {
		customOverlayCat2.setMap(null);
	});
	
	kakao.maps.event.addListener(circle, 'idle', function() {
		var level = map.getLevel();
		if (level < 8)
			circle.setMap(map);
		else
			circle.setMap(null);
	});
	cat2circle.push(circle);
}

function addMarkerCat3(pos, name) {

	var circle = new kakao.maps.Circle({
		center : pos, // 원의 중심좌표 입니다
		radius : 30, // 미터 단위의 원의 반지름입니다
		strokeWeight : 5, // 선의 두께입니다
		strokeColor : '#66ff66', // 선의 색깔입니다
		strokeOpacity : 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
		fillColor : '#66ff66', // 채우기 색깔입니다
		fillOpacity : 1, // 채우기 불투명도 입니다
		zIndex : 10
	});

	// 지도에 원을 표시합니다
	circle.setMap(map);
	// 커스텀 오버레이 등록

	kakao.maps.event.addListener(circle, 'mouseover', function(mouseEvent) {

		customOverlayCat3.setContent('<div class="area">' + name + '</div>');
		customOverlayCat3.setPosition(pos);
		customOverlayCat3.setMap(map);
	});

	kakao.maps.event.addListener(circle, 'mouseout', function() {
		customOverlayCat3.setMap(null);
	});
	kakao.maps.event.addListener(circle, 'idle', function() {
		var level = map.getLevel();
		if (level < 8)
			circle.setMap(map);
		else
			circle.setMap(null);
	});
	cat3circle.push(circle);
}

//배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
function setMarkers(map) {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
	}
	for (var i = 0; i < cat1circle.length; i++) {
		cat1circle[i].setMap(map);
	}
	for (var i = 0; i < cat2circle.length; i++) {
		cat2circle[i].setMap(map);
	}
	for (var i = 0; i < cat3circle.length; i++) {
		cat3circle[i].setMap(map);
	}
}

function poajax(a){

	var request = new XMLHttpRequest();
	var formdata = new FormData();
	
	formdata.enctype='multipart/form-data';
	formdata.method='post';
	formdata.action='/ah/cat123option/'+a;
	
	request.open('post', formdata.action , true);
	request.send(formdata);
	
	// console.log(a); // 아예 들어오지 못함
	request.onload = function(event) {
		if (request.status == 200) {
			//alert("test");
			var str = request.responseText;
			var result1 = JSON.parse(str);
			// console.log(result1);
		};
	}
}
// 마커를 생성하고 지도위에 표시하는 함수입니다
function addMarkerCircle(position1, position2, name, no) {
	
	centerPosition = position1;
	drawingCircle = new kakao.maps.Circle({
		strokeWeight : 1, // 선의 두께입니다
		strokeColor : '#00a0e9', // 선의 색깔입니다
		strokeOpacity : 0.1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
		strokeStyle : 'solid', // 선의 스타일입니다
		fillColor : '#00a0e9', // 채우기 색깔입니다
		fillOpacity : 0.2
	// 채우기 불투명도입니다
	});
	circleOptions = {
		center : centerPosition,
		radius : 300
	};
	drawingCircle.setOptions(circleOptions);
	drawingCircle.setMap(map);


	// 마커를 생성합니다
	marker1 = new kakao.maps.Marker({
		position : position1,
		clickable : true
	});

	// console.log('------------');
	// console.log(name);
	
	// 커스텀 오버레이 등록

	kakao.maps.event.addListener(marker1, 'mouseover', function(mouseEvent) {

		customOverlayApt.setContent('<div class="area">' + name + '</div>');
		customOverlayApt.setPosition(position1);
		customOverlayApt.setMap(map);
	});

	kakao.maps.event.addListener(marker1, 'mouseout', function() {
		customOverlayApt.setMap(null);
	});
	
	kakao.maps.event.addListener(marker1, "click", function(){
		
		let guname = document.querySelector('#provName1').firstChild.textContent.trim().toString();
		let dongname = document.querySelector('#townName1').firstChild.textContent.trim().toString();
		if(guname == "강남구" || guname == "마포구"){
			// 정상!
		}
		else{
			alert("강남구나 마포구 중 선택해주세요!");
			return;
		}
		
		var request = new XMLHttpRequest();
		var formdata = new FormData();
		
		formdata.enctype='multipart/form-data';
		formdata.method='post';
		formdata.action='/ah/cat123option/'+no;
		
		request.open('post', formdata.action , true);
		request.send(formdata);
		
		request.onload = function(event) {
			if (request.status == 200) {
				//alert("test");
				var str = request.responseText;
				var result1 = JSON.parse(str);
				// console.log(result1);
				//카카오 맵			
				// 이전에 있던 마커 지우기		
				// console.log(data1.length == 0);
				var name = result1.name;
				var output0 = result1.household;
				var output1 = result1.approvaldate;
				var output2 = result1.construction;
				var output3 = result1.totalarea;
				var output4 = result1.managetype;
				var output5 = result1.hallwaytype;
				var output6 = result1.phone;
				var output7 = result1.heatingname;
				var output8 = result1.addr;
				
				
				if (data1.length % 2 == 0) {
					data1.push(result1);
					// console.log(data1.length);
					
					document.getElementsByTagName('th')[0].innerText = name;
					document.getElementsByTagName('td')[0].innerText = output0;
					document.getElementsByTagName('td')[1].innerText = output1;
					document.getElementsByTagName('td')[2].innerText = output2;
					document.getElementsByTagName('td')[3].innerText = output3;
					document.getElementsByTagName('td')[4].innerText = output4;
					document.getElementsByTagName('td')[5].innerText = output5;
					document.getElementsByTagName('td')[6].innerText = output6;
					document.getElementsByTagName('td')[7].innerText = output7;
					document.getElementsByTagName('td')[8].innerText = output8;
					showAptGraph('chartdiv3', name);
					
				} else if(data1.length % 2 == 1) {
					data1.push(result1);
						// console.log(data1.length);
						
						document.getElementsByTagName('th')[10].innerText = name;
						document.getElementsByTagName('td')[9].innerText = output0;
						document.getElementsByTagName('td')[10].innerText = output1;
						document.getElementsByTagName('td')[11].innerText = output2;
						document.getElementsByTagName('td')[12].innerText = output3;
						document.getElementsByTagName('td')[13].innerText = output4;
						document.getElementsByTagName('td')[14].innerText = output5;
						document.getElementsByTagName('td')[15].innerText = output6;
						document.getElementsByTagName('td')[16].innerText = output7;
						document.getElementsByTagName('td')[17].innerText = output8;
						showAptGraph('chartdiv4', name);
				}		
			};
		}
	});
	
	marker2 = new kakao.maps.Marker({
		position : position2,
		clickable : true
	});
	// 마커에 클릭이벤트를 등록합니다
	// 마커가 지도 위에 표시되도록 설정합니다
	marker1.setMap(map);

	markers.push(marker1);
	markers.push(drawingCircle);

}

kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
	closeAllPopup();
});


/*
		<button onclick="showAptGraph('chartdiv3', 'e편한세상마포리버파크')">e편한세상마포리버파크</button>
		<button onclick="showAptGraph('chartdiv4', '래미안공덕3차')">래미안공덕3차</button>
		<button onclick="showGuGraph('chartdiv1', '강남구')">강남구</button>
		<button onclick="showDongGraph('chartdiv1', '강남구', '역삼동')">역삼동</button>*/

function callShowGuGraph(){
	let guname = document.querySelector('#provName1').firstChild.textContent.trim().toString();
	if(guname == "강남구" || guname == "마포구"){
		var modal3 = document.getElementById("myModal3");
		modal3.style.display = "block";
		showGuGraph('chartdiv1_modal', guname);
	}
	else alert("강남구나 마포구 중 선택해주세요!");
	

	
}

function callShowDongGraph(){
	let guname = document.querySelector('#provName1').firstChild.textContent.trim().toString();
	let dongname = document.querySelector('#townName1').firstChild.textContent.trim().toString();
	if(guname == "강남구" || guname == "마포구"){
		if(dongname == "전 체") alert("동을 선택해주세요!");
		else{
			showDongGraph('chartdiv2_modal', guname, dongname);
			var modal4 = document.getElementById("myModal4");
			modal4.style.display = "block";
		}
		
	}
	else{
		alert("강남구나 마포구 중 선택해주세요!");
	}
}

function showDetail() {	
	if (document.querySelector('#shadow').classList.toggle('display')) {
		document.querySelector('.toggle').style.backgroundPosition = '-7px -157px';
		document.querySelector('.map_wrap').style.width = '100%';
		document.querySelector('.toggle').style.left = '-600px';
		document.querySelector('#map').style.left = '-600px';
		document.querySelector(".sidebar").style.width = '600px';
	} else {
		document.querySelector('.toggle').style.backgroundPosition = '-5px -26px';
		document.querySelector('.map_wrap').style.width = '100%';
		document.querySelector('.toggle').style.left = '0px';
		document.querySelector('#map').style.left = '0px';
		document.querySelector(".sidebar").style.width = '0';
	}
	
	//alert(document.querySelector('#map').style.width);
	//alert(document.querySelector('#map').style.height);
	//mapContainer.style.width = '800px';
	//mapContainer.style.height = '400px';
	map.relayout();
}

function mainmap() {
	for (var i = 0, len = areas.length; i < len; i++) {
		displayArea(areas[i]);
	}
}

function displayArea(area) {

	// 다각형을 생성합니다
	var polygon = new kakao.maps.Polygon({
		map : map, // 다각형을 표시할 지도 객체
		path : area.path,
		strokeWeight : 2,
		strokeColor : '#004c80',
		strokeOpacity : 0.8,
		fillColor : '#fff',
		fillOpacity : 0.7
	});

    // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다 
    // 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
    kakao.maps.event.addListener(polygon, 'mouseover', function(mouseEvent) {
        polygon.setOptions({fillColor: '#09f'});

        customOverlay.setContent('<div class="area">' + area.name + '</div>');
        
        customOverlay.setPosition(mouseEvent.latLng); 
        customOverlay.setMap(map);
    });

    // 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다 
    kakao.maps.event.addListener(polygon, 'mousemove', function(mouseEvent) {
        
        customOverlay.setPosition(mouseEvent.latLng); 
    });

	// 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
	// 커스텀 오버레이를 지도에서 제거합니다
	kakao.maps.event.addListener(polygon, 'mouseout', function() {
		polygon.setOptions({
			fillColor : '#fff'
		});
		customOverlay.setMap(null);
	});

	// 다각형에 click 이벤트를 등록하고 이벤트가 발생하면 다각형의 이름과 면적을 인포윈도우에 표시합니다
	kakao.maps.event.addListener(polygon, 'click', function(mouseEvent) {
		// center값 받아서 줌인
		clickGu(area.name);
	});

	kakao.maps.event.addListener(map, 'idle', function() {
		var level = map.getLevel();
		if (level < 8) {
			polygon.setOptions({
				fillOpacity : 0
			});
		} else {
			polygon.setOptions({
				fillOpacity : 0.7
			});
		}
	});
}

function clickGu(gu) {
	var request = new XMLHttpRequest();
	var formdata = new FormData();

	formdata.enctype = 'multipart/form-data';
	formdata.method = 'post';
	formdata.action = '/ah/center/gu/' + gu;

	request.open('post', '/ah/center/gu/' + gu, true);
	request.send(formdata);

	request.onload = function(event) {
		if (request.status == 200) {
			var str = request.responseText;
			var gudata = JSON.parse(str);
			showGuCenter(gudata.name, gudata.lat, gudata.lng);
			closeAllPopup();
		};
	}
}

function reset(){
	document.getElementsByTagName('th')[0].innerText = "아파트명";
	document.getElementsByTagName('td')[0].innerText = null;
	document.getElementsByTagName('td')[1].innerText = null;
	document.getElementsByTagName('td')[2].innerText = null;
	document.getElementsByTagName('td')[3].innerText = null;
	document.getElementsByTagName('td')[4].innerText = null;
	document.getElementsByTagName('td')[5].innerText = null;
	document.getElementsByTagName('td')[6].innerText = null;
	document.getElementsByTagName('td')[7].innerText = null;
	document.getElementsByTagName('td')[8].innerText = null;
	
	document.getElementsByTagName('th')[10].innerText = "아파트명";
	document.getElementsByTagName('td')[9].innerText = null;
	document.getElementsByTagName('td')[10].innerText = null;
	document.getElementsByTagName('td')[11].innerText = null;
	document.getElementsByTagName('td')[12].innerText = null;
	document.getElementsByTagName('td')[13].innerText = null;
	document.getElementsByTagName('td')[14].innerText = null;
	document.getElementsByTagName('td')[15].innerText = null;
	document.getElementsByTagName('td')[16].innerText = null;
	document.getElementsByTagName('td')[17].innerText = null;
	
	// 그래프 초기화
	document.querySelector('#chartdiv3').innerHTML = null;
	document.querySelector('#chartdiv4').innerHTML = null;
}



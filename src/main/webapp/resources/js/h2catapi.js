function showCat1(){
	var request = new XMLHttpRequest();
	var formdata = new FormData();
	
	formdata.enctype='multipart/form-data';
	formdata.method='post';
	formdata.action='/ah/cat1';
	
	request.open('post', '/ah/cat1', true);
	request.send(formdata);

	request.onload = function(event) {
		if (request.status == 200) {
			var str = request.responseText;
			var catlist = JSON.parse(str);
			var listElement = document.querySelector('#contentList3');
			var str = '';
			// console.log(catlist);

			str += "<a href='#' onclick='chooseCat1("+"\""+catlist[1].catname+"\")'><img src="+"resources/images/subway_grey.png"+"/>"+catlist[1].catname+"</a>";
			str += "<a href='#' onclick='chooseCat1("+"\""+catlist[2].catname+"\")'><img src="+"resources/images/cafe_grey.png"+"/>"+catlist[2].catname+"</a>";
			str += "<a href='#' onclick='chooseCat1("+"\""+catlist[3].catname+"\")'><img src="+"resources/images/food_grey.png"+"/>"+catlist[3].catname+"</a>";
			str += "<a href='#' onclick='chooseCat1("+"\""+catlist[4].catname+"\")'><img src="+"resources/images/24_gr.png"+"/>"+catlist[4].catname+"</a>";
			str += "<a href='#' onclick='chooseCat1("+"\""+catlist[5].catname+"\")'><img src="+"resources/images/cart_grey.png"+"/>"+catlist[5].catname+"</a>";
			str += "<a href='#' onclick='chooseCat1("+"\""+catlist[6].catname+"\")'><img src="+"resources/images/hospital_grey.png"+"/>"+catlist[6].catname+"</a>";
			str += "<a href='#' onclick='chooseCat1("+"\""+catlist[7].catname+"\")'><img src="+"resources/images/park_grey.png"+"/>"+catlist[7].catname+"</a>";
			listElement.innerHTML = str;
		};
	}	
	
	if(document.querySelector('#list3').classList.toggle('display'))
		document.querySelector('#list3').style.display='block';
	else 
		document.querySelector('#list3').style.display='none';
}
function showCat2(){
	
	var request = new XMLHttpRequest();
	var formdata = new FormData();
	
	formdata.enctype='multipart/form-data';
	formdata.method='post';
	formdata.action='/ah/cat2';
	
	request.open('post', '/ah/cat2', true);
	request.send(formdata);

	request.onload = function(event) {
		if (request.status == 200) {
			var str = request.responseText;
			var catlist = JSON.parse(str);
			var listElement = document.querySelector('#contentList4');
			var str = '';
			
			str += "<a href='#' onclick='chooseCat2("+"\""+catlist[1].catname+"\")'><img src="+"resources/images/subway_grey.png"+"/>"+catlist[1].catname+"</a>";
			str += "<a href='#' onclick='chooseCat2("+"\""+catlist[2].catname+"\")'><img src="+"resources/images/cafe_grey.png"+"/>"+catlist[2].catname+"</a>";
			str += "<a href='#' onclick='chooseCat2("+"\""+catlist[3].catname+"\")'><img src="+"resources/images/food_grey.png"+"/>"+catlist[3].catname+"</a>";
			str += "<a href='#' onclick='chooseCat2("+"\""+catlist[4].catname+"\")'><img src="+"resources/images/24_gr.png"+"/>"+catlist[4].catname+"</a>";
			str += "<a href='#' onclick='chooseCat2("+"\""+catlist[5].catname+"\")'><img src="+"resources/images/cart_grey.png"+"/>"+catlist[5].catname+"</a>";
			str += "<a href='#' onclick='chooseCat2("+"\""+catlist[6].catname+"\")'><img src="+"resources/images/hospital_grey.png"+"/>"+catlist[6].catname+"</a>";
			str += "<a href='#' onclick='chooseCat2("+"\""+catlist[7].catname+"\")'><img src="+"resources/images/park_grey.png"+"/>"+catlist[7].catname+"</a>";
			listElement.innerHTML = str;
		};
	}	
	
	
	if(document.querySelector('#list4').classList.toggle('display'))
		document.querySelector('#list4').style.display='block';
	else 
		document.querySelector('#list4').style.display='none';
}
function showCat3(){
	
	var request = new XMLHttpRequest();
	var formdata = new FormData();
	
	formdata.enctype='multipart/form-data';
	formdata.method='post';
	formdata.action='/ah/cat3';
	
	request.open('post', '/ah/cat3', true);
	request.send(formdata);

	request.onload = function(event) {
		if (request.status == 200) {
			var str = request.responseText;
			var catlist = JSON.parse(str);
			var listElement = document.querySelector('#contentList5');
			var str = '';
			
			str += "<a href='#' onclick='chooseCat3("+"\""+catlist[1].catname+"\")'><img src="+"resources/images/subway_grey.png"+"/>"+catlist[1].catname+"</a>";
			str += "<a href='#' onclick='chooseCat3("+"\""+catlist[2].catname+"\")'><img src="+"resources/images/cafe_grey.png"+"/>"+catlist[2].catname+"</a>";
			str += "<a href='#' onclick='chooseCat3("+"\""+catlist[3].catname+"\")'><img src="+"resources/images/food_grey.png"+"/>"+catlist[3].catname+"</a>";
			str += "<a href='#' onclick='chooseCat3("+"\""+catlist[4].catname+"\")'><img src="+"resources/images/24_gr.png"+"/>"+catlist[4].catname+"</a>";
			str += "<a href='#' onclick='chooseCat3("+"\""+catlist[5].catname+"\")'><img src="+"resources/images/cart_grey.png"+"/>"+catlist[5].catname+"</a>";
			str += "<a href='#' onclick='chooseCat3("+"\""+catlist[6].catname+"\")'><img src="+"resources/images/hospital_grey.png"+"/>"+catlist[6].catname+"</a>";
			str += "<a href='#' onclick='chooseCat3("+"\""+catlist[7].catname+"\")'><img src="+"resources/images/park_grey.png"+"/>"+catlist[7].catname+"</a>";
			listElement.innerHTML = str;
		};
	}	
	
	if(document.querySelector('#list5').classList.toggle('display'))
		document.querySelector('#list5').style.display='block';
	else 
		document.querySelector('#list5').style.display='none';
}
function chooseCat1(name){
	document.querySelector('#cat1').innerHTML= name;
	if(document.querySelector('#list3').classList.toggle('display'))
		document.querySelector('#list3').style.display='block';
	else 
		document.querySelector('#list3').style.display='none';
}
function chooseCat2(name){
	document.querySelector('#cat2').innerHTML=name;
	if(document.querySelector('#list4').classList.toggle('display'))
		document.querySelector('#list4').style.display='block';
	else 
		document.querySelector('#list4').style.display='none';
}
function chooseCat3(name){
	document.querySelector('#cat3').innerHTML=name;
	if(document.querySelector('#list5').classList.toggle('display'))
		document.querySelector('#list5').style.display='block';
	else 
		document.querySelector('#list5').style.display='none';
}

// 여기서 cat1, 2, 3 주소 가져옴ㅁ!!!
function searchCat(){
	setMarkers(null);
	
	let guname = document.querySelector('#provName1').firstChild.textContent.trim().toString();
	let dongname = document.querySelector('#townName1').firstChild.textContent.trim().toString();
	let cat1name = document.querySelector('#cat1').firstChild.textContent.trim().toString();
	let cat2name = document.querySelector('#cat2').firstChild.textContent.trim().toString();
	let cat3name = document.querySelector('#cat3').firstChild.textContent.trim().toString();

	if(cat1name == '카테고리' || cat2name == '카테고리' || cat3name == '카테고리'){
		alert('카테고리를 선택해주세요!');
		return false;
	}
	
	if(guname == '전 체' && dongname == '전 체'){
		markerAptCircle(guname, dongname, cat1name, cat2name, cat3name);
	} else {
		if(dongname == '전 체'){
			markerAptCircle(guname, dongname, cat1name, cat2name, cat3name);
			markerCat1(guname,cat1name);
			markerCat2(guname,cat2name);
			markerCat3(guname,cat3name);
		} else {
			// 조건에서 동 검색이 안되서 무조건 구 단위로 검색하기 위함
			dongname = '전 체';
			markerAptCircle(guname, dongname, cat1name, cat2name, cat3name);
			markerCat1(guname,cat1name);
			markerCat2(guname,cat2name);
			markerCat3(guname,cat3name);
		}
		
	}

}

function markerCat1(guname, cat1name){
	//alert("markerCat1");
	var request = new XMLHttpRequest();
	var formdata = new FormData();
	
	formdata.enctype='multipart/form-data';
	formdata.method='post';
	formdata.action='/ah/cat1pos';
	formdata.append('gu', guname);
	formdata.append('cat1name', cat1name);
	
	request.open('post', formdata.action , true);
	request.send(formdata);

	request.onload = function(event) {
		if (request.status == 200) {
			var str = request.responseText;
			var result1 = JSON.parse(str);
			//console.log(result1);
			//cat1markers = [];
			//clusterer.clear();						
			for(i = 0; i < result1.length; i++){
				addMarkerCat1(new kakao.maps.LatLng(result1[i].lat, result1[i].lng), result1[i].name);
			}
			//clusterer.addMarkers(markers);
		};
	}		
}
function markerCat2(guname, cat2name){
	var request = new XMLHttpRequest();
	var formdata = new FormData();
	
	formdata.enctype='multipart/form-data';
	formdata.method='post';
	formdata.action='/ah/cat2pos';
	formdata.append('gu', guname);
	formdata.append('cat2name', cat2name);
	
	request.open('post', formdata.action , true);
	request.send(formdata);

	request.onload = function(event) {
		if (request.status == 200) {
			var str = request.responseText;
			var result1 = JSON.parse(str);
			//console.log(result1);
				
			for(i = 0; i < result1.length; i++){
				addMarkerCat2(new kakao.maps.LatLng(result1[i].lat, result1[i].lng), result1[i].name);
			}
			//clusterer.addMarkers(markers);
		};
	}		
}
function markerCat3(guname, cat3name){
	var request = new XMLHttpRequest();
	var formdata = new FormData();
	
	formdata.enctype='multipart/form-data';
	formdata.method='post';
	formdata.action='/ah/cat3pos';
	formdata.append('gu', guname);
	formdata.append('cat3name', cat3name);
	
	request.open('post', formdata.action , true);
	request.send(formdata);

	request.onload = function(event) {
		if (request.status == 200) {
			var str = request.responseText;
			var result1 = JSON.parse(str);
			//console.log(result1);
				
			for(i = 0; i < result1.length; i++){
				addMarkerCat3(new kakao.maps.LatLng(result1[i].lat, result1[i].lng), result1[i].name);
			}
			//clusterer.addMarkers(markers);
		};
	}	
}
function markerAptCircle(guname, dongname, cat1name, cat2name, cat3name){
	
	var request = new XMLHttpRequest();
	var formdata = new FormData();
	
	formdata.enctype='multipart/form-data';
	formdata.method='post';
	formdata.action='/ah/cat123option';
	formdata.append('gu', guname);
	formdata.append('dong', dongname);
	formdata.append('cat1name', cat1name);
	formdata.append('cat2name', cat2name);
	formdata.append('cat3name', cat3name);
	
	request.open('post', formdata.action , true);
	request.send(formdata);

	request.onload = function(event) {
		if (request.status == 200) {
			var str = request.responseText;
			var result1 = JSON.parse(str);
			// console.log(result1);
			if(result1.length == 0){
				alert("검색 조건에 맞는 아파트가 없습니다!!");
				setMarkers(null);
				return;
			}
			markers = [];
			clusterer.clear();
			for(i = 0; i < result1.length; i++){
				addMarkerCircle(new kakao.maps.LatLng(result1[i].aptlat, result1[i].aptlng),null, result1[i].aptname,result1[i].aptno);
			}
			clusterer.addMarkers(markers);
		};
	}	
}
//gu list
function showProvince(){
	
	//alert("showProvince");
	//ajax - gu 정보 가져오기
	var request = new XMLHttpRequest();
	var formdata = new FormData();
	
	formdata.enctype='multipart/form-data';
	formdata.method='post';
	formdata.action='/ah/gu';
	
	request.open('post', '/ah/gu', true);
	request.send(formdata);

	request.onload = function(event) {
		if (request.status == 200) {
			var str = request.responseText;
			// 지역구 리스트 리턴
			var gulist = JSON.parse(str);
			// 지역구 리스트 출력
			var listElement = document.querySelector('#contentList1');
			var str = '';
			// console.log(gulist);
			for(i = 0; i < gulist.length; i++){
				str += "<a href='#' onclick='showGuCenter("+"\""+gulist[i].gu+"\""+","+gulist[i].lat+","+gulist[i].lng+")'>"+gulist[i].gu+"</a>";
			}
			listElement.innerHTML = str;
			
		};
	}

	if(document.querySelector('#list1').classList.toggle('display'))
		document.querySelector('#list1').style.display='block';
	else 
		document.querySelector('#list1').style.display='none';

}

//구 단위로 클릭했을 때
//리스트에서  gu 클릭했을때 지도의 중심의 위치 map 만 변하도록.
function showGuCenter(gu, lat, lng) {	
	
	//alert("showGuCenter");
	// 리스트 닫기
	chooseProvince(gu, lat, lng);
	
	//contentList1 text 데이터 가져오기	
	var request = new XMLHttpRequest();
	var formdata = new FormData();
	
	formdata.enctype='multipart/form-data';
	formdata.method='post';
	formdata.action='/ah/gu/'+gu;
	
	request.open('post', '/ah/gu/'+gu, true);
	request.send(formdata);

	request.onload = function(event) {
		if (request.status == 200) {
			var str = request.responseText;
			// 지역구 리스트 리턴
			var donglist = JSON.parse(str);
			// console.log(donglist);
			// 지역구 리스트 출력
			var listElement = document.querySelector('#contentList2');
			// db gu list 출력
			var str = '';
			for(i = 0; i < donglist.length; i++){
				str += "<a href='#' onclick='chooseTown("+"\""+donglist[i].dong+"\""+","+donglist[i].lat+","+donglist[i].lng+")'>"+donglist[i].dong+"</a>";
			}
			
			// console.log(str);
			listElement.innerHTML = str;			
			document.querySelector('#townName1').innerHTML='&nbsp;전 체&nbsp;';

		};
	}
}

function showTown(){
	// 리스트 삭제
	if(document.querySelector('#list2').classList.toggle('display'))
		document.querySelector('#list2').style.display='block';
	else 
		document.querySelector('#list2').style.display='none';
	// 맵 위치 변경
}

//list
function chooseProvince(gu, lat, lng){
	map.setLevel(7, {anchor: new kakao.maps.LatLng(lat, lng)});
	map.setCenter(new kakao.maps.LatLng(lat, lng));
	
	document.querySelector('#provName1').innerHTML= '&nbsp;' + gu + '&nbsp;';
	// 리스트 삭제
	if(document.querySelector('#list1').classList.toggle('display'))
		document.querySelector('#list1').style.display='block';
	else 
		document.querySelector('#list1').style.display='none';
	// 맵 위치 변경
}
//리스트에서  gu 클릭했을때 지도의 중심의 위치 map 만 변하도록.
//리스트 클릭할 떄
function chooseTown(dong, lat, lng) {
	map.setLevel(4, {anchor: new kakao.maps.LatLng(lat, lng)});
	map.setCenter(new kakao.maps.LatLng(lat, lng));

	document.querySelector('#townName1').innerHTML='&nbsp;' + dong + '&nbsp;';
	// 리스트 삭제
	if(document.querySelector('#list2').classList.toggle('display'))
		document.querySelector('#list2').style.display='block';
	else 
		document.querySelector('#list2').style.display='none';
	
}

function closeAllPopup(){
	document.querySelector('#list1').style.display='none';
	document.querySelector('#list2').style.display='none';
	document.querySelector('#list3').style.display='none';
	document.querySelector('#list4').style.display='none';
	document.querySelector('#list5').style.display='none';
	
}



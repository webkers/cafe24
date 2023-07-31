(async function (CAFE24API) {

	var link = document.createElement( "link" );
	link.href = 'http://127.0.0.1:4173/assets/index.css';
	link.type = "text/css";
	link.rel = "stylesheet";
	link.media = "screen,print";
	document.getElementsByTagName( "head" )[0].appendChild( link );
	
	var script = document.createElement('script');
	script.type = 'module';
	script.onload = function () {
			console.log('cafe24 / area-price')
	};
	script.src = 'http://127.0.0.1:4173/assets/index.js';
	
	document.head.appendChild(script); //or something of the likes

})(CAFE24API.init({
	 client_id : 'GzJbLg7LOJEnstAuv4gQLA',  // 사용할 앱의 App Key를 설정해 주세요.
	 version : '2023-06-01'   // 적용할 버전을 설정해 주세요.
}));

function ajax(o){
	o = o || {};
	o.type = o.type.toUpperCase() || 'POST';
	o.url = o.url || '';
	o.async = o.async || true;
	o.data = o.data || null;
	o.success = o.success || function () {};
	o.error = o.error || function () {};
	var req = null;
	if (XMLHttpRequest) {
		req = new XMLHttpRequest();
	}else {
		req = new ActiveXObject('Microsoft.XMLHTTP');
	}

	var pa = [];
	for (var key in o.data){
		pa.push(key + '=' + o.data[key]);
	}
	var pd = pa.join('&');

	if (o.type.toUpperCase() === 'POST') {
		req.open(o.type, o.url, o.async);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		req.send(pd);
	}else if (o.type.toUpperCase() === 'GET') {
		req.open(o.type, o.url + '?' + pd, o.async);
		req.send(null);
	}
	req.onreadystatechange = function () {
		if (req.readyState == 4 && req.status == 200) {
			o.success(req.responseText);
		}else{
			o.error(req.xhr, req.status, req.error);
		}
	};
}
//get
function getJson(url,callback){
	var req = null;
	if (XMLHttpRequest) {
		req = new XMLHttpRequest();
	}else {
		req = new ActiveXObject('Microsoft.XMLHTTP');
	}
	req.open('GET',url,true);
	req.send(null);
	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200) {
			callback(eval("(" + req.responseText + ")"));
		}
	};
}

//export default class Ajax{
//	constructor(){
//		this.xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
//	}
//	get(url,config){
//
//	}
//}

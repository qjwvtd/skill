//原生promise-ajax
function ajax(params){
    return new Promise(function(resole,reject){
        params = params || {};
        if (!params.url) {
            throw new Error('Necessary parameters are missing.'); //必要参数未填
        }
        const options = {
            url: params.url || '',
            type: (params.type || 'GET').toUpperCase(),
            timeout: params.timeout || 5000,
            async: params.async || true,
            dataType: params.dataType || 'json',
            data: params.data || {}
        };
        //格式化参数
        const formatParams = function (json) {
            const arr = [];
            for (let i in json) {
                arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(json[i]));
            }
            return arr.join("&");
        };
        //创建xhr对象
        const xhr = new (self.XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP");
        if (!xhr) {
            return false;
        }
        //发送请求
        options.data = formatParams(options.data);
        if (options.type == 'POST' || 'PUT' || 'DELETE') {
            xhr.open(options.type, options.url, options.async);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            xhr.send(options.data);
        } else {
            xhr.open(options.type, options.url + '?' + options.data, options.async);
            xhr.send(null);
        }
        //超时处理
        let requestDone = false;
        setTimeout(function () {
            requestDone = true;
            if (xhr.readyState != 4) {
                xhr.abort();
            }
        }, options.timeout);
        //状态处理
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && !requestDone) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    let data = options.dataType == "xml" ? xhr.responseXML : xhr.responseText;
                    console.log(data);
                    if (options.dataType == "json") {
                        try {
                            data = JSON.parse(data);
                        } catch (e) {
                            data = eval('(' + data + ')');
                        }
                    }
                    resole(data);
                } else {
                    reject(xhr);
                }
            }
        };
    });
}

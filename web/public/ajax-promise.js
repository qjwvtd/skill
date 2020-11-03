//原生promise-ajax
export function ajax(params){
    params = params || {};
    if (!params.url) {
        throw new Error('Necessary parameters are missing.'); //必要参数未填
    }
    const options = {
        url: params.url || '',
        type: (params.type || 'GET').toUpperCase(),
        timeout: params.timeout || 5000,
        dataType: params.dataType || 'json',
        data: params.data || {}
    };
    //创建xhr对象
    const xhr = new (self.XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP");
    if (!xhr) {
        return false;
    }
    //格式化参数
    const formatParams = function (json) {
        const arr = [];
        for (let i in json) {
            arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(json[i]));
        }
        return arr.join("&");
    };
    const fmtData = formatParams(options.data);
    const token = sessionStorage.getItem('TOKEN');
    return new Promise(function(resole,reject){
        //发送请求,可根据需要自定义请求头
        if(options.type == 'GET'){
            xhr.open(options.type, options.url + '?' + fmtData, true);
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            xhr.send(null);
        }
        if (options.type == 'POST' || 'PUT' || 'DELETE') {
            xhr.open(options.type, options.url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            xhr.send(fmtData);
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
                if (xhr.readyState !== 4) { return; }
                if (xhr.status >= 200 && xhr.status < 300) {
                    let data = options.dataType == "xml" ? xhr.responseXML : xhr.responseText;
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

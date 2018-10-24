//原生ajax
function ajax(params) {
    params = params || {};
    if (!params.url) {
        throw new Error('Necessary parameters are missing.'); //必要参数未填
    }
    const options = {
        url: params.url || '',
        type: (params.type || 'GET').toUpperCase(),
        timeout: params.timeout || 5000,
        async: true,
        complete: params.complete || function () {
        },
        error: params.error || function () {
        },
        success: params.success || function () {
        },
        dataType: params.dataType || 'json',
        data: params.data || {},
        jsonp: 'callback',
        jsonpCallback: ('jsonp_' + Math.random()).replace('.', '')
    };
    const formatParams = function (json) {
        const arr = [];
        for (const i in json) {
            arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(json[i]));
        }
        return arr.join("&");
    };
    if (options.dataType == 'jsonp') {
        //插入动态脚本及回调函数
        const $head = document.getElementsByTagName('head')[0];
        const $script = document.createElement('script');
        $head.appendChild($script);
        window[options.jsonpCallback] = function (json) {
            $head.removeChild($script);
            window[options.jsonpCallback] = null;
            hander && clearTimeout(hander);
            options.success(json);
            options.complete();
        };
        //发送请求
        options.data[options.jsonp] = options.jsonpCallback;
        $script.src = options.url + '?' + formatParams(options.data);
        //超时处理
        const hander = setTimeout(function () {
            $head.removeChild($script);
            window[options.jsonpCallback] = null;
            options.error();
            options.complete();
        }, options.timeout);
    } else {
        //创建xhr对象
        const xhr = new (self.XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP");
        if (!xhr) {
            return false;
        }
        //发送请求
        options.data = formatParams(options.data);
        if (options.type == 'POST') {
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
                    options.success(data);
                } else {
                    options.error();
                }
                options.complete();
            }
        };
    }
}
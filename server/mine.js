/*
 * 2018/1/17
 * administractor
 */
// 数据格式标签mime的主要类型
// 参考http://www.w3school.com.cn/media/media_mimeref.asp
/*
 application/
 text/
 image/
 audio/
 video/
 chemical/
 message/
 multipart/
 model/
 */
exports.service = {
    "host":'192.168.13.238',
    "port":1001,
    "userName":"zhangxiaojun",
    "password":"123456",
    "dataTable":"t_userTable"
};
exports.types = {
    "html": "text/html",
    "xml": "text/xml",
    "js": "text/javascript",
    "css": "text/css",
    "json": "application/json",
    "txt": "text/plain",
    "pdf": "application/pdf",
    "doc": "application/msword",
    "xls": "application/vnd.ms-excel",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "bmp": "image/bmp",
    "svg": "image/svg+xml",
    "tiff": "image/tiff",
    "gif": "image/gif",
    "swf": "application/x-shockwave-flash",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "mp3": "audio/mpeg",
    "wmv": "video/x-ms-wmv",
    "avi": "video/x-msvideo",
    "gz": "application/x-gzip",
    "manifest": "text/cache-manifest"
};



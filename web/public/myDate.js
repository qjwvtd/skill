/**
 * 一些关于日期处理的函数、类
 **/
class MyDate{
    constructor(){
        this.setLen = (str) => {
            const __str = str.toString().length < 2 ? 0 + str.toString() : str.toString();
            return __str;
        };
    }
    //格式化日期、时间
    fmtDate(dateStr,reg){
        /**
         * dateStr:时间戳，必选,
         * reg:reg:'/'或'-'，可选，默认'-'
         **/
        if(!dateStr){
            return;
        }
        const _data = new Date(dateStr);
        const year = _data.getFullYear();
        const month = this.setLen(_data.getMonth() + 1);
        const date = this.setLen(_data.getDate());
        const hour = this.setLen(_data.getHours());
        const minute = this.setLen(_data.getMinutes());
        const second = this.setLen(_data.getSeconds());
        const _reg = reg ? reg : '-';
        return {
            'year':year,
            'month':month,
            'day':date,
            'ymd':year + _reg + month + _reg + date,
            'hms':hour + ":" + minute + ":" + second,
            'ymd_hms':year + _reg + month + _reg + date + " " + hour + ":" + minute + ":" + second
        };
    }
    //随机日期、时间
    ranDate(){
        const current = new Date().getTime();
        const time = parseInt((Math.random() * current).toFixed(0));
        const ranTime = new Date(time);
        const year = ranTime.getFullYear();
        const month = this.setLen(ranTime.getMonth() + 1);
        const day = this.setLen(ranTime.getDate());
        const hour = this.setLen(ranTime.getHours());
        const minute = this.setLen(ranTime.getMinutes());
        const second = this.setLen(ranTime.getSeconds());
        return {
            'year':year,
            'month':month,
            'day':day,
            'ymd':year + '-' + month + '-' + day,
            'hms':hour + ":" + minute + ":" + second,
            'ymd_hms':year + '-' + month + '-' + day + " " + hour + ":" + minute + ":" + second
        };
    }
    //获取星期几
    getWeek(){
        const date = new Date();
        const weekend = ["星期一","星期二","星期三","星期四","星期五","星期六","星期日"];
        const week = weekend[date.getDay() - 1];
        return week;
    }
    //传入参数年和月，获取当月天数
    getDays(year,month){
        const __date = new Date(year, month, 0);
        return __date.getDate();
    }
    //秒表
}
const date = new MyDate();
export default date;
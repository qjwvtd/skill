/**
 *谷歌ga打点
 *在header中加入
 *<script async src="https://www.googletagmanager.com/gtag/js?id=UA-134369212-1"></script>
 *    <script>
 *        window.dataLayer = window.dataLayer || [];
 *        function gtag(){dataLayer.push(arguments);}
 *        gtag('js', new Date());
 *        gtag('config', 'UA-134369212-1');
 *    </script>
 */
/**
 * 事件触发时调用下面两个函数
 * //停留时间
 * export function staytime() {
 *    ga('send', 'timing', {
 *        'timingCategory': 'category',
 *        'timingVar': 'detail-lookup',
 *        'timingValue': parseInt(get_time_spent()),
 *        'timingLabel': 'label'
 *    });
 * }
 * //事件
 * export function clickevent(event) {
 *    const itemname = $("#pro_name").val();
 *    ga("send", "event", "clawin index", event+"_"+itemname);
 * }
 * */
/**
 * 如：
 * $（'.btn'）.click(function(){
 *     clickevent('点击了');
 *     staytime();
 * });
 * */

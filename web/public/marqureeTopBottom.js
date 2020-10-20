/**
 * 向上滚动的,每delay秒滚动一次
 * @param list,[],滚动区域字符串数组,必传
 * @param height,number,滚动区域高度,默认32,可选
 * @param delay,number,滚动间隔,默认3000,可选
 * @param speed,number,滚动动画速度,默认5,可选
 * 用法:<MarqureeTopBottom height={32} list={['巡检项管理', '巡检路线管理', '巡检点管理', '巡检计划管理', '巡检任务详情']} delay={2500} />
 */
function MarqureeTopBottom({ list, height, delay, speed }) {
    if (!list || !list.length) {
        throw '缺少必要参数list,滚动区域数据不能为空';
    }
    if (typeof height !== 'number') {
        throw '参数height必须是number类型,默认32';
    }
    const wrapper = useRef();
    const box = useRef();
    const cloneBox = useRef();
    height = height || 32;
    function getUUid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    useEffect(() => {
        let time, interval;
        cloneBox.current.innerHTML = box.current.innerHTML;
        function marquee() {
            if (wrapper.current.scrollTop % height === 0) {
                clearInterval(interval);
                time = setTimeout(() => {
                    wrapper.current.scrollTop++;
                    interval = setInterval(marquee, speed);
                }, delay || 3000);
            }
            if (cloneBox.current.offsetHeight - wrapper.current.scrollTop <= 0) {
                wrapper.current.scrollTop -= box.current.offsetHeight;
            } else {
                wrapper.current.scrollTop++;
            }
        }
        interval = setInterval(marquee, speed || 5);
        return () => { clearInterval(interval); clearTimeout(time); };
    }, []);
    return <div ref={wrapper} style={{ height: height + 'px', overflow: 'hidden' }}>
        <div ref={box} style={{ margin: '0' }}>
            {list.map((item) => <div key={getUUid()} style={{ height: height + 'px', lineHeight: height + 'px' }}>{item}</div>)}
        </div>
        <div ref={cloneBox} style={{ margin: '0' }}></div>
    </div>;
}

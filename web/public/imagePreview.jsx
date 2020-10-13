//预览图片弹窗
import React, { Fragment, useState, useEffect } from 'react';
/**
 * @param visible,boolean,预览器显示/隐藏
 * @param setVisible,function,控制预览器显示/隐藏,参数是boolean
 * @param image,string,默认显示的图片路径
 * @param list,Array,图片路径数组,字符串数组
 */
export function ImagePreviewer({ visible, setVisible, image, list }) {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [currentImg, setCurrentImg] = useState(null);
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
        if (visible) {
            const index = list.indexOf(image);
            if (index === -1) {
                console.log('不存在在默认图片');
                return;
            }
            setCurrentIndex(index);
            setCurrentImg(image);
        }
    }, [visible, image, list]);
    function prev() {
        if (currentIndex === 0) {
            console.log('已经是最前一张了');
            return;
        }
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            setCurrentIndex(prevIndex);
            setCurrentImg(list[prevIndex]);
        }
    }
    function next() {
        if (currentIndex === list.length - 1) {
            console.log('已经是最后一张了');
            return;
        }
        if (currentIndex < list.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            setCurrentImg(list[nextIndex]);
        }
    }
    useEffect(() => {
        if (visible) {
            setIsActive(true);
            setTimeout(() => {
                setIsActive(false);
            }, 500);
        }

    }, [currentIndex, visible]);
    return <Fragment>
        <div className="ui-img-previewer" style={{ display: visible ? 'block' : 'none' }}>
            <span className="ui-previewer-close" onClick={() => setVisible(false)}><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span>
            <a className="prev" onClick={prev} style={{ display: currentIndex === 0 ? 'none' : 'block' }}><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></a>
            <a className="next" onClick={next} style={{ display: currentIndex === list.length - 1 ? 'none' : 'block' }}><svg viewBox="64 64 896 896" focusable="false" className="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg></a>
            <img src={currentImg} className={isActive ? 'active' : ''} />
        </div>
    </Fragment>;
}


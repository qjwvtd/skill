/**
 * 基于react V16版本createPortal API的模态窗口
 * 需要modal.css
 * @params title--模态标题,string,默认'标题'
 * @params width--模态内容宽度,string,['...px','...%']默认'600px'
 * @params visible--模态显隐,boolean,默认false
 * @params onChange--模态关闭时的回调,参数是一个函数对象,返回boolean值
 * 例：<Modal width={'400px'} visible={false} onChange={this.closeModal.bind(this)}>
 *          <p>this is some modal content</p>
 *     </Modal>
 */
import React from 'react';
import {createPortal} from 'react-dom';
export default function Modal(props) {
    const {title,width,visible,onChange,children} = props;
    const body = window.document.body;
    const bpr = visible ? '17px' : '';
    const bof = visible ? 'hidden' : '';
    body.style.cssText = 'padding-right:'+ bpr +';overflow:'+bof+';';
    const modalNode = <div className="ui-modal">
        <div className="ui-modal-body" style={{width:width || '600px'}}>
            <div className="ui-modal-head">
                {title}<span onClick={() => onChange(false)}>×</span>
            </div>
            <div className="ui-modal-content">
                { children }
            </div>
            <div className="ui-modal-foot">
                <span className="ui-modal-btn-no" onClick={() => onChange(false)}>取消</span>
                <span className="ui-modal-btn-ok" onClick={() => onChange(true)}>确定</span>
            </div>
        </div>
    </div>;
    return visible && createPortal(modalNode,body);
}

//基于react和antd的confirm和loading模态
import React from 'react';
import { Modal, Icon } from 'antd';

export default function dhConfirm(options, okFn, cancalFn, icon) {
    const opt = { ...options };
    delete options.onOk;
    delete options.onCancel;
    Modal.confirm({
        ...opt,
        icon: icon ? icon : <Icon type="question-circle" style={{ marginRight: '2px', fontSize: '14px', marginTop: '4px' }} />,
        onOk: okFn,
        onCancel: cancalFn || null
    });
}
function LoadingModal() {
    this.modal = null;
}
LoadingModal.prototype.start = function (text) {
    text = text || 'loading...';
    this.modal = Modal.warning({
        title: null,
        content: text,
        width: 320,
        className: 'dh-modal-config-custom',
        maskClosable: false,
        icon: null,
        okText: null,
        cancelText: null,
        closable: false,
        closeIcon: null,
        footer: null
    });
    //默认15秒后关闭
    setTimeout(() => {
        this.close();
    }, 15000);
};
LoadingModal.prototype.close = function () {
    this.modal.destroy();
};
export const loadingModal = new LoadingModal();

import {Modal} from 'ng-zorro-antd-mobile';

/**
 * Dialog 对象
 * @param confirm 弹框
 * @returns null
 * @desc ng-zorro-antd-mobile中弹框
 */

export const Dialog = {
    confirm(title: string,
            content: string,
            sureCB,
            cancelText: string = '否',
            sureText: string = '是',
            cancelCB = () => console.log('cancel')) {
        Modal.alert(title, content, [
            {
                text: cancelText,
                onPress: cancelCB,
                style: {
                    color: '#108ee9'
                }
            },
            {
                text: sureText,
                onPress: sureCB,
                style: {
                    color: '#108ee9'
                }
            }
        ]);
    }
};

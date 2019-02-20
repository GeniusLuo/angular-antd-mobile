/**
 * @method objToFormData
 * @param obj 为obj对象
 * @returns string 返回值
 * @desc 将对象键值转换成FormData类型
 */

export function objToFormData(obj): string {
    let str = '';
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            str += `${key}=${obj[key]}&`;
        }
    }
    return str.replace(/&$/g, '');
}

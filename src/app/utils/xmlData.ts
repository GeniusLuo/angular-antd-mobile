/**
 * @method xmlData
 * @param data 为obj对象
 * @returns object 返回值
 * @desc 将xml格式中的主体内容取出来，以对象方式返回
 */
export function xmlData(data) {
    // 获取节点内容
    const jsonXml = data.response.getElementsByTagName('string')[0].innerHTML;
    // 获得json对象
    return JSON.parse(jsonXml);
}

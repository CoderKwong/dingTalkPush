'use strict';
const crypto = require('crypto');

module.exports = {
  encrypContent(secret) {
    // 参考文档：https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq
    const hamcObj = crypto.createHmac('sha256', secret);
    const timeStamp = +new Date();
    const sign = encodeURIComponent(hamcObj.update(`${timeStamp}\n${secret}`).digest('base64'));
    return `&timestamp=${timeStamp}&sign=${sign}`;
  }
};
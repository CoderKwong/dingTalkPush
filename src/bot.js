'use strict';

const axios = require('axios');
const { encrypContent } = require('./utils');

module.exports = class Bot {
  
  constructor(options) {
    if (!options.webhook && !options.secrect) {
      throw new Error('缺少必须的参数!');
    }
    this.webhook = options.webhook;
    this.secrect = options.secrect;
    this.httpClient = axios;
  }

  sendMsg(content) {
    const strUrl = encrypContent(this.secrect);
    const { httpClient, webhook } = this;
    return httpClient.request(`${webhook}${strUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(content),
    })
  }

  // at: { atMobildes: [], isAtAll: false }
  text(content, at = {}) {
    this.sendMsg({
      msgtype: 'text',
      text: {
        content,
      },
      at,
    })
  }
  
}

'use strict';
const Bot = require('../index');
const test = new Bot({
    webhook: '123',
    secrect: '123132'
});
test.sendMsg({
    msgtype: 'text',
    text: {
      content: '12312'
    },
    at: {
      atMobiles: [
        '15989241210'
      ],
      isAtAll: false
    }
  })
// console.log("test", test)

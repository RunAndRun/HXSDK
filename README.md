# HXSDK

copy 了环信 websdk 和 strophe.js 的源码， 将用在vue中的坑填了一下，然后打包成了一个文件： dist/sdk.js。

将 websdk 放在了window上。

usage:

require('./dist/sdk')

const conn = new window.WebIM.connection({});


注： 报错$iq 等方法找不到，所以将 $iq, $msg ...等方法也放到了 window（全局作用域）上， 目前没找到更好的办法，暂时先这样了。

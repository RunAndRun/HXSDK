# HXSDK

copy 了环信 websdk 和 strophe.js 的源码， 将用在vue中的坑填了一下，然后打包成了一个文件： dist/sdk.js。
将 websdk 放在了window上。
usage:
const websdk = window.websdk.default
const conn = new websdk.connection({})

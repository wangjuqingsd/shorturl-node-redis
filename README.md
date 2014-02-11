shorturl-node-redis
===================

short url maker with node.js and redis

written with webstorm 6.0(IDE)

build by node.js

npm install express,redis,jade

using default redis configuration


===================

encode like this 

http://localhost:3000/make?url=http://baidu.com

remember urlencoding by yourself



decode and jump like this

http://localhost:3000/go/ffdf232

string follow /go/ comes from md5().substr(0,7)


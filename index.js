'use strict';
const fs = require('fs');
const torrent = fs.readFileSync('sample.torrent');
console.log(torrent.toString('utf8'));

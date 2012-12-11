#!/usr/bin/env node
var fs      = require('fs');
var service = require('../blad/bin/blad.js');

var config  = JSON.parse(fs.readFileSync('./config.json'))

service.db.export(config, __dirname, process.exit);
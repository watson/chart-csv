#!/usr/bin/env node
'use strict'

var fs = require('fs')
var path = require('path')
var pump = require('pump')
var multi = require('multistream')

var streams = [
  fs.createReadStream(path.join(__dirname, 'templates', 'head.html')),
  process.stdin,
  fs.createReadStream(path.join(__dirname, 'templates', 'tail.html'))
]

pump(multi(streams), process.stdout)

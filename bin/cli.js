#! /usr/bin/env node
const { program } = require('commander')
const myhelp = require('../lib/core/help')
const mycommander = require('../lib/core/mycommander')

myhelp(program)

mycommander(program)

program.parse(process.argv)
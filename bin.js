#!/usr/bin/env node

const program = require('commander')
const dzh = require('./dist/dzh.common.js')

program
  .version('1.0.0')
  .option('-n, --number <value>', 'number of greetings, 1 by default', parseInt)
  .parse(process.argv)

const times = Number(program.number) || 1

for (let i = 0; i < times; i++) {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log(i + 1, dzh.say())
  }, 500)
}

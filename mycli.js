#!/usr/local/bin/node
console.log('My First CLI')
const args = process.argv.slice(2);
const dir = args[0];
const name = args[1].split('--name=')[1];

console.log({
  dir,
  name,
});


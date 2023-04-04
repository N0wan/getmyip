#!/usr/bin/env node

const { program } = require('commander');
const { getPublicIP } = require('./lib/getpublicip');

program.version('1.0.0');

program
  .description('Get your public IP address')
  .action(() => {
    getPublicIP()
      .then((ip) => {
        console.log(ip);
      })
      .catch((err) => {
        console.error(err);
      });
  });

program.parse(process.argv);


#!/usr/bin/env node

const https = require('https');
const { program } = require('commander');

program.version('1.0.0');

program
  .description('Get your public IPv4 address')
  .action(() => {
    getMyIP()
      .then((ip) => {
        console.log(ip);
      })
      .catch((err) => {
        console.error(err);
      });
  });

function getMyIP() {
  return new Promise((resolve, reject) => {
    https.get('https://api.ipify.org', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

program.parse(process.argv);

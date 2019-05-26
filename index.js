'use strict';

const app = require('./app');

require('greenlock-express')
  .create({
    version: 'draft-12',
    configDir: '~/.config/acme',
    server: 'https://acme-v02.api.letsencrypt.org/directory',
    approveDomains: function approveDomains(opts, certs, cb) {
      if (certs) {
        opts.domains = certs.altnames;
      } else {
        opts.email = 'jinnysuh2006@gmail.com';
        opts.agreeTos = true;
      }

      cb(null, { options: opts, certs });
    },
    app
  })
  .listen(80, 443);

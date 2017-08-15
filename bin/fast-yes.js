#!/usr/bin/env node

'use strict';

process.title = 'fast-yes';

const YesStream = require('../yes');
const yes = new YesStream(process.argv[2] || 'y');

yes.pipe(process.stdout);
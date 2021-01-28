require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const a = require('./module1');

a.doSomething();
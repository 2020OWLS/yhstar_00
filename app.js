const express = require('express');
const vhost = require('vhost');
 
const excel_to_json = require('../excel-to-json/app');
const mailer = require('../mailer/app');
 
const app = express();
 
app.use(vhost('xo.2.htm', excel_to_json));
app.use(vhost('xo.3.htm', mailer));
 
app.use(express.static('static'));
 
app.use((req, res) => {
    res.status(404).send('Page Not Found!')
});
 
app.listen(3000, () => {
    console.log('HostManager listening on port 3000');
});
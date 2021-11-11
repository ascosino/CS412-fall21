const express = require('express');
const router = express.Router();
const request = require('request');

// var promisify = require('promisify');

/* GET home page. */
router.get('/', function(req, res, next) {
  return new Promise ((resolve, reject) => {
    request('http://kidpub.com', (err, response, body) => {
      if (respnse.statusCode == 200) {
        resolve(body);
      } else {
        reject('bad call');
        // reject(response);
      }
    });
    res.render('index', { title: body });
  })
      .then((result) => {
        // resolve
        res.render('index', {title: result})
      },
      // reject
      (result) => {
        res.render('index', { title: result });
        // res.render('index', { title: response.statusMessage });
      }
  );

});

module.exports = router;

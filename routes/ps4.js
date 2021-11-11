const express = require('express');
const router = express.Router();
const request = require('request');
const async = require('async');
const fetch = require('node-fetch');
const {response, json} = require('express');
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const existsAsync = promisify(client.exists).bind(client);
const setAsync = promisify(client.set).bind(client);
const expireAsync = promisify(client.expire).bind(client);

client.flushdb((err, success) => {
    if (err) {
        throw new Error(err)
    }
});

router.post('/', function (req, res, next) {
    const numFacts = req.params.inputValue;
    client.exists(numFacts, (err, match) => {
        if (err) {
            throw new Error(err)
        }
        if (match) {
            client.get(numFacts, (err, response) => {
                console.table(response);
                res.send(JSON.stringify(response + ' cached '))
            })

        } else {
            const reversedName = numFacts.split('').reverse().join('');
            client.set(numFacts, reversedName, 'EX', 15, (err, response) => {
                console.table(response);
                res.send(JSON.stringify(reversedName + ' not cached '))
            })
        }
    })
});

async function factsAsync() {
    const url = 'https://api.api-ninjas.com/v1/facts?limit='
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    return fx
}

factsAsync()
    .then(function (fx) {
        console.log('Random fact is: ${fx}')
    },
        (err) => console.log('${err}')
        )
    .then(() => console.log('All done!'))

router.route('/')
    .get(function (req, res, next) {
        console.log('Starting waterfall')
        async.waterfall(getRandomFact(),
            function renderTable(err, result, randomFact) {
                if (err) {
                    res.render('ps4', {result: 'Error processing'})
                }
                else {

                    res.render('ps4', {result: result, randFact: randomFact})
                }
            })
    })

const getRandomFact = function (cb) {
    return new Promise(function (resolve, reject) {
        const randomFactsURL = 'https://api.api-ninjas.com/v1/facts?limit='
        let getNumFacts = function (numFacts) {
            return new Promise(function (resolve, reject) {
                request.get(randomFactsURLURL + numFacts, {json: true})
                    .then(function (response) {
                        nFacts = response.data.length
                        console.log(numFacts, nFacts)
                        resolve()
                    })

            })
        }

        Promise()
            .then(function () {
                cb(null, getNumFacts()) //null means no error
            })
            .catch(function (err) {
                console.log(err)
            })

    })
}

module.exports = router;
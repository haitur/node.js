var jsn = require('./mockJson')
// express
const express = require('express')
const app = express()
// express

// lodash
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
// var array = require('lodash/array');
// var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
// lodash


const port = 3000

app.get('/', (req, res) => {

    var list = [1,2,3,4,5,6,7,8,9,99];

    var numDuble = _.map(jsn.jsn,(list)=>{
        return list*list
    });

    // var numGroupBy = _.groupBy(jsn.objectA,'length');
    // var numGroupBy = _.groupBy(list,Math.floor);

    res.send(_.compact(numDuble))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
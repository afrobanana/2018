var ghpages = require('gh-pages')
var pgk = require('../package.json')

console.log(`\n\nDeploying ${ pgk.name }, release ${ pgk.version } to Github...`)

ghpages.publish('public', {
    src: '**/*',
    tag: `release-${ pgk.version }`,
    message: `Release ${ pgk.version }`,
}, function(err) {
    if (err) {
        console.log(err.message || err)
        console.log('---')
        console.log('You are still in gh-pages branch and need to checkout master!')
        console.log('git checkout master')
        console.log('---')
    }
    else {
        console.log(`\n\nRelease ${ pgk.version } deployed to Github!`)
    }
})

#! /usr/bin/env node
// import our packages
import open from 'open'
import fetch from 'node-fetch'
import yargs from 'yargs'

// parse env vars
const { argv } = yargs(process.argv)
// init fetch to reddit api
const res = await fetch('https://www.reddit.com/.json')
const data = await res.json()
const children = data.data.children
const randomIndex = Math.floor(Math.random() * children.length)
const randomPost = children[randomIndex]

if(argv.print){
    console.log(`
    title: ${randomPost.data.title},
    link: ${randomPost.data.permalink}
    `)
}else{
    open(`https://reddit.com${randomPost.data.permalink}`)
}



require('dotenv').config()
//console.log(process.env)



const express = require('express')
const app = express()
//const port = 3000

let apiData={
    "login": "manish",
    "id": 16161,
    "node_id": "MDQ6VXNlcjE2MTYx",
    "avatar_url": "https://avatars.githubusercontent.com/u/16161?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/manish",
    "html_url": "https://github.com/manish",
    "followers_url": "https://api.github.com/users/manish/followers",
    "following_url": "https://api.github.com/users/manish/following{/other_user}",
    "gists_url": "https://api.github.com/users/manish/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/manish/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/manish/subscriptions",
    "organizations_url": "https://api.github.com/users/manish/orgs",
    "repos_url": "https://api.github.com/users/manish/repos",
    "events_url": "https://api.github.com/users/manish/events{/privacy}",
    "received_events_url": "https://api.github.com/users/manish/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Manish Sinha",
    "company": "Amazon",
    "blog": "https://manishsinhav.com/",
    "location": "San Franciso Bay Area, CA",
    "email": null,
    "hireable": null,
    "bio": "Software Engineer @amzn ",
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 4,
    "followers": 39,
    "following": 14,
    "created_at": "2008-07-06T08:14:46Z",
    "updated_at": "2024-04-10T00:26:52Z"
    }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',function(req,res){
    res.send('manish@828132');
})

app.get('/login',function(req,res){
    res.send('<h1>please login </h1>')
})

app.get('/manish',function(req,res){
    res.json(apiData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
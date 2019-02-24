# Next-Serverless

Example Next app Serverless Deployment

## Setup

- Use next normally, configure next with `target: "serverless"`
- add [./next-app/handlers/](./next-app/handlers/) for each lambda function
- define each route and handler manually in [./next-app/serverless.yml](./next-app/serverless.yml)
- build, deploy to aws

with this minimal setup, zipped artifacts are **1.97 MB**


## Building next-app

```sh
mkdir next-app
cd next-app
npm init
npm i -D next@latest react@latest react-dom@latest
```

add next scripts to [./next-app/package.json](./next-app/package.json)

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

create pages and components

see [./next-app](./next-app)

use [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch) to fetch from server or client


### Setting up deployment

the only production dependency should be [aws-serverless-express](https://www.npmjs.com/package/)

```sh
npm i -S aws-serverless-express
```

everything else you need for your app should be a dev dependency, next (webpack) will compile it all into each next 'page'


## Deployment

create [./next-app/next.config.js](./next-app/next.config.js)

create a new serverless [+ app](https://dashboard.serverless.com) in https://dashboard.serverless.com

```sh
npm i
npm run build
serverless deploy
```

## Caveats

### monkey patch

There's a known issue with rollup's static analysis of optional dependencies, I created a monkey patch to deal with it.

see [./next-app/package.json](./next-app/package.json) `scripts monkey:patch:node-fetch`

### glibc

The node-modules that get zipped up need to work with the lambda environment, which means glibc binary needs to be rebuilt.

see [./next-app/package.json](./next-app/package.json) `scripts postinstall`

### handlers

There is no automatic way to wrap each next 'page' as an aws lambda function handler, so for every 'page', create a 'handler' in [./next-app/handlers](./next-app/handlers)

They are all identical, so to create new ones, simply `cp ./next-app/handlers/index.js ./next-app/handlers/new-page.js`

once [next.js/issues/6173](https://github.com/zeit/next.js/issues/6173) is resolved, we can probably remove this.

### serverless functions

Each handler needs to be added to [serverless.yml](./next-app/serverless.yml) functions list

### lambda stages

To support lambda stages ('/dev/')

use relative links

```jsx
<Link href="./starships">Starships</Link>
```

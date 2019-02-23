# Next-Serverless
Example Next app Serverless Deployment

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

use [`isomorphic-unfetch`](https://www.npmjs.com/package/isomorphic-unfetch) to fetch from server or client

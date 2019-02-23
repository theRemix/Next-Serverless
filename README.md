# Next-Serverless
Example Next app Serverless Deployment

## Building next-app

see [./next-app](./next-app)

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

create pages

```sh
mkdir ./next-app/pages
touch ./next-app/pages/index.js
```

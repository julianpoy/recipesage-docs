# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Deployment to https://docs.recipesage.com is handled automatically by GitHub Actions (see `.github/workflows/deploy.yml`) on every push to `main`, which builds the site and publishes the `build` output to the `gh-pages` branch.

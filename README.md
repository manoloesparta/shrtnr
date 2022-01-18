![Shrtnr Logo](./logo.png)

# Shrtnr

> Another shortener but probably no

This is just another shortener but with a big base url. And added a curious functionality named 'Im feeling lucky' that will redirect you to any website that has been shortened with this service lol.

Made with Cloudflare workers, kv and pages to participate in the [Cloudflare Developer Summer Challenge](https://challenge.developers.cloudflare.com/).

## Requirements

These are the tools for the workers

```
wrangler 1.19.3+
```

And this for building pages

```
node 16.9.1+
npm 7.23.0+
```

## Usage

To run locally the works you must setup credentials and run

```bash
$ wrangler dev
```

And to run client

```bash
$ npm install
$ npm run start
```

## License

This project is a submission for a challenge but if applies, is under the MIT license.
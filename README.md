# Next js Blog Boilerplate

<p align="center">
  <a href="https://creativedesignsguru.com/demo/Nextjs-Blog-Boilerplate/"><img src="public/assets/images/nextjs-starter-banner.png?raw=true" alt="Nextjs starter banner"></a>
</p>

🚀 Next.js Blog Boilerplate is starter code for your blog based on Next.js framework. ⚡️ Made with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org), [ESLint](https://eslint.org), [Prettier](https://prettier.io), [PostCSS](https://postcss.org), [Tailwind CSS](https://tailwindcss.com).

Clone this project and use it to create your own [Next.js](https://nextjs.org) blog. You can check a [Next js blog templates demo](https://creativedesignsguru.com/demo/Nextjs-Blog-Boilerplate/).

### Features

Blog feature:

- 🎈 Syntax Highlighting with Prism.js
- 🤖 SEO metadata and Open Graph tags
- ⚙️ JSON-LD for richer indexing
- 📖 Pagination
- 🌈 Include a FREE minimalist blog theme
- ⬇️ Markdown
- 💯 Maximize lighthouse score

Developer experience first:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 💅 [PostCSS](https://postcss.org) for processing [Tailwind CSS](https://tailwindcss.com)
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✏️ Linter with [ESLint](https://eslint.org)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 SEO metadata, [JSON-LD](https://developers.google.com/search/docs/guides/intro-structured-data) and [Open Graph](https://ogp.me/) tags with [Next SEO](https://github.com/garmeeh/next-seo)

Built-in feature from Next.js:

- ☕ Minify HTML & CSS with [HTMLMinifier](https://www.npmjs.com/package/html-minifier)
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Next-js-Blog-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:8080 with your favorite browser to see your project.

```
.
├── _posts            # Your blog posts
├── public            # Static files
│   ├── assets
│   │   └── images
│   │       └── posts # Images used in your blog posts
└── src
    ├── pages         # Next.js pages
    ├── styles        # Your blog CSS files
    └── templates     # Blog templates
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your blog favicon, you can generate from https://favicon.io/favicon-converter/
- `public/assets/images/logo.png`, `public/assets/images/logo-32x32.png`: your blog logo
- `src/styles/main.css`: your blog CSS file using Tailwind CSS
- `src/utils/Config.ts`: configuration file like blog name, url, etc.
- `src/templates/Main.tsx`: blog theme

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `dist` folder, which you can deploy with any hosting service.


### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [Paulo Rodrigues](https://github.com/paulorodrigues99)

# templatemo_553_xtra_blog-react-client

![templatemo_553_xtra_blog-react-client ](/)

# Description

Blogging Web application based on website template downloaded from [templatmo](https://templatemo.com/tm-553-xtra-blog).

Built using JS framework React and build tool Vite, this web application allows users to create, read, update and delete blog posts, register and login into user accounts, add comments.

## Features

- User Registration/User Login
- Create, Read, Update and Delete blog posts
- Responsive Design viewable on most mobile devices.

## Tools

- [React](https://react.dev/)
- [Sass](https://sass-lang.com/)
- [Vite](https://nodejs.org/en)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Postcss](https://postcss.org/)
- [Stylelint](https://stylelint.io/)
- [Typescript](https://www.typescriptlang.org/)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Usage

Install packages :

`npm install`

### or

`yarn install`

### or

`pnpm install`

Once packages have been down loaded , To view website:

`npm run dev`

Runs start to start website in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

Runs build to build the application for production usage

`npm run build`

Runs lint to lint styles and scripts files.

`npm run lint`

Run start to view application build for production usage.

`npm run start`

PLEASE NOTE : templatemo_553_xtra_blog-react-client also needs a backend server to make requests and a connection to a MySQL database to work - backend server for templatemo_553_xtra_blog-react-client found at my other respository templatemo_553_xtra_blog-react-server. Or you can create your own server.

# Create folders
mkdir __mocks__ config src public \
    src/components src/layout src/test \
    src/layout/Header src/layout/Footer
# Stub files
touch \
    .gitignore babel.config.js netlify.toml \
    __mocks__/fileMock.js __mocks__/styleMock.js \
    config/webpack.config.js config/webpack.dev.config.js config/webpack.prod.config.js \
    src/index.js src/App.jsx src/style.css\
    public/index.html \
    src/components/index.js src/layout/index.js src/test/setupTests.js \
    src/layout/Header/index.jsx src/layout/Header/style.css src/layout/Footer/index.jsx src/layout/Footer/style.css
# Populate files
tee -a .gitignore << DOC
node_modules
coverage
.DS_Store
DOC
tee -a babel.config.js << DOC
module.exports = {
  "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
  ],
  "plugins": [
      "@babel/plugin-transform-runtime"
  ]
}
DOC
tee -a netlify.toml << DOC
[build]
    command = "npm run build" # how to trigger a build
    publish = "/build" # what folder to publish 
[[redirects]]
    from = "/*" # redirect any path
    to = "/index.html" # to this html page
    status = 200 # with this status
DOC
tee -a __mocks__/fileMock.js << DOC
module.exports="test-file-stub"
DOC
tee -a __mocks__/styleMock.js << DOC
module.exports={}
DOC
tee -a config/webpack.dev.config.js << DOC
const config = require('./webpack.config.js');
config.devServer = {
  historyApiFallback: true,
  port: 8080,
  liveReload: true
};
config.devtool = 'inline-source-map';
module.exports = config;
DOC
tee -a config/webpack.prod.config.js << DOC
const config = require('./webpack.config.js');

config.mode = 'production';
module.exports = config;
DOC
tee -a config/webpack.config.js << DOC
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'index.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
  })],
}
DOC
tee -a public/index.html << DOC
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="A github repository tracker">
      <title>GitRepos - Track your repositories!</title>
  </head>
  <body>
      <div id="root"></div>
  </body>
</html>
DOC
tee -a src/index.js << DOC
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
DOC
tee -a src/layout/index.js << DOC
export { Header } from './Header'
export { Footer } from './Footer'
DOC
tee -a src/test/setupTests.js << DOC
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

global.React = React;
global.render = render;
global.userEvent = userEvent;
DOC
# Create npm package & install dependencies
npm init -y
npm i -D \
    @babel/core @babel/preset-env \
    @babel/plugin-transform-runtime \
    @babel/preset-react \
    jest babel-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event \
    webpack webpack-cli webpack-dev-server html-webpack-plugin \
    babel-loader style-loader css-loader file-loader
npm i \
    react react-dom
# Add npm scripts
npx npm-add-script \
  -k "dev" \
  -v "webpack serve --mode development --config config/webpack.dev.config.js" \
  --force
npx npm-add-script \
  -k "build" \
  -v "webpack --config config/webpack.prod.config.js" \
  --force
npx npm-add-script \
  -k "test" \
  -v "jest --watch --setupFilesAfterEnv ./src/test/setupTests.js --env=jsdom" \
  --force
npx npm-add-script \
  -k "coverage" \
  -v "jest --setupFilesAfterEnv ./src/test/setupTests.js --coverage --watchAll=false --env=jsdom" \
  --force
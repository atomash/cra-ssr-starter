import serialize from 'serialize-javascript';
import assetManifest from '../../../build/asset-manifest.json';


const jsScripts = bundles => {
  const paths = [
    assetManifest['main.js'],
    ...bundles.filter(b => b.file.endsWith('.js')).map(b => b.file)
  ];

  return paths.reduce((string, path) => {
    string += `<script type="text/javascript" src=/${path}></script>`;
    return string;
  }, '');
};

export default props => `
  <!doctype html>
  <html ${props.helmet.htmlAttributes.toString()}>
  <head>
    <meta charset="utf-8">
    ${props.helmet.title.toString()}
    ${props.helmet.base.toString()}
    <meta name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no">
    ${props.helmet.meta.toString()}
    <meta name="theme-color" content="#000000">
    ${props.helmet.link.toString()}
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/favicon.ico">
    <link href="/${assetManifest['main.css']}" rel="stylesheet">
    ${props.helmet.style.toString()}
    ${props.helmet.script.toString()}
  </head>
  <body ${props.helmet.bodyAttributes.toString()}>
  ${props.helmet.noscript.toString()}
  <script type="text/javascript">
    window.INITIAL_STATE = ${serialize(props.initialState)};
    window.isServer = ${serialize(props.isServer)}
  </script>
  <div id="root">${props.appString}</div>
  ${jsScripts(props.bundles)}
  </body>
  </html>
`;

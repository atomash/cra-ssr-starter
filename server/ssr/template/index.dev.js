import serialize from 'serialize-javascript';

const jsScripts = bundles => {
  const paths = [
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
    ${props.helmet.title.toString()}
    <meta charset="UTF-8">
    ${props.helmet.meta.toString()}
    ${props.helmet.link.toString()}
    ${props.helmet.base.toString()}
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
    <script src="/static/js/bundle.js"></script>
    ${jsScripts(props.bundles)}
  </body>
  </html>
`;

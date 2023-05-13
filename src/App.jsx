import { useState, useEffect } from 'react';
import Header from './components/Header';
import Code from './components/code/Code';
import CodeContext from './context/CodeContext';
import { codeHTML, codeCSS, codeJS } from './constants/defaultCode';

const App = () => {
  const [html, setHtml] = useState(codeHTML);
  const [css, setCss] = useState(codeCSS);
  const [js, setJs] = useState(codeJS);

  const [srcDoc, setSrcDoc] = useState(
    `<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>`
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>`
      )
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <CodeContext.Provider value={{html, css, js, setHtml, setCss, setJs}}>
      <div className='editor-container'>
        <Header />
        <Code />
        <div style={{ flex: 1, position: 'relative' }}>
          <iframe
            srcDoc={srcDoc}
            title='output'
            sandbox='allow-scripts'
            frameBorder='0'
          />
        </div>
      </div>
    </CodeContext.Provider>
  );
};

export default App;


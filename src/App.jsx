import { useState, useEffect } from 'react';
import Header from './components/Header';
import Code from './components/code/Code';
import CodeContext from './context/CodeContext';

const App = () => {
  const [codeOptions, setCodeOptions] = useState([]);

  useEffect(() => {
    (async () => {
      const options = [];
      for (let i = 1; i <= 5; i++) {
        const module = await import(
          /* @vite-ignore */
          `./constants/code/example${i}.js`
        );
        options.push(module);
      }
      setCodeOptions(options);
    })();
  }, []);

  const [codeIndex, setCodeIndex] = useState(0);
  const { codeHTML, codeCSS, codeJS } = codeOptions[codeIndex] || {};

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
    if (codeHTML && codeCSS && codeJS) {
      setHtml(codeHTML);
      setCss(codeCSS);
      setJs(codeJS);
    }
  }, [codeIndex, codeHTML, codeCSS, codeJS]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>`
      )
    }, 200);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const shuffleCode = () => {
    const newIndex = (codeIndex + 1) % codeOptions.length;
    setCodeIndex(newIndex);
  };

  if (codeOptions.length === 0) {
    return null; // or render a loading indicator
  }

  return (
    <CodeContext.Provider value={{ html, css, js, setHtml, setCss, setJs, shuffleCode }}>
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

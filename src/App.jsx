import { useState } from 'react';
import Header from './components/Header';
import Code from './components/code/Code';
import { codeHTML, codeCSS, codeJS } from './constants/defaultCode';

const App = () => {
  const [html, setHtml] = useState(codeHTML);
  const [css, setCss] = useState(codeCSS);
  const [js, setJs] = useState(codeJS);

  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  return (
    <div className='editor-container'>
      <Header />
      <Code
        html={html}
        setHtml={setHtml}
        css={css}
        setCss={setCss}
        js={js}
        setJs={setJs}
      />
      <div style={{ flex: 1, position: 'relative' }}>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
        />
      </div>
    </div>
  );
};

export default App;


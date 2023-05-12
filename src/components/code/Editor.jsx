import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

const Editor = ({title, icon, code, setCode}) => {
  const onChange = React.useCallback((value) => {
    setCode(value);
  }, []);

  const languageColor = (language) => {
    if (language === 'HTML') return html();
    if (language === 'CSS') return css();
    return javascript();
  }

  return (
    <div className='editor'>
      <div className='title'>
        <span id={title}>
          <span>{icon}</span>
          {title}
        </span>
      </div>
      <div className='content'>
        <CodeMirror
          value={code}
          height="37.5vh"
          theme="dark"
          extensions={languageColor(title)}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Editor;


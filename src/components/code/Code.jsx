import { useContext } from 'react';
import Editor from './Editor';
import CodeContext from '../../context/CodeContext';

const Code = () => {
  const {html, css, js, setHtml, setCss, setJs} = useContext(CodeContext);
  return (
    <main>
      <Editor title='HTML' icon='/' code={html} setCode={setHtml}/ >
      <Editor title='CSS' icon='*' code={css} setCode={setCss} />
      <Editor title='JS' icon='()' code={js} setCode={setJs} />
    </main>
  )
}

export default Code;



import Editor from './Editor';

const Code = ({html, css, js, setHtml, setCss, setJs}) => {
  return (
    <main>
      <Editor title='HTML' icon='/' code={html} setCode={setHtml}/ >
      <Editor title='CSS' icon='*' code={css} setCode={setCss} />
      <Editor title='JS' icon='()' code={js} setCode={setJs} />
    </main>
  )
}

export default Code;



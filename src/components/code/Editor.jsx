const Editor = ({title, icon}) => {
  return (
    <div className='editor'>
      <div className='title'>
        <span id={title}>
          <span>{icon}</span>
          {title}
        </span>
      </div>
      <div className='content'>
        Content
      </div>
    </div>
  )
}

export default Editor;


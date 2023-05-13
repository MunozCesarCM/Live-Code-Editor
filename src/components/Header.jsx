import { useContext } from 'react';
import CodeContext from '../context/CodeContext';
import { TbTrashX } from 'react-icons/tb';

const Header = () => {
  const {setHtml, setCss, setJs} = useContext(CodeContext);

  const clearText = () => {
    setHtml('');
    setCss('');
    setJs('');
  }

  return (
    <header>
      <h1>Code Editor</h1>
      <TbTrashX
        className='icon'
        onClick={clearText}
      />
    </header>
  )
}

export default Header;

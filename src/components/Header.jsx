import { useContext } from 'react';
import CodeContext from '../context/CodeContext';
import { TbArrowsShuffle, TbTrashX } from 'react-icons/tb';

const Header = () => {
  const { setHtml, setCss, setJs, shuffleCode } = useContext(CodeContext);

  const clearText = () => {
    setHtml('');
    setCss('');
    setJs('');
  }

  return (
    <header>
      <h1>Code Editor</h1>
      <div>
        <TbArrowsShuffle
          className='icon'
          onClick={shuffleCode}
        />
        <TbTrashX
          className='icon'
          onClick={clearText}
        />
      </div>
    </header>
  )
}

export default Header;

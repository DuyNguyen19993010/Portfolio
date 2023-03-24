import '../CSS/App.css';
import {Link} from 'react-router-dom'
import {GlitchText} from 'glitch-text'
function Home() {

  return (
      <div id="Home" className='Tab'>
        
        <div id='menu-options'>
          <p id="name">Duy.N</p>
          <Link to='/Aboutme/'><p className='menu-option'><GlitchText theme='white' text='About Me'/></p></Link>
          <Link to='/Project/'><p className='menu-option'><GlitchText theme='white' text='PR - JEK'/></p></Link>
          <Link to='/Resume/'><p className='menu-option'><GlitchText theme='white' text='Resume'/></p></Link>
        </div>
      </div>
  );
}

export default Home;

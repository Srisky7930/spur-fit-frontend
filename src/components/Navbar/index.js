import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => (
    <nav>
        <div>
            <img className="image-nav" src="https://i.pinimg.com/736x/e9/32/e6/e932e64a76ad1f4c0a14a12e2a18e060.jpg"  alt="img"/>
        </div>
        <ul>
            <li>
                <Link to="/" className='link'> Emotions </Link>
            </li>
            <li>
                <Link to="/manifesto" className='link'> Manifesto </Link>
            </li>
            <li>
                <Link to="/aware" className='link'> Self-Awareness-test  </Link>
            </li>
            <li>
                <Link to="/work" className='link'> Work with us  </Link>
            </li>
        </ul>
        <div>
            <button type="button" className='link'> Download App </button>
        </div>
    </nav>
)


export default Navbar 
import './Main.scss';
import Logo from '../assets/logo.png';

function Main() {
    return (
        <div className="main">
            <img src={Logo} alt="logo"></img>
            <h1>Web Part</h1>
        </div>
    );
}

export default Main;
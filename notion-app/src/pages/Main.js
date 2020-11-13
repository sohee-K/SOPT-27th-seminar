import './Main.scss';
import Logo from '../assets/logo.png';

function Main() {
    return (
        <div className="main">
            <img src={Logo} alt="logo"></img>
            <div>메인 페이지</div>
        </div>
    );
}

export default Main;
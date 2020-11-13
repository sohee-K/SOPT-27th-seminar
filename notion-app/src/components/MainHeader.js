import './MainHeader.scss';
import Button from './Button';
import MenuIcon from '../assets/menu.svg';

function MainHeader({ history }) {
    return(
        <header className="main-header">
            <img className="main-header-icon" src={MenuIcon} alt="main icon" />
            <nav className="main-header__nav">
                <Button text="🕸️ [ON SOPT] Web Part" onClickFunc={() => history.push("/")}/>
                <span> / </span>
                <Button text="⭐ 파트원 소개 *" onClickFunc={() => history.push("/member")}/>
            </nav>
            <div className="empty"></div>
            <div className="main-header__nav">
                <Button text="Share" />
                <Button text="Updates" />
                <Button text="Favorites" />
                <Button text="..." />
            </div>
        </header>
    );
}

export default MainHeader;
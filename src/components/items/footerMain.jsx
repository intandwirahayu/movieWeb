import { iconLove } from '../../assets/images';
import '../css/footerMain.scss';

const FooterMain = () => {
    return(
        <footer id="contentFooter">
            <h4>MovieWeb.</h4>

            <div id="author">
                <p>Made with</p>
                <img src={iconLove}/>
                <p>by Intan 2021</p>
            </div>
        </footer>
    )
}

export default FooterMain;
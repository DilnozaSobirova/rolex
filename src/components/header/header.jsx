import React from 'react'
import "./header.css"
import { useTranslation } from 'react-i18next';
import Logo from '../../images/Logo.svg';

const Header = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <section className='header-box'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <ul className="header-text">
                <li>{t('shop')}</li>
                <li>{t('brands')}</li>
                <li>{t('contact')}</li>
            </ul>
            <div className='header-btn'>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('uz')}>O'zbek</button>
            </div>
            <button className='bars'>
                <i class="fa-solid fa-bars"></i>
            </button>
        </section>

    )
}

export default Header

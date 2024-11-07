import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n'; // i18n konfiguratsiyasini import qilish

const WatchComponent = () => {
    const { t } = useTranslation();

    // Matnni <br /> teglariga aylantirish
    const formatText = (text) => {
        return text.split('\n').map((item, index) => (
            <span key={index}>{item}<br /></span>
        ));
    };

    return (
        <div className="box">
            <h1 className="w-text1">
                {t('title')}
            </h1>
            <h3 className="w-text2">
                {t('subtitle')}
            </h3>
            <p className="p-text1">
                {formatText(t('description'))}
            </p>
            <p className="p-text2">
                {t('price')}
            </p>
        </div>
    );
};

export default WatchComponent;

import React from 'react';
import style from './Contacts.module.css'
import {Contact} from "./Contact";

export const Contacts = () => {
    return (
        <section className={style.contacts}>
            <div className={style.contacts__title}>Contacts</div>
            <div className={style.contacts__subtitle}>Let`s get work with me:</div>
            <div className={style.contacts__row}>
            <Contact text={'Saint-Petersburg'} label={'adress'} link={'https://yandex.ru/maps/2/saint-petersburg/'}/>
            <Contact text={'github.com.io:'} label={'Git Hub'} link={'https://github.com/MolodovA'}/>
            <Contact text={'Molodov'} label={'In'} link={'/'}/>
            <Contact text={'post@.com'} label={'email'} link={'/'}/>
            </div>
        </section>
    );
};


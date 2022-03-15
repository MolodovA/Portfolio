import React from 'react';
import style from './Contacts.module.scss'
import {Contact} from "./Contact";
import Title from '../Title/Title';

export const Contacts = () => {
    return (
        <section className={style.contacts}>
           <Title title='Contacts'/>
            <div className={style.contacts__subtitle}>Let`s get work with me:</div>
            <div className={style.contacts__row}>
            <Contact text={'Saint-Petersburg'} label={'adress'} link={'https://yandex.ru/maps/2/saint-petersburg/'}/>
            <Contact text={'github.com.io:'} label={'Git Hub'} link={'https://github.com/MolodovA'}/>
            <Contact text={'Molodov'} label={'LinkedIn'} link={'/*'}/>
            <Contact text={'post@blavla.com'} label={'email'} link={'/*'}/>
            </div>
        </section>
    );
};


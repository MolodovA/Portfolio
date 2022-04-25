import React from 'react';
import style from './Contacts.module.scss'
import {Contact} from "./Contact";
import Title from '../Common/Title/Title';

export const Contacts = () => {
    return (
        <section className={style.contacts} id='contacts'>
            <Title title='Contacts'/>
            <div className={style.contacts__subtitle}>Let`s get work with
                me:
            </div>
            <div className={style.contacts__row}>
                <Contact text={'@Molodov_Aleksandr'} label={'Telegram'}
                         link={'https://t.me/Molodov_Aleksandr'}/>
                <Contact text={'molodov.aleksandr17@mail.ru'} label={'Email'}
                         link={'mailto:molodov.aleksandr17@mail.ru'}/>
                <Contact text={'https://github.com/MolodovA'} label={'Git Hub'}
                         link={'https://github.com/MolodovA'}/>
                <Contact text={'Saint-Petersburg , Russia'} label={'Address'}
                         link={'https://yandex.ru/maps/2/saint-petersburg/'}/>
            </div>
        </section>
    );
};


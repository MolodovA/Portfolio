import React from 'react';
import {Nav} from "../Nav/Nav";
import style from './Header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__row}>
                    <div className={style.header__logo}>
                        Alex
                    </div>
                    <Nav/>
                </div>
            </div>
        </header>
    );
};


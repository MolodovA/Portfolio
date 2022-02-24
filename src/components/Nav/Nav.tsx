import React, {useRef} from 'react';
import style from './Nav.module.css'
import {Link} from "react-router-dom";
export const Nav = () => {
    return (
        <div className={style.menu}>
            <div className={style.menu__body}>
                <label  className={style.menu__btn} >
                    <span></span>
                </label>
        <ul className={style.list}>
            <li className={style.list__item}>
                <Link className={style.list__link} to={'/about'}>about</Link>
            </li>
            <li className={style.list__item}>
                <Link  className={style.list__link} to={'/skills'}>skills</Link>
            </li>
            <li className={style.list__item}>
                <Link className={style.list__link} to={'/projects'}>projects</Link>
            </li>
            <li className={style.list__item}>
                <Link className={style.list__link} to={'/contacts'}>contacts</Link>
            </li>
        </ul>
            </div>
        </div>
    );
};


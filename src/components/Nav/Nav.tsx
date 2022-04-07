import React, {useState} from 'react';
import style from './Nav.module.scss'

import {Link} from "react-scroll";
import { useEffect } from 'react';


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
export const Nav = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(true)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const onChangeClick = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <div className={style.menu}>
            <div className={style.menu__body}>
                <label className={style.menu__btn} onClick={onChangeClick}>
                    <span></span>
                </label>
                <ul className={isOpenMenu &&  windowDimensions.width < 767? style.show : style.list  }>
                    <li className={style.list__item}>
                        <Link
                            className={style.list__link}
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={onChangeClick}
                        >About me</Link>
                    </li>
                    <li className={style.list__item}>
                        <Link
                            className={style.list__link}
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={onChangeClick}
                        >Skills</Link>
                    </li>
                    <li className={style.list__item}>
                        <Link
                            className={style.list__link}
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={onChangeClick}
                        >Projects</Link>
                    </li>
                    <li className={style.list__item}>
                        <Link
                            className={style.list__link}
                            to="contacts"
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={onChangeClick}
                        >Contacts</Link>
                    </li>


                </ul>
            </div>
        </div>
    );
};


import React from 'react';
import style from './Projects.module.scss'
import {Link} from "react-router-dom";

type ProjectPropsType = {
    title:string
    photo:string
}
export const Project = ({title , photo }:ProjectPropsType) => {
    return (
        <div className={style.column}>
            <div className={style.item}>
                <div className={style.title}>{title}</div>
                <Link to={'/'} className={style.link}>{photo}</Link>
            </div>
        </div>

    );
};


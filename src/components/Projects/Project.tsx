import React from 'react';
import style from './Projects.module.scss'
import {Link} from "react-router-dom";

type ProjectPropsType = {
    title:string
    photo: any
}
export const Project = ({title , photo }:ProjectPropsType) => {
    return (
        <div className={style.column}>
            <div className={style.item}>
                <div className={style.title}>{title}</div>
                <Link to={'/'} className={style.link}><img src={photo} alt="project logo"/></Link>
            </div>
        </div>

    );
};


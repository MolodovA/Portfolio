import React from 'react';
import style from './Projects.module.scss'

type ProjectPropsType = {
    title: string
    photo: string
    link: string
}
export const Project = ({title, photo, link}: ProjectPropsType) => {
    return (
        <div className={style.column}>
            <div className={style.item}>
                <div className={style.title}>{title}</div>
                <a target='_blank' href={link} className={style.link}>
                    <img src={photo} alt="project logo"/></a>
            </div>
        </div>

    );
};


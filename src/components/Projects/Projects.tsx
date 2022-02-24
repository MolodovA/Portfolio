import React from 'react';
import style from './Projects.module.css'
import {Link} from "react-router-dom";
import {Project} from "./Project";

export const Projects = () => {
    return (
        <section className={style.projects}>
            <h2 className={style.projects__title}>My work</h2>
            <div className={style.row}>
                <Project title={'Todolist'} photo={'image'}/>
                <Project title={'Network'} photo={'image'}/>
                <Project title={'Counter'} photo={'image'}/>
                <Project title={'project#4'} photo={'image'}/>
            </div>
        </section>
    );
};


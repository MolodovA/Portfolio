import React from 'react';
import style from './Projects.module.scss'
import {Project} from "./Project";
import Title from '../Common/Title/Title';
// @ts-ignore
import Flip from 'react-reveal/Flip';

export const Projects = () => {
    return (
        <section className={style.projects}>
            <Flip left>
            <Title title={'My works'}/>
                <div className={style.row}>
                    <Project title={'Todolist'} photo={'image'}/>
                    <Project title={'Network'} photo={'image'}/>
                    <Project title={'Counter'} photo={'image'}/>
                    <Project title={'project#4'} photo={'image'}/>
                </div>
            </Flip>
        </section>
    );
};


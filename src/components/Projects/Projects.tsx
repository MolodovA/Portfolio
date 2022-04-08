import React from 'react';
import style from './Projects.module.scss'
import {Project} from "./Project";
import Title from '../Common/Title/Title';
// @ts-ignore
import Flip from 'react-reveal/Flip';
import socialNetworkDemo from "../../assets/image/socialNetworkdemo.jpg"
import todolistDemo from "../../assets/image/todolistDemo.png"
export const Projects = () => {
    return (
        <section className={style.projects} id={'projects'}>
            <Flip left>
            <Title title={'My works'}/>
                <div className={style.row}>
                    <Project link={'https://molodova.github.io/Todolist/'} title={'Todolist'} photo={todolistDemo}/>
                    <Project link={''} title={'Social Network'} photo={socialNetworkDemo}/>
                </div>
            </Flip>
        </section>
    );
};


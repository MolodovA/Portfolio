import React from 'react';
import style from './Skills.module.scss'
import {Skill} from "./Skill";
import Title from '../Common/Title/Title';
import redux from '../../assets/image/redux.svg'
import html from '../../assets/image/html.svg'
import css from '../../assets/image/css.svg'
import js from '../../assets/image/js.svg'
import react from '../../assets/image/react.svg'
import ts from '../../assets/image/ts.svg'
import storybook from '../../assets/image/storybook.svg'
import materialUI from '../../assets/image/materialUI.svg'
import github from '../../assets/image/github.svg'
import tests from '../../assets/image/tests.svg'
import api from '../../assets/image/api.png'
// @ts-ignore
import Flip from 'react-reveal/Flip';


export const Skills = () => {
    return (

        <section className={style.skills} id={'skills'}>
            <Flip left>
            <Title title={'Skills'}/>
            <div className={style.skills__row}>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, vero.'}  icon={<img src={html} alt="html logo"/>} label={'HTML5'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, sed.'} icon={<img src={css} alt="css logo"/>} label={'CSS3'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, eaque?'} icon={<img src={js} alt="js logo"/>} label={'Java Script'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, omnis.'} icon={<img src={react} alt="react logo"/>} label={'React'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptatibus.'} icon={
                    <img src={redux} alt="redux logo"/>} label={'Redux'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, vitae.'} icon={<img src={ts} alt="ts logo"/>} label={'Type Script'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, vitae!'} icon={<img src={api} alt="api logo"/>} label={'REST API'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, non?'} icon={<img src={tests} alt="unit test logo"/>} label={'UNIT TEST'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, explicabo.'} icon={<img src={storybook} alt="storybook logo"/>} label={'Storybook'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.'} icon={<img src={materialUI} alt="materialUI logo"/>} label={'material ui'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, nobis?'} icon={<img src={github} alt="gitHub logo"/>} label={'Git Hub'}/>
            </div>
            </Flip>
        </section>



    );
};


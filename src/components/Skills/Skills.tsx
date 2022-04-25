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
                    <Skill
                        description={''}
                        icon={<img src={js} alt="js logo"/>}
                        label={'Java Script'}/>
                    <Skill
                        description={''}
                        icon={<img src={react} alt="react logo"/>}
                        label={'React'}/>
                    <Skill
                        description={''}
                        icon={
                            <img src={redux} alt="redux logo"/>}
                        label={'Redux'}/>
                    <Skill
                        description={''}
                        icon={<img src={ts} alt="ts logo"/>}
                        label={'Type Script'}/>
                    <Skill
                        description={''}
                        icon={<img src={api} alt="api logo"/>}
                        label={'REST API'}/>
                    <Skill
                        description={''}
                        icon={<img src={tests} alt="unit test logo"/>}
                        label={'UNIT TEST'}/>
                    <Skill
                        description={''}
                        icon={<img src={html} alt="html logo"/>}
                        label={'HTML5'}/>
                    <Skill
                        description={''}
                        icon={<img src={css} alt="css logo"/>} label={'CSS3'}/>


                    <Skill
                        description={''}
                        icon={<img src={storybook} alt="storybook logo"/>}
                        label={'Storybook'}/>
                    <Skill
                        description={''}
                        icon={<img src={materialUI} alt="materialUI logo"/>}
                        label={'material ui'}/>
                    <Skill
                        description={''}
                        icon={<img src={github} alt="gitHub logo"/>}
                        label={'Git Hub'}/>
                </div>
            </Flip>
        </section>


    );
};


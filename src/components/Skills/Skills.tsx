import React from 'react';
import style from './Skills.module.scss'
import {Skill} from "./Skill";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5, faJs, faReact, faCss3, faBootstrap,faGithub} from '@fortawesome/free-brands-svg-icons'
import Title from '../Title/Title';


export const Skills = () => {
    return (
        <section className={style.skills}>
            <Title title={'Skills'}/>
            <div className={style.skills__row}>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, vero.'}  icon={<FontAwesomeIcon icon={faHtml5}/>} label={'HTML5'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, sed.'} icon={<FontAwesomeIcon icon={faCss3}/>} label={'CSS3'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, eaque?'} icon={<FontAwesomeIcon icon={faJs} />} label={'Java Script'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, omnis.'} icon={<FontAwesomeIcon icon={faReact} />} label={'React'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptatibus.'} icon={'icon'} label={'Redux'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, vitae.'} icon={'icon'} label={'Type Script'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, culpa.'} icon={<FontAwesomeIcon icon={faBootstrap} />} label={'Bootstrap'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, vitae!'} icon={'icon'} label={'REST API'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, non?'} icon={'icon'} label={'UNIT TEST'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, explicabo.'} icon={'icon'} label={'Storybook'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.'} icon={'icon'} label={'material ui'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, nobis?'} icon={<FontAwesomeIcon icon={faGithub} />} label={'Git Hub'}/>
            </div>
        </section>


    );
};


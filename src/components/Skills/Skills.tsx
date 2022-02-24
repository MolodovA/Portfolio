import React from 'react';
import style from './Skills.module.css'
import {Skill} from "./Skill";

export const Skills = () => {
    return (
        <section className={style.skills}>
            <h2 className={style.skills__title}>Skills</h2>
            <div className={style.skills__row}>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, vero.'}  icon={'icon'} label={'HTML5'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, sed.'} icon={'icon'} label={'CSS3'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, eaque?'} icon={'icon'} label={'Java Script'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, omnis.'} icon={'icon'} label={'React'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptatibus.'} icon={'icon'} label={'Redux'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, vitae.'} icon={'icon'} label={'Type Script'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, culpa.'} icon={'icon'} label={'Bootstrap'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, vitae!'} icon={'icon'} label={'REST API'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, non?'} icon={'icon'} label={'UNIT TEST'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, explicabo.'} icon={'icon'} label={'Storybook'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.'} icon={'icon'} label={'material ui'}/>
                <Skill description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, nobis?'} icon={'icon'} label={'Git Hub'}/>
            </div>
        </section>


    );
};


import React from 'react';
import style from './Skills.module.css'

type SkillPropsType = {
    icon:string
    label:string
    description:string
}
export const Skill = (props:SkillPropsType) => {
    return (
        <div className={style.column}>
            <div className={style.item}>
                <div className={style.item__icon}>{props.icon}</div>
                <div className={style.item__label}> {props.label}</div>
                <div className={style.item__description}> {props.description}</div>
            </div>
        </div>
    );
};


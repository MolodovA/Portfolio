import React from 'react';
import style from "./Contacts.module.scss";

type ContactPropsType = {
    link:string
    label:string
    text:string
}
export const Contact = (props:ContactPropsType) => {
    return (
        <div className={style.contact}>{props.label}:
            <a className={style.link}  href={props.link}><span className={style.title__link}>{props.text}</span></a>
        </div>
    );
};


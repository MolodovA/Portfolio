import React from 'react';
import style from "./Contacts.module.css";

type ContactPropsType = {
    link:string
    label:string
    text:string
}
export const Contact = (props:ContactPropsType) => {
    return (
        <div className={style.contact}>{props.label}:
            <a  href={props.link}>{props.text}</a>
        </div>
    );
};


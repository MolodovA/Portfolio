import React from 'react';
import style from './title.module.scss'
type TitlePropsType={
    title:string
}
const Title = ({title}:TitlePropsType) => {
    return (
        <h2 className={style.title}>{title}</h2>
    );
};

export default Title;
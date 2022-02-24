import React from 'react';
import style from './AboutMe.module.css'

export const AboutMe = () => {
    return (
        <section className={style.about}>
            <div className={style.about__column}>
                <div className={style.about__image}>
                    <img
                        src="https://econet.ru/media/1077/covers/70297/original.jpg?1435329328"
                        alt="my photo"/>

                </div>
            </div>
            <div className={style.about__column + ' ' + style.about__column_text}>
                <h3 className={style.about__subtitle}>Hi every there </h3>
                <h1 className={style.about__title}> My name is Aleksandr Molodov</h1>
                <p>I'm frontend developer with
                    experience in creating SPA.
                    I am using React(JS/TS), Redux, HTML & CSS. Now
                    I improving my skills in this
                    direction.I would like to find full-time employment in a company with
                    a modern approach to development and a
                    collaborative team.</p>

            </div>
        </section>
    );
};


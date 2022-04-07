import React from 'react';
import Particles from 'react-tsparticles';
import style from './AboutMe.module.scss'
//@ts-ignore
import ReactTypingEffect from 'react-typing-effect';



export const AboutMe = () => {
    return (



        <section className={style.about}>

            <Particles options={{
                    background: {
                        color: {
                            value: "black",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 0,
                                opacity: 1,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.2,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}/>
            <div className={style.about__column}>
                <div className={style.about__image}>
                    <img
                        src="https://econet.ru/media/1077/covers/70297/original.jpg?1435329328"
                        alt="my photo"/>

                </div>
            </div>
            <div className={`${style.about__column}  ${style.about__column_text}`}>
                <h3 className={style.about__subtitle}>Hi every there </h3>
                <h1 className={style.about__title}> My name is Aleksandr Molodov</h1>
                <h2 className={style.about__position}>
                    <ReactTypingEffect
                        text={["Frontend Developer"]} speed={200} eraseDelay={3000} typingDelay={1000}
                    />
                </h2>

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


import s from './Slide.module.css'

import reactIcon from "../../../../assets/images/react.png"
import htmlIcon from "../../../../assets/images/html.png"
import cssIcon from "../../../../assets/images/css.png"
import jsIcon from "../../../../assets/images/js.webp"
import tsIcon from "../../../../assets/images/typescript.png"
import tailwindIcon from "../../../../assets/images/tailwind.svg"


import pythonIcon from "../../../../assets/images/python.png"

export const Slide = () => {



    return (
        <>
            <section className={'container ' + s.slide + ' ' + s.fadeout__horizontal}>
                <h3 className={s.slide__h}>Технологии, которыми я владею:</h3>
                <div className={s.slide__row}>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={htmlIcon} alt="" />
                        <div className={s.slide__el}>
                            HTML
                        </div>
                    </div>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={cssIcon} alt="" />
                        <div className={s.slide__el}>
                            CSS
                        </div>
                    </div>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={jsIcon} alt="" />
                        <div className={s.slide__el}>
                            JS
                        </div>
                    </div>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={reactIcon} alt="" />
                        <div className={s.slide__el}>
                            React
                        </div>
                    </div>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={tailwindIcon} alt="" />
                        {/* <div className={s.slide__el}>
                            React
                        </div> */}
                    </div>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={tsIcon} alt="" />
                        <div className={s.slide__el}>
                            Typescript
                        </div>
                    </div>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={pythonIcon} alt="" />
                        {/* <div className={s.slide__el}>
                            Typescript
                        </div> */}
                    </div>


                    {/* Дубликат */}
                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={htmlIcon} alt="" />
                        <div className={s.slide__el}>
                            HTML
                        </div>
                    </div>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={cssIcon} alt="" />
                        <div className={s.slide__el}>
                            CSS
                        </div>
                    </div>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={jsIcon} alt="" />
                        <div className={s.slide__el}>
                            JS
                        </div>
                    </div>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={reactIcon} alt="" />
                        <div className={s.slide__el}>
                            React
                        </div>
                    </div>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={tailwindIcon} alt="" />
                        {/* <div className={s.slide__el}>
                            React
                        </div> */}
                    </div>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={tsIcon} alt="" />
                        <div className={s.slide__el}>
                            Typescript
                        </div>
                    </div>

                    <div className={s.slide__item}>
                        <img className={s.slide__img} src={pythonIcon} alt="" />
                        {/* <div className={s.slide__el}>
                            Typescript
                        </div> */}
                    </div>

                </div>
            </section>
        </>
    )
}
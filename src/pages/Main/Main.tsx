import s from './Main.module.css';
import avatar from '../../assets/images/avatar.png';
import { Survey } from './components/Survey/Survey';
import { Slide } from './components/Slide/Slide';
import { Projects } from './components/Projects/Projects';

export const Main = () => {

    return (
        <>
            <main className={s.main}>
                <section className={s.rowImgDesc + ' container'}>
                    <div className={s.avatar}>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className={s.desc}>
                        <div className={s.welcome}>
                            <h3>Добро пожаловать!</h3>
                        </div>

                        <ul className={s.chars}>
                            <li>веб-разработчик</li>
                            <li>программист</li>
                            <li>игродел</li>
                            <li>мыслитель</li>
                            <li>стартапер</li>
                            <li>хороший человек</li>
                        </ul>
                        <div className={s.name}>
                            Данил Куляев
                        </div>
                    </div>
                </section>
                <section className={s.history + ' container'}>
                    <div className={s.history__text}>
                        Моя история веб-разработчика началась с этого сайта, поэтому он мне очень дорог!
                    </div>
                    <div className={s.history__text}>
                        На нём я делаю эксперименты, реализую новые технологии и тд.
                    </div>
                </section>
                <Survey />
                <Slide/>
                <Projects />
            </main>
        </>
    )

}
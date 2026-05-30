import s from './Projects.module.css'

import personalSite from '../../../../assets/images/personal-site.png'
import debateApp from '../../../../assets/images/debateApp.jpg'
import secretCode from '../../../../assets/images/secretCode.jpg'
import starInSpace from '../../../../assets/images/starInSpace.png'

import { Project } from './components/Project/Project'

export const Projects = () => {

    return (
        <section className={s.projects} id="projects">
            <h3 className={s.projects__h}>Мои проекты</h3>
            <div className={s.projects__list}>
                <Project
                    href="/"
                    img={personalSite}
                    name="Личный сайт-визитка"
                    desc="Этот самый сайт с уникальным дизайном и адаптивной вёрсткой."
                    techs={['Vite', 'React', 'Typescript']}
                    year="2023"
                />
                <Project
                    href='https://vk.com/app52818841'
                    img={secretCode}
                    name="Секретный код"
                    desc="Игра-головоломка в VK Mini Apps по разгадыванию тайн секретной организации."
                    techs={['Vite', 'React']}
                    year="2024"
                />
                <Project
                    href='https://vk.com/app54157183'
                    img={debateApp}
                    name="Дебат Арена"
                    desc="Мини-приложение в VK Mini Apps для дебатов 1 на 1. Игроки выбирают темы, аргументируют позиции и голосуют за победителя."
                    techs={['Vite', 'React', 'Express js', 'WebSocket']}
                    year="2025"
                />
                <Project
                    href='https://games.pikabu.ru/game/zvezda-v-kosmose'
                    img={starInSpace}
                    name="Звезда в космосе"
                    desc="Исследуйте космос, побеждайте врагов и собирайте всё, что светится. Верните звёздочкам мирное время!"
                    techs={['JavaScript','Phaser']}
                    year="2026"
                />
            </div>

        </section>
    )

}
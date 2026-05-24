import s from './Header.module.css'

export const Header = () => {

    return (
        <>
            <header className={s.header}>
                <nav className={s.menu}>
                    <ul className={s.menu__list}>
                        <li className={s.active}>Главная</li>
                        <li>Интернет-магазин</li>
                        <li>Проекты</li>
                    </ul>
                    {/* <ul className={s.menu__mobile}>
                        <li className={s.active}>Главная</li>
                        <li>Интернет-магазин</li>
                        <li>Проекты</li>
                    </ul> */}
                    <details className={s.menu__mobile}>
                        <summary className={s.menu__mobile__summary}>
                            <div className={s.menu__burger}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </summary>
                        <ul className={s.dropdown_list}>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Интернет-магазин</a></li>
                            <li><a href="#">Проекты</a></li>
                        </ul>
                    </details>

                </nav>
                <div className={s.empty}>
                </div>
                <div className={s.buttons}>
                    <button className={s.loginButton}>Войти</button>
                    <button>Зарегистрироваться</button>
                </div>
            </header>
        </>
    )

}
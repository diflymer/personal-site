import s from './Header.module.css'

export const Header = () => {

    return (
        <>
            <header className={s.header}>
                <nav className='menu'>
                    <ul>
                        <li>Главная</li>
                        <li>Интернет-магазин</li>
                        <li>Проекты</li>
                    </ul>
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
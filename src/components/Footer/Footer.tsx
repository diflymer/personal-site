import s from "./Footer.module.css"
import vkIcon from '../../assets/images/vk.svg'
import tgIcon from '../../assets/images/tg.png'

export const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <>
            <footer className={s.footer}>
                <div className={s.social}>
                    <p className={s.social__text}>Социальные сети:</p>
                    <div className={s.social__icons}>
                        <a href="https://vk.com/dkulyaev">
                            <img src={vkIcon} alt="vkIcon" width={35} height={35} />
                        </a>
                        <a href="https://t.me/diflymer">
                            <img src={tgIcon} alt="tgIcon" width={35} height={35} />
                        </a>
                    </div>
                </div>
                <div className={s.copyright}>
                    © {year} Copyright: Danil Kulyaev
                </div>
            </footer>
        </>
    )
}
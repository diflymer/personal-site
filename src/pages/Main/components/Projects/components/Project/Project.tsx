import s from './Project.module.css'

export const Project = ({ href, img, name, desc, techs, year }) => {

    return (
        <a href={href} className={s.project}>
            <div className={s.project__img}>
                <img className={s.project__img} src={img} alt="" />
            </div>
            <div className={s.project__container}>
                <h4 className={s.project__name}>{name}</h4>
                <p className={s.project__desc}>{desc}</p>
                <div className={s.project__techs}>
                    {techs.map(tech =>
                        <div key={tech} className={s.project__tech}>{tech}</div>
                    )}
                </div>
                <p className={s.project__year}>{year}</p>
            </div>
        </a>
    )

}
import "./index.scss"

const Links = ({ links , title , openNav }) =>{

    const className = `linkBox ${openNav ? "open" : "close"}`


    return <div className={className}>
        <p>{title}</p>
        {
            links.map((el ,i) => (
                <a key={i} href={el.link}>
                    <span>
                       {el.icon}
                    </span>
                    <p>{el.title}</p>
                </a>
            ))
        }
    </div>
}
export default Links
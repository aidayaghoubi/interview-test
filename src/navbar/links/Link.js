import "./index.scss";

const Links = ({ links , title , openNav }) => (
    <div className={`linkBox ${openNav ? "show" : "hide"}`}>
        <p className="links-title">{title}</p>
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
);

export default Links;
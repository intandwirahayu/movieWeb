import "../css/contentItemHeader.scss";

const ContentItemHeader = (props) => {
    return(
        <header className="headerItemContent">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </header>
    )
}

export default ContentItemHeader;
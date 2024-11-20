import '../style/title-gallery/title.css';

const Title = (props) => {
    return(
        <div className="title-container">
                <h1 className="title">{props.title}</h1>
        </div>
    )
}

export default Title;
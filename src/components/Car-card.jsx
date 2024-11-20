import '../style/car-gallery/card-gallery.css';

const Car = (props) => {
    return(
        <div className="card">
            <img src={props.img} alt="car image" className="img" />
            <section className="text-container">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-info">{props.info}</p>
            </section>
            <button className="rentBtn">Rent now</button>
        </div>
    )
}

export default Car;
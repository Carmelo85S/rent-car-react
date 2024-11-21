import '../style/car-gallery/card-gallery.css';

const Car = (props) => {
    return(
        <div className="card-wrapper">
            <section className="card-container">
                <section className="card">
                    <img src={props.img} alt="car image" className="img" />
                    <section className="text-container">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-info">{props.info}</p>
                    </section>
                    <button className="rentBtn">Rent now</button>
                </section>
            </section>
        </div>
    )
}

export default Car;
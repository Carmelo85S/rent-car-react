import '../../style/home/how-to-book/how-to-book.css';

const HowToBook = () => {
    const data = [
        {
            step: "Step #1",
            title: "Choose a vehicle",
            info: "Browse our selection to find the ideal vehicle for your needs and style.",
        },
        {
            step: "Step #2",
            title: "Book on line",
            info: "Easily book your chosen vehicle through our simple online platform.",
        },
        {
            step: "Step #3",
            title: "Receive a vehicle",
            info: "Pick up your vehicle at the designated location and get ready to drive.",
        },
        {
            step: "Step #4",
            title: "Enjoy the ride",
            info: "Hit the road and enjoy your journey with your chosen vehicle.",
        },
        {
            step: "Step #5",
            title: "Return vehicle",
            info: "Return the vehicle to the specified drop-off location.",
        }
    ]

    return(
        <div className='how-to-book-wrapper'>
            <section className="how-to-book-container">
            {data.map((item, index) => (
                <div key={index} className="how-to-book-step">
                    <h3 className="step-title">{item.step}</h3>
                    <h4 className="title">{item.title}</h4>
                    <p className="info">{item.info}</p>
                </div>
            ))}
            </section>
        </div>
    )
}

export default HowToBook;
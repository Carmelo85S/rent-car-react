import '../../style/home/review/review.css';

const Review = () => {

    const data = [
        {
            name: "Carla",
            location: "Stockholm",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ducimus, in optio autem, cum debitis architecto asperiores magni iure fugit sed eligendi, illum facere ut! Ipsum eaque eos amet dolores."
        },
        {
            name: "Carla",
            location: "Rome",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ducimus, in optio autem, cum debitis architecto asperiores magni iure fugit sed eligendi, illum facere ut! Ipsum eaque eos amet dolores."
        },
        {
            name: "Carla",
            location: "Stockholm",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ducimus, in optio autem, cum debitis architecto asperiores magni iure fugit sed eligendi, illum facere ut! Ipsum eaque eos amet dolores."
        },
        {
            name: "Carla",
            location: "Rome",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ducimus, in optio autem, cum debitis architecto asperiores magni iure fugit sed eligendi, illum facere ut! Ipsum eaque eos amet dolores."
        }
    ]

    return(
        <div className="review-wrapper">
            <h2 className="review-heading">
                OUR CUSTOMERS VOICES
            </h2>
            <section className="review-container">
                {data.map((review, index) => (
                    <div key={index} className="review-card">
                        <h3 className="review-name">{review.name}</h3>
                        <h4 className="review-location">{review.location}</h4>
                        <p className="review-text">{review.text}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Review;
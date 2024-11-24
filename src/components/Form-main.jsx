import '../style/form-main/form-main.css';
import Title from './Title';

const FormMain = () => {
    return (
        <div className="form-wrapper">
            <Title title="Get in touch" />
            <section className="form-container">
                <section className="form">
                    <form action="">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" placeholder="Insert your name" required />
        
                        <label htmlFor="object">Object: </label>
                        <input type="text" name="object" id="object" placeholder="Insert the subject" required />
        
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" placeholder="Insert your email" required />
                        
                        <label htmlFor="message">Message: </label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Insert your message" required></textarea>
        
                        <button type="submit">Submit</button>
                    </form>
                </section>
                <section className="map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130376.9791954411!2d17.729360986718753!3d59.297213999999975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77a53a7ee0cd%3A0xd8966a3e76636f78!2sExclusive%20Cars%20Stockholm%20AB!5e0!3m2!1ssv!2sse!4v1729766065887!5m2!1ssv!2sse" 
                        style={{ border: "0" }} 
                        allowFullScreen 
                        loading="lazy">
                    </iframe>
                </section>
            </section>
        </div>
    );
}

export default FormMain;

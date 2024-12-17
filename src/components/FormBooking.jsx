import FormImg from '../assets/form-img/form-img.webp';
import '../style/form-booking/form-booking.css';

const FormBooking = () => {
  return (
    <div>
          <section className="form-wrapper">
              <section className="form-container">
                  <form action="" className="booking-form">
                      <section className="form-group">
                          <label htmlFor="pickup-location">Pick-Up Location</label>
                          <select id="pickup-location" name="pickup-location" required>
                              <option value="" disabled>Select a location</option>
                              <option value="stockholm">Stockholm</option>
                              <option value="gothenburg">Gothenburg</option>
                              <option value="malmo">Malmö</option>
                              <option value="uppsala">Uppsala</option>
                              <option value="vasteras">Västerås</option>
                          </select>
      
                          <section className="form-group">
                              <label htmlFor="pickup-time">Pick-Up Time and Date</label>
                              <input type="datetime-local" id="pickup-time" name="pickup-time" required />
                          </section>
                      </section>
      
                      <section className="form-group">
                          <label htmlFor="return-location">Return Location</label>
                          
                          <select id="return-location" name="return-location" required>
                              <option value="" disabled>Select a location</option>
                              <option value="stockholm">Stockholm</option>
                              <option value="gothenburg">Gothenburg</option>
                              <option value="malmo">Malmö</option>
                              <option value="uppsala">Uppsala</option>
                              <option value="vasteras">Västerås</option>
                          </select>
      
                          <section className="form-group">
                              <label htmlFor="return-time">Return Time and Date</label>
                              <input type="datetime-local" id="return-time" name="return-time" required />
                          </section>
                      </section>
      
                      <section className="form-group">
                          <label htmlFor="kids-chairs">Chair seat (max 2)</label>
                          <input type="number" id="kids-chairs" name="kids-chairs" min="0" max="2" required />
                      </section>
      
                      <section className="checkbox-group">
                          <label>
                              <input type="checkbox" id="wedding" name="wedding" /> Wedding Car
                          </label>
                          <label>
                              <input type="checkbox" id="wifi" name="wifi" /> Add Wi-Fi
                          </label>
                      </section>
      
                      <section className="form-group">
                          <label htmlFor="additional-info">Additional Information</label>
                          <textarea id="additional-info" name="additional-info" placeholder="Provide any additional details"></textarea>
                      </section>
      
                      <section className="form-group">
                          <button type="submit" className="submit-button">Submit</button>
                      </section>
                  </form>
                  <section className="form-image">
                      <img src={FormImg} alt="Top view of a street in the forest" />
                  </section>
              </section>
      
              <section className="map">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130376.9791954411!2d17.729360986718753!3d59.297213999999975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77a53a7ee0cd%3A0xd8966a3e76636f78!2sExclusive%20Cars%20Stockholm%20AB!5e0!3m2!1ssv!2sse!4v1729766065887!5m2!1ssv!2sse" 
                      allowFullScreen
                      aria-hidden="false"
                      tabIndex="0"
                      title="Map"
                  ></iframe>
              </section>
          </section>
    </div>
  )
}

export default FormBooking

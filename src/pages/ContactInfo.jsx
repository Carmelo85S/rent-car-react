import '../style/contact/contact.css';

const ContactInfo = () => {
  return (
    <div>
      <section className="wrapper-contact">
        <section className="contact-container">
            <section className="contact-container-heading">
                <h1 className="title">CONTACT</h1>
            </section>
        </section>
    </section>

    <section className="info-wrapper">
        <section className="info-container">
            <section className="info-card">
                <h2 className="title">
                    COMPANY INFO
                </h2>
                <p className="info-contact">
                    RIDE <i>READY</i> AB
                </p>
                <p className="info-contact">
                    ADDRESS: ingengata 21
                </p>
                <p className="info-contact">
                    Company Code: SE-0123456789
                </p>
            </section>
                <section className="info-card">
                    <h2 className="title">
                        DELIVERY AREAS
                    </h2>
                    <p className="info-contact">
                        Sweden, Norway, Denmark, Germany
                    </p>
                </section>
                <section className="info-card">
                    <h2 className="title">
                        CONTACTS
                    </h2>
                    <p className="info-contact">
                        Tel: +46 12 345 67 89
                    </p>
                    <a className="contact-mail" href="mailto:name@email.com">rideready@example.com</a>
                </section>
        </section>
    </section>
    </div>
  )
}

export default ContactInfo

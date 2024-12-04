import "./styles/contact.scss";

export const Contact: React.FC = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get In Touch</h2>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint. Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat.
                    </p>
                    <div className="info">
                        <p>
                            <i className="fas fa-phone-alt"></i> +911234567890
                        </p>
                        <p>
                            <i className="fas fa-envelope"></i> test123@gmail.com
                        </p>
                        <p>Abc:</p>
                    </div>
                    <div className="social-icons">
                        <a href="#">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div className="circle">
                        <img src="src/assets/images/IMG-circle.png" alt="" />
                    </div>
                </div>
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                className="input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                className="input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" className="input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input id="phone" name="phone" type="text" className="input" />
                        </div>
                        <div className="form-group full-width">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="input"
                            ></textarea>
                        </div>
                        <div className="form-group button">
                            <button type="submit" className="btn-submit">
                                Submit
                            </button>
                        </div>
                    </form>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.537547917255!2d108.0462563153547!3d12.686212924599097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31721d9a153e7291%3A0x64c25e74e89ae611!2zQsawxqFuIE1hIFRodcOqdCwgxJDhu5FuIEtow6JtLCBExINuZyBOYWkgLEjhu5MgQsOg!5e0!3m2!1sen!2s!4v1690734470000!5m2!1sen!2s"
                        width="900"
                        height="300"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;

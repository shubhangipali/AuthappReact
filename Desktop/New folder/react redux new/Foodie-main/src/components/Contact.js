import React from "react";
import "./Contact.css";
import useOnlineStatus from "./utils/useOnlineStatus";

const Contact = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div className="container offline">
        <div className="icon">&#9888;</div>
        <h1>Looks like you're offline!</h1>
        <p>Please check your internet connection and try again.</p>
      </div>
    );

  return (
    <div className="demo">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="email-signature">
              <div className="signature-icon">
                <img
                  src={require("../assets/contact/footer.jpeg")}
                  alt="contact-img"
                />
              </div>
              <div className="signature-details">
                <h2 className="title">
                  Priyanshu <span>Paliwal</span>
                </h2>
                <span className="post">Frontend Developer</span>
                <ul className="social-links">
                  <li>
                    <a href="https://www.linkedin.com/in/priyanshu-paliwal-017a6a262/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ANSHU-PALIWAL">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/anshu__paliwal/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="signature-content">
                <li>
                  <i className="fa fa-phone"></i> (+91) 935-8670-279
                </li>
                <li>
                  <i className="fa fa-envelope"></i> paliwalanshu35@gmail.com
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> Jaipur Rajasthan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

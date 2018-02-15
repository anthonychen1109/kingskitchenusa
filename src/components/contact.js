import React from 'react';
import Iframe from 'react-iframe';

const Contact = () =>
  <div>
    <div id="contact" className="contact">
      <div className="contact-location container">
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.514749304824!2d-76.00789726707848!3d43.03059997914765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d98c24c43bdf5d%3A0x920570503451e705!2s511+E+Genesee+St%2C+Fayetteville%2C+NY+13066!5e0!3m2!1sen!2sus!4v1517846541481"
        height="450px"
        width="100%"
        position="relative"
        allowFullScreen/>
      </div>
      <div className="contact-info container">
        <div className="contact-box">
          <h2 className="contact-header">Contact</h2>
          <br />
          <p>
            <strong>
              92 E Broadway
            <br />
              New York NY, 10022
            </strong>
          </p>
          <br />
          <p>
            <strong>PHONE</strong>
            <br />
              212-966-7288
          </p>
          <br />
          <p><strong>HOURS</strong></p>
          <p className="hours">
            Monday 7:00 AM to 10:30 PM
            <br />
            Tuesday 7:00 AM to 10:30 PM
            <br />
            Wednesday 7:00 AM to 10:30 PM
            <br />
            Thursday 7:00 AM to 10:30 PM
            <br />
            Friday 7:00 AM to 10:30 PM
            <br />
            Saturday 7:00 AM to 10:30 PM
            <br />
            Sunday 7:00 AM to 10:30 PM
          </p>
        </div>
      </div>
    </div>
  </div>

export default Contact;

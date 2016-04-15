import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="row no-margin-lr">
        <div className="col-sm-12 contact">
            <div>
                <header>
                    <h3>Contact Me</h3>
                </header>
                <p>
                  <a href="mailto:michael.l.dangelo@gmail.com">Email</a>
                  <br/>
                  <a href="https://facebook.com/d">Facebook</a>
                  <br/>
                  <a href="https://www.linkedin.com/in/michaelldangelo">LinkedIn</a>
                  <br/>
                  <a href="https://www.instagram.com/dangelosaurus">Instagram</a>
                  <br/>
                  <a href="https://angel.co/michael-d-angelo">Angel List</a>
                </p>
            </div>
        </div>
      </div>
    );
  }
}

export default Contact;

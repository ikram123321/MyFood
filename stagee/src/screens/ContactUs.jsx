import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d2h2fxe', 'template_gsxxf8p', form.current, 'wPlAiIKmHjs9v5fDz')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center my-5">Contact Us</h1>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="formBasicName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="user_name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="user_email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" placeholder="Enter message" rows="5" />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Send
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

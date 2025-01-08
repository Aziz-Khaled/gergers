import React, { useState } from 'react';
import './formulaire.css';
import { Link } from 'react-router-dom';
import app from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Formulaire() {
  const db = getFirestore(app);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [workType, setWorkType] = useState('');
  const [notification, setNotification] = useState('');
  const [notificationType, setNotificationType] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!workType.trim()) newErrors.workType = 'Work type is required';
    if (!message.trim()) newErrors.message = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const postData = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setNotification('Please fill in all required fields.');
      setNotificationType('error');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name,
        email,
        phoneNumber,
        message,
        workType,
        sendAt: new Date(),
      });
      console.log('Document written with ID: ', docRef.id);

      setNotification('Thank you for believing in us! We will contact you as soon as possible.');
      setNotificationType('success');

      setName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
      setWorkType('');

      setTimeout(() => navigate('/'), 3000);
    } catch (e) {
      console.error('Error adding document: ', e);
      setNotification('An error occurred while submitting the form. Please try again.');
      setNotificationType('error');
    }
  };

  return (
    <div>
      <div className="container">
        <div className="text-center mt-5">
          <h1>Collab / Personal Project Form</h1>
        </div>
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  {notification && (
                    <div
                      className={`alert ${
                        notificationType === 'success' ? 'alert-success' : 'alert-danger'
                      }`}
                      role="alert"
                    >
                      {notification}
                    </div>
                  )}

                  <form id="contact-form" role="form">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_name">Name *</label>
                            <input
                              id="form_name"
                              type="text"
                              className="form-control"
                              placeholder="Please enter your name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <span className="text-danger">{errors.name}</span>}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_lastname">Phone Number *</label>
                            <input
                              id="form_lastname"
                              type="number"
                              className="form-control"
                              placeholder="Please enter your phone number"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_email">Email *</label>
                            <input
                              id="form_email"
                              type="email"
                              className="form-control"
                              placeholder="Please enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_need">Please Specify Your Need *</label>
                            <input
                              id="form_need"
                              type="text"
                              className="form-control"
                              placeholder="Collaboration / Personal project"
                              value={workType}
                              onChange={(e) => setWorkType(e.target.value)}
                            />
                            {errors.workType && <span className="text-danger">{errors.workType}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Description *</label>
                            <textarea
                              id="form_message"
                              className="form-control"
                              placeholder="Describe here."
                              rows={5}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            />
                            {errors.message && <span className="text-danger">{errors.message}</span>}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn btn-success btn-send pt-2 btn-block"
                            onClick={postData}
                          >
                            Submit
                          </button>
                          <Link to="/">
                            <button
                              type="button"
                              className="btn btn-danger btn-send pt-2 btn-block"
                            >
                              Back
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /.8 */}
          </div>
          {/* /.row*/}
        </div>
      </div>
    </div>
  );
}

export default Formulaire;

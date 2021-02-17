import React from 'react'
import emailjs from 'emailjs-com'
import './ContactUs.css'

const ContactUs = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_rqpfhbg', 'template_uvva2tg', e.target, 'user_XTHOvEHNpTWmJWBFEmHdS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        }

    return (
        <div className='container'>
            <div className="col-12 row d-flex justify-content-center ">
                <div className="col-12 py-4">
                    <h1 className='text-center text-4'>Contact Us</h1>
                </div>
                <div className="col-12 col-md-6">
                    <form onSubmit={sendEmail}>
                        <div className='form-group'>
                            <label className='text-light'>Name</label>
                            <input type="text" name="name" className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label className='text-light'>Email</label>
                            <input type="email" name="email" className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label for="exampleFormControlTextarea1" className='text-light'>Message</label>
                            <textarea name="message" className="form-control"/>
                        </div>
                        <input type="submit" value="Send"  className='form-control btn bg-3 text-light'/>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default ContactUs

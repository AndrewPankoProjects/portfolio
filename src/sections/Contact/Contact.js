import './Contact.css';

const Contact = () => {
    return(
        //Use Emailjs
        <section>
            <div className='box'>
                <h1 id="contact">Contact Me</h1>
                <form className="contactBox" action='mailto:andrew.s.panko@gmail.com' method="post" enctype="text/plain">
                    <label className='labelName'>Name</label><br/>
                    <input className="contactName" type = "text" name="name" size="30" required/><br/>
                    <label className='labelEmail'>Email</label><br/>
                    <input className="contactEmail" type = "email" name="mail" size="30" required/><br/>
                    <label className='labelMessage'>Message</label><br/>
                    <textarea className="contactMessage"name="message" /><br/>
                    <input className="contactSubmit" type="submit" value="Send" /><br/>
                    <input className="contactReset" type="reset" value="Reset" />
                </form>
            </div>
        </section>
    )
}

export default Contact;
import "./Contact.css"
function Contact() {
  return (
    <div className="contact m-3">
      <div className="row">
        <div className="col-12  ">
          <h3 className="contactHead"><i>Contact Us</i></h3>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="john@email.com" />
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Contact</label>
            <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="999 999 9999" />
          </div>
        </div>
        <div className="co-12">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
            <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" />
          </div>
        </div>
        <div className="co-12">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Message</label>
            <textarea type="text" className="form-control message " id="exampleFormControlInput1" placeholder="Message..." />
          </div>
        </div>
      </div>


    </div>

  )
}

export default Contact
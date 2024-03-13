import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footglass">
                <div className="row">
                    <div className="col-lg-6 copy">
                        <h6>Copy right @ <b>Ecora industries</b></h6>
                    </div>
                    <div className="col-lg-6">
                        <div className="social">
                            <div className="insta"><i className="fa-brands fa-instagram"></i></div>
                            <div className="twitter"><i className="fa-brands fa-x-twitter"></i></div>
                            <div className="facebook"><i className="fa-brands fa-facebook-f"></i></div>
                            <div className="linkedin"><i className="fa-brands fa-linkedin-in"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
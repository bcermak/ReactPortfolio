import React from "react";

function Contact() {
    return <div className="container">
                <div className="row">
                    <div className="col-md-12 formBody">
                        <h3 className = "contactDirect"> Contact Direct </h3>
                        <form className = "form1">
                            <div class="form-group">
                                <div class="form-group">
                                <label for="orgSubmit">Organization</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                </div>
                                <label for="nameSubmit">Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <div class="form-group">
                                <label for="emailSubmit">Email Address</label>
                                <input type="email" class="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <div class="form-group">
                                <label for="messageSubmit">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    
                </div>
    </div>
}

export default Contact;
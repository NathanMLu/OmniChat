import React, {Component} from 'react';

export class FetchData extends Component {
    render() {
        return (
            <div>
                <div class="container mb-4 mt-auto align-content-center border-3">
                    <div class="row text-center">
                        <div class="col-sm ">
                            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer"title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/whatsapp-logo-light-green-png-0.png" height="250" alt="whatsapp logo light green png" /></a>
                        </div>
                        <div class="col-sm">
                            <a href="https://discord.com/login" target="_blank" rel="noopener noreferrer"title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" height="250" alt="discord logo logodownload download logotipos" /></a>
                        </div>
                        <div class="col-sm">
                            <a href="https://www.messenger.com/" target="_blank" rel="noopener noreferrer"title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/facebook-messenger-png/file-facebook-messenger-logo-svg-wikipedia-9.png" height="250" alt="file facebook messenger logo svg wikipedia" /></a>
                        </div>
                    </div>
                    <div class="form-body pb-lg-5">
                        <div class="row">
                            <div class="form-holder">
                                <div class="form-content">
                                    <div class="form-items">
                                        <h3>Connect Your Account!</h3>
                                        <p>Fill in the data below.</p>
                                        <form class="requires-validation" novalidate>

                                            <div class="col-md-12">
                                                <input class="form-control" type="text" name="name" placeholder="Full Name" required/>
                                                    <div class="valid-feedback">Username field is valid!</div>
                                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                            </div>

                                            <div class="col-md-12">
                                                <input class="form-control" type="email" name="email" placeholder="E-mail Address" required/>
                                                    <div class="valid-feedback">Email field is valid!</div>
                                                    <div class="invalid-feedback">Email field cannot be blank!</div>
                                            </div>

                                            <div class="col-md-12">
                                                <select class="form-select mt-3" required>
                                                    <option selected disabled value="">Platform</option>
                                                    <option value="jweb">Instagram</option>
                                                    <option value="sweb">IMessage</option>
                                                    <option value="pmanager">Google Hangouts</option>
                                                    <option value="pmanager">Snapchat</option>
                                                    <option value="pmanager">Groupme</option>
                                                    <option value="pmanager">Teams</option>
                                                </select>
                                                <div class="valid-feedback">You selected a position!</div>
                                                <div class="invalid-feedback">Please select a position!</div>
                                            </div>


                                            <div class="col-md-12">
                                                <input class="form-control" type="password" name="password" placeholder="Password" required/>
                                                    <div class="valid-feedback">Password field is valid!</div>
                                                    <div class="invalid-feedback">Password field cannot be blank!</div>
                                            </div>


                                            <div class="col-md-12 mt-3">
                                                <label class="mb-3 mr-1" for="gender">Gender: </label>

                                                <input type="radio" class="btn-check" name="gender" id="male" autocomplete="off" required/>
                                                    <label class="btn btn-sm btn-outline-secondary" for="male">Male</label>

                                                    <input type="radio" class="btn-check" name="gender" id="female" autocomplete="off" required/>
                                                        <label class="btn btn-sm btn-outline-secondary" for="female">Female</label>

                                                            <div class="valid-feedback mv-up">You selected a gender!</div>
                                                            <div class="invalid-feedback mv-up">Please select a gender!</div>
                                            </div>

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                                    <label class="form-check-label">I confirm all data is correct!</label>
                                                    <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                            </div>


                                            <div class="form-button mt-3">
                                                <button id="submit" action = "/" type="submit" class="btn btn-primary">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

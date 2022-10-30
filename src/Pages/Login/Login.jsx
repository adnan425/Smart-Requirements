import React from 'react';

// Create the function

export default function Login() {
    return (
        <>

            <div className="auth-wrapper auth-v3 ">
                <div className="bg-auth-side bg-primary" />
                <div className="auth-content">
                    <nav className="navbar navbar-expand-md navbar-light default">
                        <div className="container-fluid pe-2">
                            <a className="navbar-brand" href="#">
                                <img src="https://demo.rajodiya.com/cmmsgo/storage/logo/logo-dark.png" className="auth-logo navbar-logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01" style={{ flexGrow: "0" }}>
                                <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Support</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Terms</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Privacy</a>
                                    </li>
                                    <li className="nav-item">

                                        <div className="btn-group align-items-center">
                                            <select name="language" id="language" className="btn  btn-primary dropdown-toggle"  >

                                                <option className="login_lang"  >EN</option>
                                            </select>
                                        </div>

                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="card">
                        <div className="row align-items-center text-start">
                            <div className="col-xl-6">
                                <div className="card-body">
                                    <div className="">
                                        <h2 className="mb-3 f-w-600">Login</h2>
                                    </div>
                                    <form method="POST" action="https://demo.rajodiya.com/cmmsgo/login" acceptCharset="UTF-8" id="loginForm" className="login-form"><input name="_token" type="hidden" value="usgKxySAyOrZpMrgPVo8qjDS3nUII1SqzcGWhRhU" />
                                        <div className="">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Email</label>
                                                <input id="email" type="email" className="form-control  " name="email" value="company@example.com" placeholder="Email" required autoFocus />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="form-label">Password</label>
                                                <input id="password" type="password" className="form-control  " value="1234" name="password" placeholder="Password" required />
                                                <div className="mb-2 mt-2">
                                                    <a href="https://demo.rajodiya.com/cmmsgo/forgot-password" className="small text-muted text-underline--dashed border-primar">Forgot Your Password?</a>
                                                </div>
                                            </div>



                                            <div className="d-grid">
                                                <input className="btn btn-primary btn-block mt-2 login-do-btn" id="saveBtn" type="submit" value="Sign in" />
                                            </div>
                                        </div></form>

                                </div>
                            </div>
                            <div className="col-xl-6 img-card-side">
                                <div className="auth-img-content">
                                    <img src="https://demo.rajodiya.com/cmmsgo/assets/images/auth/img-auth-3.svg" alt="" className="img-fluid" />
                                    <h3 className="text-white mb-4 mt-5"> “Attention is the new currency”</h3>
                                    <p className="text-white"> The more effortless the writing looks, the more effort the writer
                                        actually put into the process.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    { /* [ auth-signup ] end */}

                    <div className="auth-footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <p className="">Copyright ©  2022 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

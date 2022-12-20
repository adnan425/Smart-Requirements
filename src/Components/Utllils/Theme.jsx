import React from 'react'
import { Link } from 'react-router-dom';
export default function Theme() {
    const handleThemeColor = theme => {
        localStorage.setItem('theme', theme);
        window.location.reload();
    }
    const handleThemeType = ()=>{

    }
    return (
        <>
            <div class="card">
                <div class="card-header">
                    <h5>Theme Customizer</h5>
                    <small class="text-muted">Edit theme </small>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="row">
                            <div class="setting-card p-3">
                                <div class="row">
                                    <div class="pct-body">
                                        <div class="row">
                                            <div class="col-4">
                                                <h6 class="mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" class="feather feather-credit-card me-2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>Primary color settings
                                                </h6>
                                                <hr class="my-2" />
                                                <div class="theme-color themes-color">
                                                    <Link className='mx-1' data-value="theme-1" onClick={() => { handleThemeColor("theme-1") }}>{""}</Link>
                                                    <input type="radio" class="theme_color" name="color" value="theme-1" style={{ display: "none" }} />
                                                    <Link className='mx-1' data-value="theme-2" onClick={() => { handleThemeColor("theme-2") }}>{""}</Link>
                                                    <input type="radio" class="theme_color" name="color" value="theme-2" style={{ display: "none" }} />
                                                    <Link className='mx-1' class="active_color" data-value="theme-3" onClick={() => { handleThemeColor("theme-3") }}>{""}</Link>
                                                    <input type="radio" class="theme_color" name="color" value="theme-3" style={{ display: "none" }} />
                                                    <Link className='mx-1' data-value="theme-4" onClick={() => { handleThemeColor("theme-4") }}>{""}</Link>
                                                    <input type="radio" class="theme_color" name="color" value="theme-4" style={{ display: "none" }} />
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <h6 class="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout me-2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>Sidebar settings
                                                </h6>
                                                <hr class="my-2" />
                                                <div class="form-check form-switch">
                                                    <input type="checkbox" class="form-check-input" id="cust-theme-bg" name="cust_theme_bg" />
                                                    <label class="form-check-label f-w-600 pl-1" for="cust-theme-bg">Transparent layout</label>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <h6 class="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>Layout settings
                                                </h6>
                                                <hr class="my-2" />
                                                <div class="form-check form-switch mt-2">
                                                    <input type="checkbox" class="form-check-input" id="cust-darklayout" onChange={handleThemeType} name="cust_darklayout" />
                                                    <label class="form-check-label f-w-600 pl-1" for="cust-darklayout">Dark Layout</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import { Link } from 'react-router-dom';
export default function Theme() {
    const handleTheme = theme => {
        localStorage.setItem('theme', theme);
        window.location.reload();
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
                                            <div class="col-12">
                                                <h6 class="mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" class="feather feather-credit-card me-2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>Primary color settings
                                                </h6>
                                                <hr class="my-2" />
                                                <div class="theme-color themes-color">
                                                    <Link className='mx-1' data-value="theme-1" onClick={() => { handleTheme("theme-1") }}>{""}</Link>
                                                    <input type="radio" class="theme_color" name="color" value="theme-1" style={{ display: "none" }} />
                                                    <Link className='mx-1' data-value="theme-2" onClick={() => { handleTheme("theme-2") }}>{""}</Link>
                                                    <input type="radio" class="theme_color" name="color" value="theme-2" style={{ display: "none" }} />
                                                    <Link className='mx-1' class="active_color" data-value="theme-3" onClick={() => { handleTheme("theme-3") }}>{""}</Link>
                                                    <input type="radio" class="theme_color" name="color" value="theme-3" style={{ display: "none" }} />
                                                    <Link className='mx-1' data-value="theme-4" onClick={() => { handleTheme("theme-4") }}>{""}</Link>
                                                    <input type="radio" class="theme_color" name="color" value="theme-4" style={{ display: "none" }} />
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

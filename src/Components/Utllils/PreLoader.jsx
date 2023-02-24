import React, { useState } from 'react'
import HashLoader from "react-spinners/HashLoader"; 

export default function PreLoader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    // useEffect(() => {
    //   setTimeout(() => { 
    //   }, 5000)
    // }, [])

    return (
        <div className="sweet-loading">
            <div class="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
                <div> 
                <HashLoader color='#51459d' />
                </div>
            </div>
        </div>
    )
}

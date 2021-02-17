import React, { Fragment } from 'react'
//import spinner from './spinner.gif'
import './Spinner.css'

const Spinner = () => {
    return (
        <div>
            <Fragment>
                {/* <img src={spinner} alt="Loading..." style={{width: '200px', margin:'auto', display:'block'}}/> */}
                <div className='main'>
                    <div className="loadingio-spinner-pulse-j48bbennx3">
                        <div className="ldio-kliuphzra1">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                
            </Fragment>
        </div>
    )
}

export default Spinner;


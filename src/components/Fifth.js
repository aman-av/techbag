import React from "react";
import '../sass/fifth.scss';
import img from '../assets/subscribe-img.png'
function Fifth() {
    return <div className="fifth">
        <div className="fif-i1">
            <div className="fif-i1-bg">
            </div>
            <div className="fif-i1-bg2">
                <div className="wrapandinput">

                    <div className='wrapper'>
                            <b>Subscribe to the Newsletter  </b>
                        <br/>
                    <p className="fif_para">Get the Latest Updates </p>
                    </div>
                    <div className="inputbox">

                        <input className="i3" placeholder="Your Email Address" />
                        <div className="subbtn">
                            &gt;
                        </div>
                    </div>
                </div>
            </div>
            <img src={ img} class="fif_img"/>
        </div>
  </div>;
}

export default Fifth;

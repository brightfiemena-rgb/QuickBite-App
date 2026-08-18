import React from "react";
import "./onboarding.css";

const onboarding = () => {
    return(
        <div className="onboarding-page">

            {/*Top section */}

            <div className="onboarding-top">

                <button className="skip-btn">
                    Skip 
                </button>

                <div className="onboarding-image">
                    <div className="delivery-circle">
                        🚚
                    </div>
                </div>
            </div>

            {/*Text section */}

            <div className="onboarding-content">

                <h1>Delicious food, 
                    <br />
                    Delivered to you
                </h1>

                <p>Order your favourite meals from the best
                    restaurants around Buea.
                </p>
            </div>

            {/*bottom controls*/}

            <div className="onboarding-footer">

                <div className="page-indicators">

                    <span className="indicators active"></span>
                    <span className="indicators"></span>
                    <span className="indicators"></span>
                </div>

                <button className="next-btn">
                    Next
                </button>
            </div>
        </div>
    );
};

export default onboarding;
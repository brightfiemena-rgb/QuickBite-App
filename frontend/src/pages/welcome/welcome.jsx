import React from "react";
import "./welcome.css";

const Welcome = () => {
    return(
        <div className="welcome-page">

            {/* Hero Section */}
            <div className="welcome-hero">

                <div className="welcome-logo">

                    <div className="welcome-logo-icon">


                    </div>

                    <div className="welcome-food-image">
                        
                        <div className="food-circle">

                        </div>
                    </div>
                </div>

                {/* Welcome text */}

                <div className="welcome-content">

                    <h2>
                        Welcome to 
                        <span>QuickBite</span>
                    </h2>

                    <p>
                        Your favourite meals from the best restaurants
                        in Buea, delivered right to your doorstep.
                    </p>
                </div>

                {/* Buttons */}

                <div className="welcome-actions">

                    <button className="welcome-primary-btn">
                        Get Started
                    </button>

                    <button className="welcome-guest-btn">
                        Continue as Guest
                    </button>
                </div>

                <p className="welcome-footer-text">
                    Delicious Food. Fast delivery. happy moments
                </p>
            </div>
        </div>

    );
};

export default Welcome;
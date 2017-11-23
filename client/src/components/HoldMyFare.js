import React from 'react';

class HoldMyFare extends React.Component {
    render() {
        return(
            <div className="HoldMyFarBlock paymentBlock">
                    <h2>Hold My Fare Block</h2>
                    <div className="text-content">
                        <p>
                            <strong>Note:</strong>If you hold this fare, any other services like travel insurance will be removed from your shopping cart.
                        </p>
                    </div>
            </div>
        );
    };
};

export default HoldMyFare;
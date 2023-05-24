import React from "react";

import StripePaymentComponent from "./stripe";

const AppPayment = () => {
    return(
        <div className="row rml justify-content-center">
            <div className="col-sm-12 col-md-6">
                <div className="modal-content anim mb-4">
                    <div className="modal-header p-4">
                        <h3 className="modal-title" id="modalRequestLabel">
                        Make Payment
                        </h3>
                    </div>
                </div>
                <StripePaymentComponent></StripePaymentComponent>
            </div>
        </div>
    )
}

export default AppPayment;
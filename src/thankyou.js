import React from "react";
import image from "../src/image/cong.gif"


const Thankyou = () => {
    return(
        <div className="row rml justify-content-center">
            <div className="col-sm-12 col-md-6">
                <div className="modal-content anim mb-4">
                    <div className="modal-header p-4">
                        <h3 className="modal-title" id="modalRequestLabel">
                        Thanks for your payment.
                        </h3>
                    </div>
                        <img src={image} className="w-100" alt="CongratulationS" />
                </div>
            </div>
        </div>
    )
}

export default Thankyou;
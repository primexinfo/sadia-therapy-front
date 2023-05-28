import React from "react";
import image from "../src/image/cong.gif"
import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";


const Thankyou = () => {
    document.title = "Congratulations! Thanks for your payment";
    const { width, height } = useWindowSize();
    return(
        <div className="row rml justify-content-center" style={{minHeight: "400px"}}>
            <ReactConfetti width={width} height={height} />
            <div className="col-sm-12 col-md-6">
                <div className="modal-content anim mb-4">
                    <div className="modal-header p-4">
                        <h3 className="modal-title" id="modalRequestLabel">
                        Thanks for your payment.
                        </h3>
                        
                    </div>
                    <img src={image} alt="Congratulations" className="mt-5" />
                </div>
            </div>
        </div>
    )
}

export default Thankyou;
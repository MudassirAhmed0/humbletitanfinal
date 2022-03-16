import { FaPhoneAlt } from "react-icons/fa";

const CTA = () => {
    return (
        <>
            <div className="abcd_container pt-5_abcd pb-5_abcd">
                <div className="abcd_banner abcd_bluesection p-5_abcd b-rad-12_abcd abcd_padding_new">
                    <div className="abcd_row abcd_justify-between abcd_align-center">
                        <div className="abcd_col-9 full-width_abcd">
                            <h2 className="mb-1_abcd white-color_abcd h2_abcd">HT Digital Marketing Services.</h2>
                            <p className="white-color_abcd p_abcd">We will take care of your online design, strategy, content, and
                                execution.
                                Get in touch for elite
                                services.</p>
                        </div>
                        <div className="abcd_col-3 full-width_abcd  mt-1">
                            <button className="btn_abcd btn-primary_abcd btn-block_abcd mb-1_abcd">Get a Quote</button>
                            <button className="btn_abcd btn-block_abcd">
                                <FaPhoneAlt />
                                {/* <i className="fa fa-phone"></i> */}
                                (555) 802-1234 </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTA

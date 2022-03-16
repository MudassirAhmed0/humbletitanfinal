import Image from 'next/image'; 
import dd_our_services from '../../../assets/imgs/dd-our-services.jpg';
import FinancialHealth from './FinancialHealth';

const Financial = ({content}) => {
    return (
        <>
            <div className="abcd_lightsection pt-5_abcd pb-5_abcd">
        <div className="abcd_container">
            <div className="abcd_row abcd_justify-between abcd_align-center">
                <div className="abcd_col-8 full-width_abcd">
                    <h2 className="blue-color_abcd mb-3_abcd h2_abcd">Financial Health (TTM)<span
                            className="colored_abcd">.</span></h2>
                    <p className="text-center_abcd mb-2_abcd mr-4_abcd p_abcd"><strong>Reports as of Date</strong> <span
                            className="ml-2_abcd">‘2020-09-26</span></p>
                    <p className="text-center_abcd abcd_col-10 mlr-auto_abcd mb-3_abcd p_abcd">Don’t forget to compare
                        performance against
                        competitors in the same industry. Without analysis and context, all of these metrics are just
                        jibberish.</p>
                    <div className="abcd_row abcd_wrap abcd_justify-between greenboxes_abcd">
                        {content?.cards?.map(item => 
                            <FinancialHealth item={item} key={item} />
                        )}
                    </div>
                </div>
                <div className="abcd_col-4 full-width_abcd p-1_abcd white-bg_abcd b-rad-12_abcd">
                    <div className="img_container_abcd mb-2_abcd imgBorder">
                        {/* <img className="b-rad-6_abcd" src="https://www.designinguru.com/imgs/dd-our-services.jpg" alt="dd-our-services"/> */}
                        <Image src={dd_our_services} alt="dd-our-services" />
                    </div>
                    <h3 className="mb-1_abcd h3_abcd">
                        Humble Titan Web Services
                    </h3>
                    <p className="mb-1_abcd p_abcd">
                        Curabitur ac leo nunc estibul et mauris vel ante finibus maximus nec ut leo. Integer consectetur
                        luctus quisque.
                    </p>
                    <button className="btn_abcd btn-primary_abcd btn-block_abcd">
                        Check out our services
                    </button>
                </div>
            </div>

        </div>
    </div>
        </>
    )
}

export default Financial

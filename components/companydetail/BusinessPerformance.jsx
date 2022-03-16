import Table from './Table';
import blog_insights from '../../assets/imgs/blog-insights.png'
import Image from 'next/image';

const BusinessPerformance = ({ content }) => {
    return (
        <>
            <div className="abcd_lightsection pb-5_abcd pt-5_abcd">
                <div className="abcd_container">
                    <h2 className="mb-1_abcd h2_abcd">Business Performance (TTM)<span className="colored_abcd">.</span></h2>
                    <p className="mb-3_abcd p_abcd">Don’t forget to compare performance against competitors in the same sector.</p>
                    <div className="abcd_row abcd_justify-between abcd_align-center">
                        <div className="abcd_col-9 full-width_abcd businesses_performance_table_abcd p-1_abcd">
                            <h4 className="mb-1_abcd h4_abcd">Core Operating Metrics</h4>
                            <p className="mb-3_abcd p_abcd">Don’t invest without understanding where your money is going.</p>
                            <ul className="ul_abcd">
                                <li className="abcd_row abcd_justify-between  mb-1_abcd li_abcd content-set_abcd">
                                    <span className='abcd_col-4'
                                        style={{ backgroundColor: "transparent", color: "#59667d" }}><strong>Metric</strong></span><span
                                            className="abcd_col-3"><strong>What’s Good</strong></span><span className="abcd_col-3 "
                                                style={{ backgroundColor: "transparent", color: "#59667d" }}><strong>Company
                                                    Stat.</strong></span><span className="abcd_col-2"><strong>Assesment</strong></span>
                                </li>
                                {content?.cards?.map(item =>
                                    <Table item={item} key={item[4]}/> 
                                )}
                            </ul>

                        </div>
                        <div className="abcd_col-3  full-width_abcd p-1_abcd abcd_bluesection b-rad-12_abcd">
                            <div className="img_container_abcd mt-2_abcd mb-2_abcd">
                                <Image src={blog_insights} alt={blog_insights} />
                                {/* <img src="https://www.designinguru.com/imgs/blog-insights.png" alt="Blog Insights" /> */}
                            </div>
                            <h2 className="mb-3_abcd h2_abcd ">Why support us<span className="colored_abcd">?</span></h2>
                            <ul className="mb-3_abcd ul_abcd">
                                <li className="li_abcd">We are a start-up.</li>
                                <li className="li_abcd">We strive to bring you more.</li>
                                <li className="li_abcd">Our greatest plan is to make quality education accessible and free.</li>
                                <div className="btn_abcd btn-primary_abcd btn-block_abcd mt-2_abcd">Donate Now</div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessPerformance

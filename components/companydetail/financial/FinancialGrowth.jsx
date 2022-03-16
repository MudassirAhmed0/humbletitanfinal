 
import FinancialGrowthCard from './FinancialGrowthCard'

const FinancialGrowth = ({ content }) => {
    return (
        <>
            <div className="abcd_container pt-5_abcd pb-5_abcd">
                {/* <!-- <h2 className="text-center_abcd mb-1_abcd h2_abcd">Annual Financial Growth<span className="colored_abcd">.</span></h2>
                <h4 className="mb-2_abcd text-center_abcd h4_abcd">
                    How well has the company performed over the years<span className="colored_abcd">.</span>
                </h4> --> */}
                <div className="abcd_row abcd_wrap abcd_justify-center col-gap-2_abcd row-gap-2_abcd">
                    <div className="abcd_col-4 full-width_abcd">
                        <h2 className="mb-1_abcd h2_abcd">Annual Financial Growth<span className="colored_abcd">.</span></h2>
                        <h4 className="mb-2_abcd h4_abcd">
                            How well has the company performed over the years<span className="colored_abcd">.</span>
                        </h4>
                    </div>
                    {content?.cards?.map(item =>
                        <div className="abcd_col-4 full-width_abcd" key={item?.id}>
                            <div className="keyvaluecard_abcd p-1_abcd">
                                <h4 className="blue-color_abcd h4_abcd">
                                    {item?.heading}
                                </h4>
                                <p className="p_abcd">{item?.pera}</p>
                                <ul className="keyvalues_abcd mt-2_abcd ul_abcd">
                                    {item?.listItems?.map(i =>
                                        <FinancialGrowthCard i={i} key={i[0]} />
                                        
                                    )}

                                </ul>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </>
    )
}

export default FinancialGrowth

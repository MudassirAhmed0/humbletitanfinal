 
import ShareValueCard from './ShareValueCard';

const SharesValue = ({ content }) => {
    return (
        <>
            <div className="abcd_container pt-5_abcd pb-5_abcd">
                <div className="abcd_row abcd_justify-between abcd_wrap">
                    <div className="abcd_col-12 text-center_abcd mb-2_abcd">
                        <h3 className="h3_abcd">Assess each share’s real value<span className="colored_abcd">.</span></h3>
                    </div>
                    {content?.cards?.map(item =>
                        <div className="abcd_col-6  full-width_abcd" key={item?.listItems}>
                            <div className="keyvaluecard_abcd p-1_abcd">
                                <h4 className="blue-color_abcd h4_abcd">
                                    {item?.heading}
                                </h4>
                                <p className="p_abcd">{item?.pera}</p>

                                <ul className="keyvalues_abcd mt-2_abcd">
                                    {item?.listItems?.map(i =>
                                        <ShareValueCard i={i} key={i[0]} />

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

export default SharesValue

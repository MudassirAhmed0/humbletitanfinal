import Image from 'next/image';
import dd_business_mag from '../../../assets/imgs/dd-business-mag.jpg';

const EmpowerMagazine = () => {
    return (
        <>
            <div className="abcd_col-5 full-width_abcd b-rad-6_abcd white-bg_abcd p-1_abcd pb-2_abcd ">
                <div className="img_container_abcd mb-2_abcd">
                    {/* <img src="https://www.designinguru.com/imgs/dd-business-mag.jpg" alt="dd-business-mag" /> */}
                    <Image src={dd_business_mag} alt="dd-business-mag" />
                </div>
                <h3 className="blue-color_abcd mb-1_abcd h3_abcd">Humble Insights</h3>
                <p className="mb-2_abcd p_abcd">Investing doesn’t have to be such a gamble. What makes it so risky is the
                    lack of
                    information out there. Once you’ve found the information you need, it’s not always accessible,
                    that’s why I created Humble Titan. Explore content you need, written in the way you’d want.</p>
                <button className="btn_abcd btn-primary_abcd btn-block_abcd">Check out our magazine!</button>
            </div>
        </>
    )
}

export default EmpowerMagazine

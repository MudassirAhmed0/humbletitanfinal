import Image from 'next/image'
import we_deliver_expertise from '../../assets/imgs/we-deliver-expertise.jpg'

const DonateNow = () => {
    return (
        <>
            <div className="abcd_darksection pt-5_abcd pb-5_abcd">
                <div className="abcd_container">
                    <div className="abcd_row abcd_justify-between abcd_align-center">
                        <div className="abcd_col-6 full-width_abcd">
                            <h2 className="mb-2_abcd h2_abcd">Don’t require our services yet, but want to support us anyway<span
                                className="colored_abcd">?</span>
                            </h2>
                            <p className="mb-1_abcd p_abcd">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                cubilia
                                Curae.</p>
                            <p className="mb-1_abcd p_abcd">Fusce at magna eget neque viverra tempus ut sit amet neque. Nunc
                                suscipit eu tellus
                                sit amet.</p>
                            <h4 className="yellow-color_abcd mb-1_abcd h4_abcd">We are a startup</h4>
                            <h4 className="yellow-color_abcd mb-1_abcd h4_abcd">We will bring you more education.</h4>
                            <h4 className="yellow-color_abcd mb-1_abcd h4_abcd">We will continue to explore, simplify, and wow you!
                            </h4>
                            <button className="btn_abcd btn-primary_abcd btn-block_abcd">Donate now - Support us on Patreon</button>

                        </div>
                        <div className="abcd_col-6 mt-2rem_abcd full-width_abcd">
                            <div className="img_container_abcd imgBorder">
                                {/* <img className="b-rad-12_abcd" src="https://www.designinguru.com/imgs/we-deliver-expertise.jpg"
                                    alt="We Deliver Expertise" /> */}
                                    <Image src={we_deliver_expertise} alt="We Deliver Expertise" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonateNow

import EmpowerImages from './EmpowerImages';
import EmpowerMagazine from './EmpowerMagazine';

const Empower = () => {
    return (
        <>
            <div className="abcd_lightsection pt-5_abcd pb-5_abcd">
                <div className="abcd_row abcd_container abcd_align-center abcd_justify-between">
                    <div className="abcd_col-7 full-width_abcd">
                        <h2 className="text-center_abcd mb-2_abcd h2_abcd">
                            We offer more than mastery of stocks. <span className="colored_abcd">We strive to empower your
                                ambitions.</span>
                        </h2>
                        <p className="text-center_abcd mb-2_abcd p_abcd">Please be sure to explore other Humble Titan offerings
                            below. We’ll continue
                            to expand our content so you
                            can expand your ambitions.</p>
                        <EmpowerImages />
                    </div>
                    <EmpowerMagazine />
                </div>
            </div>
        </>
    )
}

export default Empower

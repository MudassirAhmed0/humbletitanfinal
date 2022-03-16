import Link from 'next/link';

const CustomCard = ({ customPages,query }) => {

    const MAX_LENGTH = 300;

    return (
        <>
            <div className="abcd_container pt-5_abcd pb-5_abcd">
            <h1 className='pb-3_abcd blue-color_abcd text-transform_abcd'>Result for</h1>
                <div className=' pb-5_abcd abcd_row abcd_justify-between'>
                    <h2 className='blue-color_abcd'>Filter Label : {query?.filterlabel} </h2>
                    <h2 className='blue-color_abcd'>Filter Condition : {query?.filterCondition} </h2>
                    <h2 className='blue-color_abcd'>Filter Value : {query?.filterValue} </h2>
                </div>
                {customPages?.map((item, index) =>{
                    let i = index 

                    if(i!==0 && i % 5 === 0){
                        return (
                            <>
                           <div className="abcd_row mt-5_abcd abcd_justify-center abcd_wrap mb-2_abcd" key={index}>
                        <div className="abcd_col-12  full-width_abcd">
                            <div className="keyvaluecard_abcd p-1_abcd">
                                <div className='abcd_row  abcd_justify-center pb-1_abcd borderb_abcd '>
                                    <h2 className="blue-color_abcd 2_abcd custom_heading pl-5px">
                                        Header Text
                                    </h2>
                                </div>
                                <div className='abcd_row abcd_justify-between p-1_abcd abcd_wrap'>
                                    <div className='abcd_col-12 custom-card-full-width'>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda necessitatibus reprehenderit perferendis delectus nulla explicabo sed alias quod odit, enim earum repudiandae autem similique, vel maxime eos! Fugiat labore voluptates sit, porro corrupti optio beatae, nemo officiis voluptatibus vitae mollitia aliquam cupiditate amet tempora repellendus deleniti vero id quia illo, quidem at voluptatem. Adipisci, accusantium voluptatibus nisi vero ipsa amet. Ratione velit minus inventore aliquam quidem voluptatum, vel quia?
                                        </p>
                                    </div>
                                     
                                </div> 
                            </div>

                        </div>
                            </div>
                            <div className="abcd_row abcd_justify-center abcd_wrap mb-2_abcd" key={index}>
                        <div className="abcd_col-12  full-width_abcd">
                            <div className="keyvaluecard_abcd p-1_abcd">
                                <div className='abcd_row  abcd_align-center row-gap-1_abcd  flex-col pb-1_abcd borderb_abcd '>
                                    <h2 className="blue-color_abcd 2_abcd custom_heading pl-5px">
                                        {item[1]?.companyname}
                                    </h2>
                                    <h2 className="blue-color_abcd 2_abcd custom_heading pl-5px">
                                        Filtered Value : <span className='colored_abcd'>Value</span>
                                    </h2>
                                </div>
                                <div className='abcd_row abcd_justify-between p-1_abcd abcd_wrap'>
                                    <div className='abcd_col-4 custom-card-full-width'>
                                        <ul className="keyvalues_abcd mt-2_abcd topten-ul-border">
                                            <li className="li_abcd">
                                                <span className='abcd_width_50'><strong>Country</strong></span> <span className='abcd_width_50'>{item[1]?.country ? item[1]?.country : "NA"}</span>
                                            </li>
                                            <li className="li_abcd">
                                                <span className='abcd_width_50'><strong>Industry</strong></span> <span className='abcd_width_50'>{item[1]?.industry ? item[1]?.industry : "NA"} </span>
                                            </li>
                                            <li className="li_abcd">
                                                <span className='abcd_width_50'><strong>CEO</strong></span> <span className='abcd_width_50'>{item[1]?.ceo ? item[1]?.ceo : "NA"}</span>
                                            </li>
                                            <li className="li_abcd">
                                                <span className='abcd_width_50'><strong>Market Capitalization</strong></span> <span className="red-bg_abcd abcd_width_50">{item[1].mktcap ? item[1].mktcap : "NA"}


                                                </span>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className='abcd_col-4 custom-card-full-width'>
                                        <h2 className='text-center_abcd'>Core Performance</h2>
                                        <div className='abcd_row abcd_justify-around topten-ul-border col-gap-2r_abcd'>

                                            <div className=''>
                                                <div>
                                                    <p className='text-center_abcd'>Net Profit Margin</p>
                                                    <div className='abcd_row abcd_justify-center abcd_core-performance abcd_align-center m-auto custom-card-back_abcd'>{item[0]?.netprofitmarginttm ? item[0]?.netprofitmarginttm : "NA"}</div>
                                                </div>
                                                <div>
                                                    <p className='text-center_abcd'>Gross Profit Margin</p>
                                                    <div className='abcd_row abcd_justify-center abcd_core-performance abcd_align-center m-auto  custom-card-back_abcd '>{item[0]?.grossprofitmarginttm ? item[0]?.grossprofitmarginttm : "NA"}</div>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div>
                                                    <p className='text-center_abcd'>Return on Asset</p>
                                                    <div className='abcd_row abcd_justify-center abcd_core-performance abcd_align-center m-auto custom-card-back_abcd'>{item[0]?.returnonassetsttm ? item[0]?.returnonassetsttm : "NA"}</div>
                                                </div>
                                                <div>
                                                    <p className='text-center_abcd'>Return on Equity</p>
                                                    <div className='abcd_row abcd_justify-center abcd_core-performance abcd_align-center m-auto  custom-card-back_abcd'>{item[0]?.returnonequityttm ? item[0]?.returnonequityttm : "NA"}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='abcd_col-4 custom-card-full-width'>
                                        <h2 className='text-center_abcd'>Company Description</h2>
                                        <div>
                                            <p className='customcard-para'>{item[1]?.description.length > MAX_LENGTH ? `${item[1]?.description.substring(0, MAX_LENGTH)}...` : "NA"}</p>
                                        </div>
                                    </div>
                                </div>
                                <Link href={`/companydetail?symbol=${item[0]?.symbol}`} className='profile_font'>
                                    <a>
                                        <button className="profile_card_btn_abcd bluehai-btn">


                                            See More Detail

                                        </button>

                                    </a>
                                </Link>
                            </div>

                        </div>
                            </div>
                            </>
                        )
                    }else
                  return(<div className="abcd_row abcd_justify-center abcd_wrap mb-2_abcd" key={index}>
                        <div className="abcd_col-12  full-width_abcd">
                            <div className="keyvaluecard_abcd p-1_abcd">
                                <div className='abcd_row row-gap-1_abcd  flex-col   abcd_align-center pb-1_abcd borderb_abcd '>
                                    <h2 className="blue-color_abcd 2_abcd custom_heading pl-5px">
                                        {item[1]?.companyname}
                                    </h2>
                                    <h2 className="blue-color_abcd 2_abcd custom_heading pl-5px">
                                        Filtered Value : <span className='colored_abcd'>Value</span>
                                    </h2>
                                </div>
                                <div className='abcd_row abcd_justify-between p-1_abcd abcd_wrap'>
                                    <div className='abcd_col-4 custom-card-full-width'>
                                        <ul className="keyvalues_abcd mt-2_abcd topten-ul-border">
                                            <li className="li_abcd">
                                                <span className='abcd_width_50'><strong>Country</strong></span> <span className='abcd_width_50'>{item[1]?.country ? item[1]?.country : "NA"}</span>
                                            </li>
                                            <li className="li_abcd">
                                                <span className='abcd_width_50'><strong>Industry</strong></span> <span className='abcd_width_50'>{item[1]?.industry ? item[1]?.industry : "NA"} </span>
                                            </li>
                                            <li className="li_abcd">
                                                <span className='abcd_width_50'><strong>CEO</strong></span> <span className='abcd_width_50'>{item[1]?.ceo ? item[1]?.ceo : "NA"}</span>
                                            </li>
                                            <li className="li_abcd">
                                                <span className='abcd_width_50'><strong>Market Capitalization</strong></span> <span className="red-bg_abcd abcd_width_50">{item[1].mktcap ? item[1].mktcap : "NA"}


                                                </span>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className='abcd_col-4 custom-card-full-width'>
                                        <h2 className='text-center_abcd'>Core Performance</h2>
                                        <div className='abcd_row abcd_justify-around topten-ul-border col-gap-2r_abcd'>

                                            <div className=''>
                                                <div>
                                                    <p className='text-center_abcd'>Net Profit Margin</p>
                                                    <div className='abcd_row abcd_justify-center abcd_core-performance abcd_align-center m-auto custom-card-back_abcd'>{item[0]?.netprofitmarginttm ? item[0]?.netprofitmarginttm : "NA"}</div>
                                                </div>
                                                <div>
                                                    <p className='text-center_abcd'>Gross Profit Margin</p>
                                                    <div className='abcd_row abcd_justify-center abcd_core-performance abcd_align-center m-auto  custom-card-back_abcd '>{item[0]?.grossprofitmarginttm ? item[0]?.grossprofitmarginttm : "NA"}</div>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div>
                                                    <p className='text-center_abcd'>Return on Asset</p>
                                                    <div className='abcd_row abcd_justify-center abcd_core-performance abcd_align-center m-auto custom-card-back_abcd'>{item[0]?.returnonassetsttm ? item[0]?.returnonassetsttm : "NA"}</div>
                                                </div>
                                                <div>
                                                    <p className='text-center_abcd'>Return on Equity</p>
                                                    <div className='abcd_row abcd_justify-center abcd_core-performance abcd_align-center m-auto  custom-card-back_abcd'>{item[0]?.returnonequityttm ? item[0]?.returnonequityttm : "NA"}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='abcd_col-4 custom-card-full-width'>
                                        <h2 className='text-center_abcd'>Company Description</h2>
                                        <div>
                                            <p className='customcard-para'>{item[1]?.description.length > MAX_LENGTH ? `${item[1]?.description.substring(0, MAX_LENGTH)}...` : "NA"}</p>
                                        </div>
                                    </div>
                                </div>
                                <Link href={`/companydetail?symbol=${item[0]?.symbol}`} className='profile_font'>
                                    <a>
                                        <button className="profile_card_btn_abcd bluehai-btn">


                                            See More Detail

                                        </button>

                                    </a>
                                </Link>
                            </div>

                        </div>
                        </div>
                    )
                    }

                )}
            </div>
        </>
    )
};

export default CustomCard;

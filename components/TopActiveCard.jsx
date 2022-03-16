// import Image from 'next/image';
import { useEffect, useState } from 'react';
import  Link  from 'next/link';


const TopActiveCard = ({ data }) => {
    const [image, setImage] = useState(false)
    // useEffect(() => {
    //     function imageExists(image_url){

    //         let http = new XMLHttpRequest();

    //         http.open('HEAD', image_url, false);
    //         http.send();

    //         return http.status != 404;

    //     }

    //     setImage(imageExists(data?.Info?.image))
    // }, []);


    return (
        <>

            <div className="abcd_col-4 widthon100-abcd full-width_abcd keyvaluecard_abcd">
                <div className='new_card_top_abcd'>
                    <div className='card_logo_set'>
                        {/* {image ? <img className='' src={data?.Info?.image} alt={data?.Symbol} /> : */}
                            <span>{data?.Symbol}</span>
                        {/* } */}

                    </div>
                </div>
                <div className='mt-2-2_abcd p-1_abcd'>
                    <ul className="keyvalues_abcd">
                        <li className="li_abcd">
                            <span className='span_first_set'> <strong> Company Name</strong></span> <span className='span_second_set'>{data?.Info?.companyname ? data?.Info?.companyname : 'N/A'}</span>
                        </li>
                        <li className="li_abcd">
                            <span className='span_first_set'> <strong>Price</strong></span> <span className='span_second_set'>{data?.Info?.price ? data?.Info?.price : 'N/A'}</span>
                        </li>
                        <li className="li_abcd">
                            <span className='span_first_set'> <strong>Changes </strong></span> <span className='span_second_set'>{data?.Info?.changes ? data?.Info?.changes : 'N/A'}

                            </span>
                        </li>
                        <li className="li_abcd">
                            <span className='span_first_set'> <strong>Changes Percentage</strong></span> <span className='span_second_set'>{data?.Info?.changespercentage ? data?.Info?.changespercentage : 'N/A'} </span>
                        </li>

                    </ul>
                    <Link href={`/companydetail?symbol=${data?.Symbol}`} className='profile_font'>
                        <a>
                            <button className="profile_card_btn_abcd bluehai-btn">


                                See More Detail

                            </button>

                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
};

export default TopActiveCard;

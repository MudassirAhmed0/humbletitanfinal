// import Image from 'next/image';
import { useEffect, useState } from 'react';
import  Link  from 'next/link';


const Newcard = ({ data }) => {
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
                <div className='mt-1-2_abcd p-1_abcd'>
                    <div className=''>

                        <h3 className="blue-color_abcd text-center_abcd h4_abcd heading_set_company abcd_justify-center">
                            {data?.Info?.companyname ? data?.Info?.companyname : 'N/A'}
                        </h3>
                        <p className='abcd_row abcd_justify-center text-transform_abcd font-weight-500_abcd card-ceo-set-abcd'>ceo</p>
                        <h4 className='abcd_row abcd_justify-center card-ceo-name-abcd'>
                            {data?.Info?.ceo ? data?.Info?.ceo : 'N/A'}
                        </h4>
                    </div>
                    <ul className="keyvalues_abcd">
                        <li className="li_abcd">
                            <span className='span_first_set'> <strong> Country</strong></span> <span className='span_second_set'>{data?.Info?.country ? data?.Info?.country : 'N/A'}</span>
                        </li>
                        <li className="li_abcd">
                            <span className='span_first_set'> <strong>Industry</strong></span> <span className='span_second_set'>{data?.Info?.industry ? data?.Info?.industry : 'N/A'} </span>
                        </li>
                        <li className="li_abcd">
                            <span className='span_first_set'> <strong>Sector</strong></span> <span className='span_second_set'>{data?.Info?.sector ? data?.Info?.sector : 'N/A'}</span>
                        </li>
                        <li className="li_abcd">
                            <span className='span_first_set'> <strong>Market Capitalization </strong></span> <span className='span_second_set'>{data?.Info?.mktcap ? data?.Info?.mktcap : 'N/A'}

                            </span>
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

export default Newcard;

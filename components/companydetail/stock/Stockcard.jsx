 

const Stockcard = ({item}) => {

    return (
        <>
            <div className="abcd_col-4 full-width_abcd mt-2rem_abcd">
                <div className="keyvaluecard_abcd p-1_abcd">
                    <h4 className="blue-color_abcd h4_abcd">
                        {item?.heading}
                    </h4>
                    <p className="mb-1_abcd p_abcd">{item?.pera}.</p>
                    <ul className="keyvalues_abcd ul_abcd">
                        {item?.listItems?.map(i=>
                            <li className="li_abcd" key={i[0]}>
                            <span><strong>{i[0]}</strong></span> <span>{i[1]}</span>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Stockcard

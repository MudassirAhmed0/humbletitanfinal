import CompanyCardDetails from "./CompanyCardDetails";



const CompanyCard = ({heading,items}) => {
    return (
        <div className="companyCard_abcd abcd_col-5 full-width_abcd">
            <h3 className="h3_abcd blue-color_abcd">{heading}<span className="colored_abcd">.</span></h3>
            <div className="companyCardContent_abcd">
                {
                    items?.map((item)=>
                    <CompanyCardDetails key={item.label} item={item}/>
                    )
                }

              

            </div>
        </div>
    );
};

export default CompanyCard;


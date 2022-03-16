

const CompanyCardDetails = ({item:{label,value,condition,conditionClass}}) => {
    return (
        <div className="companycarddetail_abcd">
            <span className='blue-color_abcd'><strong>{label}<span className="colored_abcd">:</span>
            </strong></span><br />
            <span className={condition && condition === 'btn' ? "btn_abcd btn-primary_abcd" : condition === 'mkcap' ? "btn_abcd " + conditionClass : condition === "beta" && "btn_abcd " + conditionClass}>{value}</span>
        </div>
    );
};

export default CompanyCardDetails;

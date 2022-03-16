 
import BlueCard from './BlueCard'

const BlueSection = ({content, bigboxes}) => {
  
    return (
        <>
           <div className="abcd_bluesection pt-5_abcd pb-5_abcd">
        <div className="abcd_container">
            <h2 className="mb-3_abcd h2_abcd">
                {content?.heading}<span className="colored">...</span>
            </h2>
            <div className="abcd_row keyvaluecards_abcd abcd_justify-between">
            {/* <BlueCard profile={profile} items={content?.items} /> */}
            {content?.cards?.map(item=>
                <BlueCard    item={item} bigboxes={bigboxes} key={item?.listItems}/>
            )}

            </div>
        </div>

    </div> 
        </>
    )
}

export default BlueSection

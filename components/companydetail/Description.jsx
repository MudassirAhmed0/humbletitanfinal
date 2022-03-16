import MyChart from "../MyChart"

const Description = ({ description, chartData }) => {

    return (
        <>
            <div className="abcd_container pt-5_abcd pb-5_abcd company_description_section_abcd">
                <h2 className="blue-color_abcd mb-3_abcd h2_abcd">
                    Company Description
                </h2>
                <p className="p_abcd">{description}</p>
                <br />
                <br />
                <MyChart chartData={chartData} />
            </div>
        </>
    )
}

export default Description

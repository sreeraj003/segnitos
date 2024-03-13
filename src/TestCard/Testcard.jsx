import "./TestCard.css"
function Testcard(props) {
    return (
        <div className="cards row">
            <div className="testname">
                <h5>{props.data.testName}</h5>
            </div>
            <div className="testimony">
                {props.data.testimony}
            </div>
        </div>
    )
}

export default Testcard
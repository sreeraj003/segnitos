import Testcard from "../TestCard/Testcard"
function Testimonials() {

  const list = [
    {
      testName: "Sreeraj",
      testimony: "It is a great website where people actually find their skin care products."
    },
    {
      testName: "Ragnar",
      testimony: "Genuine products are not always available in market. But Ecora have a great mission on finding those."
    },
    {
      testName: "Steve",
      testimony: "Providing value to their business made Ecora this far."
    },
    {
      testName: "Tony Stark",
      testimony: "Using technology is a great option and Ecora proved it."
    },
  ]

  return (
    <div className="testimonials p-3">
      <div className="row">
        <div className="d-flex col-12">
          <h3 className="mx-auto"><i>Testimonials</i></h3>
        </div>
        {
          list.map((el, ind) => (
            <div key={ind} className='ps-4 col-lg-3 col-md-4 col-xs-6 col-sm-6'>
              <Testcard key={ind} data={el} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials
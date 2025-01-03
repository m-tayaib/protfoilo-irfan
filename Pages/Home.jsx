import pic from "../public/irfan.jpeg"
import underline from "../public/Decore.png"
import { Link } from "react-router"
import TagTextBox from "../Components/TagTextBox"

const Taglines = [
  {id :0 , title : "Data Science Trainee | Proficient in Python & Machine Learning" , delay : 0.3 },
  {id :1 , title : "Data Analyst | Specializing in Extracting Actionable Insights from Complex Data" , delay : 0.6 },
  {id :2 , title : "Mathematics Scholar | IBM-Certified Data Scientist | Data-Driven Innovator" , delay : 0.9 },
]
export default function Home() {
  return (
    <section className='container  font-roboto grid md:grid-cols-2 justify-center items-center gap-5 md:h-[91vh] overflow-x-hidden  '>
     
     {/* Person Info */}
     <div className="p-5  md:p-0">
      <h1 className="relative ml-1 md:text-6xl text-3xl font-bold capitalize pb-5">Muhammad Irfan 
        <img className="absolute bottom-5 w-[50%] -rotate-[5deg] right-10 " src={underline} alt="underline" />
      </h1>
      <p className="md:text-xl ml-1 text-md leading-7 ">I am a data professional skilled in <strong>Python</strong> , <strong>Machine Learning</strong>, and <strong>analytics</strong> , with a strong foundation in mathematics and a proven track record of delivering data-driven insights.</p>

{Taglines.map((tagline) => {
  return (
    <TagTextBox key={tagline.id} id={tagline.id} title={tagline.title} delay={tagline.delay} />
  )
})}
   

      <Link to="/contact"> <button className="bg-black transition-all 2s ease-in hover:translate-x-3 hover:text-black hover:bg-white shadow-[0_0_5px_black] ml-1 border-[0.7px] border-[#000000] text-white p-3 rounded-lg mt-5">Let's Connect</button></Link>
     </div>
    
    {/* person pic  */}
    <div className="container flex justify-center items-center">
      <img className="img shadow-[0_0_20px_black]" src={pic} alt="image" />
    </div>

    </section>
  )
}

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Footer from "../components/Footer.jsx"

import Nav from "../components/Nav"
import Boyimg from "../assets/boyImg.jpg"
import Tool1 from "../assets/tool1.png"
import Tool2 from "../assets/tool2.png"
import Tool3 from "../assets/tool3.png"
import Tool4 from "../assets/tool4.png"
import Tool5 from "../assets/tool5.png"
import Tool6 from "../assets/tool6.png"
import P1 from "../assets/project1.avif"
import P2 from "../assets/project2.png"
import P3 from "../assets/project3.png"
import BlogImg from "../assets/blogImg.png"
import Myportrait from "../assets/myPortfolioImg.png"
import Resume from "../assets/resume.pdf"
const Home = () => {
    const Navigate = useNavigate()

    const [About, setAbout] = useState(false)
    const [AboutHbtn, setAboutHbtn] = useState(false)
    const [AboutRbtn, setAboutRbtn] = useState(true)
    const readMore = () => {
        setAbout(true)
        setAboutHbtn(true)
        setAboutRbtn(false)
    }
    const Hide = () => {
        setAbout(false)
        setAboutHbtn(false)
        setAboutRbtn(true)
    }
    return (
        <>

            <Nav />
            <section className="mx-5 flex flex-col gap-10">

                <div className="flex flex-wrap justify-between items-center mt-20 gap-5">
                    <div className="w-full md:w-[50%]">
                        <motion.h3 initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="font-bold text-4xl text-white bg-[#FDC010] w-fit p-1 rounded-md">Hi!</motion.h3>
                        <motion.h3 initial={{ x: 40, opacity: 0 }}
                            whileInView={{ x: -3, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }} className="font-bold text-5xl">I am Karthik</motion.h3>
                        <div style={{ height: "400px" }} className="  w-full md:hidden ">
                            <img style={{ boxShadow: "rgba(0, 0, 0, 0.35) -5px 5px 5px" }} className="w-full h-full rounded-2xl" src={Myportrait} />
                        </div>
                        <h1 className="font-bold text-2xl text-[#FDC010]  ">Full Stack Developer</h1>
                        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam perferendis ducimus. Accusamus voluptatem reprehenderit tenetur itaque, dolor delectus, harum alias corporis quo incidunt non est inventore cum iure sint.</p>
                        <div className="flex gap-3 items-center">
                            <button style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] p-1 px-2 mt-2 rounded-md">Contact</button>
                            <a href={Resume}><button style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className=" p-2 py-1.5 rounded-md text-[#FDC010] border border-black">Download Resume</button></a>
                        </div>

                    </div>
                    <div style={{ height: "400px" }} className="hidden w-[40%] h-[450px] md:flex ">
                        <img style={{ boxShadow: "rgba(0, 0, 0, 0.35) -5px 5px 5px" }} className="w-full h-full rounded-2xl" src={Myportrait} />
                    </div>
                </div>


                <div className="flex w-full justify-around ">
                    <img style={{ width: "50px", height: "50%" }} src={Tool1} alt="" />
                    <img style={{ width: "50px", height: "50%" }} src={Tool2} alt="" />
                    <img style={{ width: "50px", height: "50%" }} src={Tool3} alt="" />
                    <img style={{ width: "50px", height: "50%" }} src={Tool4} alt="" />
                    <img style={{ width: "50px", height: "50%" }} src={Tool5} alt="" />
                    <img style={{ width: "50px", height: "50%" }} src={Tool6} alt="" />
                </div>

                <motion.div initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} className='flex flex-col mt-10 items-center justify-around sm:flex-row'>
                    <div className='flex-col'>
                        <div className='mt-4 border-[6px] rounded-lg border-purple-500 p-5 border-t-0 w-60 flex-col items-center'>
                            <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600'>6</div>
                            <p className='text-center font-medium'>Projects Completed</p>
                        </div>
                        <div className='mt-4 border-[6px] rounded-lg border-green-500 p-5 border-t-0 w-60 flex-col items-center'>
                            <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600'>6</div>

                            <p className='text-center font-medium'>Months of Experience</p>
                        </div>
                    </div>

                    <div className='ml-4 mt-4  text-center sm:mt-0'>
                        <h2 className='text-3xl sm:text-7xl font-bold'>My Awesome</h2>
                        <h2 className='text-3xl sm:text-7xl font-bold text-[#FDC010]'>Services</h2>
                        <p className='my-2'>I have attahed my Resume here for your Reference</p>
                        <a href={Resume}><button style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] p-1 px-2 mt-2 rounded-md">Download CV</button></a>

                    </div>
                </motion.div>
                <div>
                    <h2 className='text-center text-2xl sm:text-5xl my-14 font-bold '>Checkout My Live <motion.span className="projectTitle"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >Projects</motion.span> Here</h2>

                    <div className='flex justify-between my-5 gap-5 items-center flex-col sm:flex-row'>
                        <motion.div initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "450px" }} className=" flex flex-col  gap-2 sm:w-[60%] w-[80%] bg-gray-300 p-3 rounded-md duration-500  hover:-translate-y-2">
                            <img src={P1} className='w-full h-full border rounded-md cursor-pointer' alt="" />
                            <h1 className="font-bold text-black">Weather Forecast <span style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] p-1 rounded-md m-1 text-white" > App</span></h1>
                            <p>A weather forecast app with search functionality.</p>
                           <a className="w-full" href="https://weather-app-three-tau-18.vercel.app/"> <button style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] w-full w-full p-1 text-white px-3 mt-2 rounded-md duration-300 hover:-translate-y-0.5">Live</button></a>
                            <a className="w-full" href="https://github.com/kar-07-thik/Weather-app.git"><button style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] w-full p-1 text-black px-3 mt-2 rounded-md duration-300 hover:-translate-y-0.5">Github</button></a>

                        </motion.div>


                        <motion.div initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "450px" }} className=" flex flex-col  gap-2 sm:w-[60%] w-[80%] bg-gray-300 p-3 rounded-md duration-500 hover:-translate-y-2">
                            <img src={P2} className='w-full h-full border rounded-md cursor-pointer' alt="" />
                            <h1 className="font-bold text-black">E-Commerce <span style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] p-1 rounded-md m-1 text-white " > App</span></h1>
                            <p>Shopping app with cart functionality and payment integration.</p>
                           <a  className="w-full" href="https://nostra-react.vercel.app/"> <button style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] w-full p-1 text-white px-3 mt-2 rounded-md duration-300 hover:-translate-y-0.5">Live</button></a>
                            <a className="w-full" href="https://github.com/kar-07-thik/Nostra-react.git"><button style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] w-full p-1 text-black px-3 mt-2 rounded-md duration-300 hover:-translate-y-0.5">GitHub</button></a>

                        </motion.div>

                        <motion.div initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "450px" }} className=" flex flex-col  gap-2 sm:w-[60%] w-[80%] bg-gray-300 p-3 rounded-md duration-500 hover:-translate-y-2">
                            <img src={P3} className='w-full h-full border rounded-md cursor-pointer' alt="" />
                            <h1 className="font-bold text-black">TripAdvisor-clone <span style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] p-1 rounded-md m-1 text-white" > App</span></h1>
                            <p>A TripAdvisor-style travel review frontend UI design
</p>
                            <a className="w-full" href="https://kar-07-thik.github.io/tripAdvisor-clone/"><button style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] w-full p-1 text-white px-3 mt-2 rounded-md duration-300 hover:-translate-y-0.5">Live</button></a>
                            <a className="w-full" href="https://github.com/kar-07-thik/tripadvisor.clone.git"><button style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] w-full p-1 text-black px-3 mt-2 rounded-md duration-300 hover:-translate-y-0.5">GitHub</button></a>

                        </motion.div>

                    </div>
                    <motion.section initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }} id="About" className=" flex flex-col items-center gap-7 mt-10 sm:flex-row sm:flex w-full  sm:w-[70%] mx-auto">
                        <div className="sm:w-[50%]">
                            <h1 className="font-bold text-4xl">About<motion.span style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className=" mx-1 text-gray-300 text-center px-1 rounded-md bg-[#FDC010]"> Me</motion.span></h1>
                        </div>
                        <div style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }} className=" flex flex-col gap-5 bg-[#EBEBED] p-2 rounded-md border border-gray-400 text-black sm:w-[70%]">
                            <p>I am a dedicated and passionate 💻 Full Stack Developer with 6 months of hands-on experience in building and deploying real-world web applications 🌐. During this time, I have successfully completed 6+ full-stack projects where I handled both frontend 🎨 and backend ⚙️ development. I enjoy turning ideas 💡 into functional, scalable, and user-friendly applications while following clean coding practices 🧹 and efficient development workflows 🚀.</p>
                            <p style={{ display: About ? "block" : "none" }}>My project experience includes developing a 📧 Bulk Mail Application for managing and sending large volumes of emails efficiently, an 📱 Instagram Login Clone inspired by Instagram with responsive authentication design 🔐, a 🎓 Udemy Clone inspired by Udemy featuring course management and user functionality, and a 🌦️ Weather API application that fetches and displays real-time weather data using external APIs 🔗. Through these projects, I gained practical knowledge in REST API development 🔄, authentication systems 🔑, database integration 🗄️, frontend responsiveness 📲, and full project deployment 🚀.</p>
                            <p style={{ display: About ? "block" : "none" }}>I am continuously learning new technologies 📚 and improving my problem-solving skills 🧠 to build secure 🔒, high-performance ⚡ applications. I am highly motivated 💪, adaptable 🔄, and committed to professional growth 📈. My goal is to work in a challenging environment 🏢 where I can contribute my skills 🤝, collaborate with talented teams 👥, and develop innovative solutions 💡 that create real impact 🌟.</p>
                            <div>
                                <button onClick={readMore} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", display: AboutRbtn ? "block" : "none" }} className="bg-[#FDC010] p-1 text-black px-2 mt-2 rounded-md duration-300 hover:-translate-y-0.5">Read more</button>
                                <button onClick={Hide} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", display: AboutHbtn ? "block" : "none" }} className="bg-[#FDC010] p-1 text-black px-2 mt-2 rounded-md duration-300 hover:-translate-y-0.5">Hide</button>
                            </div>
                        </div>


                    </motion.section>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }} className='flex items-center justify-center my-14'>
                        <div className='justify-center hidden sm:block'>
                            <img src={BlogImg} className='w-60 md:w-96 ' alt="Blog Profile Image" />

                        </div>
                        <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
                            <h2 className='text-3xl md:text-6xl font-bold pb-2'>I like to Write</h2>
                            <h2 className='text-4xl md:text-7xl font-bold text-[#FDC010] py-2'>Blogs about tech</h2>

                            <p className='py-2'>You can know better about me by reading my blogs here. I share my expertise here.</p>
                            <button style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] p-1 px-2 mt-2 rounded-md" onClick={() => Navigate("/Blog")}>Read My Blogs</button>
                        </div>


                    </motion.div>

                </div>
            </section>
            <Footer />
        </>
    )
}
export default Home
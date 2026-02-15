import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../config/firebaseConfig"
import { signOut } from "firebase/auth"


const Nav = () => {

    const [Loginbtns, setLoginbtns] = useState(false)
    const [NavSlider, setNavSlider] = useState(false)
  

    const NavHandler = () => {
        setNavSlider(true)

    }
    const CloseNav = () => {
        setNavSlider(false)

    }
    const logOut = async () => {
        try {
            const Signout = await signOut(auth)
            console.log("You Logged Out")
         
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLoginbtns(true)
                console.log("User Logged In")
            } else {
                setLoginbtns(false)
                console.log("User logged Out")
            }
        })
    }, [])

    return (
        <>

           
            <section style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }} className="flex justify-between items-center sticky top-0 z-10 px-5 py-3 bg-[#EBEBED]">
                <div>
                    <h1 className="font-medium  text-black text-2xl">Portfolio</h1>
                </div>

                <div className="md:hidden">
                    <svg onClick={NavHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="gray" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div style={{ right: NavSlider ? "0px" : "-400px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "100vh" }}
                    className="  flex flex-col gap-5 bg-gray pt-3  text-gray-500  fixed top-0 w-[40%]  duration-1000 rounded-md md:hidden">
                    <div className="px-2 cursor-pointer">
                        <p onClick={CloseNav}>X</p>
                    </div>
                    <div className="text-center flex flex-col gap-5 cursor-pointer">
                        <Link to={"/"}><p className="hover:text-[#FDC010] z-30 ">Home</p></Link>
                        <a href="/#About" className="hover:text-[#FDC010]">About</a>
                        <Link to="/Blog"><p className="hover:text-[#FDC010]">Blog</p></Link>
                         {
                        Loginbtns ? <button onClick={logOut} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] p-1 px-2 w-[50%] m-auto rounded-md hover:text-black text-white" >Login Out</button> : <Link to="/Login"><button style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] p-1 px-2  rounded-md hover:text-black text-white" >Login</button></Link>

                    }
                    </div>



                </div>
                <div className=" gap-7 cursor-pointer text-gray-400 hidden md:flex">
                    <Link to="/Home"><p className="hover:text-[#FDC010] z-30 ">Home</p></Link>
                    <a href="/Home#About" className="hover:text-[#FDC010]">About</a>
                    <Link to="/Blog"><p className="hover:text-[#FDC010]">Blog</p></Link>
                    {
                        Loginbtns ? <button onClick={logOut} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] p-1 px-2  rounded-md hover:text-black text-white " >Login Out</button> : <Link to="/Login"><button style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] p-1 px-2  rounded-md hover:text-black text-white" >Login</button></Link>

                    }





                </div>
            </section>
        </>
    )
}
export default Nav
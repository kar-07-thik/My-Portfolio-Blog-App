import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../config/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
const Login = () => {
    const [Lemail, setLemail] = useState("")
    const [Lpass, setLpass] = useState("")
    const [LoginErr, setLoginErr] = useState(false)
    const Navigate = useNavigate()
    const login = async (e) => {
        e.preventDefault()
        try {
            const checkCredential = await signInWithEmailAndPassword(auth, Lemail, Lpass)
            console.log("Login Sucessfully")
            console.log(checkCredential)
            Navigate("/")
        } catch (error) {
            setLoginErr(true)
            console.log(error)

        }

    }
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
               Navigate("/") 
               
            } 
        })
    }, [])
    return (
        <>
            <Nav />
            <section className="flex flex-col justify-center m-auto w-[95%] h-[75%] md:w-[60%]">
                <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="flex flex-col bg-gray-300 text-center p-3 rounded-md gap-5">
                    <h1 className="font-medium text-xl sm:text-2xl"><span style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] p-1 rounded-md m-1 text-white">Login </span>to your Account</h1>
                    <form className="flex flex-col gap-5">
                        <input value={Lemail} onChange={(e) => { setLemail(e.target.value) }} className="bg-white border border-gray-400 p-1 py-2 rounded-md" type="text" placeholder="Email" />
                        <input value={Lpass} onChange={(e) => { setLpass(e.target.value) }} className="bg-white border border-gray-400 p-1 py-2 rounded-md" type="Password" placeholder="Password"></input>
                        <p style={{ display: LoginErr ? "flex" : "none" }} className="text-red-600 text-left">Login failed try the signUp option</p>
                        <button onClick={login} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] py-2 rounded-md hover:-translate-y-0.5">Login</button>
                    </form>

                    <div>
                        <p>I don't have an account? <span className="text-[#efb507] font-bold cursor-pointer" onClick={() => { Navigate("/SignUp") }}>SignUp</span></p>
                    </div>

                </div>
            </section>
            <Footer />
        </>

    )
}
export default Login
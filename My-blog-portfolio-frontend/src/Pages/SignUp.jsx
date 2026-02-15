import { useState } from "react"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { useNavigate } from "react-router-dom"
import { auth } from "../config/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"

const SignUp = () => {
    const [Semail, setSemail] = useState("")
    const [Spass, setSpass] = useState("")
    const [Scompass, setScompass] = useState("")
    const [passMatch, setpassMatch] = useState(false)
    const Navigate = useNavigate()
    const signUp = async (e) => {
        e.preventDefault()
        if (Spass !== Scompass) {
            setpassMatch(true)
            return;
        }
        try {
            const createCredential = await createUserWithEmailAndPassword(auth, Semail, Spass)
            console.log("createCredentail")
            setSemail("")
            setSpass("")
            setScompass("")
            Navigate("/Login")
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>

            <Nav />
            <section className="flex flex-col justify-center m-auto w-[95%]  h-[75%] md:w-[60%]">
                <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="flex flex-col bg-gray-300 text-center p-3 rounded-md gap-5">
                    <h1 className="font-medium text-xl sm:text-2xl"><span style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] p-1 rounded-md m-1 text-white">SignUp</span>to your Account</h1>
                    <form className="flex flex-col gap-5">

                        <input value={Semail} onChange={(e) => { setSemail(e.target.value) }} required className="bg-white border border-gray-400 p-1 py-2 rounded-md" type="text" placeholder="Email" />
                        <input value={Spass} onChange={(e) => { setSpass(e.target.value) }} required className="bg-white border border-gray-400 p-1 py-2 rounded-md" type="password" placeholder="Password"></input>
                        <input value={Scompass} onChange={(e) => { setScompass(e.target.value) }} required className="bg-white border border-gray-400 p-1 py-2 rounded-md" type="password" placeholder="Confrim Password" />
                        <p style={{ display: passMatch ? "flex" : "none" }} className="text-red-600 text-left">Comfrim password incorrect</p>
                        <button onClick={signUp} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] py-2 rounded-md hover:-translate-y-0.5">SignUp</button>
                    </form>
                    <div>
                        <p>I  have an account  already ? <span onClick={() => {
                            Navigate("/Login")
                        }} className="text-[#efb507] font-bold cursor-pointer">Login</span></p>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
export default SignUp
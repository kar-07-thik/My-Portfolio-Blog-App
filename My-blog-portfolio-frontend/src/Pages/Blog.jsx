import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import axios from "axios"
import { auth } from "../config/firebaseConfig"

const Blog = () => {
    const [blogTitle, setblogTitle] = useState("")
    const [blogContent, setblogContent] = useState("")
    const [BlogsArr, setBlogsArr] = useState([])
    const [adminAcc, setadminAcc] = useState(false)
    const [recentAcc, setrecentAcc] = useState(false)
   const [Likes,setLikes]=useState(0)

    const addBlogs = () => {
        auth.onAuthStateChanged((user) => {
            const admin = "4qTUbYSyR7bfMQwi9fnTKRAw1ge2"
            if (user) {
                console.log("your are logged in blogs page")
                if (user.uid == admin) {
                    console.log("Your are the admin")
                    setadminAcc(false)
                    axios.post("http://localhost:3000/sentBlogs", { title: blogTitle, content: blogContent }).then(() => {
                        console.log("data is succefully sent to backend")
                    }).catch(() => {
                        console.log("failed to sent data backend")
                    })
                } else {
                    console.log("your are not the admin")
                    setadminAcc(true)
                    setTimeout(()=>{
                        setadminAcc(false)
                    },3000)

                }
            } else {
                console.log("your not logged in blogs page")
                setrecentAcc(true)
                setTimeout(() => {
                    setrecentAcc(false)
                }, 3000)
            }
        })

        setblogTitle("")
        setblogContent("")

    }
    const recentBlogs = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                axios.get("http://localhost:3000/api/blogs/getBlogs").then((getBlogdata) => {
                    setBlogsArr(getBlogdata.data)
                    setrecentAcc(false)
                })
            } else {
                console.log("login frist than access")
                setrecentAcc(true)
                setTimeout(() => {
                    setrecentAcc(false)
                }, 3000)

            }
        })

    }
    const like=()=>{
        axios.patch("http://http://localhost:3000//api/blogs/likeBlogs",{likes:Likes})
    }
    return (
        <>
            <div style={{ display: adminAcc ? "flex" : "none" }} className="adminErr">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="red" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <p>You are not a admin</p>
            </div>
            <div style={{ display: recentAcc ? "flex" : "none" }} className="recentErr" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="red" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <p>Login frist</p>
            </div>



            <Nav />

            <section className="flex flex-col items-center gap-5 my-5">

                <h1 className="text-2xl font-bold">Latest <span className="text-[#FDC010]">Blogs</span></h1>
                <div style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }} className="flex flex-col bg-gray-300 rounded-md w-[95%] sm:w-[70%] p-5 gap-10">

                    <p className="font-medium">Post a new Blogs</p>
                    <input required value={blogTitle} onChange={(e) => { setblogTitle(e.target.value) }} type="text" placeholder="Blog title" className="bg-white h-10 rounded-md p-1 focus:outline-hidden border border-gray-400" />
                    <textarea required value={blogContent} onChange={(e) => { setblogContent(e.target.value) }} placeholder="Blog content" className="bg-white h-32 rounded-md p-1 focus:outline-hidden border border-gray-400" />
                    <button onClick={addBlogs} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] py-2 rounded-md hover:-translate-y-0.5">Add Blogs</button>
                </div>

                <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-gray-300  py-3 p-1 rounded-md text-black font-medium w-[95%] sm:w-[70%]">
                    <p onClick={recentBlogs}>Recent Blogs</p>
                </div>
                {
                    BlogsArr.map(function (item, index) {
                        return <div key={index} className=" bg-gray-300 w-[95%] p-4  rounded flex flex-col gap-3">
                            <h1 style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }} className="text-xl sm:text-2xl font-medium bg-gray-200 p-1 rounded-md">{item.title}</h1>
                            <div style={{ height: "100px", overflow: "auto", scrollbarWidth: "none" }}>
                                <p className="text-black">{item.content}</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <button onClick={like} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="bg-[#FDC010] py-1 px-2 rounded-md ">Likes :</button><span className="flex text-xl items-center">{Likes} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                </svg>
                                </span>
                            </div>


                        </div>
                    })

                }

            </section>
            <Footer />
        </>


    )
}
export default Blog
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://karthi533110_db_user:NFMKMppeHALkh5LZ@cluster0.hi8jlzu.mongodb.net/blogsManagement?retryWrites=true&w=majority").then(() => {
    console.log("database connect sucessFully")
}).catch(() => {
    console.log("database failed to connect")
})
const blogsSchema = mongoose.Schema({
    title: String,
    content: String,
    likes: Number
})

const blogsModel = mongoose.model("Blogs", blogsSchema)
app.get("/api/blogs/getBlogs", async function (req, res) {
    try {
        const blogsData = await blogsModel.find({})
        console.log(blogsData)
        res.send(blogsData)

    } catch (error) {
        console.log(error)
    }
})

app.patch("/api/blogs/likeBlogs", (req, res) => {
console.log(req.body)
})

app.post("/sentBlogs", async (req, res) => {
    const newBlog = new blogsModel({
        title: req.body.title,
        content: req.body.content
    })
    try {
        const saveBlog = await newBlog.save()
        console.log("Blogs is saved")

    } catch (error) {
        console.log("Blogs is falied to saved")
    }


})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server started...")
})
import {useState,useEffect} from 'react'
import BlogPost from '../comps/Blogs/Post'
import API from '../api/blogs_api'

const Blogs = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        API.GetBlogs().then(res=>{
            setPosts(res)
        })
    }, [])

    const Posts = posts.map(p => 
        <BlogPost
            Data={p}
            key={p.id}
        />)

    return(
        <div>
            <h1>Blogs</h1>
            {Posts}
        </div>
    )
}

export default Blogs
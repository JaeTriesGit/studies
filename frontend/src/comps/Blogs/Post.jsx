export default function BlogPost({Data}){
    return(
        <div className='BlogPost'>
            <h1>{Data.title} by {Data.author}</h1>
            <p>Check out <a href={Data.url}>Here!</a></p>
            <p>{Data.likes} Likes</p>
        </div>
    )
}
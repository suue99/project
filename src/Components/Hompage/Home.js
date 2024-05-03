import { useEffect, useState } from "react"
import client from "../../client.js"

function Home () {
    const [posts , setPosts] = useState ([])
    console.log(posts.length)
    useEffect(()=> {
        client.fetch(
            `*[ _type == "post"] 
            {title,
             slug,
             body,
             mainImage {
                asset -> {
                    _id, url
                },
                alt
                }
            
            }`
        ).then ((data) => setPosts(data)).catch(console.error);
   
    }, [])

    return (
       
       <section>
        <div> {posts.map((post) => (
            <article key ={post.slug.current}>
            <img src = {post.mainImage.asset.url} alt="post"   
                />
                <h4>{post.title}</h4>
            </article>
        )
    
    
    )} 
        </div>
        </section>
    )
}
 
export default Home
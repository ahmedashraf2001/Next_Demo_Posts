import { resolve } from "styled-jsx/css";

export default async function Posydetails({postid}){
    //delay for fetching data
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },2000)
    })
    const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`,
        {
            next:{
                revalidate:120
            }
        }
    );    
    const post=await response.json()
    return(
        <div style={{
                padding:"20px",
                borderRadius:"10px",
                background:"blue",
                color:"white",
                width:"100%",
                marginTop:"10px"
            }}
        >
        <h1>{post.title}</h1>
        <hr></hr>
        <p style={{marginTop:"10px"}}>{post.body}</p>
        </div>
    )
}
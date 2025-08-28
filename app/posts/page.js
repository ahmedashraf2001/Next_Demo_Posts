import Todo from "../components/todo";
import Postdetails from "./[postid]/page";
import Link from "next/link";
export const metadate={
    title:"articles page",
};
export default async function articles(){
    const response= await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            next:{
                revalidate:120
            }
        }
    );    
    const posts=await response.json()
    function postdeatails(){
        return(
            <Postdetails></Postdetails>
        )
    }
    const postJSx=posts.map((post)=>{
        return(
            <Link 
            style={{width:"70%"}}
            key={post.id} href={`/posts/${post.id}`}>
            <div key={post.id}
            style={{
                marginTop:"20px",
                borderRadius:"10px",
                background:"blue",
                color:"white",
                width:"100%",
            }}>
                <h1 style={{margin:"5px"}}>{post.title}</h1>
                <p style={{margin:"5px"}}>{post.body}</p>
            </div>
            </Link>
        );
    })
    return(
        
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            {postJSx}
        </div>
        
        
    )
}
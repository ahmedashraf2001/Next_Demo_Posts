import Todo from "../components/todo";

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
    const postJSx=posts.map((post)=>{
        return(
            <div key={post.id}
            style={{
                marginTop:"20px",
                borderRadius:"10px",
                background:"blue",
                color:"white",
                width:"80%",
            }}>
                <h1 style={{margin:"5px"}}>{post.title}</h1>
                <p style={{margin:"5px"}}>{post.body}</p>
            </div>
        );
    })
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            {postJSx}
        </div>
        
    )
}
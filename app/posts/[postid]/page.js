import { resolve } from "styled-jsx/css";
import Postdetails from "@/app/components/PostDetails";
import { Suspense } from "react";
export default async function Posydetails({params}){
    const {postid}=params
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },2000)
    })
    const Loadingwait=(<div><h1>Loading..</h1></div>)
    return(<div style={{padding:"20px"}}>
        {/*we need post details to show fast dont wait API reponse */}
        <h1>post details</h1>
        <Suspense fallback={Loadingwait}>
        <Postdetails postid={postid} />
        </Suspense>

    </div>) 
}
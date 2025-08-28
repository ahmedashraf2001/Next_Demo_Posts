export const metadata={
    title:"articles page",
};
export default function show({children}){
    return(
        <div>
            <div style={{marginTop:"5px",background:"white",padding:"20px",borderRadius:"10px"}}>
                {children}
            </div>
        </div>
    ); 
}
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [ers,setErs] = useState(null);

    useEffect(()=>{
        //const abortCont = new AbortController();

        setTimeout(()=>{
            console.log("errrrrrrrrr");
            fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("some error exists during fetching data from server"),
                console.log("unable to connect to database")
            }
            return res.json();
        })
        .then(resData => {
            console.log("errsdada");
            setData(resData);
            setLoading(false);
            setErs(null)
        }).catch((err)=>{
            setErs(err.message);
            setLoading(false)
            console.log(err.message)
        })
        },1000)
        
    },[url]);
    return {data,loading,ers};
}
export default useFetch;
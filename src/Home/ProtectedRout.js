import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRout=(props)=>{

    const{MyComponant}=props;

    //console.log("This is Componant "+MyComponant);
    const navigate=useNavigate();

    useEffect(()=>{

        let myLogin=localStorage.getItem("loginRout");

        console.log("Inside Protected Rout "+myLogin);
        

        if(!myLogin){

            navigate("/")

        }
        
    });

    return(
    <>
    
        <MyComponant/>
    </>)

}
export default ProtectedRout;
import { useState,useEffect} from "react";


    const Users =({firstname, lastname})=>{
    
          const [disabled,setDisabled]=useState("");
          const [count,setCount]=useState(0);

          // const onDisabled = (value)=>{
          //      //setDisabled(value);
              
          //      setDisabled("disabled");
             
          // };

          useEffect(() => {  
          if (count === 1) {
                    setDisabled("disabled");
               
               } 
          }, [count]);

          const rate = (value) => {
               if(count<1){
                    setCount((prevState) =>  prevState + value ); 
                  //  setDisabled("disabled");
                   
               }      
          };
   
     return (     
     <div  className="d-flex mt-3">
          <div className="col-3">{firstname} {lastname}</div>  
          <div className="col-2"> <button className="btn btn-primary align-right" disabled={disabled} 
           onClick={rate.bind(null, 1)} 
          >ხმის მიცემა</button></div>
          <div className="col-2"> {count}</div>
     </div>
      );
            
}
export default Users;
import React, { useEffect, useState } from "react";
import ColofulMessage from "./compornents/ColofulMessage";

const App = () => {
    const [num,setNum]=useState(0);
    const[faseShowFlig,setfaseShowFlig]=useState(true);

  const onClickCountUP = ()=>{
      setNum(num+1);
  };

  const onClickSwitchShowFlag=()=>{
    setfaseShowFlig(!faseShowFlig);
  };
   
useEffect(()=>{
    if(num%3===0){
        faseShowFlig || setfaseShowFlig(true);  
      }else{
        faseShowFlig && setfaseShowFlig(false);  
      }    
},[num]);



 
    return (
        <>
            <h1 style={{color:'red'}}>こんにちは！</h1>
            
            <ColofulMessage color="blue">お電気ですか？</ColofulMessage>
            <ColofulMessage color="red">元気です。</ColofulMessage>
            <button onClick={onClickCountUP}>カウントアップ</button><br></br>
            <button onClick={onClickSwitchShowFlag}>On/OFF</button>
            <p>{num}</p>
            {faseShowFlig && <p>(^^♪</p>}
            
 
        </>
    );

};
export default App;
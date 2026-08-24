import logo from './logo.svg';
import './App.css';
import React , {useState} from "react";

function App() {
  const [expression,setExpression]=useState("");
  const [result,setResult]=useState("");
  const handleButtonClick = (value) =>{
    if(value==="C"){
      setExpression("");
      setResult("");
      return;
    }

    if(value === "="){
      if(expression.trim()===""){
        setResult("Error");
        return;
      }

      try{
        const answer=eval(expression);
        setResult(String(answer));
      }catch(error){
        setResult("Error");
      }
      return;
    }
    setExpression((previousExpression)=>previousExpression+value);
  }

  const buttons=["7","8","9","+","4","5","6","-","1","2","3","*","C","0","=","/"];
  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <input type="text" value={expression} readOnly/>
      <div className='result'>{result}</div>
      <div className='button-container'>
        {buttons.map((button)=>(
          <button key={button} onClick={()=>handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

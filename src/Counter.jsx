import { useState } from "react";
import "./Counter.css"
function Counter(){ 
    const[PreviousCount,PreviousSetCount]=useState(0);
    const[CurentCount,CurentSetCount]=useState(0);
    const[CurentOperator,CurentSetOperator]=useState("");

    const returnValue=(value)=>{
        CurentSetCount(value);
    } 

    const Calculate=()=>{
        const current = parseFloat(CurentCount);
        const previous = parseFloat(PreviousCount);
        let result = 0;
        if (CurentOperator=== "+") {
            result = previous + current;
        } else if (CurentOperator === "-") {
            result = previous - current;
        }
        return result;
    }
    
    const handleEquals = () => {
        if (CurentCount !== "" && CurentOperator) {
          const result = Calculate();
          CurentSetCount(result.toString());
          PreviousSetCount(0);
          CurentSetOperator(null);
        }
      };
    
    const returnSign = (operator) => {
        if (CurentCount !== "") {
            if (PreviousCount !== 0 && CurentOperator) {
              const result = Calculate();
                PreviousSetCount(result);
            } else {
                PreviousSetCount(parseFloat(CurentCount)); 
            }
            CurentSetCount(""); 
          }
          CurentSetOperator(operator);
    }
    const handleClear = () => {
        CurentSetCount("");
        PreviousSetCount(0);
        CurentSetOperator(null);
      };
      
    return(
        <>
            
            <div className="Block">
                <h5> {CurentCount||PreviousCount}</h5>
                <button onClick={()=>returnValue(7)}>7</button>
                <button onClick={()=>returnValue(8)}>8</button>
                <button onClick={()=>returnValue(9)}>9</button>
                <button onClick={()=>returnSign("-")}>-</button>
                <br />
                <button onClick={()=>returnValue(4)}>4</button>
                <button onClick={()=>returnValue(5)}>5</button>
                <button onClick={()=>returnValue(6)}>6</button>
                <button onClick={()=>returnSign("+")}>+</button>
                <br />
                <button onClick={()=>returnValue(1)}>1</button>
                <button onClick={()=>returnValue(2)}>2</button>
                <button onClick={()=>returnValue(3)}>3</button>
                <button onClick={handleEquals}>=</button>
                <br />
                <button onClick={handleClear}>Clear</button>

            </div>
        </>

    );
}

export default Counter;
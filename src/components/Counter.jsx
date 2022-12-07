import React from 'react';
import { useState } from 'react';

export default function Counter({ total, onClick }) {
    const [num, setNum] = useState(0)      // [num, 새로바뀔num] = useState(표시할값)  
    return (
        <div className='counter'>
            <p className="number">
                {num} <span className='total'>/{total}</span>
            </p>
            <button
                className="button"              //onClick={()=>{setNum(num+1)}}
                onClick={() => {                //바뀌는 setNum에 num+1씩해서 담아준다
                    setNum((prev) => prev + 1);
                    onClick();         //내부에서 콜백함수를 사용하면 이전값을 전달한다
                }}                              //((prev) => prev + 1) === ((prev)=>{return prev + 1})
            >
                ADD+</button>
        </div >
    );
}


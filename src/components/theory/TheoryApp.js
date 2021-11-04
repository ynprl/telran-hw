import React, {useState} from 'react';
import Counter from "./Counter";
import ShowCounter from "./ShowCounter";

function TheoryApp() {
    //хук на стэйт ishow. изначально false
    const [isShow, setShow] = useState(false);
    //хук на стэйт countera. изначально 0
    const [counter, setCounter] = useState(0);
    return (
        //здесь по клику меняем стэйт ishow на противоположный, если был fasle, то становиться true. и наоборот
        <div>
            {isShow ? <Counter/> : <ShowCounter counter={counter} />}
            <button onClick={() => {
                setShow(isShow => !isShow);
            }}>Show?
            </button>
          // здесь по клику меняем стэйт на новый со значением увеличенным на 1. 1+1,2+1,3+1 etc
            <button onClick={()=>{
                setCounter(counter => counter+1)
            }}>Counter++</button>
        </div>
    );
}

export default TheoryApp;
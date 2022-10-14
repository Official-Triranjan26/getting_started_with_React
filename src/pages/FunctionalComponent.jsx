import React,{useState,useEffect} from 'react';
import BaseHOC from '../hoc/BaseHoc';

const FunctionalComponent=(props)=>{

    const [count,setCount]=useState(0);
    const [changeNmae,setChangeName]=useState(" Triranjan");

    // const prevRef = useRef();


    useEffect(()=>{
        console.log("componrnt did mount :");/*component did mount....runs once*/
    },[])

    useEffect(()=>{
        console.log("componrnt did update :");/*component did update....runs on update*/
    })

    useEffect(()=>{
        console.log("only on changing name :");/*component did mount....runs once*/
    },[changeNmae])

    useEffect(()=>{
        console.log("only on changing props :");/*component did mount....runs once*/
    },[props])

    // useEffect(() => {
    //     console.log(prevRef.current.innerHTML === count);
    // }, [count]);    /*if previous value is not matching with current value...it gives faulse*/


    useEffect(() => {
        return console.log("Component did unmount");
      }, []);


    return(
        <div>
            <p>This is a Functional Components</p>
            <button onClick={()=>setCount(count+1)}>Click me to add 1</button>
            <button onClick={()=>setCount(count-1)}>Click me to reduce 1</button>
            {/* <h1 ref={prevRef}>{count}</h1> */}

            <h1>{count}</h1>
            <h1>My name is {props.name}</h1>
            {/* <button onClick={()=>{props.setName("Subha")}}>Click to change Triranjan to Subha</button>
            <button onClick={()=>{props.setName("Triranjan")}}>Click to change Subha to Triranjan</button> */}

            <input type="text" onChange={(e)=>setChangeName(e.target.value)} />
            <button onClick={()=>props.setName(changeNmae)}>Submit</button>
        </div>
    )
}

export default BaseHOC(FunctionalComponent);

/*

lifeCycle--->
lifeCycle for classBased Components
                1.mounting
                2.updating
                3.unmounting

                1.mounting-->   1.constructor
                                2.render
                                3.componentDidMount
                2.updating-->   1.render
                                2.componentDidUpdate
                3.unmounting--> 1.componentWillUnmount

lifeCycle for functionalBased Components

                1.react userRef Hook
                ref-->https://www.w3schools.com/react/react_useref.asp
*/
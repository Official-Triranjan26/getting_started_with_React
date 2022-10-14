import React from 'react';

const BaseHOC=(Component)=>({...props})=>{
    return(
        <div>
            <h1>This is a navbar</h1>
            <Component {...props}/>
            <h1>This is a footer</h1>
        </div>
    );
};

export default BaseHOC;
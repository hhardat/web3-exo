import React from 'react'


const Opinion = (opinion) => {
    return(<li> 
        {opinion.content} : {opinion.counter}
        <button onClick={opinion.useCount(opinion.counter + 1)}>Vote</button>
     </li>)
}

export default Opinion
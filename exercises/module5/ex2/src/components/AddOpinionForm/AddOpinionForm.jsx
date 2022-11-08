import {React, useContext} from 'react'
import {Context as opinionContext} from '../../contexts/opinionContext'



const AddOpinionForm = () => {
    const {useOpinion} = useContext(opinionContext)
    return <div>
        <form>
        <div> 
            Opinion : <input/>
            <button type="submit" onClick={useOpinion}>Add opinion</button>
        </div>
      </form>
    </div>
}

export default AddOpinionForm
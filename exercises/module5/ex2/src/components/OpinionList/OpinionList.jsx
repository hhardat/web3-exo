import {React, useContext} from 'react'
import Opinion from '../Opinion/Opinion'
import {Context as opinionContext} from '../../contexts/opinionContext'



const OpinionList = () => {
    const {opinions} = useContext(opinionContext)
    return <div>
        <ul>
            {opinions.map(opinion => <Opinion  key={opinion.id} opinion={opinion} /> )}
        </ul>
    </div>
}

export default OpinionList
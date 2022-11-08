import Button from '../Button/Button'
import { useContext } from 'react'
import {Context as countersContext} from '../../contexts/counterContext'



const App = () => {
  // save clicks of each button to its own state
  const { counterGood, increaseGood, counterOk, increaseOk, counterBad, increaseBad, resetAll} = useContext(countersContext)

  return (
    <div>
      <ul>
        <li>
            Good : {counterGood}
            <Button
            onClick={increaseGood}
            text='Increase good'
            />
        </li>
        <li>
            Ok : {counterOk}
            <Button
            onClick={increaseOk}
            text='Increase ok'
            />
        </li>
        <li>
            Bad : {counterBad}
            <Button
            onClick={increaseBad}
            text='Increase bad'
            />
        </li>
      </ul>
      <Button onClick={resetAll} text='Reset all counters'/>
    </div>
    
  )
}

export default App
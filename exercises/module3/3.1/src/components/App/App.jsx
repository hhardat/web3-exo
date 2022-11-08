import { useState } from 'react'
import Title from '../Title/Title'
import Button from '../Button/Button'
import Statistics from '../Statistics/Statistics'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allStats, setAllStats] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const nGood = good + 1
    const nAllStats = allStats + 1
    setGood(nGood)
    setAllStats(nAllStats)
    updateAverage(nGood, bad, nAllStats)
    updatePositive(nGood, nAllStats)
  }

  const handleNeutral = () => {
    const nAllStats = allStats + 1
    setNeutral(neutral + 1)
    setAllStats(nAllStats)
    updateAverage(good, bad, nAllStats)
    updatePositive(good, nAllStats)
  }

  const handleBad = () => {
    const nBad = bad + 1
    const nAllStats = allStats + 1
    setBad(nBad)
    setAllStats(nAllStats)
    updateAverage(good, nBad, nAllStats)
    updatePositive(good, nAllStats)
  }

  const updateAverage = (nGood, nBad, nAllStats) => {setAverage((nGood - nBad) / nAllStats)}
  const updatePositive = (nGood, nAllStats) => { setPositive(100*(nGood/nAllStats)) }


  return (
    <div>
      <Title title="Give feedback" />
      <Button
          onClick={handleGood}
          text='Good'
      />
      <Button
          onClick={handleNeutral}
          text='Neutral'
      />     
      <Button
          onClick={handleBad}
          text='Bad'
      />
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        allStats={allStats} 
        average={average} 
        positive={positive}
      />
    </div>
    
  )
}

export default App
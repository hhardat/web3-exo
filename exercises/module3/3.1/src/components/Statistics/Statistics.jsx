import Title from "components/Title/Title"
import Display from "components/Display/Display"

const Statistics = (props) => { if(props.allStats == 0) return(<div><Title title="Statistics"/><p>No feedback given</p></div>)
    else return(
    <div>
      <Title title="Statistics"/>
      Good : <Display counter={props.good} />
      Neutral : <Display counter={props.neutral}/>
      Bad : <Display counter={props.bad}/>
      All : <Display counter={props.allStats}/>
      Average : <Display counter={props.average}/>
      Positive% : <Display counter={props.positive}/>
    </div>
)
}

export default Statistics
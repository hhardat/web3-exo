import { ProviderWrapper as CounterProviderWrapper } from '../../contexts/opinionContext';
import App from './App';

const AppLoader= () => {
  return (
    <CounterProviderWrapper >
        <App />
 
      </CounterProviderWrapper >
  )
}

export default AppLoader
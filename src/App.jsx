import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <h1>안녕</h1>
      <button onClick={() => { navigate('/test') }}>테스트로 가기</button>
    </div>
  )
}

export default App;
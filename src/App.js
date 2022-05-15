import { useSelector } from 'react-redux'
import LoginPage from './components/LoginPage/LoginPage'
import { ProfilePage } from './components/ProfilePage/ProfilePage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import './components/LoginPage/styles.css'
function App() {

  const state = useSelector(state => state.auth)
  console.log("state",state)

  return (
    <div className="App">
        
      <Router>
        <Routes>          
          <Route path='/profile' element={<ProfilePage login={state.login}/>} />
          <Route path='/' element={<LoginPage />}>            
          </Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;

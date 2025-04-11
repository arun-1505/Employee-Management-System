import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import TaskContest from './context/TaskContest.jsx'


localStorage.clear()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthContext>
    <TaskContest>
    <App />
    </TaskContest>
    </AuthContext>
  </StrictMode>,
)

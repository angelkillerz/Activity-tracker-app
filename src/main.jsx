import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { AuthProvider } from './shared/authContext'
import { ActivityProvider } from './shared/activityContext'
import { GoalProvider } from './shared/GoalContext';
import { UserProvider } from './shared/userContext'
import { StatsProvider } from './shared/statsContext'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <AuthProvider>
      <UserProvider>
        <ActivityProvider>
          <GoalProvider>
            <StatsProvider>
              <App />
            </StatsProvider>
          </GoalProvider>
        </ActivityProvider>
      </UserProvider>
    </AuthProvider>

  </React.StrictMode>,

  //   <App />
)

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import TeacherDashboardPage from './pages/TeacherDashboardPage'
import CourseDetailPage from './pages/CourseDetailPage'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/admin/dashboard' component={AdminDashboardPage} />
          <Route path='/teacher/dashboard' component={TeacherDashboardPage} />
          <Route path='/courses/:courseId' component={CourseDetailPage} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App

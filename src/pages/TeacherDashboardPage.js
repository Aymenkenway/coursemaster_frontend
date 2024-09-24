import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import apiService from '../services/apiService'

const TeacherDashboardPage = () => {
  const [myCourses, setMyCourses] = useState([])

  useEffect(() => {
    const fetchMyCourses = async () => {
      const data = await apiService.getMyCourses()
      setMyCourses(data)
    }
    fetchMyCourses()
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Teacher Dashboard</h1>
      <h2>My Courses</h2>
      <ul>
        {myCourses.map((course) => (
          <li key={course._id}>{course.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TeacherDashboardPage

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import apiService from '../services/apiService'

const ProfilePage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([])

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const data = await apiService.getEnrolledCourses()
      setEnrolledCourses(data)
    }
    fetchEnrolledCourses()
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Your Enrolled Courses</h1>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course._id}>{course.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProfilePage

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../services/apiService'
import Navbar from '../components/Navbar'

const CourseDetailPage = () => {
  const { courseId } = useParams()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const data = await apiService.getCourseById(courseId)
      setCourse(data)
    }
    fetchCourseDetails()
  }, [courseId])

  if (!course) return <div>Loading...</div>

  return (
    <div>
      <Navbar />
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  )
}

export default CourseDetailPage

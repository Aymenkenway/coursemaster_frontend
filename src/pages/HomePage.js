import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import CourseList from '../components/CourseList'
import SearchBar from '../components/SearchBar'
import apiService from '../services/apiService'

const HomePage = () => {
  const [courses, setCourses] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await apiService.getCourses()
      setCourses(data)
    }
    fetchCourses()
  }, [])

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className='home-page'>
      <Navbar />
      <div className='hero'>
        <h1>Available Courses</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CourseList courses={filteredCourses} />
      </div>
    </div>
  )
}

export default HomePage

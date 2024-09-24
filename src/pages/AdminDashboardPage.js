import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import apiService from '../services/apiService'

const AdminDashboardPage = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await apiService.getAllStudents()
      setStudents(data)
    }
    fetchStudents()
  }, [])

  return (
    <div className='dashboard-container'>
      <Navbar />
      <h1>Admin Dashboard</h1>
      <h2>Students List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default AdminDashboardPage

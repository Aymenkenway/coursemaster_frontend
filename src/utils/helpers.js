import axios from 'axios'

const API_URL = 'http://your_api_url/api' // Replace with your API URL

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/admin/login`, {
    email,
    password,
  })
  return response.data.token
}

export const signup = async (userData) => {
  await axios.post(`${API_URL}/admin`, userData)
}

export const getEnrolledCourses = async () => {
  const token = localStorage.getItem('token')
  const response = await axios.get(`${API_URL}/students`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

export const getAllStudents = async () => {
  const token = localStorage.getItem('token')
  const response = await axios.get(`${API_URL}/admin/students`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

export const getAllTeachers = async () => {
  const token = localStorage.getItem('token')
  const response = await axios.get(`${API_URL}/admin/teachers`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

export const getMyCourses = async () => {
  const token = localStorage.getItem('token')
  const response = await axios.get(`${API_URL}/teachers/my-courses`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

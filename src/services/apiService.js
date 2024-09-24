import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

const apiService = {
  getCourses: async () => {
    const response = await axios.get(`${API_URL}/courses`)
    return response.data
  },
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/admin/login`, {
      email,
      password,
    })
    return response.data
  },
  signup: async (name, email, password) => {
    const response = await axios.post(`${API_URL}/admin/`, {
      name,
      email,
      password,
    })
    return response.data
  },
  getEnrolledCourses: async () => {
    const response = await axios.get(`${API_URL}/students/enrolled`)
    return response.data
  },
  getAllStudents: async () => {
    const response = await axios.get(`${API_URL}/admin/students`)
    return response.data
  },
  getMyCourses: async () => {
    const response = await axios.get(`${API_URL}/teachers/my-courses`)
    return response.data
  },
  getCourseById: async (courseId) => {
    const response = await axios.get(`${API_URL}/courses/${courseId}`)
    return response.data
  },
}

export default apiService

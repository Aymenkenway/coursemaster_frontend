import React from 'react'

const CourseCard = ({ course }) => {
  return (
    <div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <a href={`/courses/${course._id}`}>View Course</a>
    </div>
  )
}

export default CourseCard

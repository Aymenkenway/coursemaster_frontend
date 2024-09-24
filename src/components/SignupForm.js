import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const SignupForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(name, email, password)
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          {' '}
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            required
          />
        </div>
        <div className='form-group'>
          {' '}
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
          <button type='submit'>Signup</button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm

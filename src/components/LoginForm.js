import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    console.log(email, password)
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          {' '}
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='text'
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
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm

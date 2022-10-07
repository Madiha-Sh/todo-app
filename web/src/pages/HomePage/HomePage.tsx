import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import React from 'react'

const HomePage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <><div>Home Page</div><Link to={routes.todos()} className='mr-4'>Go to todos</Link>{isAuthenticated ? (
      <div>
        <span>Logged in as {currentUser.email}</span>{' '}
        <button type="button" onClick={logOut}>
          Logout
        </button>
      </div>
    ) : (
      <Link to={routes.login()}>Login</Link>
    )}</>
  )
}

export default HomePage
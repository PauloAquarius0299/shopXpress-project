import React from 'react'
import AuthLayout from '../features/auth/components/AuthLayout'
import SigninFormComponent from '../features/auth/components/SigninFormComponent'

const SignPage = () => {
  return (
    <AuthLayout>
      <SigninFormComponent />
    </AuthLayout>
  )
}

export default SignPage

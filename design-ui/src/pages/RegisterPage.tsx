import React from 'react'
import AuthLayout from '../features/auth/components/AuthLayout'
import RegisterFormComponent from '../features/auth/components/RegisterFormComponent'

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterFormComponent />
    </AuthLayout>
  )
}

export default RegisterPage

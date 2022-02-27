import React from 'react'
import CardWrapper from "../common/Card";

const withBootstrapCard = (Component) => (props) => {
    const handleLogin = () => {
        localStorage.setItem('auth', 'token')
    }
    const handleLogout = () => {
        localStorage.removeItem('auth')
    }

    const isAuth = !!localStorage.getItem('auth')
    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handleLogout}
            />
        </CardWrapper>
    )
}
export default withBootstrapCard

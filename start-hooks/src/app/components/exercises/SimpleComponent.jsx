import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({onLogin, onLogOut, isAuth}) => {
    //  const [isAuth, setAuth] = useState('')
    // useEffect(() => {
    //     //setAuth('isAuth')
    //     isAuth = ''
    //     console.log('sdf;slkdf;sldfk')
    // }, [isAuth]);
    return (
        !isAuth ? (
            <button className='btn btn-primary' onClick={onLogin}>Войти</button>
        ) : (
            <button className='btn btn-primary' onClick={onLogOut}>Выйти из системы</button>
        )
    )
}
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};
export default SimpleComponent
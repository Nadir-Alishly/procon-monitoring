import React from 'react'

import login_left from '../assets/login_left.png'
import logo_colored from '../assets/logo_colored.png'

function Login() {
    return (
        <div className='page-container h-screen items-center justify-center'>
            <img className='hidden xl:block h-full grow' src={login_left} alt='login_left'/>

            <div className='w-full flex flex-col justify-center items-center p-5'>
                <img className='w-50 mb-8' src={logo_colored} alt='logo'/>
                
                <form className='flex flex-col items-start justify-center w-full max-w-sm'>
                    <label htmlFor='email'>E-posta</label>
                    <input type='text' placeholder='' id='email'/>

                    <label htmlFor='password'>Şifre</label>
                    <input type='password' placeholder='' id='password'/>

                    <div className='flex justify-between items-center w-full mb-5'>
                        
                        <label htmlFor='remember-me' className='flex items-center m-0 shrink'>
                            <input type='checkbox' id='remember-me' />
                            Beni hatırla
                        </label>

                        <a>
                            Şifremi unuttum
                        </a>
                    </div>

                    <button type='submit' className='w-full'>
                        Giriş yap
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
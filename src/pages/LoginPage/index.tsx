import { ChangeEvent, FormEvent, useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

import { Container } from './styles';



const LoginPage = (): JSX.Element=>{

    const {LoginAccount} = useLogin() 
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    

    function handleLoginAccount(e:FormEvent<HTMLFormElement>){ 
        e.preventDefault()

        LoginAccount({email,password})
         
    }

    function handleEmailChange(e:ChangeEvent<HTMLInputElement>){

        setEmail(e.target.value)
    
    }
    function handlePasswordChange(e:ChangeEvent<HTMLInputElement>){

        setPassword(e.target.value)
    }

    return(
        <Container>
            <h2>Login</h2>
            <form onSubmit={handleLoginAccount} >
                <label>Digite seu Email</label>
                <input type='email' name='email' value={email} required onChange={handleEmailChange}/>
                <label>Digite sua Senha</label>
                <input type='password' name='password' required value={password} onChange={handlePasswordChange}/>
                <input type="submit" value="Entrar" />
            </form>
        </Container>
    )

}

export default LoginPage;
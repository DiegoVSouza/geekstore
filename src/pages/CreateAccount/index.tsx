import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useRegister } from '../../hooks/useRegister';
import { api } from '../../services/api';
import { Account } from '../../types';
import { Container } from './styles';

import response from 'axios';
import { useHistory } from 'react-router-dom';

const CreateAccount = (): JSX.Element=>{
    const {registerAccount} = useRegister();

    const history = useHistory()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [id, setId] = useState(0)

    function concluded(){
        // history.push('/createaccount')
    }

    async function handleRegisterAccount(e:FormEvent<HTMLFormElement>){ 
        e.preventDefault()
        const newId = Math.round(Date.now()*Math.random())
        setId(newId)
        try{
            const {data:accounts} = await api.get<Account[]>('accounts') 

            const existEmail = accounts.find(account=> account.email === email)

            console.log(id)
    
            if(existEmail){
                throw new Error
            }

            await api.post<Account>('accounts',{id:id ,email: email,password: password})
            
    
            setEmail('')
            setPassword('')
            
            concluded()
        }catch{
            toast.error('Email Já Cadastrado')
        }
        
    }

    
    function handleEmailChange(e:ChangeEvent<HTMLInputElement>){

        setEmail(e.target.value)
    
    }
    function handlePasswordChange(e:ChangeEvent<HTMLInputElement>){

        setPassword(e.target.value)
    }

    return(
        <Container>
            <h2>Criar conta</h2>
            <form onSubmit={handleRegisterAccount} >
                <input type='email' name='email' value={email} required onChange={handleEmailChange}/>
                <input type='password' name='password' required value={password} onChange={handlePasswordChange}/>
                <input type="submit" value="Submit" />
            </form>
        </Container>
    )

}

export default CreateAccount;
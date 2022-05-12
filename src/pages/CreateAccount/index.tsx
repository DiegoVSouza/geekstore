import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../../services/api';
import { Account } from '../../types';
import { Container } from './styles';

import { useHistory } from 'react-router-dom';

const CreateAccount = (): JSX.Element=>{

    const history = useHistory()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [id, setId] = useState(0)

    function concluded(){
        history.push('/login')
    }

    async function handleRegisterAccount(e:FormEvent<HTMLFormElement>){ 
        e.preventDefault()
        const newId = Math.round(Date.now()*Math.random())
        setId(newId)
        try{
            const {data:accounts} = await api.get<Account[]>('accounts')    

            const existEmail = accounts.find(account=> account.email === email)

    
            if(existEmail){
                throw new Error
            }

            await api.post<Account>('accounts',{id:id ,name: name,email: email,password: password})
            
    
            setEmail('')
            setPassword('')
            
            concluded()
        }catch{
            toast.error('Email Já Cadastrado')
        }
        
    }

    function handleEmailName(e:ChangeEvent<HTMLInputElement>){

        setName(e.target.value)
    
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
                <label>Insira seu Nome</label>
                <input type='text' name='name' value={name} required onChange={handleEmailName}/>
                <label>Insira seu Email</label>
                <input type='email' name='email' value={email} required onChange={handleEmailChange}/>
                <label>Crie uma Senha</label>
                <input type='password' name='password' required value={password} onChange={handlePasswordChange}/>
                <input type="submit" value="Criar Conta" />
            </form>
        </Container>
    )

}

export default CreateAccount;
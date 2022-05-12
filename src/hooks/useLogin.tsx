import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Account } from '../types';
import { useHistory } from 'react-router-dom';

interface LoginProviderProps {
    children: ReactNode;
  }

  interface LoginAccount{
      email: string;
      password: string;
  }

  interface LoginContextData {
    isLogged: Boolean;
    userName: String;
    LoginAccount: ({email,password}: LoginAccount) => Promise<void>;
  }

  const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export function LoginProvider({ children }: LoginProviderProps): JSX.Element {

    const [isLogged, setIsLogged] = useState<Boolean>(false)
    const [userName, setUserName] = useState<String>('')

    const history = useHistory();

    function concluded(){
        history.push('/')
    }

    async function LoginAccount({email, password}: LoginAccount){

        const {data: accounts} = await api.get<Account[]>('/accounts')
        const findEmail = accounts.find(account=> account.email === email)

        console.log(findEmail)
        if(findEmail){
            if(findEmail.password === password){
                setUserName(findEmail.name)
                setIsLogged(true)

                toast.success('Logado com sucesso')

                concluded();
                return;

            }else{ toast.error('Senha incorreta')}
        }else{ toast.error('Email não cadastrado')}
        
    
    }

    return(
        <LoginContext.Provider
            value={{isLogged, userName, LoginAccount}}
        >
            {children}
        </LoginContext.Provider>
    );
}

export function useLogin(): LoginContextData {
    const context = useContext(LoginContext);
  
    return context;
  }
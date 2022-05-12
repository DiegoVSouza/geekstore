import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    h2{
        color: var(--white);
        padding: 4rem 4rem 1rem;
    }
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 2rem 4rem;
        background: var(--ligth-background);
        border-radius: 30px;

        label{
            color: var(--black);
            font-weight: bold;
            margin-bottom: 5px;
        }
        

        input{
            border-radius: 30px;
            border-style: none;
            padding: 0.5rem 1rem;
            background: ${darken(0.1,'#E9EAE9')};
            box-shadow: inset 5px 0 10px 2px #0000003a;
            transition: all 200ms;

            &:hover{
                background: ${darken(0.02,'#E9EAE9')};
                box-shadow: inset 0px 0 5px 2px #0000003a;
            }
            

            &:last-of-type{
                box-shadow: none;
                color: var(--white);
                background: ${darken(0.06, '#148695')};
            }
            &:last-of-type:hover{
                box-shadow: none;
                color: var(--white);
                background: var(--blue);
            }
            & + label{
                margin-top: 1rem;
            }
            & + input{
                margin-top: 1.5rem;
            }
        }
    }
`
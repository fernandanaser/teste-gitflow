import styled from 'styled-components';
import { Field } from "formik"
// import GlobalStyle from '../../../GlobalStyles';

export const Background = styled.body`
    background-color: #363740;
    height: 100vh;
`

export const LoginContainer = styled.div`
    position: absolute;
    top: 8%; 
    width:380px;
    height: 582px;
    margin:0 auto;
    padding: 40px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    position: relative;
    border: 1px solid #DFE0EB;
    border-radius: 8px;
    padding-top: 50px;    

    h2 {
        font-weight: 700;
        font-size: 19px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.4px;
        color: #A4A6B3;
        opacity: 0.7;
        padding-bottom: 10px;
    }

    h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.3px;
        color: #252733;
    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #fff;
    }

    small {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.3px;
        color: #9FA2B4;
    }

    small:first-of-type{
        padding-bottom: 48px;
    }

    label {
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        color: #9FA2B4;
        margin: 0 0 6px 32px;
        display: flex;
    }

    input {
        display: flex;
        align-self: center;
        background-color: #FCFDFE;
    }

    strong {
        cursor: pointer;
    }

    strong:hover {
        cursor: pointer;
        text-decoration: underline;
    }
;`

export const Fieldform = styled(Field)`
        box-sizing: border-box;
        height: 42px;
        width: 316px;
        margin-bottom: 24px;
        background-color: #FCFDFE;
        border-radius: 8px;
        border: 1px solid #F0F1F7;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.3px;
        color: #4B506D;
        opacity: 0.4;
        display: flex;
        align-items: center;
`


export const Divform = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    button {
        margin: 0px 32px 24px 32px;
        width: 316px;
        height: 48px;
        color: #fff;
        background-color: #3751FF;
        border-radius: 8px;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #1a2ca5
    }
`

export const Required = styled.div`
  color: red;
  font-size: 12px;
  text-align: center;
  margin: -12px 0 12px;
`
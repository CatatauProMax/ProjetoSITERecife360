import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
height: 100vh;
`

export const Content = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 15px;
box-shadow: 0 1px 2px #0003;
background-color: white;
max-width: 350px;
padding: 20px;
border-radius: 5px;
`

export const Label = styled.label`
font-size: 24px;
font-weight: 600;
color: #676767;
`
export const LabelSignup = styled.label`
font-size: 16px;
color: #676767;
`
export const labelError = styled.label`
font-size: 14px;
color: red;
`

export const Strong = styled.strong`
cursor: pointer;

a {
    text-decoration: none;
    color: #676767;
}
`
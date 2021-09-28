import styled from 'styled-components'

export const FlexWrapper = styled.main`
 display: flex;
    flex-direction: column;
    position: relative;
    background-size: cover;    
    padding-bottom: 50px;
    height: auto;
`
export const Wrapper = styled.div`
    padding: 2rem;
    /* width: 90%; */
    height: 100%;
    position: absolute;
    z-index: 30;
    background: transparent linear-gradient(180deg, #0A174400 0%, #0A1744 100%);

    h5 {
        margin-top: 20px;
    }
`
export const Input = styled.input`
    background-repeat: no-repeat;
    background-color: rgba(30, 62, 123, 1);
    background-position: 30px 18px;
    background-size: 19px;
    border-radius: 72px;
    width: 460px;
    height: 50px;
    padding-left: 60px;  
    padding-top: 5px;
    margin-top: 20px;
    margin-bottom: -25px;
    z-index:30;
    border-style: none; 
    color: white;
    font-size: 22px;
`
export const Wrap = styled.div`
   
    margin-top: 20px;
    
`
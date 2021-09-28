import styled from 'styled-components'

export const FlexWrapper = styled.section`
    display: flex;
    justify-content: center;
    margin: auto;
    padding-top: 250px;
    max-width: 98%;
    height: auto;
    flex-wrap: wrap;


    @media (max-width: 768px) {
        padding-top: 200px;
        max-width: 100%;
    }
    
`
export const Wrapper = styled.div`
    padding: 1rem;
    width: 20%;
    overflow: hidden;
    pointer-events: none;
    transition: opacity .5s ease;
    max-width: 450px;
    min-width: 200px;
    height: 350px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    background: #1E3E7B17;
    border: 1px solid #FFFFFF24;
    border-radius: 1.8rem;
    margin: 1rem 1rem;


    @media (max-width: 768px) {
        width: 200px;
        height: 250px;
        min-height: 200px;
        margin: 10px 5px;
    }
`
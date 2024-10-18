import styled from 'styled-components'

const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 50px;
    gap: 1rem;
`

// eslint-disable-next-line react/prop-types
function Container({ children }){
    return(
        <Section>
            { children }
        </Section>

    )
}

export default Container
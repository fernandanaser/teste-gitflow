import styled from 'styled-components';
import Lista from '../../components/Lista/Lista';

export const Background = styled.body`
    background-color: #F7F8FC;
    margin: 0 auto;
`

export const HeaderPessoas = styled.div`
    display: grid;
    grid-template-columns: 8fr 2fr;
    max-width: 1200px;
    margin: auto;

    div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    svg {
        color: #C5C7CD;
        font-size: 20px;
    }

    svg:last-child {
        font-size: 44px;
    }

    h3 {
        border-left: 1px solid #DFE0EB;
        padding-left: 20px;
        color: #252733;
    }

    h1 {
        color: #252733;
    }
`

export const Fieldform = styled(Lista)`
`


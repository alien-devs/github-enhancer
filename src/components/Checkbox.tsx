import React from 'react'
import styled from 'styled-components'

const StyledCheckbox = styled.div`
    input {
        display: none;
    }
`

const Label = styled.label`
    border-radius: .5em;
    width: 31px;
    height: 17px;
    display: block;
    background: #6d7984;
    position: relative;
    cursor: pointer;

    &:before {
        content: "";
        top: 2px;
        display: block;
        left: 2px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        position: relative;
        background: #fff;
    }
`

const Checkbox = () => {
    return (
        <StyledCheckbox>
            <input type="checkbox" id="cb" />
            <Label htmlFor="cb" />
        </StyledCheckbox>
    )
}

export default Checkbox
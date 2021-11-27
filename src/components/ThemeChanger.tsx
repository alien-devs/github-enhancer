import React from 'react'
import styled from 'styled-components'
import { THEMES } from '../data/themes'
import Checkbox from './Checkbox'

const Changer = styled.div`
    margin-top: 22px;
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
`

const ListItem = styled.li`
    list-style-type: none;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
        border-bottom: 1px solid #343a40;
    }

    svg {
        width: .8rem;
        height: .8rem;
        stroke: #7c8a97;
    }
`

const ThemeName = styled.span``

const ThemeChanger = () => {
    return (
        <Changer>
            <h1 className="title">Available themes</h1>
            <List>
                {THEMES.map(i => (
                    <ListItem>
                        <div>
                            {/* icon */}
                            <ThemeName>
                                {i.name}
                            </ThemeName>
                        </div>
                        <div>
                            <Checkbox />
                        </div>
                    </ListItem>
                ))}
            </List>
        </Changer>
    )
}

export default ThemeChanger

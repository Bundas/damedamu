import React from "react"
import styled from "styled-components"
import {Color} from 'shared/src/types'


interface DraughtProps {
    color: Color
    god: boolean
}

interface DraughtWrapperProps {
    color: Color
}

const DraughtWrapper = styled.div<DraughtWrapperProps>`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: ${({ color }) => (color === "white" ? "yellow" : "brown")};

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
`

const GodMark = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background: blue;

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
`

const Draught = ({ color, god }: DraughtProps) => {
    return <DraughtWrapper color={color}>{god && <GodMark />}</DraughtWrapper>
}

export default Draught

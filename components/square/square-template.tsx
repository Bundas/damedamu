import React from "react"
import styled from "styled-components"

import Draught from "../draught"

const SquareWrapper = styled.div`
    position: relative;
    width: 10vmin;
    background-color: ${({ color }) => color};

    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`
interface SquareTemplateProps {
    draughtColor: "white" | "black" | undefined
    godMode: boolean | undefined
    backgroundColor: string
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const SquareTemplate = ({ backgroundColor, draughtColor, onClick, godMode }: SquareTemplateProps) => {
    return (
        <SquareWrapper onClick={onClick} color={backgroundColor}>
            {draughtColor && <Draught god={godMode || false} color={draughtColor} />}
        </SquareWrapper>
    )
}

export default SquareTemplate

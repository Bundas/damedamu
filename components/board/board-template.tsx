import React from "react"
import styled from "styled-components"

import Square from "../square"

export type SquareClickHandler = (x: number, y: number) => void

export interface BoardTemplateProps {
    onSquareClick: SquareClickHandler
    switchSides: boolean
}

const Row = styled.div`
    display: flex;
`

const BoardWrapper = styled.div``

const getRowOfSquares = (y: number, onClickHandler: SquareClickHandler, switchSides: boolean) => {
    const squares = []

    if (switchSides) {
        for (let x = 7; x >= 0; --x) {
            squares.push(<Square onClick={onClickHandler} x={x} y={y} color={(x + y) % 2 ? "black" : "white"} />)
        }
    } else {
        for (let x = 0; x < 8; ++x) {
            squares.push(<Square onClick={onClickHandler} x={x} y={y} color={(x + y) % 2 ? "black" : "white"} />)
        }
    }

    return squares
}

const generateBoardRows = (onClickHandler: SquareClickHandler, switchSides: boolean) => {
    const rows = []

    if (switchSides) {
        for (let y = 7; y >= 0; --y) {
            rows.push(<Row>{getRowOfSquares(y, onClickHandler, switchSides)}</Row>)
        }

    } else {
        for (let y = 0; y < 8; ++y) {
            rows.push(<Row>{getRowOfSquares(y, onClickHandler, switchSides)}</Row>)
        }
    }

    return rows
}

const BoardTemplate = ({ onSquareClick, switchSides }: BoardTemplateProps) => {
    return <BoardWrapper>{generateBoardRows(onSquareClick, switchSides)}</BoardWrapper>
}

export default BoardTemplate

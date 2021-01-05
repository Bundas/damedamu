import React, { useEffect, useContext } from "react"

import BoardTemplate, { SquareClickHandler } from "./board-template"
import DraughtsContext from "../../containers/game-room/draughts-context"

export interface BoardProps {
    onSquareClick: SquareClickHandler
}

const Board = ({ onSquareClick }: BoardProps) => {
    const draughtsState = useContext(DraughtsContext)

    useEffect(() => {
        const colorsSet = new Set(draughtsState.draughts.map((d) => d.color))
        if (colorsSet.size < 2) {
            const values = Array.from(colorsSet.values())
            alert(`${values[0]} won!! Congratz`)
        }
    }, [draughtsState.draughts])

    return <BoardTemplate switchSides={draughtsState.startColor !== "white"} onSquareClick={onSquareClick} />
}

export default Board

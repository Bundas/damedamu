import React, { useContext } from "react"

import SquareTemplate from "./square-template"
import DraughtsContext from "../../containers/game-room/draughts-context"

interface SquareProps {
    color: "white" | "black"
    x: number
    y: number
    onClick: (x: number, y: number) => void
}

const Square = ({ color, x, y, onClick }: SquareProps) => {
    const { draughts, selectedDraught, possibleMoves } = useContext(DraughtsContext)
    const draughtPresent = draughts.find((d) => d.coords.x === x && d.coords.y === y)
    const draughtSelected = selectedDraught?.coords.x === x && selectedDraught?.coords.y === y
    const isPossibleMove = possibleMoves.some((m) => m?.coords.x === x && m?.coords.y === y)

    let bgColor = draughtSelected ? "pink" : color
    bgColor = isPossibleMove ? "green" : bgColor

    const handleClick = () => onClick(x, y)

    return (
        <SquareTemplate
            godMode={draughtPresent?.godMode}
            onClick={handleClick}
            backgroundColor={bgColor}
            draughtColor={draughtPresent?.color}
        />
    )
}

export default Square

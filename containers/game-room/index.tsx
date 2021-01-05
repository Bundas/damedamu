import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { getActionBySquareClick } from "shared/src/draughts-action-creator"

import Board from "../../components/board"
import DraughtContext from "./draughts-context"
import { GameState } from "../../redux/store/game-reducer"
import { emitClick } from "../../redux/actions"
import { CenteredDiv } from "../home-page/styles"
import { CenteredInfoWrapper } from "./styles"

const GameRoom = () => {
    const state = useSelector<GameState>((state) => state) as GameState
    const activeTurn = state.activeColor === state.startColor

    const gottaFinishMove = activeTurn && state.moveInProgress
    const dispatch = useDispatch()

    const handleSquareClick = (x: number, y: number) => {
        const action = getActionBySquareClick(x, y, state.startColor, state)
        if (action) {
            dispatch(action)
            dispatch(emitClick(x, y))
        }
    }

    return (
        <DraughtContext.Provider value={state}>
            <CenteredInfoWrapper>
                {activeTurn && <h2 className='nes-text is-success'>Your turn</h2>}
                {gottaFinishMove && <h2 className='nes-text is-primary'>Finish your move</h2>}
                {!activeTurn && <h2 className='nes-text'>Other player's turn...</h2>}
            </CenteredInfoWrapper>

            <CenteredDiv>
                <Board onSquareClick={handleSquareClick} />
            </CenteredDiv>
        </DraughtContext.Provider>
    )
}

export default GameRoom

import produce from "immer"

import { createDraughtReducer } from "shared/src/draught-reducer"
import { BaseGameContext, Color } from "shared/src/types"
import { PLAYER_DISCONNECTED } from "../actions"

export interface GameState extends BaseGameContext {
    gameStarted: boolean
    playerDisconnected: boolean
    startColor: Color
}

const baseReducer = createDraughtReducer("white")

const gameReducer = (state: GameState, action: any) => {
    const baseState = baseReducer(state, action) as GameState

    return produce(baseState, (draft) => {
        switch (action.type) {
            case "resetState": {
                draft.gameStarted = true
                draft.playerDisconnected = false
                break
            }
            case PLAYER_DISCONNECTED: {
                draft.playerDisconnected = true
                break;
            }
            case "startGame": {
                draft.gameStarted = true
                draft.playerDisconnected = false
                break
            }
            case "endGame": {
                draft.gameStarted = false
                break
            }
        }
    })
}

export default gameReducer

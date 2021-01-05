import { createContext } from "react"
import { GameState } from "../../redux/store/game-reducer"

const draughtContext = createContext<GameState>({
    draughts: [],
    selectedDraught: undefined,
    killIds: [],
    possibleMoves: [],
    moveInProgress: false,
    startColor: "white",
    activeColor: "white",
    gameStarted: false,
    playerDisconnected: false,
})

export default draughtContext

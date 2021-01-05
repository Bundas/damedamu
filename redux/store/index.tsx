import { configureStore } from "@reduxjs/toolkit"

import gameReducer from "./game-reducer"
import socketMiddleware from "../middlewares/socket-middleware"
import SocketApi from "../../utils/socket-client"

const socketApi = new SocketApi()

export default configureStore({
    reducer: gameReducer,
    preloadedState: {
        activeColor: "white",
        draughts: [],
        gameStarted: false,
        killIds: [],
        moveInProgress: false,
        possibleMoves: [],
        selectedDraught: undefined,
        startColor: "white",
        playerDisconnected: false
    },
    middleware: [socketMiddleware(socketApi)],
})

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AnyAction } from "redux"
import { useRouter } from "next/router"
import { ThunkDispatch } from "@reduxjs/toolkit"
import fetch from "node-fetch"

import {
    connect,
    initialize,
    disconnect,
    receiveInitialState,
    receiveActions,
    receivePlayerDisconnected,
} from "../redux/actions"
import Layout from "../components/layout"
import GameRoomContainer from "../containers/game-room"
import { GameState } from "../redux/store/game-reducer"
import PlayerDisconnectedModal from "../components/player-disconnected-modal"

type AppDispatch = ThunkDispatch<GameState, any, AnyAction>

const Index = () => {
    const { query } = useRouter()

    const dispatch: AppDispatch = useDispatch()
    const gameStarted = useSelector<GameState>((state) => state.gameStarted)
    const playerDisconnected = useSelector<GameState>((state) => state.playerDisconnected)

    useEffect(() => {
        if (query.gameId) {
            // @ts-ignore
            dispatch(initialize(query.gameId)).then(() => {
                dispatch(receiveInitialState(dispatch))
                dispatch(receiveActions(dispatch))
                dispatch(receivePlayerDisconnected(dispatch))
                dispatch(connect())
            })

            return () => {
                dispatch(disconnect())
            }
        }
    }, [query.gameId])

    return (
        <Layout title={"Draughts baby"}>
            {playerDisconnected && <PlayerDisconnectedModal />}
            {!gameStarted && <span>Waiting for other players...</span>}
            {gameStarted && <GameRoomContainer />}
        </Layout>
    )
}

export default Index

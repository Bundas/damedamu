import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AnyAction } from "redux"
import { ThunkDispatch } from "@reduxjs/toolkit"
import fetch from "node-fetch"

import { connect, initialize, disconnect, receiveInitialState, receiveActions, receivePlayerDisconnected } from "../redux/actions"
import Layout from "../components/layout"
import HomePageContainer from "../containers/home-page"
import GameRoomContainer from "../containers/game-room"
import { GameState } from "../redux/store/game-reducer"
import PlayerDisconnectedModal from "../components/player-disconnected-modal"

type AppDispatch = ThunkDispatch<GameState, any, AnyAction>

const Index = ({ gameId }) => {
    const dispatch: AppDispatch = useDispatch()
    const gameStarted = useSelector<GameState>((state) => state.gameStarted)
    const playerDisconnected = useSelector<GameState>((state) => state.playerDisconnected)

    useEffect(() => {
        // @ts-ignore
        dispatch(initialize(gameId)).then(() => {
            dispatch(receiveInitialState(dispatch))
            dispatch(receiveActions(dispatch))
            dispatch(receivePlayerDisconnected(dispatch))
            dispatch(connect())
        })

        return () => {
            dispatch(disconnect())
        }
    }, [])

    return (
        <Layout title={"Draughts baby"}>
            {playerDisconnected && <PlayerDisconnectedModal />}
            {!gameStarted && <HomePageContainer gameId={gameId} />}
            {gameStarted && <GameRoomContainer />}
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/create-game-id`)
    const data = await response.json()

    return {
        props: {
            gameId: data.gameId,
        },
    }
}

export default Index

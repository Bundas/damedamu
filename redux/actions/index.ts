import SocketApi from "../../utils/socket-client"

export const SOCKET_INITIALIZE = "SOCKET_INITIALIZE"
export const SOCKET_INITIALIZE_SUCCESS = "SOCKET_INITIALIZE_SUCCESS"
export const SOCKET_INITIALIZE_FAILURE = "SOCKET_INITIALIZE_FAILURE"

export const SOCKET_CONNECT = "SOCKET_CONNECT"
export const SOCKET_CONNECT_SUCCESS = "SOCKET_CONNECT_SUCCESS"
export const SOCKET_CONNECT_FAILURE = "SOCKET_CONNECT_FAILURE"

export const SOCKET_DISCONNECT = "SOCKET_DISCONNECT"
export const SOCKET_DISCONNECT_SUCCESS = "SOCKET_DISCONNECT_SUCCESS"
export const SOCKET_DISCONNECT_FAILURE = "SOCKET_DISCONNECT_FAILURE"

export const EMIT_CLICK = "EMIT_CLICK"
export const EMIT_CLICK_SUCCESS = "EMIT_CLICK_SUCCESS"
export const EMIT_CLICK_FAILURE = "EMIT_CLICK_FAILURE"

export const RECEIVE_ACTIONS = "RECEIVE_ACTIONS"
export const RECEIVE_ACTIONS_SUCCESS = "RECEIVE_ACTIONS_SUCCESS"
export const RECEIVE_ACTIONS_FAILURE = "RECEIVE_ACTIONS_FAILURE"

export const RECEIVE_PLAYER_DISCONNECTED = "RECEIVE_PLAYER_DISCONNECTED"
export const RECEIVE_PLAYER_DISCONNECTED_SUCCESS = "RECEIVE_PLAYER_DISCONNECTED_SUCCESS"
export const RECEIVE_PLAYER_DISCONNECTED_FAILURE = "RECEIVE_PLAYER_DISCONNECTED_FAILURE"

export const RECEIVE_INITIAL_STATE = "RECEIVE_INITIAL_STATE"
export const RECEIVE_INITIAL_STATE_SUCCESS = "RECEIVE_INITIAL_STATE_SUCCESS"
export const RECEIVE_INITIAL_STATE_FAILURE = "RECEIVE_INITIAL_STATE_FAILURE"

export const PLAYER_DISCONNECTED = "PLAYER_DISCONNECTED"

export const initialize = (gameId: string) => ({
    type: "socket",
    types: [SOCKET_INITIALIZE, SOCKET_INITIALIZE_SUCCESS, SOCKET_INITIALIZE_FAILURE],
    promise: (api: SocketApi) => api.initialize(gameId),
})

export const connect = () => ({
    type: "socket",
    types: [SOCKET_CONNECT, SOCKET_CONNECT_SUCCESS, SOCKET_CONNECT_FAILURE],
    promise: (api: SocketApi) => api.connect(),
})

export const disconnect = () => ({
    type: "socket",
    types: [SOCKET_CONNECT, SOCKET_CONNECT_SUCCESS, SOCKET_CONNECT_FAILURE],
    promise: (api: SocketApi) => api.disconnect(),
})

export const emitClick = (x: number, y: number) => ({
    type: "socket",
    types: [EMIT_CLICK, EMIT_CLICK_SUCCESS, EMIT_CLICK_FAILURE],
    promise: (api: SocketApi) => api.emit("clicked-square", { x, y }),
})

export const receiveActions = (dispatch) => {
    return {
        type: "socket",
        types: [RECEIVE_ACTIONS, RECEIVE_ACTIONS_SUCCESS, RECEIVE_ACTIONS_FAILURE],
        promise: (api: SocketApi) =>
            api.on("handle-action", (action) => {
                dispatch(action)
            }),
    }
}

export const receivePlayerDisconnected = (dispatch) => {
    return {
        type: "socket",
        types: [RECEIVE_PLAYER_DISCONNECTED, RECEIVE_PLAYER_DISCONNECTED_SUCCESS, RECEIVE_PLAYER_DISCONNECTED_FAILURE],
        promise: (api: SocketApi) =>
            api.on("player-disconnected", () => {
                dispatch({ type: PLAYER_DISCONNECTED })
            }),
    }
}

export const receiveInitialState = (dispatch) => {
    return {
        type: "socket",
        types: [RECEIVE_INITIAL_STATE, RECEIVE_INITIAL_STATE_SUCCESS, RECEIVE_INITIAL_STATE_FAILURE],
        promise: (api: SocketApi) =>
            api.on("initial-data", (state) => {
                dispatch({ type: "resetState", state })
            }),
    }
}

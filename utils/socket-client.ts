import io from "socket.io-client"

// Example conf. You can move this to your config file.
const host = process.env.NEXT_PUBLIC_SERVER_URL

export default class SocketApi {
    private socket: SocketIOClient.Socket

    initialize = (gameId: string) => {
        return new Promise<void>((resolve, reject) => {
            this.socket = io.connect(host, {
                autoConnect: false,
                query: {
                    token: gameId,
                },
            })

            resolve()
        })
    }

    connect = () => {
        return new Promise<void>((resolve, reject) => {
            this.socket.connect()
            this.socket.on("connect", () => resolve())
            this.socket.on("connect_error", (error) => reject(error))
        })
    }

    disconnect = () => {
        return new Promise<void>((resolve) => {
            this.socket.disconnect()
            this.socket = undefined
            resolve()
        })
    }

    emit = (event: string, data: any) => {
        return new Promise<void>((resolve, reject) => {
            if (!this.socket) return reject("No socket connection.")

            return this.socket.emit(event, data, (response) => {
                // Response is the optional callback that you can use with socket.io in every request. See 1 above.
                if (response.error) {
                    console.error(response.error)
                    return reject(response.error)
                }

                return resolve()
            })
        })
    }

    on = (event: string, callback: (...data: any) => void) => {
        return new Promise<void>((resolve, reject) => {
            if (!this.socket) return reject("No socket connection.")

            this.socket.on(event, callback)
            resolve()
        })
    }
}

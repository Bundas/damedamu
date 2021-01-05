import styled from "styled-components"

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
`

const ModalMain = styled.div`
    position: fixed;
    background: white;
    width: 100%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const PlayerDisconnectedModal = () => {
    return (
        <Modal>
            <ModalMain>
                <dialog open={true} className='nes-dialog is-dark' id='dialog-dark'>
                    <form method='dialog'>
                        <p className='title'>Other player got disconnected</p>
                        <p>Waiting for reconnect....</p>
                    </form>
                </dialog>
            </ModalMain>
        </Modal>
    )
}

export default PlayerDisconnectedModal

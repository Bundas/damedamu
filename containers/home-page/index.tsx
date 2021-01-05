import React from "react"
import { CenteredDiv, CenteredHeadlineWrapper, Headline } from "./styles"

interface HomePageContainerProps {
    gameId: string
}

const HomePageContainer = ({ gameId }: HomePageContainerProps) => {
    const url = `${process.env.NEXT_PUBLIC_GAME_URL}/${gameId}`

    return (
        <>
            <CenteredHeadlineWrapper>
                <Headline>Dame Damu?</Headline>
            </CenteredHeadlineWrapper>
            <CenteredDiv>
                <div className='nes-container with-title'>
                    <p className='title'>Send this to your friend and wait</p>
                    <div className='nes-field'>
                        <label htmlFor='name_field'></label>
                        <input readOnly value={url} type='text' id='name_field' className='nes-input' />
                    </div>
                </div>
            </CenteredDiv>
        </>
    )
}

export default HomePageContainer

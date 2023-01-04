import React from 'react'
import { AppContainer } from '../../tw-types'

type ChatGPTResponseProps = {
    data: string
}
const ChatGPTResponse = ({data}: ChatGPTResponseProps) => {
  return (
    <AppContainer>
        <ul>
            {data.split(/\r?\n/).map((item: any, index: number) => (
            <li key={`${item}+${index}`}>{item}</li>
            ))}
        </ul>
    </AppContainer>
  )
}

export default ChatGPTResponse

import React from 'react'
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    // const chatProps = useMultiChatLogic(
    //     '1ece0550-6dc8-4b9a-8c95-3e1e9d493a3f',
    //      props.user.username,
    //       props.user.secret)



  return (
    <div style={{height: '100vh'}} >
        {/* <MultiChatSocket {...chatProps} />
        <MultiChatWindow { ...chatProps} style={{height: '100%'}} /> */}

        <PrettyChatWindow 
            projectId='xx-xx-xx-xx'
            username={ props.user.username }
            secret={ props.user.secret }
            style={{ height: '100%' }}
        />
    </div>
  )
}

export default ChatsPage

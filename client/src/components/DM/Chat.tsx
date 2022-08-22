import React from 'react'

type chatProps = {
    key: string
    name: string
    msg: string
    createTime: any
}

const Chat = (props: chatProps) => {
    const { msg, createTime, name } = props
    return (
        <div className='chat'>
            <p>{name}:{msg}</p>

            {/* <p>{msg}</p> */}
        </div>
    )

}

export default Chat
import React from 'react'

type Props = {
    postsArray: any
}

type PostType = {
    uid: string
    displayName: string
}

function User(props: Props) {
    const { postsArray } = props
    console.log('postsArray', postsArray)
    return (
        <div className='user'>
            {postsArray &&
            postsArray.map((post: PostType) => (
                // eslint-disable-next-line react/jsx-key
                <p>{post.displayName}</p>
            ))}
        </div>
    )
}

export default User
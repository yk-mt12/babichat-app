import React from 'react'
import { collection, query, orderBy, limit } from 'firebase/firestore'
import db from '../firebase';

const ranking = () => {
    const rankingRef = collection(db, 'posts');

    const rank = query(rankingRef, orderBy('liked'), limit(10));
    console.log(rank)

    return (
    <div className='ranking'>RANKING</div>

    )
}

export default ranking
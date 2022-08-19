import { collection, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../firebase'

const Ranking = () => {
  const rankingRef = collection(db, 'posts')

  const rank = query(rankingRef, orderBy('liked'), limit(10))

  return <div className='ranking'>RANKING</div>
}

export default Ranking

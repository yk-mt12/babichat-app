import { collection, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../../firebase'
import Header from '../../ui/header/Header'
import './Ranking.css'

const Ranking = () => {
  const rankingRef = collection(db, 'posts')

  const rank = query(rankingRef, orderBy('liked'), limit(10))

  return (
    <div className='ranking--body'>
      <Header title='Ranking' />
    </div>
  )
}

export default Ranking

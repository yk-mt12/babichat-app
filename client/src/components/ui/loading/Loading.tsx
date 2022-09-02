import ReactLoading from 'react-loading'
import './Loading.css'

type Props = {
  text: string
}
const Loading = (props: Props) => {
  const { text } = props

  return (
    <section>
      <div className='loading-screen'>
        <ReactLoading type='spinningBubbles' color='#5284ff' height={'15%'} width={'15%'} />
      </div>
      <p className='loading-text'>{text}...</p>
    </section>
  )
}

export default Loading

import './Header.css'

type Props = {
  title: string
}

const Header = (props: Props) => {
  const { title } = props
  return (
    <div>
      <h2 className='title'>{title}</h2>
    </div>
  )
}

export default Header

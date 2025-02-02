import dynamic from 'next/dynamic'
const Image = dynamic(import('next/image'))
import LogoImg from 'public/assets/img/logo.webp'
const Logo = ({ className = '', ...props }) => (
  <div className='image-container' style={{width: 113}}>
    <Image src={LogoImg} alt="logo" layout="fill" className={'image'} />
  </div>  
)

export default Logo

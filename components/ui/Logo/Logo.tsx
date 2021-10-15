import Image from 'next/image'
import LogoImg from 'public/assets/img/logo.webp'
const Logo = ({ className = '', ...props }) => (
  <Image src={LogoImg} alt="logo" />
)

export default Logo

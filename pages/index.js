// Page dependencies
import Head from 'next/head'
import { useWindowDimensions } from '../hooks'

// Components
import { 
  About,
  ContactForm,
  Featured,
  Mission,
  Quoted,
  Team
} from '../components'

// Page
export default function Home() {
  const { height, width, yOffset } = useWindowDimensions()

  const ptDesktop = (height < yOffset && width > 420) ? 'pt-desktop' : ''
  const ptMobile = (height < yOffset && width <= 420) ? 'pt-mobile' : ''
 
  return (
    <div className={`${width > 420 ? ptDesktop : ptMobile}`}>
      <Head>
        <title>Home Advocacia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <About />
      <Mission />
      <Team />
      <Quoted />
      <ContactForm />
    </div>
  )
}

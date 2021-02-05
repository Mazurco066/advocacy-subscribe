// Page dependencies
import Head from 'next/head'

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
  return (
    <>
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
    </>
  )
}

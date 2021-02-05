// Page dependencies
import Head from 'next/head'

// Components
import { ContactForm } from '../components'

// Page
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Advocacia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactForm />
    </div>
  )
}

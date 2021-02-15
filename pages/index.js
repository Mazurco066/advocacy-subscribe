// Page dependencies
import Head from 'next/head'
import { useWindowDimensions } from '../hooks'
import { fetchEntries } from '../utils'

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

// Runs on build process to load static data
export async function getStaticProps() {
  const r = await fetchEntries()
  const filtered = r
    .filter(({ sys: { contentType: { sys: { id } } } }) => 
      ['carrers'].includes(id)
    )
    .map(({ fields }) => ({
      ...fields, imgUrl:
      fields.imgUrl.fields.file.url
    }))
  console.log('[DEBUG] CMS: ', filtered)
  return { props: { cmsData: filtered } }
}

// App stylesheet
import '../styles/_main.scss'
import 'react-toastify/dist/ReactToastify.css'

// Layout components
import { Header, Footer } from '../components'

// App Wrapper
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

// Exporting App
export default MyApp

// App stylesheet
import '../styles/_main.scss'
import 'react-toastify/dist/ReactToastify.css'

// App Wrapper
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Exporting App
export default MyApp

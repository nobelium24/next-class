import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/js/bootstrap"
// import Navbar from '../components/Navbar'
import Head from 'next/head'
// import Navbar from '../components/Navbar'


function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Component {...pageProps} />
      </>)
  } else {
    return (
      <>
        <Head>
          <title>General Title</title>
        </Head>
        {/* <Navbar/> */}
        <Component {...pageProps} />
      </>
    )

  }
}

export default MyApp

import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css'
import { useEffect } from 'react'
import { LevvitaProvider } from '../src/Context/LevvitaProvider';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <LevvitaProvider>
      <Component {...pageProps} />
    </LevvitaProvider>
  )
}

export default MyApp

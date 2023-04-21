import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Script src="https://apis.google.com/js/api.js" />
      <Component {...pageProps} />
    </div>
  );
}

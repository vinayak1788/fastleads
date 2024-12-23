// General global styles
import '../styles/globals.css';

// This is the default App component wrapper provided by Next.js
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

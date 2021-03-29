import { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
    return <Component {...pageProps} />;
}

export default MyApp;

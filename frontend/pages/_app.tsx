import '../styles/globals.css';

import { AppProps } from 'next/app';

import { ApiContext } from '../api/ApiContext';
import ApiUrls from '../api/ApiUrls';
import { apiKey, baseUrl } from '../config';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
    const apiUrls = new ApiUrls(baseUrl, apiKey);

    return (
        <ApiContext apiUrls={apiUrls}>
            <Component {...pageProps} />
        </ApiContext>
    );
}

export default MyApp;

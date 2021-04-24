import { createContext, ReactElement, useContext } from 'react';

import { IApiUrls } from './ApiUrls';

interface IApiContextProps {
    children: ReactElement;
    apiUrls: IApiUrls;
}

interface IApiContext {
    urls: IApiUrls;
}

const Context = createContext(null);

export const ApiContext = ({ apiUrls, children }: IApiContextProps): ReactElement => {
    return <Context.Provider value={{ urls: apiUrls }}>{children}</Context.Provider>;
};

export const useApiContext = (): IApiContext => useContext(Context);

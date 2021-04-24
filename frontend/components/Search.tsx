import { ReactElement, useMemo, useState } from 'react';
import useSWR from 'swr';

import { useApiContext } from '../api/ApiContext';

const Search = (): ReactElement => {
    const [searchTerm, setSearchTerm] = useState('');
    const api = useApiContext();

    const url = useMemo(() => api.urls.multiSearch(searchTerm), [searchTerm, api.urls]);

    const { data } = useSWR(searchTerm.length > 3 ? url : null);

    return (
        <div>
            <label htmlFor="search">
                Search
                <input
                    id="search"
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </label>
            Results
            {data?.results.sort((a, b) => a.popularity - b.popularity) &&
                data.results.map((item) => (
                    <div key={item.id}>
                        <h2>{item.original_title}</h2>
                    </div>
                ))}
        </div>
    );
};

export default Search;

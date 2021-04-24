export interface IApiUrls {
    multiSearch: (term: string) => string;
}

export default class ApiUrls implements IApiUrls {
    private baseUrl: string;
    private key: string;

    constructor(url: string, key: string) {
        this.baseUrl = url;
        this.key = `?api_key=${key}`;
    }

    public multiSearch(term: string): string {
        return `${this.baseUrl}/3/search/multi/${this.key}&query=${term}`;
    }
}

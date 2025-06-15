export interface CurrencyResponse {
    rates: {
        [pair: string]: {
            rate: number;
            timestamp: number;
        };
    };
    code: number;
}

export interface CurrencyErrorResponse {
    message: string;
    code: number;
}

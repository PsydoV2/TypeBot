import fetch from "node-fetch";
import { CurrencyErrorResponse, CurrencyResponse } from "../types/CurrencyResponse";

function isErrorResponse(obj: any): obj is CurrencyErrorResponse {
    return typeof obj?.message === "string" && typeof obj?.code === "number" && !obj?.rates;
}

export async function getCurrentRate(pairs: string): Promise<CurrencyResponse> {
    const url = `https://www.freeforexapi.com/api/live?pairs=${pairs}`;
    const res = await fetch(url);
    const data = await res.json() as unknown;

    if (isErrorResponse(data)) {
        throw new Error(data.message);
    }

    return data as CurrencyResponse;
}

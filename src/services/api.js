import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=200&page=1&sparkline=false"

const getCoin = async () => {
    const responce = await axios.get(BASE_URL);
    return responce.data;
}

export {getCoin};
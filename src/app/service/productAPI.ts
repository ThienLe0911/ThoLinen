
import { url, sheetId, apiKey } from "../common/variable";
const getAllProduct = async () => {
    const response = await fetch(url, {
        method: "GET",
        headers: {
        },
    });
    const data = await response.json();
    return data;
}

const getAllProductWithSort = async (showSort: boolean, sortSelect: number) => {
    let URL = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;
    const response = await fetch(URL, {
        method: "GET",
        headers: {
        },
    });
    const data = await response.json();
    if (showSort) {
        if (sortSelect === 0) {
            return data;
        } else if (sortSelect === 4) {
            return data.values.sort((a:Array<string>, b:Array<string>) => Number(b[2]) - Number(a[2]));
        } else if (sortSelect === 5) {
            return data.values.sort((a:Array<string>, b:Array<string>) => Number(a[2]) - Number(b[2]));
        } else {
            return data;
        }
    }
}

export { getAllProduct, getAllProductWithSort }
const sheetId = "1pcaMM53EE60DBEvCGNyDUvHwUQt-UH3KXXLM_p-_zHk";
const apiKey = "AIzaSyDx6z2_98O4-aGwdKUaxOoJFW7hqQXGoH8";
//https://docs.google.com/spreadsheets/d/1pcaMM53EE60DBEvCGNyDUvHwUQt-UH3KXXLM_p-_zHk/edit?usp=sharing
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;

export {sheetId,apiKey,url}
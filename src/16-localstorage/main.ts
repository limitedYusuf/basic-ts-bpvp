// Simpan
function saveData(key: string, value: string) {
   localStorage.setItem(key, value);
}

// Ambil
function getData(key: string): string | null {
   return localStorage.getItem(key);
}

// Hapus
function removeData(key: string) {
   localStorage.removeItem(key);
}

const dataKey = "username";
const username = "john_doe";

saveData(dataKey, username);

const retrievedUsername = getData(dataKey);
if (retrievedUsername) {
   console.log(`Username retrieved from LocalStorage: ${retrievedUsername}`);
} else {
   console.log(`No data found in LocalStorage for key: ${dataKey}`);
}

// Hapus
removeData(dataKey);
console.log(`Data for key: ${dataKey} has been removed from LocalStorage`);

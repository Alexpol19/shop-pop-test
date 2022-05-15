export const localStorageSet = (storName, value) => {
  if(storName) {
    localStorage.setItem(storName, JSON.stringify(value));
  }
}

export const localStorageGet = (storName) => {
  if(storName) {
    const data = localStorage.getItem(storName)
    return data ? JSON.parse(data) : {}
  }
  return {}
}
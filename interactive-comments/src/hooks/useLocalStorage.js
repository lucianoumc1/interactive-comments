import { useState, useEffect } from "react";

export const useLocalStorage = ( initialState={} ) => {
  const [localStorageState, setLocalStorageState] = useState(initialState);
  const storageName = 'interactive-comments-app';

  useEffect(() => {
    const localStorageItem = localStorage.getItem(storageName);
    localStorageItem
      && setLocalStorageState(JSON.parse(localStorageItem))
      || saveLocalStorage(initialState)
  }, [])

  function saveLocalStorage(data) {
    try {
      localStorage.setItem(storageName, JSON.stringify(data))
      setLocalStorageState(data)
      console.log('datos guardados')
    } catch (e) {
      console.error(e.message);
    }
  }
  return { saveLocalStorage, localStorageState }
}

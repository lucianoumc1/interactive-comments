import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import data from '../utils/data';

const CommentsContext = createContext();

const CommentsProvider = (props) => {
  const { saveLocalStorage, localStorageState: comments } = useLocalStorage(data);
  console.log(comments);
  // const [comments, setComments] = useState(data);
  return (
    <CommentsContext.Provider value={{
      comments,
      saveLocalStorage
    }}>
      {props.children}
    </ CommentsContext.Provider>
  )
}

export { CommentsContext, CommentsProvider }
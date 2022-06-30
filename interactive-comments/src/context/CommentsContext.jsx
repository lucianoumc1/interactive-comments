import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import data from "../utils/data";

const CommentsContext = createContext();

const CommentsProvider = (props) => {
  const { saveLocalStorage, localStorageState: localData } =
    useLocalStorage(data);
  const [openModal, setOpenModal] = useState(true);
  return (
    <CommentsContext.Provider
      value={{
        localData,
        saveLocalStorage,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </CommentsContext.Provider>
  );
};

export { CommentsContext, CommentsProvider };

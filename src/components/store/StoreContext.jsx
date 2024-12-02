import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  error: false,
  info: false,
  success: false,
  validate: false,
  message: "",
  isSave: false,
  isConfirm: false,
  isArchive: false,
  isRestore: false,
  isDelete: false,
  isAdd: false,
  isEdit: false,
  isView: false,
  isSearch: false,
  isAnimating: true,
  isHome: false,
  isWhyFBS: false,
  startIndex: 0,
  isAccountUpdated: false,
  isCreatePassSuccess: false,
  isForgotPassSuccess: false,
  isLogin: false,
  isLogout: false,
  isUploadFile: false,
  credentials: {},
  isNavOpen: false,
  isWhyUsOpen: false,
  isUserOpen: false,
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

import {createContext, useState, useEffect} from "react";
// import SHOP_DATA from "../data.js";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = {categoriesMap};

  //? THIS PART OF THE CODE WAS ONLY EXECUTED ONCE TO POPULATE THE DB WITH THE COLLECTIONS OF THE PRODUCTS
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

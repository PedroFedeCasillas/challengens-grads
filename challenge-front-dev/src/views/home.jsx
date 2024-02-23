// eslint-disable-next-line no-unused-vars
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../components/searchBar/searchBar";
import CardsList from "../components/cardsList/cardsList";
import { MdClear } from "react-icons/md";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(true);

  function handlerChange(event) {
    event.preventDefault(event);
    setSearchString(event.target.value.toLowerCase());
  }

  function handlerSubmit(event) {
    event.preventDefault(event);
    if (!searchString.trim()) {
      alert("Por favor, ingresa un texto en el campo de búsqueda.");
      return;
    }
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchString)
    );
    setFilteredProducts(filtered);
    // setSearchString('');
  }

  async function getProducts() {
    try {
      const response = await axios.get("products.json");
      setProducts(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  }

  // async function getProducts(){
  //     return await fetch("products.json")
  //     .then(response=>response.json())
  //     .then(products=> setProducts(products.data))
  // }

  function clearSearch(event) {
    event.preventDefault(event);
    setFilteredProducts(products);
    setSearchString("");
  }

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 3000);
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="flex flex-col justify-center  py-5">
      <div
        className="ml-10 mr-10 items-center justify-between rounded-r-lg text-gray-200 
        shandow-lg navbar navbar-expand-lg navbar-light"
      >
        <SearchBar
          handlerChange={handlerChange}
          handlerSubmit={handlerSubmit}
          clearSearch={clearSearch}
        />
      </div>
      <br />

      {!searchString ? null : (
        <div className="relative w-fit px-3 rounded-full text-white shadow-lg bg-gray-100 ml-8">
          <p className="text-black flex items-center justify-center">
            {searchString}
            <button onClick={(event) => clearSearch(event)}>
              <MdClear className="text-red-500 text-3xl mr-2" />
            </button>
          </p>
        </div>
      )}

      {loading ? (
        <div role="status" className="flex items-center justify-center h-full mt-20">
          <svg
            aria-hidden="true"
            className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className=" w-fit px-3 rounded-r-lg text-gray-800 shadow-lg bg-gray-100 ">
          <CardsList products={filteredProducts} />
          <hr className="my-4  border-t-2 border-blue-400 rounded-full ml-5 mr-5" />
          <p className="ml-8 m-2 p-2">
            {`${filteredProducts.length}/${products.length}`}
            Resultados
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;

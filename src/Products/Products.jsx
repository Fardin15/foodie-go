import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [range, setRange] = useState(0);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState({});
  const [metaData, setMetaData] = useState({});

  // function for pagination
  const onClick = (newPage) => {
    setPage(newPage + 1);
  };

  // function for category filter
  const handelFilterByCategory = (e) => {
    setCategory(e.target.value);
  };

  // function for category filter
  const handelSortBy = (e) => {
    const sortBy = "price";
    if (e.target.value === "price-asc") {
      setSortBy({ sortBy: sortBy, order: "asc" });
    }
    if (e.target.value === "price-desc") {
      setSortBy({ sortBy: sortBy, order: "desc" });
    }
  };

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_api_url
        }/products?page=${page}&limit=8&search=${search}&category=${category}&minPrice=${range}&sortBy=${
          sortBy.sortBy
        }&order=${sortBy.order}`
      )
      .then((data) => {
        setMetaData(data.data);
        setProducts(data.data.products);
      });
  }, [page, search, category, range, sortBy]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_api_url}/category`).then((data) => {
      setCategories(data.data);
    });
  }, []);

  return (
    <div>
      <div className=" flex flex-col md:flex-row gap-4 mb-10 md:mb-0 mt-10 mx-10 items-center">
        <label className="input input-bordered flex items-center w-full gap-2">
          <input
            onChange={({ currentTarget: input }) => {
              setPage(1), setSearch(input.value);
            }}
            type="text"
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <select
          onChange={handelFilterByCategory}
          className="select select-bordered w-full"
        >
          <option disabled selected>
            Category
          </option>
          <option value={"all"}>All</option>
          {categories?.map((p, i) => (
            <option value={p?.name} key={i}>
              {p?.name}
            </option>
          ))}
        </select>
        <label className="form-control w-full">
          <div className="label">
            <span className="text-xl font-bold">Price Range</span>
          </div>
          <input
            type="range"
            min={0}
            max="3000"
            onChange={({ currentTarget: input }) => {
              setPage(1), setRange(input.value);
            }}
            className="range"
          />
          <div className="label">
            <span className="text-lg font-semibold">0$</span>
            <span className="text-lg font-semibold">{range}$</span>
          </div>
        </label>
        <select
          onChange={handelSortBy}
          className="select select-bordered w-full"
        >
          <option disabled selected>
            SortBy Price
          </option>
          <option value={"price-asc"}>Low to Hight</option>
          <option value={"price-desc"}>Hight to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <SingleCard key={index} product={product}></SingleCard>
        ))}
      </div>
      <div className="flex justify-center m-10">
        <div className="join">
          {[...Array(metaData?.totalPages)].map((_, index) => (
            <button
              onClick={() => {
                onClick(index);
              }}
              key={index}
              className={`join-item btn ${
                page === index + 1 ? "bg-green-400 text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

// create a new react component that is a search form with a search button
import { useState } from "react";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="flex flex-col items-center justify-center">
        <input
          className="border-2 bg-red-300 text-gray-900 border-black rounded-lg p-8 m-4
            "
          type="text"
          placeholder="Search"
        />
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </div>
      </form>
    </div>
  );
}

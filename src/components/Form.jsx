import { useState } from "react";

function Form() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
  };

  return (
    <form>
      <div className="flex flex-col">
        <input
          onChange={handleChange}
          value={searchTerm}
          className="border-2 border-red-600 rounded-md"
          type="text"
        />
        <input
          type="submit"
          onClick={handleSubmit}
          className="border-2 bg-blue-400 border-blue-200 rounded-lg"
          value="Search"
        />
      </div>
    </form>
  );
}

export default Form;

import { HiMagnifyingGlass } from "react-icons/hi2";
const SearchField = () => {
  return (
    <form className="rounded-md p-1 border border-base-content/20 focus-within:border-primary flex">
      <input
        type="text"
        placeholder="Search products, brands"
        className="input min-h-0 h-10 focus:outline-none !border-0 bg-transparent"
      />

      <button type="submit" className="btn min-h-0 h-10 btn-primary rounded-md">
        Search <HiMagnifyingGlass />
      </button>
    </form>
  );
};

export default SearchField;

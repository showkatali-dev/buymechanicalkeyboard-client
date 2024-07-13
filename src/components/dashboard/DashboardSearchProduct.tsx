import { HiMagnifyingGlass } from "react-icons/hi2";

const DashboardSearchProduct = () => {
  return (
    <form className="rounded-md p-1 border border-base-content/20 focus-within:border-secondary flex">
      <input
        type="text"
        placeholder="Search by name, brands"
        className="input min-h-0 h-8 focus:outline-none !border-0 bg-transparent"
      />

      <button
        type="submit"
        className="btn min-h-0 h-8 btn-secondary rounded-md"
      >
        <HiMagnifyingGlass />
      </button>
    </form>
  );
};

export default DashboardSearchProduct;

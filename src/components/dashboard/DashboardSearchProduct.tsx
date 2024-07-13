import { FormEvent } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate, useSearchParams } from "react-router-dom";

const DashboardSearchProduct = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchField = form[0] as HTMLInputElement;
    const search = searchField.value;

    setSearchParams({ searchTerm: search });

    // navigate(`/dashboard?searchTerm=${search}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-md p-1 border border-base-content/20 focus-within:border-secondary flex"
    >
      <input
        type="text"
        placeholder="Search by name, brands"
        name="search"
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

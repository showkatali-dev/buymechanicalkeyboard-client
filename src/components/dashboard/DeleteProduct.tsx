import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const DeleteProduct = () => {
  const HandleDeleteProduct = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "oklch(var(--p))",
      cancelButtonColor: "oklch(var(--n))",
      confirmButtonText: "Yes, Delete it!",
    });

    if (result.isConfirmed) {
      console.log("confirmed");
    }
  };
  return (
    <button
      onClick={HandleDeleteProduct}
      className="btn btn-sm btn-secondary btn-square rounded-md"
    >
      <AiOutlineDelete />
    </button>
  );
};

export default DeleteProduct;

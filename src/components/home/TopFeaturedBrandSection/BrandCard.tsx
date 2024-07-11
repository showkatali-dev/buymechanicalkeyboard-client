const BrandCard = () => {
  return (
    <div className="border rounded-md bg-base-200 p-4 group">
      <div className="w-full relative aspect-square flex items-center rounded overflow-hidden bg-base-100">
        <img
          src="https://logodownload.org/wp-content/uploads/2018/03/logitech-logo-01.png"
          alt=""
          className="w-full object-cover object-center group-hover:scale-110 transition duration-300"
        />

        <div className="left-3 origin-bottom scale-y-0 group-hover:scale-y-100 duration-300 right-3 bottom-0 absolute bg-primary text-center z-[1] rounded-t-xl p-2">
          <h3 className="text-white font-bold text-sm">Logitech</h3>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;

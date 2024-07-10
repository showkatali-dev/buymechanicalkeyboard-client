const DiscountBadge = () => {
  return (
    <div className="flex gap-2 self-stretch items-center px-5 font-bold bg-primary text-primary-content">
      <span>Get 30% Discount Now</span>
      <span className="badge badge-lg font-semibold border-transparent bg-primary-content text-primary">
        Sale
      </span>
    </div>
  );
};

export default DiscountBadge;

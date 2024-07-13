import { HiOutlineLocationMarker } from "react-icons/hi";
const ContactInfo = () => {
  return (
    <section className="h-fit">
      <h1 className="font-bold text-3xl mb-4">You can ask us questions!</h1>
      <p className="text-neutral mb-12">
        Contact us for all your questions and opinions, or you can solve your
        problems in a shorter time with our contact offices.
      </p>

      <div className="bg-base-200 rounded-md p-8 flex gap-4">
        <div className="flex w-12 bg-base-200 ring-4 ring-base-100 h-12 rounded-full justify-center items-center text-primary">
          <HiOutlineLocationMarker className="text-2xl" />
        </div>

        <div>
          <h2 className="text-xl font-bold">Contact</h2>
          <p className="text-neutral mb-5">
            1234 Main Street, City, State 12345
          </p>

          <p className="font-bold">Phone: (123) 456-7890</p>
          <a href="mailto:6VHlT@example.com" className="link link-primary">
            Email: 6VHlT@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

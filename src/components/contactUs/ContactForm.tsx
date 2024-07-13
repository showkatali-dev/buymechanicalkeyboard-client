import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  return (
    <section className="col-span-2 h-fit">
      <h1 className="font-bold text-3xl mb-8">
        Fill Up The Form If You Have Any Question
      </h1>

      <form className="grid grid-cols-2 gap-4">
        <input
          type="text"
          className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-primary"
          placeholder="Name*"
        />

        <input
          type="email"
          className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-primary"
          placeholder="Email*"
        />

        <input
          type="text"
          className="input rounded-md input-bordered focus:border-transparent min-h-0 h-11 focus:outline-0 focus:ring-1 focus:ring-primary col-span-2"
          placeholder="Subject*"
        />

        <textarea
          className="textarea rounded-md textarea-bordered focus:border-transparent min-h-24 focus:outline-0 focus:ring-1 focus:ring-primary col-span-2"
          placeholder="Write Message Here"
        ></textarea>

        <button className="btn btn-primary w-fit px-6 rounded-md text-base">
          <FiSend /> Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

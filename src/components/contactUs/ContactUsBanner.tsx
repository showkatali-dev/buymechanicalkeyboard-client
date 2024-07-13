const ContactUsBanner = () => {
  return (
    <section className="min-h-[500px] h-[80vh] relative flex justify-center items-center mb-20">
      <img
        src="/images/about-banner.jpg"
        alt=""
        className="absolute inset-0 w-full h-full z-[1] object-cover object-center"
      />

      <div className="text-center space-y-6 relative z-[2] max-w-2xl">
        <h1 className="font-bold text-6xl text-white">Ask Us Question</h1>

        <p className="text-primary-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui
          debitis tempore, itaque vitae dolorem vel autem, assumenda illum
          expedita excepturi recusandae, aut ducimus tenetur a quas dolorum fuga
          enim!
        </p>
      </div>
    </section>
  );
};

export default ContactUsBanner;

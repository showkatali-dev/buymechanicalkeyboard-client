const AboutUsBanner = () => {
  return (
    <section className="min-h-[600px] relative flex justify-center items-center">
      <img
        src="/images/about-banner.jpg"
        alt=""
        className="absolute inset-0 w-full h-full z-[1] object-cover object-center"
      />

      <div className="pb-8 text-center space-y-6 relative z-[2] max-w-2xl">
        <h1 className="font-bold text-6xl text-white">About Us</h1>

        <p className="text-primary-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui
          debitis tempore, itaque vitae dolorem vel autem, assumenda illum
          expedita excepturi recusandae, aut ducimus tenetur a quas dolorum fuga
          enim!
        </p>

        <button className="btn btn-secondary rounded-md min-h-0 text-base px-6">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default AboutUsBanner;

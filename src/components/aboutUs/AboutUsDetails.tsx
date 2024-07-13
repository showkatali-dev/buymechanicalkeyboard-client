const AboutUsDetails = () => {
  return (
    <section className="grid grid-cols-3 gap-12 mb-20">
      <div className="rounded-md overflow-hidden">
        <img
          src="https://kbdfans.com/cdn/shop/files/6_14c90e12-1c1e-49c7-a3c3-cb300d07249f_720x.jpg?v=1720161848"
          alt=""
          className="w-full"
        />
      </div>

      <div className="col-span-2">
        <h1 className="text-5xl font-bold mb-8 leading-tight">
          Your Destination for Quality Produce
          <br /> and Pantry Essentials
        </h1>

        <p className="text-neutral mb-6">
          Venenatis augue consequat class magnis sed purus, euismod ligula nibh
          congue quis vestibulum nostra, cubilia varius velit vitae rhoncus.
          Turpis malesuada fringilla urna dui est torquent aliquet, mi nec
          fermentum placerat nisi venenatis sapien, mattis nunc nullam rutrum
          feugiat porta. Pharetra mi nisl consequat semper quam litora aenean
          eros conubia molestie erat, et cursus integer rutrum sollicitudin
          auctor curae inceptos senectus sagittis est
        </p>

        <ul className="list-disc pl-4 space-y-2 text-neutral">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            tempore.
          </li>

          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            tempore.
          </li>

          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            tempore.
          </li>

          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            tempore.
          </li>

          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            tempore.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUsDetails;

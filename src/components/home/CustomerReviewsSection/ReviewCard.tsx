import { AiFillStar } from "react-icons/ai";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const ReviewCard = () => {
  return (
    <div className="pt-12 pb-20">
      <div className="relative bg-primary rounded-2xl p-2 pt-[1px] after:absolute after:right-8 after:bottom-0 after:border-[30px] after:border-l-transparent after:border-b-transparent after:border-primary after:z-[1] after:translate-y-full">
        <div className="bg-base-100 rounded-xl relative after:absolute after:right-8 after:bottom-0 after:border-[24px] after:border-l-transparent after:z-[2] after:border-b-transparent after:border-base-100 after:translate-y-full text-center min-h-60 flex flex-col items-center p-4 pt-0 gap-1">
          <img
            src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user"
            alt=""
            className="w-24 h-24 rounded-full -mt-12 p-0.5 bg-base-100"
          />

          <h3 className="font-bold uppercase text-2xl text-primary">
            John Smith
          </h3>
          <p className="uppercase font-semibold">Founder & CEO</p>

          <p className="text-sm">
            <RiDoubleQuotesL className="text-text-primary text-3xl inline align-bottom" />{" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            aliquid esse distinctio beatae, aspernatur corrupti voluptate
            possimus expedita modi maiores tempora asperiores porro nulla labore
            eveniet minima ipsam. Ipsam, nemo!{" "}
            <RiDoubleQuotesR className="text-text-primary text-3xl inline align-top" />
          </p>

          <div className="flex gap-0 5 mt-2 text-warning">
            {[...Array(5)].map((_, index) => (
              <AiFillStar key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

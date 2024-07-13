import AboutUsBanner from "@/components/aboutUs/AboutUsBanner";
import AboutUsDetails from "@/components/aboutUs/AboutUsDetails";
import Portfolio from "@/components/aboutUs/Portfolio";

const AboutUsPage = () => {
  return (
    <main className="mb-16">
      <AboutUsBanner />

      <div className="container -mt-20 relative z-[3]">
        <Portfolio />

        <AboutUsDetails />
      </div>
    </main>
  );
};

export default AboutUsPage;

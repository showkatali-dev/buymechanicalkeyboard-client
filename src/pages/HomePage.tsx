import AdvertisementSection from "@/components/home/AdvertisementSection";
import CustomerReviewsSection from "@/components/home/CustomerReviewsSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import TopFeaturedBrandSection from "@/components/home/TopFeaturedBrandSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AdvertisementSection />
      <FeaturedSection />
      <TopFeaturedBrandSection />
      <CustomerReviewsSection />
      <WhyChooseSection />
    </main>
  );
};

export default HomePage;

import ContactForm from "@/components/contactUs/ContactForm";
import ContactInfo from "@/components/contactUs/ContactInfo";
import ContactUsBanner from "@/components/contactUs/ContactUsBanner";

const ContactUsPage = () => {
  return (
    <main className="mb-16">
      <ContactUsBanner />

      <div className="container mb-20">
        <div className="grid grid-cols-3 gap-16">
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactUsPage;

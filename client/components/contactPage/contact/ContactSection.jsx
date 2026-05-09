import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section className="section !py-0 !px-0">
      <div className="flex flex-col gap-[42px] px-[16px] md:px-[35px] py-[43px] bg-blue-50">
        <div className="flex flex-col gap-[19px]">
          <h2 className="!leading-[120%] !tracking-[-5%] !text-[38px] md:!text-[51px] !font-black text-grey-900">
            Ready to Make a Difference?
          </h2>

          <p className="max-w-[573px] !leading-[150%] !tracking-[0.2%] !text-[15px] text-grey-300">
            Whether you want to sponsor a student, partner with us, volunteer
            your time, or support our campaigns, we have multiple ways for you
            to get involved and create lasting impact in communities.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-[17px]">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

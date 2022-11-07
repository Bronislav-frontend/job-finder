import Image from "next/image";
import icons from "../../../assets/icons";

interface IContactsSectionProps {
  name: string;
  address: string;
  phone: string;
  email: string;
}

const ContactsSection = ({
  name,
  address,
  phone,
  email,
}: IContactsSectionProps) => {
  return (
    <section>
      <h2 className="border-b-[1px] text-det text-[#3A4562] tracking-[-0.413] font-bold pb-[10px] mb-[20px] xl:hidden">
        Contacts
      </h2>
      <div className="bg-[#2A3047] px-[62px] py-8 rounded-lg">
        <p className="text-[#E7EAF0] text-dep tracking-[0.236px] font-bold">
          Department name.
        </p>
        <p className="text-[#E7EAF0] text-dep tracking-[0.236px] font-bold mb-[14px]">
          {name}
        </p>
        <div className="flex items-center">
          <Image
            src={icons.locationIcon}
            alt="location icon"
            className="xl:w-[13px] xl:h-[18px] mr-[8px]"
          />
          <p className="mb-['5px]  text-base -tracking-[0.5px] text-[#E7EAF0]">
            {address}
          </p>
        </div>
        <p className="mb-['5px] text-base -tracking-[0.5px] text-cont">
          {phone}
        </p>
        <p className="mb-['5px] text-base -tracking-[0.5px] text-cont">
          {email}
        </p>
      </div>
    </section>
  );
};

export default ContactsSection;

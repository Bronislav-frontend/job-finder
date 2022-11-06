interface IAdditionalInfoSectionProps {
  employment_type: string[];
  benefits: string[];
}

const AdditionalInfoSection = ({
  employment_type,
  benefits,
}: IAdditionalInfoSectionProps) => {
  return (
    <section className="pb-[63px]">
      <h2 className="border-b-[1px] text-det text-[#3A4562] tracking-[-0.413] font-bold pb-[10px]">
        Additional info
      </h2>
      <p className="text-base -tracking-[-0.5625px] text-descr mb-[10px] mt-[15px] xl:text-base xl:text-[#3A4562]">
        Employment type
      </p>
      <ul className="grid grid-flow-col gap-2 mb-[22px]">
        {employment_type.length !== 0 &&
          employment_type.map((type, index) => (
            <li
              key={index}
              className="text-center py-4 rounded-lg bg-et border-bord border"
            >
              <p className="text-ent font-bold text-[#55699E] -tracking-[0.457px]">
                {type}
              </p>
            </li>
          ))}
      </ul>
      <p className="text-base -tracking-[-0.5625px] text-descr mb-[10px] mt-[15px] xl:text-base xl:text-[#3A4562]">
        Benefits
      </p>
      <ul className="grid grid-flow-col gap-2 mb-[22px]">
        {benefits.length !== 0 &&
          benefits.map((benefit, index) => (
            <li
              key={index}
              className="text-center py-4 rounded-lg bg-bene border-[#FFCF00] border"
            >
              <p className="text-ent font-bold text-[#988B49] -tracking-[0.457px]">
                {benefit}
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default AdditionalInfoSection;

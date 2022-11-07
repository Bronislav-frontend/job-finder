import Image from "next/image";

interface IImageSectionProps {
  pictures: string[];
}

const ImageSection = ({ pictures }: IImageSectionProps) => {
  return (
    <>
      {pictures.length !== 0 && (
        <section>
          <h2 className="border-b-[1px] text-det text-[#3A4562] tracking-[-0.413] font-bold pb-[10px] mb-[20px]">
            Attached images
          </h2>
          <ul className="grid gap-2.5 grid-cols-2 pb-[60px] xl:grid-cols-3 xl:gap-[10px] xl:pb-[140px]">
            {pictures.map((picture, index) => (
              <li key={index} className="flex justify-center">
                <Image
                  src={picture}
                  alt="photoes of the company"
                  width={200}
                  height={150}
                  className="w-[210px] h-[115px] rounded-lg"
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default ImageSection;

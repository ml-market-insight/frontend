import Image, { StaticImageData } from 'next/image';

interface StepProps {
  title: string;
  image: StaticImageData;
  children: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ image, title, children }) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <span className="rounded-full bg-dark">
        <Image src={image} alt={title} width={320} />
      </span>
      <div className="flex flex-col items-center justify-center px-8 text-center">
        <h3 className="text-obsidian">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Step;

import Image from "next/image";
import { FC } from "react";

interface Props {
  title?: string;
  name: string;
  quote: string | null;
  image: string;
}

const ProfileCard: FC<Props> = ({ title, name, quote, image }) => {
  return (
    <li className="border flex flex-col items-center p-4 rounded">
      <Image
        src={image}
        alt="organizer"
        width={130}
        height={130}
        className="rounded-full"
      />
      <p className="text-lg font-bold">{name}</p>
      <h4 className="text-sm text-gray-600">{title}</h4>
      <p className="mt-4 italic text-gray-400">{quote}</p>
    </li>
  );
};

export default ProfileCard;

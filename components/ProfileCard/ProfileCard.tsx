import Image from "next/image";
import { FC } from "react";

interface Props {
  title?: string;
  name: string;
  quote?: string;
  image?: string;
}

const ProfileCard: FC<Props> = ({ title, name, quote, image }) => {
  return (
    <li className="border flex flex-col items-center p-4 rounded">
      {image && (
        <Image
          src={image}
          alt="organizer"
          width={50}
          height={50}
          className="w-20 sm:w-28 rounded-full"
        />
      )}
      <p className="sm:text-lg font-bold mt-2">{name}</p>
      <h4 className="text-sm text-gray-600">{title}</h4>
      <p className="text-sm sm:text-base mt-2 italic text-gray-400">{quote}</p>
    </li>
  );
};

export default ProfileCard;

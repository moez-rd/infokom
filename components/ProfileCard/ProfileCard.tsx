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
    <li className="flex flex-col items-center rounded border p-4">
      {image && (
        <Image
          src={image}
          alt="organizer"
          width={50}
          height={50}
          className="w-20 rounded-full sm:w-28"
        />
      )}
      <p className="mt-2 font-bold sm:text-lg">{name}</p>
      <h4 className="text-sm text-gray-600">{title}</h4>
      <p className="mt-2 text-sm italic text-gray-400 sm:text-base">{quote}</p>
    </li>
  );
};

export default ProfileCard;

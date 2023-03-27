import Image from "next/image";
import React from "react";
import Card from "../Card/Card";

type ProfileCardProps = {
  organizer: any;
  displayRole?: boolean;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  organizer,
  displayRole = false,
}) => {
  return (
    <Card className="py-8 px-4 text-center">
      <Image
        src={
          organizer.properties.Photo.files[0]?.file.url ||
          "/images/user_default.png"
        }
        alt={organizer.properties.Photo.files[0]?.name || "user"}
        width={50}
        height={50}
        className="z-10 mx-auto h-24 w-24 rounded-full bg-neutral-300 sm:h-28 sm:w-28"
      />
      <h3 className="mt-4 text-xl font-medium">
        {organizer.properties.Name.title[0].text.content || "No name"}
      </h3>
      {displayRole && (
        <p className="text-sm font-light">
          {organizer.properties.Role.select.name || "No role"}
        </p>
      )}
      <p className="mt-4 font-light">
        {organizer.properties.Quote.rich_text[0]?.text.content || ""}
      </p>
    </Card>
  );
};
export default ProfileCard;

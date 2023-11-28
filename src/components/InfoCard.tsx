import { Icon } from "@iconify/react";

const InfoCard = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="bg-white p-2 flex flex-row items-center gap-2 rounded-xl shadow-md">
      <div>
        <Icon className="opacity-40" height="2rem" icon={icon} />
      </div>
      <div>
        <p className="text-xl font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;

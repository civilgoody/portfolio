import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

export function SocialIcon({ icon }: { icon: string }) {
  const iconMap = {
    github: <FaGithub size={24} />,
    linkedin: <FaLinkedin size={24} />,
    mail: <LuMail size={24} />,
  };

  return iconMap[icon as keyof typeof iconMap] || null;
}

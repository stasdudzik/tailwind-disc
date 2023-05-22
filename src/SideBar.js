import { FaBacterium, FaPoo, FaSyringe, FaInbox } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg">
      <i>
        <SideBarIcon icon={<FaBacterium size="28" />} />
      </i>
      <i>
        <SideBarIcon icon={<FaPoo size="28" />} />
      </i>
      <i>
        <SideBarIcon icon={<FaSyringe size="28" />} />
      </i>
      <i>
        <SideBarIcon icon={<FaInbox size="28" />} />
      </i>
    </div>
  );
};
const SideBarIcon = ({ icon, text = "tooltip" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip  group-hover:scale-100">{text}</span>
    </div>
  );
};
export default SideBar;

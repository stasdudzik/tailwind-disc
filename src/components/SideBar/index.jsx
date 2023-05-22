import { FaBacterium, FaPoo, FaSyringe, FaInbox } from "react-icons/fa";

const SideBar = () => {
  return (
     <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
     bg-white dark:bg-gray-900 shadow-lg">
     <i>
       <SideBarIcon icon={<FaBacterium size="28" />} />
     </i>
     <Divider />
     <i>
       <SideBarIcon icon={<FaPoo size="28" />} />
     </i>
     <Divider />
     <i>
       <SideBarIcon icon={<FaSyringe size="28" />} />
     </i>
     <Divider />
     <i>
       <SideBarIcon icon={<FaInbox size="28" />} />
     </i>
   </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 🔥' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
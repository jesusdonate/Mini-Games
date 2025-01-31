import { FaBeer, FaPoo, FaDiscord, FaFire } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs'

interface SideBarIconProps {
    icon: React.ReactNode;
    text?: string; // Optional tooltip text
}

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaFire size="28" />} text="Fire Icon"/>
            <SideBarIcon icon={<BsPlus size="34" />} text="Add"/>
            <SideBarIcon icon={<FaBeer size="22"/>} text="Let's Party! 🥳"/>
            <SideBarIcon icon={<FaPoo size="24"/>} text="Poop"/>
            <SideBarIcon icon={<FaDiscord size="26"/>} text="Discord"/>

        </div>
    );
};


const SideBarIcon = ({ icon, text = "tooltip 💡" }: SideBarIconProps) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

export default SideBar;
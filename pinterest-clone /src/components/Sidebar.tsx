import { Home, Plus, Bell, MessageCircle, Settings } from 'lucide-react';

const icons = [Home, Plus, Bell, MessageCircle, Settings];

export default function Sidebar() {
  return (
    <aside className="w-30 bg-white border-r h-full flex flex-col items-center py-4 space-y-6">
      <img src="/logo.png" alt="Logo" className="w-12 h-12" />
      {icons.map((Icon, index) => (
        <Icon key={index} className="w-6 h-6 text-gray-700 hover:text-black cursor-pointer" />
      ))}
    </aside>
  );
}

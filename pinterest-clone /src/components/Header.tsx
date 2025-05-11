export default function Header() {
  return (
    <header className="p-4 border-b bg-white flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 px-4 py-2 rounded-full border-3 border-gray-300 bg-gray-100 text-black focus:outline-none focus:border-blue-500"
      />
      <div className="ml-4 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
        {/* Optional icon or initials */}
      </div>
    </header>
  );
}

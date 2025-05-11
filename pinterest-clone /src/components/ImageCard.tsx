import { Download, MoreHorizontal } from 'lucide-react';

export default function ImageCard({ src }: { src: string }) {
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <img
        src={src}
        alt="card"
        className="rounded-xl w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Save button */}
      <button className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
        Save
      </button>

      {/* Bottom action buttons */}
      <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
        <button className="bg-white p-2 rounded-lg shadow">
          <Download size={16} className="text-black" />
        </button>
        <button className="bg-white p-2 rounded-lg shadow">
          <MoreHorizontal size={16} className="text-black" />
        </button>
      </div>
    </div>
  );
}

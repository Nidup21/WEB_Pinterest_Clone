import ImageCard from './ImageCard';

const imageUrls = [
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image1.png',
  '/image3.png',
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image1.png',
  '/image3.png',
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image1.png',
  '/image3.png',
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image1.png',
  '/image3.png',
];

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {imageUrls.map((url, i) => (
        <ImageCard key={i} src={url} />
      ))}
    </div>
  );
}

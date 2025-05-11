import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ImageGrid from '@/components/ImageGrid';

export default function Home() {
  return (
    <div className="flex h-screen bg-white">
      <Head>
        <title>Pinterest Clone</title>
      </Head>
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto p-4">
          <ImageGrid />
        </div>
      </main>
    </div>
  );
}

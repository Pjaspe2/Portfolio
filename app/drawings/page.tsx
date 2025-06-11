import Image from "next/image";

export default function Drawings() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Drawings</h1>
          <a
            href="/"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Drawings Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Landscape Images */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/drawings/IMG_6950.jpeg"
              alt="Landscape drawing 1"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/drawings/IMG_6975.jpeg"
              alt="Landscape drawing 2"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/drawings/IMG_7124.jpeg"
              alt="Landscape drawing 3"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Portrait Images */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/drawings/IMG_7171.jpeg"
              alt="Portrait drawing 1"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/drawings/IMG_6866.jpeg"
              alt="Portrait drawing 2"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/drawings/IMG_6867.jpeg"
              alt="Portrait drawing 3"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </main>
    </div>
  );
} 
import Link from "next/link";


const mockUrls = [
  'https://utfs.io/f/eb1e637e-e41a-41e6-92d4-5cc592981cc5-hbvaek.png',
  'https://utfs.io/f/b36f69b8-c4a8-464f-bc5b-f4d18e89107c-e6bpb4.png',
  'https://utfs.io/f/49d432f0-c6db-4fa4-977c-befc0a104f61-wkwaub.png',
  'https://utfs.io/f/1826e69a-ee4b-461a-a176-5c07e2406872-q2wogl.jpg'
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}

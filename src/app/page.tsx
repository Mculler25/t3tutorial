
import { db } from "~/server/db";


export const dynamic = "force-dynamic";

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


export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          posts.map((post) => (
            <div key={post.name}>
              {post.name}
            </div>
          ))
        }
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}

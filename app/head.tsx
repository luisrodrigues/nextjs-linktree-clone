export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>Luís' Linktree</title>
      <meta name="description" content="Next.js + Tailwind CSS" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </>
  );
}

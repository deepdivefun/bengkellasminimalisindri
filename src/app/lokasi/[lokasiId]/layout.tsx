export default function LokasiDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Throw error 50% of the time
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading product details");
  // }
  return (
    <main>
      {children}
    </main>
  );
}
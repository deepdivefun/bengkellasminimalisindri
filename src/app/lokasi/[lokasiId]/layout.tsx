import BubbleChat from "@/components/BubbleChat";

export default function LokasiDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <BubbleChat/>
    </main>
  );
}
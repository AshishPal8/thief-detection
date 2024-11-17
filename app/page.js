import ObjectDetection from "@/components/object-detection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-1">
      <h1 className="gradient-title font-extrabold text-3xl md:text-4xl lg:text-6xl tracking-tight md:px-6 text-center">
        Thief alarm detection
      </h1>
      <ObjectDetection />
    </main>
  );
}

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">Smooth Pictures</h2>
        <p className="py-5 text-xl">I capture moments and keep them alive</p>
        <button className="px-8 py-2 border">Book</button>
      </div>
    </div>
  );
}

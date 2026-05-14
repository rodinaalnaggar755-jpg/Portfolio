export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Blue blob top-left */}
      <div
        className="absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full bg-blue-500/[0.06] blur-[80px]"
        style={{ animation: "blobmove 12s ease-in-out infinite alternate" }}
      />
      {/* Purple blob bottom-right */}
      <div
        className="absolute -bottom-36 -right-36 h-[500px] w-[500px] rounded-full bg-purple-500/[0.06] blur-[80px]"
        style={{ animation: "blobmove 15s ease-in-out infinite alternate", animationDelay: "-5s" }}
      />
    </div>
  );
}

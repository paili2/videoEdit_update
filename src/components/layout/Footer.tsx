export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-[11px] text-white/50">
        <span>© {new Date().getFullYear()} SEORYEONG JEONG</span>
        <span>Video Editing</span>
      </div>
    </footer>
  );
}

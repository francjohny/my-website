"use client";

export default function Footer() {
  return (
    <footer className="border-t-8 border-brutalist-black py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-brutalist-black font-mono mb-4 md:mb-0">
            © {new Date().getFullYear()} FRANCIS JOHNY
          </div>
          <div className="font-bold text-brutalist-accent">
            RAW. UNFILTERED. DIGITAL.
          </div>
        </div>
      </div>
    </footer>
  );
}

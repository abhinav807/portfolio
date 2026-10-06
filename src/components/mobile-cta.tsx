import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-5 pb-5 lg:hidden">
      <Link
        href="/#contact"
        className="pointer-events-auto inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background shadow-lg transition-opacity hover:opacity-90"
      >
        Get in touch
        <ArrowRight className="size-4" aria-hidden />
      </Link>
    </div>
  );
}

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t" aria-label="Footer">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="font-bold">
              <Link href="/">PastForward</Link>
            </div>
            <div className="flex space-x-4 text-xs">
              <Link href="/imprint">Imprint</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </div>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook size={16} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram size={16} />
              </Link>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500 font-body">
            © 2025 PastForward
          </div>
        </div>
      </div>
    </footer>
  );
}

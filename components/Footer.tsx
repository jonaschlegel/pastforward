import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

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
              <Link
                href="https://www.linkedin.com/company/pastforwardhub/"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61574945422286"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="https://www.instagram.com/pastforwardhub"
                aria-label="Instagram"
              >
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

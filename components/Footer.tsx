import { track } from '@/lib/tracking';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const handleSocialClick = (platform: string, url: string) => {
    track.socialMedia(platform, url);
  };

  const handleFooterNavClick = (page: string) => {
    track.navigate(`footer_${page}`);
  };

  return (
    <footer className="py-8 border-t" aria-label="Footer">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="font-bold">
              <Link href="/" onClick={() => handleFooterNavClick("home")}>
                PastForward
              </Link>
            </div>
            <div className="flex space-x-4 text-xs">
              <Link
                href="/imprint"
                onClick={() => handleFooterNavClick("imprint")}
              >
                Imprint
              </Link>
              <Link
                href="/privacy-policy"
                onClick={() => handleFooterNavClick("privacy_policy")}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                onClick={() => handleFooterNavClick("terms_and_conditions")}
              >
                Terms and Conditions
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/pastforwardhub/"
                aria-label="LinkedIn"
                onClick={() =>
                  handleSocialClick(
                    "linkedin",
                    "https://www.linkedin.com/company/pastforwardhub/"
                  )
                }
              >
                <Linkedin size={16} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61574945422286"
                aria-label="Facebook"
                onClick={() =>
                  handleSocialClick(
                    "facebook",
                    "https://www.facebook.com/profile.php?id=61574945422286"
                  )
                }
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="https://www.instagram.com/pastforwardhub"
                aria-label="Instagram"
                onClick={() =>
                  handleSocialClick(
                    "instagram",
                    "https://www.instagram.com/pastforwardhub"
                  )
                }
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

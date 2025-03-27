import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  Facebook,
  Instagram,
  Search,
  ClipboardList,
  BookOpen,
  Users
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 border-b bg-white z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="font-bold text-xl">PastForward</div>
          <nav className="flex space-x-6 text-sm">
            <Link href="#newsletter" className="text-gray-600">
              newsletter
            </Link>
            <Link href="#crowdfunding" className="text-gray-600">
              crowdfunding
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-4 mt-[140px] font-heading">
              Let's Rethink Careers.
            </h1>
            <p className="text-xl mb-24 font-body font-light">
              A shared space for archaeologists building sustainable futures.
            </p>
            <p className="text-lg leading-relaxed mb-[160px] font-body">
              Archaeology isn't broken—but building a career in it can feel
              like pushing uphill. Moving from contract to contract, grant to
              grant, project to project. Adapting to different contexts,
              expectations, and ways of working. Whether you're freelancing, in
              academia, or in commercial work, the path can feel disconnected,
              unclear, and lonely.
            </p>
            <h2 className="text-3xl font-bold mb-10 font-heading">
              We know the feeling...
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-teal-800 text-white p-4 rounded-lg text-center shadow-[0px_24px_20px_-20px_#2d3748] transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                <p className="font-body">
                  You feel stuck between short-term gigs and long-term goals.
                </p>
              </div>
              <div className="bg-teal-800 text-white p-4 rounded-lg text-center shadow-[0px_24px_20px_-20px_#2d3748] transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                <p className="font-body">
                  You want more clarity, but have simply nowhere to talk to.
                </p>
              </div>
              <div className="bg-teal-800 text-white p-4 rounded-lg text-center shadow-[0px_24px_20px_-20px_#2d3748] transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                <p className="font-body">
                  You miss having a network of peers for learning and growth.
                </p>
              </div>
              <div className="bg-teal-800 text-white p-4 rounded-lg text-center shadow-[0px_24px_20px_-20px_#2d3748] transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                <p className="font-body">
                  You are searching for a way to build a career that lasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 md:pl-8">
              <div className="bg-indigo-900 p-6 rounded-lg text-white shadow-[0px_24px_20px_-20px_#2d3748]">
                {/* MailerLite Universal Script */}
                <Script id="mailerlite-universal" strategy="afterInteractive" className="font-body">
                  {`
                    (function(w,d,e,u,f,l,n){
                      w[f]=w[f]||function(){
                        (w[f].q=w[f].q||[]).push(arguments);
                      };
                      l=d.createElement(e);
                      l.async=1;
                      l.src=u;
                      n=d.getElementsByTagName(e)[0];
                      n.parentNode.insertBefore(l,n);
                    })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
                    ml('account', '1411531');
                  `}
                </Script>
                {/* MailerLite Embedded Form */}
                <div className="ml-embedded" data-form="ispwCx"></div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-16">
              <h2 className="text-2xl font-bold mb-4 font-heading">
                Want to stay in the loop?
              </h2>
              <p className="mb-1 font-body">
                If this sounds like something you've been looking for — join us early.
              </p>
              <p className="mb-4 font-body">
                Help shape it. Stay informed.
              </p>
              <p className="font-body">Sign up for updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
              {/* Image */}
              <div className="order-2 md:order-1 space-y-8">
                <Image
                  src="/images/archaeology-site.png"
                  width={500}
                  height={400}
                  alt="Archaeological site with ancient ruins"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              {/* Text */}
              <div className="order-1 md:order-2">
                <p className="mb-4 font-body">
                  That's why PastForward is being built:
                </p>
                <p className="mb-8 font-body">
                  A shared space for archaeologists to connect, get support, and
                  build careers with others who understand the challenges of the field.
                </p>
                <p className="mb-2 font-body">
                  It remains in its early stages but invites collective input.
                </p>
                <p className="mb-8 font-body">
                  Development progresses at a measured pace.
                </p>
                <p className="mb-16 font-body">
                  There are no shortcuts—only opportunities for sustained growth.
                </p>
                <div className="bg-amber-100 p-4 rounded-lg flex mb-6">
                  <div className="mr-3 rounded-lg p-2 flex items-center justify-center">
                    <Search size={24} />
                  </div>
                  <p className="font-body">
                    A directory to find others by skills, interests, or experience
                  </p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg flex mb-6">
                  <div className="mr-3 rounded-lg p-2 flex items-center justify-center">
                    <ClipboardList size={24} />
                  </div>
                  <p className="font-body">
                    A job board for freelance, academic, and commercial opportunities
                  </p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg flex mb-6">
                  <div className="mr-3 rounded-lg p-2 flex items-center justify-center">
                    <BookOpen size={24} />
                  </div>
                  <p className="font-body">
                    Resources, events, mentoring ideas, and perhaps even some leisure time
                  </p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg flex mb-6">
                  <div className="mr-3 rounded-lg p-2 flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <p className="font-body">
                    Community spaces to converse, share advice, and build solidarity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 font-heading text-center">
              Meet the Team.
            </h2>
            {/* Team Member 1 */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-[0px_24px_20px_-20px_#2d3748]">
                  <Image
                    src="/images/jona-schlegel.jpeg"
                    width={96}
                    height={96}
                    alt="Jona Schlegel"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="font-bold font-heading">
                  Jona Schlegel - co-funder, design &amp; web development
                </h3>
                <p className="text-sm mb-4 font-body">
                  Jona is a landscape archaeologist with experience in graffiti and geophysical prospection, specialising in archaeological science communication and integrating illustration with web development.
                </p>
                <p className="text-sm font-body">
                  Connect with her{" "}
                  <a href="https://www.jonaschlegel.com" className="underline">
                    here
                  </a>
                </p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-3/4 md:pl-8">
                <h3 className="font-bold font-heading text-right">
                  Alexandra Dolea - co-funder, marketing &amp; events
                </h3>
                <p className="text-sm mb-4 font-body text-right">
                  Alexandra is an archaeologist with a robust background in research and community management, focusing on connection, visibility, and clear communication.
                </p>
                <p className="text-sm font-body text-right">
                  Connect with her{" "}
                  <a href="https://www.ilovearchaeology.com/" className="underline">
                    here
                  </a>
                </p>
              </div>
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-end">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-[0px_24px_20px_-20px_#2d3748]">
                  <Image
                    src="/images/alexandra-dolea.jpeg"
                    width={96}
                    height={96}
                    alt="Alexandra Dolea"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-[0px_24px_20px_-20px_#2d3748]">
                  <Image
                    src="/images/laura-coltofean.jpeg"
                    width={96}
                    height={96}
                    alt="Laura Coltofean"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="font-bold font-heading">
                  Laura Coltofean - co-funder, crowdfunding campaign builder (launching soon)
                </h3>
                <p className="text-sm mb-4 font-body">
                  Laura is an archaeologist and seasoned campaign builder, organising and building campaigns to support communal projects.
                </p>
                <p className="text-sm font-body">
                  Connect with her{" "}
                  <a href="https://lauracoltofean.com/" className="underline">
                    here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="crowdfunding" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="max-w-4xl mx-auto text-3xl font-bold mb-6 font-heading">
            Support the journey.
          </h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <p className="mb-4 font-body">
                Building PastForward requires careful planning, time, and effort. A Kickstarter campaign is forthcoming.
              </p>
              <p className="mb-4 font-body">
                Supporters will be among the first to receive updates and exclusive insights.
              </p>
              <p className="mb-4 font-body">
                Newsletter subscription ensures you are informed of campaign launches and engagement opportunities.
              </p>
            </div>
            <div className="md:w-1/3 md:pl-8">
              <div className="bg-indigo-900 p-6 rounded-lg text-white shadow-[0px_24px_20px_-20px_#2d3748]">
                <div className="space-y-4">
                  {/* MailerLite Universal Script for Support Section */}
                  <Script id="mailerlite-universal-support" strategy="afterInteractive">
                    {`
                      (function(w,d,e,u,f,l,n){
                        w[f]=w[f]||function(){
                          (w[f].q=w[f].q||[]).push(arguments);
                        };
                        l=d.createElement(e);
                        l.async=1;
                        l.src=u;
                        n=d.getElementsByTagName(e)[0];
                        n.parentNode.insertBefore(l,n);
                      })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
                      ml('account', '1411531');
                    `}
                  </Script>
                  {/* MailerLite Embedded Form */}
                  <div className="ml-embedded" data-form="ispwCx"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center">
              <div className="font-bold">PastForward</div>
              <div className="flex space-x-4 text-xs">
                <Link href="/imprint">
                  Imprint
                </Link>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link href="/terms-and-conditions">
                  Terms and Conditions
                </Link>
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
    </div>
  );
}

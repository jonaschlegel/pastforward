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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-4 mt-[80px] font-heading">
              Rethink Careers in Archaeology.
            </h1>
            <p className="text-xl mb-8 font-body font-light">
              Archaeology is a field full of passion, but short-term gigs and uncertain finances can make it complicated to plan a stable path. PastForward is a new platform created by archaeologists who have felt these struggles and want to change how our field works.
            </p>
            <p className="text-lg leading-relaxed mb-14 font-body">
              Sign up below to learn more and help shape a future where archaeological work can be more sustainable and rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            <div className="order-1 md:order-2 md:w-2/3 md:pl-16 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 font-heading">
                Join the Movement.
              </h2>
              <p className="mb-4 font-body text-base">
                If you share the frustrations around short-term contracts and want more clarity in archaeology, subscribe for updates. Your insights are valuable as we develop new tools and resources.
              </p>
              <p className="font-body font-bold text-xl">
                Sign up for updates.
              </p>
            </div>
            <div className="order-2 md:order-1 md:w-1/3 md:pl-8">
              <div className="bg-indigo-900 p-1 rounded-lg text-white shadow-[0px_24px_20px_-20px_#2d3748]">
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
                <div className="ml-embedded" data-form="ispwCx"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struggles Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold mb-4 font-heading text-center">
              Everyday Challenges in Archaeology.
            </h2>
            <p className="mb-8 font-body text-base text-center px-4 md:px-20">
              Archaeology can be fulfilling, but many professionals deal with obstacles like unstable work, limited support, and missing networks. PastForward aims to address these hurdles and offer ways to build a more reliable career path.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 font-bold text-xl">
              <div className="relative rounded-lg shadow-[0px_24px_20px_-20px_#2d3748] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 min-h-[250px]">
                <Image
                  src="/images/short-term-contracts.jpg"
                  alt="Short-Term Contracts"
                  fill
                  className="object-cover transition-opacity duration-300 opacity-80 hover:opacity-100"
                />
                <div className="absolute inset-0 bg-teal-800 bg-opacity-60 flex items-center justify-center">
                  <p className="text-white font-body text-center px-4">
                    Short-term gigs and limited support make it tough to plan.
                  </p>
                </div>
              </div>

              <div className="relative rounded-lg shadow-[0px_24px_20px_-20px_#2d3748] overflow-hidden min-h-[250px] transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/lack-of-clarity.jpg"
                  alt="Lack of Clarity"
                  fill
                  className="object-cover transition-opacity duration-300 opacity-80 hover:opacity-100"
                />
                <div className="absolute inset-0 bg-teal-800 bg-opacity-60 flex items-center justify-center">
                  <p className="text-white font-body text-center px-4">
                    Clear guidance is missing, leaving many feeling stuck.
                  </p>
                </div>
              </div>

              <div className="relative rounded-lg shadow-[0px_24px_20px_-20px_#2d3748] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 min-h-[250px]">
                <Image
                  src="/images/missing-network.jpg"
                  alt="Missing Network"
                  fill
                  className="object-cover transition-opacity duration-300 opacity-80 hover:opacity-100"
                />
                <div className="absolute inset-0 bg-teal-800 bg-opacity-60 flex items-center justify-center">
                  <p className="text-white font-body text-center px-4">
                    A supportive network is often hard to find.
                  </p>
                </div>
              </div>

              <div className="relative rounded-lg shadow-[0px_24px_20px_-20px_#2d3748] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 min-h-[250px]">
                <Image
                  src="/images/career-longevity.jpg"
                  alt="Career Longevity"
                  fill
                  className="object-cover transition-opacity duration-300 opacity-80 hover:opacity-100"
                />
                <div className="absolute inset-0 bg-teal-800 bg-opacity-60 flex items-center justify-center">
                  <p className="text-white font-body text-center px-4">
                    Building a lasting career can feel out of reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 font-heading">
                What to Expect in the Future.
              </h2>
              <p className="mb-4 font-body">
                PastForward is still developing. This preview is an invitation to share your thoughts, not a finished product. We will offer updates and practical tools for archaeologists looking for more stability and collaboration.
              </p>
              <p className="mb-8 font-body">
                A short video below provides a first look at the platform’s direction. We welcome your ideas to make it even better.
              </p>
            </div>

            <div className="w-full rounded-lg overflow-hidden mb-10">
              <video
                controls
                className="w-full h-auto rounded-lg"
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/pastforward-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div>
              <h3 className="text-xl font-bold font-heading text-center mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-100 p-4 rounded-lg flex">
                  <div className="mr-3 p-2 flex items-center justify-center">
                    <Search size={24} />
                  </div>
                  <p className="font-body">
                    <strong>Directory:</strong> Connect with peers based on skills, interests, or experience.
                  </p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg flex">
                  <div className="mr-3 p-2 flex items-center justify-center">
                    <ClipboardList size={24} />
                  </div>
                  <p className="font-body">
                    <strong>Job Board:</strong> Explore freelance, academic, and commercial opportunities.
                  </p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg flex">
                  <div className="mr-3 p-2 flex items-center justify-center">
                    <BookOpen size={24} />
                  </div>
                  <p className="font-body">
                    <strong>Resources:</strong> Access curated content, events, and mentorship ideas.
                  </p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg flex">
                  <div className="mr-3 p-2 flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <p className="font-body">
                    <strong>Community Spaces:</strong> Join interactive forums to share advice and build solidarity.
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
            <h2 className="text-3xl font-bold mb-10 font-heading text-center">
              Meet the Team
            </h2>
            <p className="text-base mb-20 font-body text-center">
              This platform was formed by archaeologists, designers, and community organizers who have seen firsthand how challenging our field can be. We aim to create a more stable future for everyone in archaeology.
            </p>

            <div className="flex flex-col md:flex-row items-center mb-20">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-[140px] h-[140px] rounded-full overflow-hidden shadow-[0px_24px_20px_-20px_#2d3748]">
                  <Image
                    src="/images/jona-schlegel.jpeg"
                    width={120}
                    height={120}
                    alt="Jona Schlegel"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8 text-center md:text-left">
                <h3 className="font-bold font-heading text-xl">
                  Jona Schlegel – Co-founder, Design & Web Development
                </h3>
                <p className="text-base mb-4 font-body">
                  Jona’s background in landscape archaeology includes graffiti, geophysical prospection, and web design. She wants to share practical solutions for real-world challenges.
                </p>
                <p className="text-base font-body">
                  Connect with her{" "}
                  <a href="https://www.jonaschlegel.com" className="underline">
                    here
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-20">
              <div className="order-1 md:order-2 md:w-1/4 mb-4 md:mb-0 flex justify-center md:justify-end">
                <div className="w-[140px] h-[140px] rounded-full overflow-hidden shadow-[0px_24px_20px_-20px_#2d3748]">
                  <Image
                    src="/images/alexandra-dolea.jpeg"
                    width={120}
                    height={120}
                    alt="Alexandra Dolea"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="order-2 md:order-1 md:w-3/4 md:pl-8 text-center md:text-right">
                <h3 className="font-bold font-heading text-xl">
                  Alexandra Dolea – Co-founder, Marketing & Events
                </h3>
                <p className="text-base mb-4 font-body">
                  With a strong background in research and community management, Alexandra focuses on bringing people together to tackle professional obstacles in archaeology.
                </p>
                <p className="text-base font-body">
                  Connect with her{" "}
                  <a
                    href="https://www.ilovearchaeology.com/"
                    className="underline"
                  >
                    here
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                <div className="w-[140px] h-[140px] rounded-full overflow-hidden shadow-[0px_24px_20px_-20px_#2d3748]">
                  <Image
                    src="/images/laura-coltofean.jpeg"
                    width={120}
                    height={120}
                    alt="Laura Coltofean"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8 text-center md:text-left">
                <h3 className="font-bold font-heading text-xl">
                  Laura Coltofean – Co-founder, Crowdfunding Campaigns
                </h3>
                <p className="text-base mb-4 font-body">
                  Laura has extensive experience in campaign building and knows how essential community support can be. She believes in forging a more stable, supportive future for archaeologists.
                </p>
                <p className="text-base font-body">
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
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-28">
              <h2 className="max-w-4xl mx-auto text-3xl font-bold mb-6 font-heading">
                Support the Journey.
              </h2>
              <p className="mb-4 font-body">
                PastForward takes time, careful planning, and a dedicated community. A Kickstarter campaign is coming soon, and early supporters will receive exclusive updates.
              </p>
              <p className="mb-4 font-body">
                By subscribing to our newsletter, you help shape the platform and stay informed on new developments.
              </p>
              <p className="mb-4 font-body">
                Thank you for being part of a movement that seeks lasting change in archaeology.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-indigo-900 p-1 rounded-lg text-white shadow-[0px_24px_20px_-20px_#2d3748]">
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
                <div className="ml-embedded" data-form="ispwCx"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

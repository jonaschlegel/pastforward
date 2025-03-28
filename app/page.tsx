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
            {/* Text Block – appears first on mobile */}
            <div className="order-1 md:order-2 md:w-2/3 md:pl-16 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 font-heading">
                Want to stay in the loop?
              </h2>
              <p className="mb-1 font-body text-base">
                If this sounds like something you've been looking for — join us early.
              </p>
              <p className="mb-4 font-body text-base">
                Help shape it. Stay informed.
              </p>
              <p className="font-body font-bold text-2xl text-base">Sign up for updates</p>
            </div>
            {/* MailerLite Embed – appears second on mobile */}
            <div className="order-2 md:order-1 md:w-1/3 md:pl-8">
              <div className="bg-indigo-900 p-1 rounded-lg text-white shadow-[0px_24px_20px_-20px_#2d3748]">
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
                  Jona Schlegel - co-founder, design &amp; web development
                </h3>
                <p className="text-base mb-4 font-body">
                  Jona is a landscape archaeologist with experience in graffiti and geophysical prospection, specialising in archaeological science communication and integrating illustration with web development.
                </p>
                <p className="text-base font-body">
                  Connect with her{" "}
                  <a href="https://www.jonaschlegel.com" className="underline">
                    here
                  </a>
                </p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              {/* For mobile, image on top */}
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
                  Alexandra Dolea - co-founder, marketing &amp; events
                </h3>
                <p className="text-base mb-4 font-body">
                  Alexandra is an archaeologist with a robust background in research and community management, focusing on connection, visibility, and clear communication.
                </p>
                <p className="text-base font-body">
                  Connect with her{" "}
                  <a href="https://www.ilovearchaeology.com/" className="underline">
                    here
                  </a>
                </p>
              </div>
            </div>
            {/* Team Member 3 */}
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
                  Laura Coltofean - co-founder, crowdfunding campaign builder (launching soon)
                </h3>
                <p className="text-base mb-4 font-body">
                  Laura is an archaeologist and seasoned campaign builder, organising and building campaigns to support communal projects.
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
                Support the journey.
              </h2>
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
            <div className="md:w-1/3">
              <div className="bg-indigo-900 p-1 rounded-lg text-white shadow-[0px_24px_20px_-20px_#2d3748]">
                <div>
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

    </div>
  );
}

import NewsletterTracker from '@/components/NewsletterTracker';
import { getExternalLinkText, getFeaturedNewsArticles } from '@/lib/news';
import { track } from '@/lib/tracking';
import { format } from 'date-fns';
import {
  BookOpen,
  ClipboardList,
  ExternalLink,
  Facebook,
  Instagram,
  Search,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Home - PastForward",
  description:
    "Discover innovative approaches to sustainable careers in archaeology.",
  openGraph: {
    title: "Home - PastForward",
    description:
      "Discover innovative approaches to sustainable careers in archaeology.",
    url: "https://pastforward.com",
    images: [
      {
        url: "https://pastforward.com/og-image-home.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - PastForward",
    description:
      "Discover innovative approaches to sustainable careers in archaeology.",
    images: ["https://pastforward.com/og-image-home.jpg"],
  },
};

export default async function Home() {
  const latestNews = await getFeaturedNewsArticles(3);

  const handleNewsClick = (title: string, slug: string) => {
    track.newsArticle(title, slug);
  };

  const handleExternalLinkClick = (url: string, linkText: string) => {
    track.externalLink(url, linkText);
  };

  const handleSurveyClick = () => {
    track.surveyClick();
  };

  const handleVideoPlay = () => {
    track.videoPlay();
  };

  const handleSocialClick = (platform: string, url: string) => {
    track.socialMedia(platform, url);
  };

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
              A new platform is coming. Built for archaeologists by
              archaeologists. For those of us who have faced struggles and want
              to change the status quo.
            </p>
            <p className="text-lg leading-relaxed mb-4 font-body">
              Archaeology isn't broken—but building a career in it can feel like
              pushing uphill. Moving from contract to contract, grant to grant,
              project to project. Adapting to different contexts, expectations,
              and ways of working. Whether you're freelancing, in academia, or
              in commercial work, the path can feel disconnected, unclear, and
              lonely.{" "}
            </p>
            <p className="text-lg leading-relaxed mb-14 font-body">
              Sign up below to learn more and help shape a future where
              archaeological work can be more sustainable and rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-heading">
                Latest News
              </h2>
              <p className="text-base mb-6 font-body">
                Stay updated with the latest developments from PastForwardHub as
                we build the future of archaeological careers.
              </p>
              <Link
                href="/news"
                className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-body font-medium transition-colors"
                onClick={() => track.navigate("news_all")}
              >
                View all news →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestNews.map((article) => (
                <div
                  key={article.slug}
                  className="bg-white rounded-lg shadow-[0px_24px_20px_-20px_#2d3748] p-6 hover:shadow-[0px_12px_24px_-8px_#2d3748] transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      {article.featured && (
                        <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-lg mb-2">
                          Featured
                        </span>
                      )}
                      <h3 className="text-lg font-bold font-heading text-gray-900">
                        {article.hasPage ? (
                          <Link
                            href={`/news/${article.slug}`}
                            className="hover:text-indigo-700 transition-colors"
                            onClick={() =>
                              handleNewsClick(article.title, article.slug)
                            }
                          >
                            {article.title}
                          </Link>
                        ) : (
                          <span>{article.title}</span>
                        )}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 font-body text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-end items-center">
                    {article.externalLink ? (
                      <a
                        href={article.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-body font-medium text-sm transition-colors"
                        onClick={() =>
                          handleExternalLinkClick(
                            article.externalLink!,
                            getExternalLinkText(article.externalLink!)
                          )
                        }
                      >
                        {getExternalLinkText(article.externalLink)}{" "}
                        <ExternalLink size={12} className="ml-1" />
                      </a>
                    ) : article.hasPage ? (
                      <Link
                        href={`/news/${article.slug}`}
                        className="text-indigo-700 hover:text-indigo-900 font-body font-medium text-sm transition-colors"
                        onClick={() =>
                          handleNewsClick(article.title, article.slug)
                        }
                      >
                        Read more →
                      </Link>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Survey Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row rounded-lg shadow-[0px_24px_20px_-20px_#2d3748] bg-white p-10">
            <div className="md:w-2/3 md:pr-10 text-left flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4 font-heading">
                Help Shape the Future of Archaeology
              </h2>
              <p className="text-lg mb-6 font-body">
                Your experience matters. Share your story and ideas to help us
                build a safer, more sustainable, and supportive platform for
                archaeologists everywhere.
              </p>

              <p className="text-base mb-4 font-body">
                Before we launch, we want to hear from you. We are running a
                short community survey to understand what archaeologists around
                the world really need in terms of career support. Your responses
                will directly shape the design and features of the platform.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center justify-center mt-10 md:mt-0">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeqUhDaUFCNyqxk7989TjE6g_PJ6XCHg2Z-UzTWbEF2s9xy3Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-100 rounded-lg font-bold py-4 px-8 rounded-lg text-xl mb-6 text-center"
                onClick={handleSurveyClick}
              >
                Take the Survey
              </a>
              <div className="text-sm font-body text-center">
                <p className="mb-2">Anonymous &middot; 3–5 min</p>
                <p className="mb-10">
                  Your input will directly shape the platform.
                </p>
                <p>
                  Thank you for helping us build a stronger and more connected
                  archaeological community.
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
            <div className="order-1 md:order-2 md:w-2/3 md:pl-16 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 font-heading">
                Join the Movement.
              </h2>
              <p className="mb-4 font-body text-base">
                {" "}
                If the challenges of short-term contracts and ambiguous career
                paths have been all too familiar, subscribe for updates. Your
                experiences help forge a future defined by clear opportunities,
                innovative tools, and an upcoming crowdfunding project.{" "}
              </p>
              <p className="font-body font-bold text-xl">
                Sign up for updates.
              </p>
            </div>
            <div className="order-2 md:order-1 md:w-1/3 md:pl-8">
              <div className="bg-indigo-900 p-1 rounded-lg text-white shadow-[0px_24px_20px_-20px_#2d3748]">
                <NewsletterTracker location="main_newsletter" />
                <Script
                  id="mailerlite-universal"
                  strategy="afterInteractive"
                  className="font-body"
                >
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
              Archaeology can be fulfilling, but many professionals deal with
              obstacles like unstable work, limited support, and missing
              networks. PastForward aims to address these hurdles and offer ways
              to build a more reliable career path.
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
                PastForward is still developing. This preview is an invitation
                to share your thoughts, not a finished product. We will offer
                updates and practical tools for archaeologists looking for more
                stability and collaboration.
              </p>
              <p className="mb-8 font-body">
                A short video below provides a first look at the platform’s
                direction. We welcome your ideas to make it even better.
              </p>
            </div>

            <div className="w-full rounded-lg overflow-hidden mb-10">
              <video
                controls
                className="w-full h-auto rounded-lg"
                poster="/images/video-poster.jpg"
                onPlay={handleVideoPlay}
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
                    <strong>Directory:</strong> Connect with peers based on
                    skills, interests, or experience.
                  </p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg flex">
                  <div className="mr-3 p-2 flex items-center justify-center">
                    <ClipboardList size={24} />
                  </div>
                  <p className="font-body">
                    <strong>Job Board:</strong> Explore freelance, academic, and
                    commercial opportunities.
                  </p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg flex">
                  <div className="mr-3 p-2 flex items-center justify-center">
                    <BookOpen size={24} />
                  </div>
                  <p className="font-body">
                    <strong>Resources:</strong> Access curated content, events,
                    and mentorship ideas.
                  </p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg flex">
                  <div className="mr-3 p-2 flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <p className="font-body">
                    <strong>Community Spaces:</strong> Join interactive forums
                    to share advice and build solidarity.
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
              Meet the Team.
            </h2>
            <p className="text-base mb-20 font-body text-center">
              This platform was formed by archaeologists, designers, and
              community organizers who have seen firsthand how challenging our
              field can be. We aim to create a more stable future for everyone
              in archaeology.
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
                  Jona is a landscape archaeologist with a research focus on
                  graffiti, prospection, and GIS. She is currently freelancing
                  in visual science communication.{" "}
                </p>
                <p className="text-base font-body">
                  Connect with her{" "}
                  <a
                    href="https://www.jonaschlegel.com"
                    className="underline"
                    onClick={() =>
                      handleExternalLinkClick(
                        "https://www.jonaschlegel.com",
                        "Jona Schlegel Portfolio"
                      )
                    }
                  >
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
                  After two decades in academia and fieldwork, Alexandra
                  transitioned from the trenches of archaeological digs to
                  supporting professionals facing career crossroads.{" "}
                </p>
                <p className="text-base font-body">
                  Connect with her{" "}
                  <a
                    href="https://www.ilovearchaeology.com/"
                    className="underline"
                    onClick={() =>
                      handleExternalLinkClick(
                        "https://www.ilovearchaeology.com/",
                        "Alexandra Dolea I Love Archaeology"
                      )
                    }
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
                  Laura has extensive experience in campaign building and knows
                  how essential community support can be. She believes in
                  forging a more stable, supportive future for archaeologists.
                </p>
                <p className="text-base font-body">
                  Connect with her{" "}
                  <a
                    href="https://lauracoltofean.com/"
                    className="underline"
                    onClick={() =>
                      handleExternalLinkClick(
                        "https://lauracoltofean.com/",
                        "Laura Coltofean Portfolio"
                      )
                    }
                  >
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
                PastForward takes time, careful planning, and a dedicated
                community. A Kickstarter campaign is coming soon, and early
                supporters will receive exclusive updates.
              </p>
              <p className="mb-4 font-body">
                By subscribing to our newsletter, you help shape the platform
                and stay informed on new developments.
              </p>
              <p className="mb-4 font-body">
                Thank you for being part of a movement that seeks lasting change
                in archaeology.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-indigo-900 p-1 rounded-lg text-white shadow-[0px_24px_20px_-20px_#2d3748]">
                <NewsletterTracker location="crowdfunding_newsletter" />
                <Script
                  id="mailerlite-universal-support"
                  strategy="afterInteractive"
                >
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

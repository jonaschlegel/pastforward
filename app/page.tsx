import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Search,
  ClipboardList,
  BookOpen,
  Users
} from "lucide-react"

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
              <div className="bg-teal-800 text-white p-4 rounded-lg text-center shadow-[0px_24px_20px_-20px_#2d3748] transition-transform duration-300 ease-in-out ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.02]">
                <p className="font-body">
                  You feel stuck between short-term gigs and long-term goals.
                </p>
              </div>
              <div className="bg-teal-800 text-white p-4 rounded-lg text-center shadow-[0px_24px_20px_-20px_#2d3748] transition-transform duration-300 ease-in-out ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.02]">
                <p className="font-body">
                  You want more clarity, but have simply nowhere to talk to.
                </p>
              </div>
             <div className="bg-teal-800 text-white p-4 rounded-lg text-center shadow-[0px_24px_20px_-20px_#2d3748] transition-transform duration-300 ease-in-out ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.02]">
                <p className="font-body">
                  You miss having a network of peers for learning and growth.
                </p>
              </div>
             <div className="bg-teal-800 text-white p-4 rounded-lg text-center shadow-[0px_24px_20px_-20px_#2d3748] transition-transform duration-300 ease-in-out ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.02]">
                <p className="font-body">
                  You are searching for a way to build a career that lasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="absolute"
        style={{
          left: "3px",
          top: "63px",
          background:
            "linear-gradient(90.54deg, #E8F1F7 0.47%, rgba(136, 141, 145, 0) 99.59%)"
        }}
      />
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Features with single image */}
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
                  That's why we're building <strong>PastForward</strong>:
                </p>
                <p className="mb-8 font-body">
                  A shared space for archaeologists to connect, get support, and
                  build careers with others who get it.
                </p>
                <p className="mb-2 font-body">
                  It's still early days. But we want to build this together.
                </p>
                <p className="mb-8 font-body">
                  With your input. At your pace.
                </p>
                <p className="mb-16 font-body">
                  No quick fixes. Just space to grow something better.
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
                    Resources, events, mentoring ideas, and maybe even some proper downtime
                  </p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg flex mb-6">
                  <div className="mr-3 rounded-lg p-2 flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <p className="font-body">
                    Community spaces to talk, share advice, and find solidarity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        id="newsletter"
        className="bg-gradient-to-b from-white to-gray-100 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 md:pl-8">
              <div className="bg-indigo-900 p-6 rounded-lg text-white shadow-[0px_24px_20px_-20px_#2d3748]">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 rounded border border-gray-300 text-black"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full p-2 rounded border border-gray-300 text-black"
                  />
                  <div className="flex justify-center mb-2 mt-6">
                    <button className="bg-white text-indigo-900 font-bold py-2 px-4 rounded-full hover:bg-gray-100">
                      Sign up
                    </button>
                  </div>
                  <div className="text-[0.5rem] mb-2">
                    By clicking the Send button, you allow us to store your email address and agree to receive communication from us. Review our privacy policy.
                  </div>
                </div>
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
                  Jona Schlegel - co-funder, design & web development
                </h3>
                <p className="text-sm mb-4 font-body">
                  Jona is a landscape archaeologist and worked on graffiti and geophysical prospection. She specialises in archaeological science communication, integrating illustration and web development.
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
                  Alexandra Dolea - co-funder, marketing & events
                </h3>
                <p className="text-sm mb-4 font-body text-right">
                  Alexandra is an archaeologist with a strong background in research and community management. She focuses on connection, visibility, and clear communication.
                </p>
                <p className="text-sm font-body text-right">
                  Connect with her{" "}
                  <a
                    href="https://www.ilovearchaeology.com/"
                    className="underline"
                  >
                    here
                  </a>
                </p>
              </div>
              <div className="md:w-1/4 mb-4 md:mb-0 flex justify-end  r-0">
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
                    alt="Laura Colledani"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="font-bold font-heading">
                  Laura Coltofean - co-funder, crowdfunding campaign builder (launching soon)
                </h3>
                <p className="text-sm mb-4 font-body">
                  Laura is an archaeologist and experienced campaign builder and organiser.
                  She will be hosting our upcoming Kickstarter, helping us
                  gather the support we need to build this platform together.
                </p>
                <p className="text-sm font-body">
                  Connect with her{" "}
                  <a
                    href="https://lauracoltofean.com/"
                    className="underline"
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
          <h2 className="max-w-4xl mx-auto text-3xl font-bold mb-6 font-heading">
            Support the journey.
          </h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <p className="mb-4 font-body">
                We are building this from the ground up—with care, time, and lots of late-night notes. So, to make this happen, we will be launching a Kickstarter campaign soon.
              </p>
              <p className="mb-4 font-body">
                If you believe in the idea of a shared space for archaeologists, your support—big or small—will help bring it to life.
              </p>
              <p className="mb-4 font-body">
                Sign up to the newsletter to be the first to hear when the campaign goes live and how you can get involved.
              </p>
            </div>
            <div className="md:w-1/3 md:pl-8">
              <div className="bg-indigo-900 p-6 rounded-lg text-white shadow-[0px_24px_20px_-20px_#2d3748]">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 rounded border border-gray-300 text-black"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full p-2 rounded border border-gray-300 text-black"
                  />
                  <div className="flex justify-center mb-2 mt-6">
                    <button className="bg-white text-indigo-900 font-bold py-2 px-4 rounded-full hover:bg-gray-100">
                      Sign up
                    </button>
                  </div>
                  <div className="text-[0.5rem] mb-2">
                    By clicking the Send button, you allow us to store your email address and agree to receive communication from us. Review our privacy policy.
                  </div>
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
  )
}


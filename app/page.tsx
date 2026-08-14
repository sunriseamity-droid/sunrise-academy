import Navbar from "./components/Navbar";

const services = [
  {
    icon: "🏫",
    title: "School Admissions",
    text: "Find the right school for your child with expert admission guidance and complete support.",
  },
  {
    icon: "🎓",
    title: "College Admissions",
    text: "Get personalized guidance for choosing and securing admission to leading colleges.",
  },
  {
    icon: "🏛️",
    title: "University Admissions",
    text: "Explore the right universities and get support throughout your admission journey.",
  },
  {
    icon: "💼",
    title: "Career Guidance",
    text: "Make confident education and career decisions with personalized counselling.",
  },
];

const stats = [
  ["5000+", "Students Guided"],
  ["200+", "Partner Institutions"],
  ["10+", "Years of Experience"],
  ["98%", "Success Rate"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061a3a]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:gap-12 md:py-28">
          <div>
            <span className="inline-block rounded-full border border-yellow-400 px-4 py-2 text-sm font-bold uppercase tracking-wide text-yellow-400">
              Admission Consultant & Responsibility
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Your Dream Admission Is{" "}
              <span className="text-yellow-400">Our Responsibility.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              We provide expert admission guidance for schools, colleges,
              universities and educational institutions. Let us help you
              build a successful future.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-yellow-400 px-7 py-4 font-bold text-[#061a3a] shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Get Admission Guidance →
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#061a3a]"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
              <span>✓ Experienced Counsellors</span>
              <span>✓ Personalised Guidance</span>
              <span>✓ End-to-End Support</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative hidden md:block">
            <div className="relative mx-auto h-[430px] max-w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900 to-blue-600 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(250,204,21,0.25),transparent_30%)]" />

              <div className="absolute left-10 top-10 rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                <div className="text-4xl">🎓</div>
                <p className="mt-2 font-bold text-white">Dream Big</p>
              </div>

              <div className="absolute bottom-12 left-12 right-12 rounded-2xl border border-white/20 bg-white/10 p-7 text-center backdrop-blur-md">
                <div className="text-6xl">🎓</div>
                <h2 className="mt-4 text-2xl font-extrabold text-white">
                  Dream • Learn • Succeed
                </h2>
                <p className="mt-2 text-slate-300">
                  Your future starts with the right guidance.
                </p>
              </div>

              <div className="absolute right-8 top-24 h-24 w-24 rounded-full bg-yellow-400/20" />
              <div className="absolute bottom-5 right-5 h-3 w-3 rounded-full bg-yellow-400" />
              <div className="absolute left-5 top-1/2 h-3 w-3 rounded-full bg-yellow-400" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-yellow-500">
              What We Offer
            </p>

            <h2 className="mt-2 text-4xl font-extrabold text-[#061a3a]">
              Our Services
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow-400" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl transition group-hover:bg-yellow-50">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#061a3a]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.text}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-block font-bold text-blue-700 hover:text-yellow-500"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-[#061a3a] md:grid-cols-4">
          {stats.map(([number, label]) => (
            <div
              key={label}
              className="border-b border-white/10 px-6 py-8 text-center last:border-0 md:border-b-0 md:border-r"
            >
              <div className="text-4xl font-extrabold text-yellow-400">
                {number}
              </div>
              <div className="mt-2 text-sm font-medium text-slate-300">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-yellow-500">
              Why Choose Us?
            </p>

            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-[#061a3a]">
              We Are Here to Help You Succeed
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              At Sunrise Academy, we believe every student deserves the right
              guidance. Our experienced consultants help students and parents
              make informed decisions about education and admissions.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Expert & Experienced Counsellors",
                "Personalised Admission Support",
                "Wide Network of Institutions",
                "End-to-End Admission Assistance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 font-bold text-[#061a3a]">
                    ✓
                  </span>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-lg bg-[#061a3a] px-7 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Talk to an Expert →
            </a>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-yellow-50 p-3">
              <div className="flex min-h-[360px] items-center justify-center rounded-2xl bg-[#061a3a] p-10 text-center">
                <div>
                  <div className="text-7xl">🏫</div>
                  <h3 className="mt-6 text-3xl font-extrabold text-white">
                    Your Future Matters
                  </h3>
                  <p className="mt-4 text-slate-300">
                    Making the admission journey simple, clear and successful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-yellow-500">
              Testimonials
            </p>
            <h2 className="mt-2 text-4xl font-extrabold text-[#061a3a]">
              What Our Students Say
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow-400" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              [
                "Sunrise Academy made my admission process simple and stress-free. Their guidance was excellent.",
                "Student",
              ],
              [
                "The team understood my requirements and helped me choose the right institution.",
                "Parent",
              ],
              [
                "Professional guidance and excellent support throughout the admission journey.",
                "Student",
              ],
            ].map(([quote, role]) => (
              <div
                key={quote}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="text-4xl text-yellow-400">“</div>
                <p className="mt-2 leading-7 text-slate-600">{quote}</p>
                <div className="mt-6 font-bold text-[#061a3a]">
                  Sunrise Academy {role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* GALLERY */}
<section id="gallery" className="bg-slate-50 px-6 py-20">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="font-bold uppercase tracking-widest text-yellow-500">
        Our Gallery
      </p>

      <h2 className="mt-3 text-4xl font-extrabold text-[#061a3a] md:text-5xl">
        Moments That Inspire
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-slate-600">
        Explore our campus visits, counselling sessions, educational events
        and student guidance activities.
      </p>
    </div>

    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Career Guidance",
          emoji: "🎓",
        },
        {
          title: "Admission Counselling",
          emoji: "📚",
        },
        {
          title: "Campus Visit",
          emoji: "🏫",
        },
        {
          title: "Student Support",
          emoji: "👨‍🎓",
        },
        {
          title: "Educational Events",
          emoji: "🏆",
        },
        {
          title: "Success Stories",
          emoji: "🌟",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group flex h-64 items-center justify-center rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="text-center">
            <div className="text-6xl">{item.emoji}</div>
            <h3 className="mt-5 text-xl font-bold text-[#061a3a]">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* CONTACT CTA */}{/* BOOKING SECTION */}
<section
  id="booking"
  className="bg-white px-6 py-20"
>
  <div className="mx-auto max-w-5xl text-center">

    <p className="font-bold uppercase tracking-widest text-yellow-500">
      Book Your Consultation
    </p>

    <h2 className="mt-3 text-4xl font-extrabold text-[#061a3a] md:text-5xl">
      Start Your Admission Journey
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
      Get personalised admission guidance from our experienced
      education consultants and take the next step toward your
      academic future.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">

      <a
        href="tel:9971478970"
        className="rounded-lg bg-yellow-400 px-8 py-4 font-bold text-[#061a3a] transition hover:bg-yellow-500"
      >
        📞 Book a Consultation
      </a>

      <a
        href="#contact"
        className="rounded-lg border-2 border-[#061a3a] px-8 py-4 font-bold text-[#061a3a] transition hover:bg-[#061a3a] hover:text-white"
      >
        Contact Us →
      </a>

    </div>

  </div>
</section>
{/* CONTACT */}
<section id="contact" className="bg-[#061a3a] px-6 py-20 text-white">
  <div className="mx-auto max-w-6xl text-center">

    <p className="font-bold uppercase tracking-widest text-yellow-400">
      Contact Us
    </p>

    <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
      Ready to Take the Next Step?
    </h2>

    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
      Talk to our admission experts today and get personalised guidance
      for your education journey.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-4">

      <a
        href="tel:9971478970"
        className="rounded-lg bg-yellow-400 px-7 py-4 font-bold text-[#061a3a] transition hover:bg-yellow-300"
      >
        📞 Call 9971478970
      </a>

      <a
  href="mailto:sunriseamity@gmail.com"
  className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#061a3a] bg-white px-7 py-4 text-center font-bold text-[#061a3a] transition hover:bg-[#061a3a] hover:text-white sm:w-auto"
>
  ✉️ Email Us
</a>

    </div>

  </div>
</section>
     
      <footer className="bg-[#031126] px-6 py-10 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-extrabold text-white">
              SUNRISE <span className="text-yellow-400">ACADEMY</span>
            </h3>
            <p className="mt-4 max-w-sm leading-7">
              Expert admission guidance for schools, colleges and universities.
              Your dream admission is our responsibility.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Quick Links</h4>
            <div className="mt-4 space-y-2">
              <a className="block hover:text-yellow-400" href="/">
                Home
              </a>
              <a className="block hover:text-yellow-400" href="#about">
                About Us
              </a>
              <a className="block hover:text-yellow-400" href="#services">
                Services
              </a>
              <a className="block hover:text-yellow-400" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">Contact Us</h4>
            <div className="mt-4 space-y-3">
              <p>📞 9971478970</p>
              <p>✉️ sunriseamity@gmail.com</p>
              <p>
                📍 F-163, F Block, Sector-2,
                <br />
                Greater Noida West
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm">
          © 2026 Sunrise Academy. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}{/* Why Choose Us */}
<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-yellow-500">
        Why Sunrise Academy
      </p>

      <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-5xl">
        Guidance You Can Trust
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        We simplify the admission journey and help students make confident
        decisions about their education and future.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-3">

      {/* Card 1 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
          🎓
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Expert Guidance
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Get professional guidance to choose the right school, college,
          university and course for your goals.
        </p>
      </div>

      {/* Card 2 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 text-2xl">
          📋
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Complete Admission Support
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          From selecting institutions to completing the admission process,
          we support you at every important step.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
          🤝
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Personalised Support
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Every student is different. We provide personalised assistance
          based on individual academic goals and requirements.
        </p>
      </div>

    </div>
      </div>
  </section>

  {/* Services Section */}
  <section id="services" className="bg-slate-50 py-20">


  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-yellow-500">
        Our Services
      </p>

      <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-5xl">
        Complete Admission Solutions
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        From choosing the right institution to completing your admission,
        Sunrise Academy is with you at every step.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Service 1 */}
      <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
          🎓
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          School Admissions
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Professional guidance for school admissions and selecting the
          right institution for your child.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block font-semibold text-blue-700 hover:text-yellow-500"
        >
          Learn More →
        </a>
      </div>

      {/* Service 2 */}
      <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 text-2xl">
          🏫
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          College Admissions
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Find suitable colleges and courses based on academic profile,
          interests and future goals.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block font-semibold text-blue-700 hover:text-yellow-500"
        >
          Learn More →
        </a>
      </div>

      {/* Service 3 */}
      <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
          🌐
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          University Guidance
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Get guidance for university selection, applications and
          admission planning.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block font-semibold text-blue-700 hover:text-yellow-500"
        >
          Learn More →
        </a>
      </div>

      {/* Service 4 */}
      <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-2xl">
          📚
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Course Selection
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Choose courses that match your interests, strengths and long-term
          career goals.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block font-semibold text-blue-700 hover:text-yellow-500"
        >
          Learn More →
        </a>
      </div>

      {/* Service 5 */}
      <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-2xl">
          📝
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Application Assistance
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Assistance with forms, documents and important admission
          requirements.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block font-semibold text-blue-700 hover:text-yellow-500"
        >
          Learn More →
        </a>
      </div>

      {/* Service 6 */}
      <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl">
          🤝
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          Personal Counselling
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          One-to-one counselling to help students and parents make
          confident education decisions.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block font-semibold text-blue-700 hover:text-yellow-500"
        >
          Learn More →
        </a>
      </div>

    </div>
  </div>
</section>
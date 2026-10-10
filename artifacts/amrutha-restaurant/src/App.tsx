import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Menu,
  X,
} from 'lucide-react';
import { menuSections, sampleMenuItems } from './data/menu';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Services', href: '#services' },
  { label: 'Demo ratings', href: '#reviews' },
  { label: 'Location', href: '#location' },
  { label: 'FAQs', href: '#faqs' },
];

const demoRatings = [
  { account: '@sample_guest_01', score: 5 },
  { account: '@diner_demo_14', score: 4 },
  { account: '@table_sample_27', score: 5 },
  { account: '@guest_demo_08', score: 4 },
] as const;

const orderUrl =
  'https://www.google.com/searchviewer/42?cvd=CLw_EicKJeICIjIgEhkiF9LX29IPEQoNL2cvMTFuamdyM2hoYxgBOgMI8A0%3D&hl=en-IN&gl=in&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=tactile&gei=1MLJas27JLOfhvcPoqiq2QM&ei=1MLJas27JLOfhvcPoqiq2QM&fo_s=OA&opi=79508299&orderType=1&ebb=1&cs=0&foub=mcpp';
const locationUrl =
  'https://www.google.com/maps/search/?api=1&query=18.0253693%2C79.5464297';
const zomatoMenuUrl =
  'https://www.zomato.com/warangal/amrutha-multi-cuisine-family-restaurant-hanamakonda/order?v=o2';

const questions = [
  {
    question: 'What kind of restaurant is Amrutha?',
    answer:
      'Amrutha is a multi-cuisine family restaurant: a place for different tastes to meet around one table.',
  },
  {
    question: 'Can I order for pickup or delivery?',
    answer:
      'Yes. Pickup and delivery are available. Order details and availability can be confirmed directly with the restaurant.',
  },
  {
    question: 'Where can I see the menu?',
    answer:
      'Browse the menu and listed prices on this page. For current availability and ordering fees, check the restaurant’s online ordering page.',
  },
  {
    question: 'Where can I find the restaurant, or when is it open?',
    answer:
      'Amrutha is at 2-12-412/1, Vidyapuranyapuri, near KU Second Gate, Hanamkonda, Warangal, Telangana 506001. Opening hours are not listed here.',
  },
  {
    question: 'Can you help with dietary requirements?',
    answer:
      'Please check ingredient and dietary details with the restaurant before ordering. Those details are not listed here.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-grain min-h-[100dvh] overflow-hidden bg-[#f5f2e9] text-[#29483b]">
      <div className="bg-[#29483b] px-5 py-2.5 text-center text-[11px] font-medium tracking-[.12em] text-[#f5f2e9] sm:text-xs">
        A multi-cuisine family restaurant · Pickup &amp; delivery available
      </div>
      <header className="sticky top-0 z-40 border-b border-[#29483b]/10 bg-[#f5f2e9]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <a href="#home" onClick={closeMenu} aria-label="Amrutha home" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#29483b]/25 font-serif text-lg transition-colors group-hover:bg-[#29483b] group-hover:text-[#f5f2e9]">A</span>
            <span className="leading-tight">
              <span className="block display-font text-[19px] font-semibold tracking-[-.04em]">Amrutha</span>
              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[.21em] text-[#29483b]/60">Multi Cuisine · Family Restaurant</span>
            </span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
            {links.map((link, index) => (
              <a key={link.href} href={link.href} className={`text-[13px] font-medium transition-colors hover:text-[#bb8750] ${index === 0 ? 'text-[#bb8750]' : 'text-[#29483b]/75'}`}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#services" className="hidden items-center gap-2 rounded-full bg-[#29483b] px-5 py-3 text-xs font-semibold text-[#f5f2e9] transition-all hover:bg-[#bb8750] hover:text-[#29483b] md:flex">
            Choose how to enjoy <ArrowUpRight size={15} />
          </a>
          <button type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-full border border-[#29483b]/20 md:hidden">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-[#29483b]/10 bg-[#f5f2e9] px-5 py-3 md:hidden">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="block border-b border-[#29483b]/10 py-3.5 text-sm font-medium last:border-0">{link.label}</a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative mx-auto grid min-h-[650px] max-w-[1500px] grid-cols-1 items-center gap-10 px-5 pb-14 pt-12 sm:px-8 md:min-h-[680px] md:grid-cols-[.9fr_1.1fr] md:gap-8 md:pb-20 md:pt-14 lg:px-14">
          <div className="relative z-10 max-w-[620px] md:py-8">
            <p className="eyebrow reveal mb-6 flex items-center gap-3 text-[#a8753f]"><span className="h-px w-9 bg-[#a8753f]" />Gather around good food</p>
            <h1 className="display-font reveal reveal-delay-1 text-[clamp(3.45rem,8.1vw,7.3rem)] font-medium leading-[.96] tracking-[-.065em]">
              One table.<br /><span className="italic text-[#a8753f]">Many</span> tastes.
            </h1>
            <p className="reveal reveal-delay-2 mt-7 max-w-[445px] text-base leading-7 text-[#29483b]/75 sm:text-lg sm:leading-8">
              Welcome to Amrutha Multi Cuisine Family Restaurant—a place to come together over the food everyone feels like choosing.
            </p>
            <div className="reveal reveal-delay-2 mt-9 flex flex-wrap items-center gap-4">
              <a href="#about" className="inline-flex items-center gap-3 rounded-full bg-[#29483b] px-6 py-4 text-sm font-semibold text-[#f5f2e9] transition-all hover:-translate-y-0.5 hover:bg-[#bb8750] hover:text-[#29483b]">
                Get to know Amrutha <ArrowUpRight size={16} />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-[#29483b] transition-colors hover:text-[#a8753f]">
                Pickup &amp; delivery <ArrowDown size={15} />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-3 border-t border-[#29483b]/15 pt-5 text-xs text-[#29483b]/65 sm:mt-16">
              <span className="flex -space-x-2" aria-hidden="true">
                <i className="h-7 w-7 rounded-full border-2 border-[#f5f2e9] bg-[#d7a66a]" />
                <i className="h-7 w-7 rounded-full border-2 border-[#f5f2e9] bg-[#b9c5a7]" />
                <i className="h-7 w-7 rounded-full border-2 border-[#f5f2e9] bg-[#d8c4a2]" />
              </span>
              <span>For your table, however you gather.</span>
            </div>
          </div>
          <div className="relative min-h-[360px] md:min-h-[570px]">
            <div className="absolute right-0 top-0 h-[90%] w-[91%] overflow-hidden rounded-t-[48%] rounded-b-[2rem] sm:w-[85%] md:h-[95%]">
              <img src="/amrutha-table.jpg" alt="An inviting shared table setting representing the spirit of a family meal" width="1200" height="900" fetchPriority="high" className="h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13271f]/35 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 flex max-w-[245px] items-center gap-4 rounded-2xl border border-[#29483b]/10 bg-[#fbf8f0] p-4 shadow-[0_20px_55px_-30px_rgba(32,51,38,.45)] sm:left-4 sm:p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#e9ddc5] text-[#29483b]">
                <span className="display-font text-[26px] italic">A</span>
              </span>
              <span><span className="eyebrow block text-[9px] text-[#a8753f]">Made for the table</span><span className="mt-1 block text-sm font-semibold">A multi-cuisine family restaurant</span></span>
            </div>
            <span className="absolute right-0 top-7 hidden rotate-90 text-[10px] font-semibold uppercase tracking-[.23em] text-[#29483b]/50 md:block">Amrutha · A place to gather</span>
          </div>
        </section>

        <div className="overflow-hidden border-y border-[#29483b]/10 bg-[#eae5d8] py-4">
          <div className="flex min-w-max animate-[marquee_32s_linear_infinite] items-center gap-8 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[.2em] text-[#29483b]/70">
            {Array.from({ length: 2 }, (_, group) => (
              <span key={group} className="flex items-center gap-8">
                <span>Many tastes, one table</span><span className="h-1 w-1 rounded-full bg-[#bd8852]" />
                <span>Time together, well spent</span><span className="h-1 w-1 rounded-full bg-[#bd8852]" />
                <span>Pickup &amp; delivery available</span><span className="h-1 w-1 rounded-full bg-[#bd8852]" />
                <span>Made for the whole table</span><span className="h-1 w-1 rounded-full bg-[#bd8852]" />
              </span>
            ))}
          </div>
        </div>

        <section id="about" className="relative mx-auto max-w-[1380px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14">
          <div className="grid items-center gap-14 md:grid-cols-[.82fr_1.18fr] lg:gap-24">
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="aspect-[.88] overflow-hidden rounded-[46%_46%_1.25rem_1.25rem] bg-[#d8d2c4]">
                <img src="/amrutha-table.jpg" alt="A close view of an inviting shared table setting" width="900" height="1100" loading="lazy" className="h-full w-full object-cover object-[65%_50%] saturate-[.84]" />
              </div>
              <div className="absolute -bottom-7 -right-2 max-w-[230px] rounded-2xl bg-[#d8a15f] px-6 py-5 text-[#29483b] sm:-right-6">
                <span className="eyebrow text-[9px]">The Amrutha feeling</span>
                <p className="display-font mt-2 text-xl leading-tight">A little something for everyone at the table.</p>
              </div>
              <span className="absolute -left-5 top-8 -z-10 h-32 w-32 rounded-full border border-[#bb8750]/50 sm:-left-10" />
            </div>
            <div className="max-w-[590px]">
              <p className="eyebrow mb-5 flex items-center gap-3 text-[#a8753f]"><span className="h-px w-8 bg-[#a8753f]" />A table for everyone</p>
              <h2 className="display-font text-4xl font-medium leading-[1.12] tracking-[-.045em] sm:text-6xl">Good company.<br /><span className="italic text-[#a8753f]">Room for every craving.</span></h2>
              <p className="mt-7 text-[15px] leading-7 text-[#29483b]/75 sm:text-base sm:leading-8">
                Choosing a place to eat should bring people together, not narrow the choice. Amrutha is a multi-cuisine family restaurant for shared meals, easy decisions and time around the table.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-[#29483b]/75 sm:text-base sm:leading-8">
                Enjoy a meal together, or make it one less thing to plan with pickup or delivery. However your day looks, there is more than one way to bring Amrutha to the table.
              </p>
              <a href="#services" className="group mt-8 inline-flex items-center gap-3 border-b border-[#29483b]/30 pb-2 text-sm font-semibold transition-colors hover:border-[#a8753f] hover:text-[#a8753f]">
                Find your way to the table <span className="transition-transform group-hover:translate-x-1"><ArrowUpRight size={16} /></span>
              </a>
            </div>
          </div>
        </section>

        <section id="menu" className="bg-[#eae5d8] px-5 py-24 sm:px-8 sm:py-32 lg:px-14">
          <div className="mx-auto max-w-[1240px]">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="eyebrow mb-5 flex items-center justify-center gap-3 text-[#a8753f]">
                <span className="h-px w-8 bg-[#a8753f]" />
                From our kitchen
                <span className="h-px w-8 bg-[#a8753f]" />
              </p>
              <h2 className="display-font text-4xl font-medium leading-[1.1] tracking-[-.045em] sm:text-6xl">
                The <span className="italic text-[#a8753f]">menu.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-[560px] text-sm leading-7 text-[#29483b]/70 sm:text-base">
                Browse Amrutha’s multi-cuisine selection, with every listed price shown in Indian rupees.
              </p>
            </div>

            <div className="relative mt-12 overflow-hidden border border-[#a8753f]/45 bg-[#fbf8f0] p-5 shadow-[0_24px_70px_-42px_rgba(41,72,59,.55)] sm:p-9 lg:p-12">
              <div className="pointer-events-none absolute inset-2 border border-[#a8753f]/25 sm:inset-4" aria-hidden="true" />
              <div className="relative">
                <header className="border-b border-[#a8753f]/35 pb-7 text-center sm:pb-9">
                  <p className="text-[9px] font-bold uppercase tracking-[.27em] text-[#a8753f] sm:text-[10px]">
                    Amrutha · Multi Cuisine · Family Restaurant
                  </p>
                  <h3 className="display-font mt-3 text-4xl font-medium tracking-[-.04em] text-[#29483b] sm:text-5xl">
                    Menu
                  </h3>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[.16em] text-[#29483b]/55">
                    Good food for the whole table
                  </p>
                  <span className="mx-auto mt-5 block h-px w-16 bg-[#a8753f]" />
                </header>

                <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
                  {menuSections.map((section) => {
                    const sectionId = `menu-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                    return (
                      <section key={section.title} aria-labelledby={sectionId}>
                        <h4 id={sectionId} className="display-font border-b border-[#a8753f]/35 pb-2 text-xl font-semibold text-[#29483b] sm:text-2xl">
                          {section.title}
                        </h4>
                        <ul className="mt-2">
                          {section.items.map(([name, price]) => (
                            <li key={name} className="flex items-baseline justify-between gap-4 border-b border-dotted border-[#29483b]/20 py-2.5 last:border-0">
                              <span className="min-w-0 text-[13px] leading-5 text-[#29483b]/85 sm:text-sm">{name}</span>
                              <span className="shrink-0 text-sm font-semibold tabular-nums text-[#29483b]">₹{price.toLocaleString('en-IN')}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    );
                  })}
                </div>

                <section aria-labelledby="sample-menu-heading" className="mt-10 border border-dashed border-[#a8753f]/50 bg-[#f4eddd] p-5 sm:p-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#a8753f]">Suggested additions</p>
                      <h4 id="sample-menu-heading" className="display-font mt-1 text-2xl text-[#29483b] sm:text-3xl">Popular dish ideas</h4>
                    </div>
                    <span className="inline-flex w-fit rounded-full border border-[#a8753f]/45 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.14em] text-[#8a5b2c]">
                      Sample prices · not verified
                    </span>
                  </div>
                  <p className="mt-3 max-w-[760px] text-xs leading-5 text-[#29483b]/65">
                    Added as requested. These dishes and randomly selected prices are illustrative only; they are not confirmed offerings or prices from the restaurant.
                  </p>
                  <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
                    {sampleMenuItems.map(([name, price]) => (
                      <li key={name} className="flex items-baseline justify-between gap-4 border-b border-dotted border-[#29483b]/20 py-2.5">
                        <span className="min-w-0 text-[13px] leading-5 text-[#29483b]/85 sm:text-sm">{name}</span>
                        <span className="shrink-0 text-sm font-semibold tabular-nums text-[#29483b]">₹{price.toLocaleString('en-IN')}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <footer className="mt-9 flex flex-col gap-3 border-t border-[#a8753f]/30 pt-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                  <p className="max-w-[650px] text-xs leading-5 text-[#29483b]/60">
                    Online menu prices are transcribed from the restaurant’s Zomato listing and may change. Check current availability and fees before ordering.
                  </p>
                  <a href={zomatoMenuUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 text-sm font-semibold text-[#29483b] transition-colors hover:text-[#a8753f]">
                    Check online menu <ArrowUpRight size={15} />
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#29483b] px-5 py-24 text-[#f5f2e9] sm:px-8 sm:py-32 lg:px-14">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div className="max-w-[680px]">
                <p className="eyebrow mb-5 flex items-center gap-3 text-[#d8a15f]"><span className="h-px w-8 bg-[#d8a15f]" />Ways to enjoy Amrutha</p>
                <h2 className="display-font text-4xl font-medium leading-[1.08] tracking-[-.045em] sm:text-6xl">The table can<br />come to <span className="italic text-[#d8a15f]">you.</span></h2>
              </div>
              <p className="max-w-[350px] pb-1 text-sm leading-7 text-[#f5f2e9]/70">Make the moment yours with pickup or delivery, both available from Amrutha.</p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              <article className="group relative flex min-h-[295px] flex-col justify-between overflow-hidden rounded-2xl border border-[#f5f2e9]/15 bg-[#f5f2e9]/[.05] p-7 transition-colors hover:bg-[#f5f2e9]/[.1] sm:p-9">
                <span className="eyebrow text-[#d8a15f]">01 / Many tastes</span>
                <div><h3 className="display-font text-3xl">A little of everything</h3><p className="mt-3 max-w-[255px] text-sm leading-6 text-[#f5f2e9]/70">A multi-cuisine restaurant, made for the whole family to choose together.</p></div>
                <span className="absolute right-8 top-8 grid h-14 w-14 place-items-center rounded-full border border-[#f5f2e9]/25 text-[#d8a15f] transition-transform group-hover:rotate-45"><ArrowUpRight size={20} /></span>
              </article>
              <article className="group relative flex min-h-[295px] flex-col justify-between overflow-hidden rounded-2xl bg-[#d8a15f] p-7 text-[#29483b] transition-transform hover:-translate-y-1 sm:p-9">
                <span className="eyebrow text-[#29483b]/65">02 / On your way</span>
                <div><h3 className="display-font text-3xl">Pickup</h3><p className="mt-3 max-w-[255px] text-sm leading-6 text-[#29483b]/75">Take the meal with you. Pickup is available from Amrutha.</p></div>
                <span className="absolute right-8 top-8 grid h-14 w-14 place-items-center rounded-full border border-[#29483b]/25 text-[#29483b] transition-transform group-hover:rotate-45"><ArrowUpRight size={20} /></span>
              </article>
              <article className="group relative flex min-h-[295px] flex-col justify-between overflow-hidden rounded-2xl border border-[#f5f2e9]/15 bg-[#f5f2e9]/[.05] p-7 transition-colors hover:bg-[#f5f2e9]/[.1] sm:p-9">
                <span className="eyebrow text-[#d8a15f]">03 / Stay in</span>
                <div><h3 className="display-font text-3xl">Delivery</h3><p className="mt-3 max-w-[255px] text-sm leading-6 text-[#f5f2e9]/70">Let the meal come to you. Delivery is available from Amrutha.</p></div>
                <span className="absolute right-8 top-8 grid h-14 w-14 place-items-center rounded-full border border-[#f5f2e9]/25 text-[#d8a15f] transition-transform group-hover:rotate-45"><ArrowUpRight size={20} /></span>
              </article>
            </div>
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-[#f5f2e9]/55">Check the online menu and fees before ordering.</p>
              <a href={orderUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#f5f2e9]/35 px-5 py-3 text-sm font-semibold text-[#f5f2e9] transition-colors hover:border-[#d8a15f] hover:bg-[#d8a15f] hover:text-[#29483b]">
                View menu &amp; order online <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="reviews"
          aria-labelledby="reviews-heading"
          className="bg-[#e9dfce] px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
        >
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="eyebrow mb-5 flex items-center gap-3 text-[#a8753f]">
                  <span className="h-px w-8 bg-[#a8753f]" />
                  Demo content · not real reviews
                </p>
                <h2
                  id="reviews-heading"
                  className="display-font text-4xl font-medium leading-[1.08] tracking-[-.045em] sm:text-6xl"
                >
                  Sample guest <span className="italic text-[#a8753f]">ratings.</span>
                </h2>
              </div>
              <p className="max-w-[390px] text-sm leading-7 text-[#29483b]/70">
                These fictional accounts and scores are placeholders for the design. They are not customer feedback or ratings for Amrutha.
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {demoRatings.map(({ account, score }) => (
                <li key={account}>
                  <article className="h-full rounded-2xl border border-[#29483b]/15 bg-[#f5f2e9] p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="eyebrow text-[10px] text-[#a8753f]">Fictional sample account</p>
                        <h3 className="mt-2 break-all text-sm font-semibold text-[#29483b]">{account}</h3>
                      </div>
                      <span className="rounded-full border border-[#a8753f]/40 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.12em] text-[#8a6136]">
                        Demo
                      </span>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <span aria-hidden="true" className="tracking-[.12em] text-[#a8753f]">
                        {'★'.repeat(score)}{'☆'.repeat(5 - score)}
                      </span>
                      <span className="text-sm font-semibold tabular-nums text-[#29483b]">{score}.0 / 5</span>
                    </div>
                    <p className="mt-4 text-xs leading-5 text-[#29483b]/60">
                      Sample score only · replace with a verified customer rating.
                    </p>
                  </article>
                </li>
              ))}
            </ul>

            <p role="note" className="mt-6 text-xs leading-5 text-[#29483b]/65">
              All names and ratings above are fictional examples, not genuine accounts or reviews.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e9dfce] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-[360px] w-[360px] rounded-full border border-[#29483b]/10 sm:h-[510px] sm:w-[510px]" />
          <div className="pointer-events-none absolute -right-6 -top-14 h-[260px] w-[260px] rounded-full border border-[#29483b]/10 sm:h-[410px] sm:w-[410px]" />
          <div className="relative mx-auto flex max-w-[1050px] flex-col items-start justify-between gap-9 md:flex-row md:items-center">
            <div className="max-w-[660px]">
              <p className="eyebrow mb-5 text-[#a8753f]">Whatever brings you together</p>
              <h2 className="display-font text-4xl font-medium leading-[1.1] tracking-[-.045em] sm:text-6xl">Make room for<br /><span className="italic text-[#a8753f]">one more at the table.</span></h2>
              <p className="mt-5 max-w-[465px] text-sm leading-7 text-[#29483b]/70">Bring the family, bring your appetite, bring your own idea of a good meal. Amrutha is here for the choosing-together part.</p>
            </div>
            <a href="#faqs" className="inline-flex shrink-0 items-center gap-3 rounded-full border border-[#29483b]/30 px-6 py-4 text-sm font-semibold transition-all hover:bg-[#29483b] hover:text-[#f5f2e9]">A few useful details <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section
          id="location"
          className="bg-[#eae5d8] px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
        >
          <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <div>
              <p className="eyebrow mb-5 flex items-center gap-3 text-[#a8753f]">
                <span className="h-px w-8 bg-[#a8753f]" />
                Find your way
              </p>
              <h2 className="display-font text-4xl font-medium leading-[1.1] tracking-[-.045em] sm:text-6xl">
                Find <span className="italic text-[#a8753f]">Amrutha.</span>
              </h2>
              <p className="mt-5 max-w-[390px] text-sm leading-7 text-[#29483b]/75">
                2-12-412/1, Vidyapuranyapuri, near KU Second Gate, Hanamkonda, Warangal, Telangana 506001.
              </p>
              <p className="mt-4 text-xs font-medium tabular-nums text-[#29483b]/55">
                18.0253693, 79.5464297
              </p>
              <a
                href={locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#29483b] px-6 py-4 text-sm font-semibold text-[#f5f2e9] transition-colors hover:bg-[#bb8750] hover:text-[#29483b]"
              >
                Open in Google Maps <MapPin size={16} />
              </a>
            </div>
            <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-[#29483b] p-7 text-[#f5f2e9] sm:min-h-[410px] sm:p-10">
              <span className="pointer-events-none absolute -right-20 -top-24 h-[340px] w-[340px] rounded-full border border-[#f5f2e9]/15" />
              <span className="pointer-events-none absolute -right-6 -top-10 h-[250px] w-[250px] rounded-full border border-[#f5f2e9]/10" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#f5f2e9]/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.17em] text-[#d8a15f]">
                  <MapPin size={14} /> Visit Amrutha
                </span>
                <h3 className="display-font mt-8 max-w-[400px] text-3xl leading-tight sm:text-4xl">
                  Amrutha Multi Cuisine Family Restaurant
                </h3>
                <p className="mt-4 max-w-[430px] text-sm leading-6 text-[#f5f2e9]/75">
                  2-12-412/1, Vidyapuranyapuri, near KU Second Gate, Hanamkonda, Warangal, Telangana 506001
                </p>
              </div>
              <div className="relative mt-10 border-t border-[#f5f2e9]/20 pt-5">
                <p className="text-xs text-[#f5f2e9]/60">Map coordinates</p>
                <p className="mt-2 font-mono text-sm tracking-wide">18.0253693, 79.5464297</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14">
          <div className="grid gap-12 md:grid-cols-[.78fr_1.22fr] md:gap-20">
            <div>
              <p className="eyebrow mb-5 flex items-center gap-3 text-[#a8753f]"><span className="h-px w-8 bg-[#a8753f]" />Before you visit</p>
              <h2 className="display-font text-4xl font-medium leading-[1.1] tracking-[-.045em] sm:text-6xl">Good to<br /><span className="italic text-[#a8753f]">know.</span></h2>
              <p className="mt-6 max-w-[330px] text-sm leading-7 text-[#29483b]/70">A few straightforward answers. If something is not listed, we have left it for the restaurant to confirm rather than guess.</p>
            </div>
            <div className="border-t border-[#29483b]/20">
              {questions.map((item, index) => (
                <article key={item.question} className="border-b border-[#29483b]/20">
                  <button type="button" aria-expanded={openQuestion === index} onClick={() => setOpenQuestion(openQuestion === index ? null : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6">
                    <span className="flex items-start gap-5 sm:gap-7"><span className="eyebrow pt-1 text-[10px] text-[#a8753f]">0{index + 1}</span><span className="text-[15px] font-semibold leading-6 sm:text-base">{item.question}</span></span>
                    <ChevronDown size={18} className={`shrink-0 text-[#a8753f] transition-transform ${openQuestion === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${openQuestion === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden"><p className="max-w-[590px] pb-6 pl-[3.25rem] text-sm leading-7 text-[#29483b]/70 sm:pl-[4.25rem]">{item.answer}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1e382d] px-5 pb-7 pt-12 text-[#f5f2e9] sm:px-8 sm:pt-16 lg:px-14">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col justify-between gap-10 border-b border-[#f5f2e9]/15 pb-10 md:flex-row md:items-end">
            <div>
              <a href="#home" className="display-font text-4xl tracking-[-.04em]">Amrutha<span className="text-[#d8a15f]">.</span></a>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[.18em] text-[#f5f2e9]/55">Multi Cuisine Family Restaurant</p>
            </div>
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#f5f2e9]/75">
              {links.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-[#d8a15f]">{link.label}</a>)}
            </nav>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-5 text-[11px] text-[#f5f2e9]/50 sm:flex-row">
            <span>Amrutha Multi Cuisine Family Restaurant</span>
            <span>Pickup and delivery available</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

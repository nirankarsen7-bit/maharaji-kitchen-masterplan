import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroVideo from "@/assets/hero-cooking.mp4.asset.json";
import dishThali from "@/assets/dish-thali.jpg";
import dishButter from "@/assets/dish-butter-chicken.jpg";
import floatingSpices from "@/assets/floating-spices.jpg";
import interior from "@/assets/interior.jpg";
import aboutTandoor from "@/assets/about-tandoor.jpg";
import eventBirthday from "@/assets/event-birthday.jpg";
import eventAnniversary from "@/assets/event-anniversary.jpg";
import eventNaming from "@/assets/event-naming.jpg";
import eventEngagement from "@/assets/event-engagement.jpg";
import eventDiwali from "@/assets/event-diwali.jpg";
import eventDurga from "@/assets/event-durga.jpg";
import eventNewYear from "@/assets/event-newyear.jpg";
import eventValentine from "@/assets/event-valentine.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

import { Logo } from "@/components/site/Logo";
import { CouponCountdown } from "@/components/site/CouponCountdown";
import { wa, MESSAGES } from "@/lib/whatsapp";
import {
  Sparkles, Crown, Utensils, Heart, Cake, Gift, Flame, Star,
  CalendarDays, Users, MessageCircle, MapPin, Phone, Clock,
  ChevronRight, Award, Leaf, Quote, Instagram, Facebook, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maharaji Kitchen — A Royal Family Restaurant in Nagrakata, North Bengal" },
      { name: "description", content: "Experience the art of fine dining at Maharaji Kitchen — premium veg & non-veg cuisine, signature event packages, and intimate celebrations in Nagrakata, West Bengal." },
      { property: "og:title", content: "Maharaji Kitchen — The Art of Fine Dining" },
      { property: "og:description", content: "Royal vegetarian & non-vegetarian feasts, signature event packages, and intimate celebrations in the heart of North Bengal." },
    ],
  }),
  component: HomePage,
});

const familyEvents = [
  { name: "Birthday Party", icon: Cake, img: eventBirthday, blurb: "Cinematic candle-lit celebrations crafted around the moment you blow the candle." },
  { name: "Anniversary Celebration", icon: Heart, img: eventAnniversary, blurb: "Rose-petal tablescapes, private corners, and a menu that tastes like your story." },
  { name: "Naming Ceremony", icon: Sparkles, img: eventNaming, blurb: "Sacred rituals, marigold mandap, and a feast that blesses the newest name in the family." },
  { name: "Retirement Party", icon: Crown, img: aboutTandoor, blurb: "Honour a lifetime of service with a regal feast and quiet, elegant tributes." },
  { name: "Engagement Ceremony", icon: Gift, img: eventEngagement, blurb: "Royal red-and-gold drapes, ring rituals, and a multi-course banquet for two families." },
];

const seasonalEvents = [
  { name: "New Year Party", icon: Sparkles, img: eventNewYear, blurb: "Champagne towers, gold confetti, and a midnight feast worthy of new beginnings." },
  { name: "Valentine's Dinner", icon: Heart, img: eventValentine, blurb: "An intimate seven-course dinner designed for two — sealed with a private dessert." },
  { name: "Diwali Celebration", icon: Flame, img: eventDiwali, blurb: "Diyas, mithai, and a royal thali that turns the festival of lights into a feast of flavours." },
  { name: "Durga Puja Feast", icon: Crown, img: eventDurga, blurb: "Traditional Bengali bhog elevated to a fine-dining masterpiece for Maa Durga's homecoming." },
  { name: "Holi Special", icon: Gift, img: eventNaming, blurb: "A colour-soaked feast with seasonal cocktails and a Holi platter for every table." },
  { name: "Christmas Eve", icon: Star, img: eventNewYear, blurb: "Carols, candles, and a slow-roasted Christmas spread served with North Bengal warmth." },
];

const whyUs = [
  { icon: Crown, title: "Royal Hospitality", body: "Trained stewards, gold-rim service, and a welcome that treats every guest as family." },
  { icon: Leaf, title: "Garden-Fresh Sourcing", body: "Daily-sourced North Bengal produce, tea-garden herbs, and stone-ground masalas." },
  { icon: Award, title: "Award-Winning Kitchen", body: "Veg & non-veg signatures perfected over a decade of feeding Nagrakata's celebrations." },
  { icon: Utensils, title: "Event Mastery", body: "From a ten-guest anniversary to a three-hundred-guest banquet — flawless, every time." },
];

const testimonials = [
  { name: "Riya Sharma", role: "Anniversary Guest", text: "The candle-lit corner, the rose petals, the slow-roasted lamb — Maharaji turned our 5th anniversary into a memory we will never forget.", rating: 5 },
  { name: "Anirban Das", role: "Father of the Bride", text: "We hosted 220 guests for our engagement. Not a single complaint, not a single late plate. Royal, in every sense of the word.", rating: 5 },
  { name: "Pradip Roy", role: "Birthday Host", text: "My daughter's 18th birthday felt like a Bollywood premiere. The team's attention to detail is unreal — and the food, simply legendary.", rating: 5 },
];

const faqs = [
  { q: "Where is Maharaji Kitchen located?", a: "We are at Sukhani Basti, NH31C, Nagrakata, West Bengal — easily reachable from Malbazar, Chalsa, and the Dooars tea-garden belt." },
  { q: "Do you offer both veg and non-veg menus?", a: "Yes. Our kitchen runs separate veg and non-veg sections so every guest is served with care, authenticity, and respect for tradition." },
  { q: "How do I book a table or an event?", a: "Tap any 'Reserve' button on this page. You will be connected on WhatsApp instantly and our reservations desk will confirm within minutes." },
  { q: "How does the discount coupon work?", a: "Claim your coupon today on WhatsApp — it stays valid for 7 days and can be redeemed for any dine-in, table reservation, or event package." },
  { q: "Do you handle large events and outdoor catering?", a: "Absolutely. We have hosted weddings, naming ceremonies, and corporate celebrations across the Dooars region. Tell us your vision — we will craft it." },
];

function HomePage() {
  return (
    <main className="relative overflow-x-clip text-foreground">
      <Header />
      <Hero />
      <CouponBanner />
      <Marquee />
      <WhyUs />
      <SignatureDishes />
      <EventPackages />
      <CustomBuilder />
      <Reservation />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Experience", href: "#why" },
    { label: "Events", href: "#events" },
    { label: "Reserve", href: "#reserve" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full border border-gold/15 px-4 sm:px-6 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elegant" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-3 group">
            <Logo size={scrolled ? 38 : 44} />
            <div className="hidden sm:block leading-tight">
              <div className="font-serif text-lg text-gradient-gold">Maharaji Kitchen</div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-muted-foreground">A Family Restaurant</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-sm font-medium text-foreground/85 hover:text-gold transition-colors py-2 group"
              >
                {n.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a href={wa(MESSAGES.reserveTable())} target="_blank" rel="noopener noreferrer" className="btn-royal !py-2.5 !px-4 sm:!px-5 text-xs">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Reserve Now</span>
            <span className="sm:hidden">Book</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo.url}
        autoPlay
        muted
        loop
        playsInline
        poster={interior}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/65 to-ink" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-ember)" }} />
      <div className="absolute inset-0 grain" />

      {/* Floating decorative dishes */}
      <img
        src={dishButter}
        alt=""
        aria-hidden
        className="hidden md:block absolute -left-10 top-1/3 w-48 lg:w-64 rounded-full opacity-90 animate-float-slow shadow-crimson"
        style={{ filter: "drop-shadow(0 30px 60px oklch(0.62 0.24 28 / 0.5))" }}
      />
      <img
        src={dishThali}
        alt=""
        aria-hidden
        className="hidden md:block absolute -right-16 bottom-24 w-56 lg:w-80 rounded-full opacity-80 animate-float-mid"
        style={{ filter: "drop-shadow(0 30px 60px oklch(0 0 0 / 0.6))" }}
      />
      <img
        src={floatingSpices}
        alt=""
        aria-hidden
        className="absolute right-4 top-24 w-28 sm:w-40 opacity-50 mix-blend-screen animate-float-mid"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center pt-24">
        <div className="flex justify-center mb-6 animate-rise">
          <Logo size={92} />
        </div>
        <div className="eyebrow justify-center mb-6 animate-rise" style={{ animationDelay: "0.1s" }}>
          Sukhani Basti · Nagrakata · West Bengal
        </div>
        <h1
          className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight animate-rise"
          style={{ animationDelay: "0.15s" }}
        >
          The <em className="font-display italic font-light text-gradient-gold">Art</em> of
          <br />
          Fine Dining
        </h1>
        <p
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed animate-rise"
          style={{ animationDelay: "0.25s" }}
        >
          A royal table set in the heart of North Bengal — where every spice tells a story,
          every plate is a celebration, and every guest is treated like family.
        </p>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-rise"
          style={{ animationDelay: "0.35s" }}
        >
          <a href={wa(MESSAGES.reserveTable())} target="_blank" rel="noopener noreferrer" className="btn-royal">
            <Crown className="w-4 h-4" /> Reserve a Table
          </a>
          <a href="#events" className="btn-ghost-gold">
            Explore Packages <ChevronRight className="w-4 h-4" />
          </a>
          <a href={wa(MESSAGES.generalInquiry())} target="_blank" rel="noopener noreferrer" className="btn-crimson">
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>

        {/* Trust strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs uppercase tracking-[0.28em] text-muted-foreground animate-rise" style={{ animationDelay: "0.5s" }}>
          <span className="flex items-center gap-2"><Star className="w-3.5 h-3.5 text-gold fill-gold" /> 4.9 · 1,200+ Guests</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span className="flex items-center gap-2"><Leaf className="w-3.5 h-3.5 text-gold" /> Veg & Non-Veg</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span className="flex items-center gap-2"><Award className="w-3.5 h-3.5 text-gold" /> A Family Restaurant</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold/70">
        <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

/* ---------------- COUPON BANNER ---------------- */
function CouponBanner() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, oklch(0.52 0.21 25 / 0.25), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-5xl">
        <div className="relative premium-card grain p-1.5 rounded-[2rem] animate-scale-fade">
          <div
            className="relative rounded-[1.7rem] overflow-hidden"
            style={{ background: "linear-gradient(160deg, oklch(0.22 0.05 25 / 0.9), oklch(0.16 0.04 25 / 0.95))" }}
          >
            {/* Ornamental corners */}
            <CornerOrnament className="top-4 left-4" />
            <CornerOrnament className="top-4 right-4 scale-x-[-1]" />
            <CornerOrnament className="bottom-4 left-4 scale-y-[-1]" />
            <CornerOrnament className="bottom-4 right-4 scale-x-[-1] scale-y-[-1]" />

            <div className="relative px-6 sm:px-10 py-12 sm:py-16 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.32em] text-gold">
                <Flame className="w-3.5 h-3.5" /> Limited Time Offer
              </div>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl">
                Get Your <span className="text-gradient-gold">Discount Coupon</span> Now
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
                Claim your exclusive Maharaji Kitchen coupon today — use it whenever you wish. <br className="hidden sm:block" />
                Valid for dine-in, table reservations, and every event package on our menu.
              </p>

              <div className="my-9">
                <CouponCountdown />
              </div>

              <a href={wa(MESSAGES.todayOffer())} target="_blank" rel="noopener noreferrer" className="btn-royal text-base !px-7 !py-4">
                <Gift className="w-5 h-5" /> Get Your Discount Coupon
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="mt-5 text-xs text-muted-foreground/80 tracking-wider">
                Claim today · Redeem anytime within 7 days · No conditions, only royalty.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      width="56" height="56" viewBox="0 0 56 56" fill="none"
      className={`absolute text-gold/70 ${className}`} aria-hidden
    >
      <path d="M2 2 L2 22 M2 2 L22 2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="2" cy="2" r="2" fill="currentColor" />
      <path d="M10 10 Q18 6 22 14" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
    </svg>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["Royal Hospitality", "Veg & Non-Veg", "Fine Dining", "Event Mastery", "North Bengal Heritage", "Cinematic Celebrations"];
  return (
    <div className="border-y border-gold/15 bg-ink/40 py-5 overflow-hidden">
      <div className="flex animate-[spin-slow_unset] gap-12 whitespace-nowrap" style={{ animation: "marquee 40s linear infinite" }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display italic text-xl sm:text-2xl text-gold/70">
            {t}
            <Sparkles className="w-4 h-4" />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow justify-center mb-5">Why Maharaji Kitchen</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
            A restaurant that feels <em className="font-display italic text-gradient-gold">like home</em> — served like royalty.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Born in the tea-garden country of Nagrakata, Maharaji Kitchen marries North Bengal warmth
            with fine-dining precision. Every plate is a quiet ceremony.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((w, i) => (
            <div key={w.title} className="premium-card grain p-7 animate-rise" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                style={{ background: "linear-gradient(135deg, oklch(0.79 0.14 85 / 0.18), oklch(0.52 0.21 25 / 0.2))" }}
              >
                <w.icon className="w-7 h-7 text-gold" strokeWidth={1.4} />
              </div>
              <h3 className="font-serif text-xl mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SIGNATURE DISHES (about block) ---------------- */
function SignatureDishes() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden premium-card">
            <img src={aboutTandoor} alt="Tandoor flames" width={1280} height={896} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          </div>
          <img
            src={dishButter}
            alt="Butter chicken"
            width={1024}
            height={1024}
            loading="lazy"
            className="hidden md:block absolute -bottom-10 -right-8 w-56 rounded-full premium-card animate-float-mid"
          />
          <div className="hidden md:block absolute -top-6 -left-6 glass-strong rounded-2xl px-5 py-4 shadow-gold animate-float-slow">
            <div className="text-3xl font-serif text-gradient-gold leading-none">12+</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mt-1">Years of Royal Service</div>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-5">Our Story</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Royal recipes,
            <br />
            <em className="font-display italic text-gradient-gold">North Bengal soul.</em>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From the slow-burning tandoor at sunrise to the final flicker of candlelight at dinner,
            Maharaji Kitchen is built around one quiet promise — that every guest leaves with a story.
            We hand-select tea-garden herbs, stone-grind every masala, and plate every dish as if a maharaja were watching.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { n: "350+", l: "Events Hosted" },
              { n: "1,200+", l: "Happy Families" },
              { n: "60+", l: "Signature Dishes" },
              { n: "4.9★", l: "Guest Rating" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5">
                <div className="font-serif text-3xl text-gradient-gold">{s.n}</div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={wa(MESSAGES.reserveTable())} target="_blank" rel="noopener noreferrer" className="btn-royal">
              <Crown className="w-4 h-4" /> Reserve Your Table
            </a>
            <a href={wa(MESSAGES.todayOffer())} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
              <Gift className="w-4 h-4" /> Today's Offers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EVENT PACKAGES ---------------- */
function EventPackages() {
  const [tab, setTab] = useState<"family" | "seasonal">("family");
  const list = tab === "family" ? familyEvents : seasonalEvents;
  return (
    <section id="events" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="eyebrow justify-center mb-5">Signature Event Packages</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
            Celebrations, <em className="font-display italic text-gradient-gold">crafted royally.</em>
          </h2>
          <p className="mt-5 text-muted-foreground">
            From the first candle to the final toast — every detail is staged, lit, and plated by hand.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="glass rounded-full p-1.5 flex">
            {([
              ["family", "Family & Social"],
              ["seasonal", "Seasonal & Festival"],
            ] as const).map(([k, l]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`relative px-5 sm:px-7 py-2.5 text-xs sm:text-sm uppercase tracking-[0.2em] rounded-full transition-all duration-500 ${
                  tab === k ? "text-ink" : "text-muted-foreground hover:text-gold"
                }`}
              >
                {tab === k && (
                  <span className="absolute inset-0 rounded-full gradient-gold" aria-hidden />
                )}
                <span className="relative">{l}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((e, i) => (
            <article key={e.name} className="premium-card grain animate-rise" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={e.img} alt={e.name} width={1280} height={896} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-gold">
                  <Flame className="w-3 h-3" /> Coupon Eligible
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl glass-strong">
                    <e.icon className="w-5 h-5 text-gold" strokeWidth={1.4} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">{e.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[3.5rem]">{e.blurb}</p>
                <div className="gold-divider my-5 opacity-40" />
                <div className="flex flex-wrap gap-2">
                  <a href={wa(MESSAGES.eventDiscount())} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold !text-[11px] !px-4 !py-2">
                    <Gift className="w-3.5 h-3.5" /> Get Coupon
                  </a>
                  <a href={wa(MESSAGES.reservePackage(e.name))} target="_blank" rel="noopener noreferrer" className="btn-royal !text-[11px] !px-4 !py-2">
                    Reserve <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CUSTOM PACKAGE BUILDER ---------------- */
function CustomBuilder() {
  const [guests, setGuests] = useState(50);
  const [eventType, setEventType] = useState("Birthday Party");
  const [menu, setMenu] = useState("Veg & Non-Veg");
  const [decor, setDecor] = useState("Royal Gold");

  const message =
    `Hello Maharaji Kitchen,\n\nI'd like to build a custom event package:\n` +
    `• Event: ${eventType}\n• Guests: ${guests}\n• Menu: ${menu}\n• Decor: ${decor}\n\n` +
    `Please share availability, package details, and the discount coupon.`;

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="eyebrow mb-5">Bespoke Builder</div>
            <h2 className="font-serif text-4xl sm:text-5xl">
              Design your <em className="font-display italic text-gradient-gold">own</em> royal evening.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Tell us your dream — we'll build the menu, the decor, and the magic around it.
              Every custom package qualifies for today's exclusive coupon.
            </p>
            <div className="hidden lg:block mt-8">
              <img src={floatingSpices} alt="" aria-hidden width={1280} height={896} loading="lazy" className="w-full rounded-2xl opacity-80 mix-blend-screen" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="premium-card grain p-6 sm:p-8">
              <div className="space-y-6">
                <Field label="Event Type">
                  <SelectInput value={eventType} onChange={setEventType} options={["Birthday Party", "Anniversary", "Naming Ceremony", "Engagement", "Festival Feast", "Corporate Dinner"]} />
                </Field>
                <Field label={`Guest Count · ${guests}`}>
                  <input
                    type="range" min={10} max={300} step={5} value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full accent-[var(--gold)]"
                  />
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-2">
                    <span>10</span><span>150</span><span>300+</span>
                  </div>
                </Field>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Menu Preference">
                    <SelectInput value={menu} onChange={setMenu} options={["Pure Veg", "Non-Veg", "Veg & Non-Veg", "Bengali Traditional"]} />
                  </Field>
                  <Field label="Decoration">
                    <SelectInput value={decor} onChange={setDecor} options={["Royal Gold", "Crimson Romance", "Floral Marigold", "Minimal Elegance"]} />
                  </Field>
                </div>

                <div className="rounded-2xl border border-gold/20 bg-gold/5 p-5">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-2">Live Preview</div>
                  <div className="font-serif text-lg">
                    {eventType} for {guests} guests — {menu}, styled in {decor}.
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={wa(message)} target="_blank" rel="noopener noreferrer" className="btn-royal">
                    <MessageCircle className="w-4 h-4" /> Send on WhatsApp
                  </a>
                  <a href={wa(MESSAGES.eventDiscount())} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
                    <Gift className="w-4 h-4" /> Ask for Event Discount
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.28em] text-gold mb-2.5">{label}</span>
      {children}
    </label>
  );
}
function SelectInput({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl bg-card/60 border border-gold/20 px-4 py-3 text-sm focus:outline-none focus:border-gold/60 transition"
    >
      {options.map((o) => <option key={o} value={o} className="bg-card">{o}</option>)}
    </select>
  );
}

/* ---------------- RESERVATION ---------------- */
function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:30");
  const [guests, setGuests] = useState(2);
  const [note, setNote] = useState("");

  const message =
    `Hello Maharaji Kitchen,\n\nI would like to reserve a table:\n` +
    `• Date: ${date || "(please confirm)"}\n• Time: ${time}\n• Guests: ${guests}\n` +
    (note ? `• Note: ${note}\n` : "") +
    `\nPlease share booking details and availability.`;

  return (
    <section id="reserve" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, oklch(0.52 0.21 25 / 0.15), transparent 70%)" }} />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="relative rounded-[2rem] overflow-hidden premium-card min-h-[420px]">
            <img src={interior} alt="Restaurant interior" width={1536} height={864} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="eyebrow mb-3">Reserve Your Table</div>
              <h2 className="font-serif text-4xl sm:text-5xl">
                A seat at the <em className="font-display italic text-gradient-gold">royal table</em> awaits.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Tell us when — we will set the candles, dim the lights, and have your favourite table ready.
              </p>
            </div>
          </div>

          <div className="premium-card grain p-6 sm:p-8">
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Date">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl bg-card/60 border border-gold/20 px-4 py-3 text-sm focus:outline-none focus:border-gold/60"
                  />
                </Field>
                <Field label="Time">
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-xl bg-card/60 border border-gold/20 px-4 py-3 text-sm focus:outline-none focus:border-gold/60"
                  />
                </Field>
              </div>
              <Field label={`Guests · ${guests}`}>
                <div className="flex items-center gap-3">
                  <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 rounded-full glass border border-gold/30 hover:bg-gold hover:text-ink transition">−</button>
                  <div className="flex-1 text-center font-serif text-2xl text-gradient-gold">{guests}</div>
                  <button onClick={() => setGuests(Math.min(30, guests + 1))} className="w-10 h-10 rounded-full glass border border-gold/30 hover:bg-gold hover:text-ink transition">+</button>
                </div>
              </Field>
              <Field label="Special Request">
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  placeholder="Anniversary cake, window seat, allergies…"
                  className="w-full rounded-xl bg-card/60 border border-gold/20 px-4 py-3 text-sm focus:outline-none focus:border-gold/60 resize-none"
                />
              </Field>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={wa(message)} target="_blank" rel="noopener noreferrer" className="btn-royal">
                  <CalendarDays className="w-4 h-4" /> Confirm on WhatsApp
                </a>
                <a href={wa(MESSAGES.todayOffer())} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
                  <Gift className="w-4 h-4" /> Get Today's Coupon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="eyebrow justify-center mb-5">Guest Stories</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
            Words from our <em className="font-display italic text-gradient-gold">family.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="premium-card grain p-7 animate-rise" style={{ animationDelay: `${i * 0.08}s` }}>
              <Quote className="w-8 h-8 text-gold/60" />
              <blockquote className="mt-4 font-serif text-lg leading-relaxed text-foreground/90">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-1 mt-5">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <figcaption className="mt-4 pt-4 border-t border-gold/15">
                <div className="font-medium">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const imgs = [
    { src: gallery1, h: "row-span-2", a: "Chef plating signature dish" },
    { src: dishThali, h: "", a: "Royal North Bengal thali" },
    { src: eventDiwali, h: "", a: "Diwali celebration table" },
    { src: gallery3, h: "row-span-2", a: "Tandoori platter" },
    { src: gallery2, h: "", a: "Indian mithai assortment" },
    { src: eventAnniversary, h: "", a: "Anniversary dinner setup" },
  ];
  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow mb-5">Gallery</div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl max-w-2xl">
              A feast for the <em className="font-display italic text-gradient-gold">eyes</em>, first.
            </h2>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-gold self-start lg:self-auto">
            <Instagram className="w-4 h-4" /> Follow on Instagram
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 auto-rows-[200px] sm:auto-rows-[260px]">
          {imgs.map((im, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl premium-card group ${im.h}`}>
              <img src={im.src} alt={im.a} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="eyebrow justify-center mb-5">Questions, Answered</div>
          <h2 className="font-serif text-4xl sm:text-5xl">Before you <em className="font-display italic text-gradient-gold">reserve.</em></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={`premium-card overflow-hidden transition-all ${open === i ? "shadow-gold" : ""}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-6 text-left p-6">
                <span className="font-serif text-lg">{f.q}</span>
                <span className={`w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-10 px-4 sm:px-6 border-t border-gold/15 bg-ink">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Logo size={52} />
            <div className="leading-tight">
              <div className="font-serif text-xl text-gradient-gold">Maharaji Kitchen</div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-muted-foreground">A Family Restaurant</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Veg & Non-Veg fine dining, signature event packages, and a royal welcome — all under one roof in Nagrakata.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-ink transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-ink transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={wa(MESSAGES.generalInquiry())} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-ink transition">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-gold mb-5">Visit Us</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" /> Sukhani Basti, NH31C, Nagrakata, West Bengal</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" /> +91 70764 30467</li>
            <li className="flex gap-3"><Clock className="w-4 h-4 mt-0.5 text-gold shrink-0" /> Daily · 11:00 AM — 11:00 PM</li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-gold mb-5">Explore</div>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#why" className="hover:text-gold transition">Why Maharaji</a></li>
            <li><a href="#events" className="hover:text-gold transition">Event Packages</a></li>
            <li><a href="#reserve" className="hover:text-gold transition">Reserve a Table</a></li>
            <li><a href="#gallery" className="hover:text-gold transition">Gallery</a></li>
            <li><a href={wa(MESSAGES.todayOffer())} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">Today's Coupon</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-gold mb-5">Find Us</div>
          <div className="rounded-2xl overflow-hidden border border-gold/20 aspect-[4/3]">
            <iframe
              title="Maharaji Kitchen location"
              src="https://www.google.com/maps?q=Nagrakata,West+Bengal&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Maharaji Kitchen. A Family Restaurant.</div>
        <div className="tracking-[0.2em] uppercase">Crafted with royalty in North Bengal</div>
      </div>
    </footer>
  );
}

/* ---------------- FLOATING WHATSAPP ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={wa(MESSAGES.generalInquiry())}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full animate-ping bg-gold/40" aria-hidden />
      <span className="relative flex items-center gap-2 rounded-full gradient-gold text-ink font-medium px-5 py-3.5 shadow-gold">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm">Chat with us</span>
      </span>
    </a>
  );
}

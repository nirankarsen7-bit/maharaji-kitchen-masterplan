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
import galleryAnniversaryParty from "@/assets/uploads/gallery-anniversary-party.png.asset.json";
import galleryBirthdayHall from "@/assets/uploads/gallery-birthday-hall.png.asset.json";
import galleryCandlelightDinner from "@/assets/uploads/gallery-candlelight-dinner.png.asset.json";
import galleryCelebrationCollage from "@/assets/uploads/gallery-celebration-collage.png.asset.json";
import galleryCeremonyMoments from "@/assets/uploads/gallery-ceremony-moments.png.asset.json";
import gallerySilverJubilee from "@/assets/uploads/gallery-silver-jubilee.png.asset.json";

import { Logo } from "@/components/site/Logo";
import { CouponCountdown } from "@/components/site/CouponCountdown";
import { wa, MESSAGES } from "@/lib/whatsapp";
import {
  Sparkles,
  Crown,
  Utensils,
  Heart,
  Cake,
  Gift,
  Flame,
  Star,
  CalendarDays,
  MessageCircle,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  Award,
  Leaf,
  Quote,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maharaji Kitchen — A Royal Family Restaurant in Nagrakata, North Bengal" },
      {
        name: "description",
        content:
          "Experience the art of fine dining at Maharaji Kitchen — premium veg & non-veg cuisine, signature event packages, and intimate celebrations in Nagrakata, West Bengal.",
      },
      { property: "og:title", content: "Maharaji Kitchen — The Art of Fine Dining" },
      {
        property: "og:description",
        content:
          "Royal vegetarian & non-vegetarian feasts, signature event packages, and intimate celebrations in the heart of North Bengal.",
      },
    ],
  }),
  component: HomePage,
});

const familyEvents = [
  {
    name: "Birthday Party",
    icon: Cake,
    img: eventBirthday,
    blurb: "Cinematic candle-lit celebrations crafted around the moment you blow the candle.",
  },
  {
    name: "Anniversary Celebration",
    icon: Heart,
    img: eventAnniversary,
    blurb: "Rose-petal tablescapes, private corners, and a menu that tastes like your story.",
  },
  {
    name: "Naming Ceremony",
    icon: Sparkles,
    img: eventNaming,
    blurb: "Sacred rituals, marigold mandap, and a feast that blesses the newest name in the family.",
  },
  {
    name: "Retirement Party",
    icon: Crown,
    img: aboutTandoor,
    blurb: "Honour a lifetime of service with a regal feast and quiet, elegant tributes.",
  },
  {
    name: "Engagement Ceremony",
    icon: Gift,
    img: eventEngagement,
    blurb: "Royal red-and-gold drapes, ring rituals, and a multi-course banquet for two families.",
  },
];

const seasonalEvents = [
  {
    name: "New Year Party",
    icon: Sparkles,
    img: eventNewYear,
    blurb: "Champagne towers, gold confetti, and a midnight feast worthy of new beginnings.",
  },
  {
    name: "Valentine's Dinner",
    icon: Heart,
    img: eventValentine,
    blurb: "An intimate seven-course dinner designed for two — sealed with a private dessert.",
  },
  {
    name: "Diwali Celebration",
    icon: Flame,
    img: eventDiwali,
    blurb: "Diyas, mithai, and a royal thali that turns the festival of lights into a feast of flavours.",
  },
  {
    name: "Durga Puja Feast",
    icon: Crown,
    img: eventDurga,
    blurb: "Traditional Bengali bhog elevated to a fine-dining masterpiece for Maa Durga's homecoming.",
  },
  {
    name: "Holi Special",
    icon: Gift,
    img: eventNaming,
    blurb: "A colour-soaked feast with seasonal cocktails and a Holi platter for every table.",
  },
  {
    name: "Christmas Eve",
    icon: Star,
    img: eventNewYear,
    blurb: "Carols, candles, and a slow-roasted Christmas spread served with North Bengal warmth.",
  },
];

const whyUs = [
  {
    icon: Crown,
    title: "Royal Hospitality",
    body: "Trained stewards, gold-rim service, and a welcome that treats every guest as family.",
  },
  {
    icon: Leaf,
    title: "Garden-Fresh Sourcing",
    body: "Daily-sourced North Bengal produce, tea-garden herbs, and stone-ground masalas.",
  },
  {
    icon: Award,
    title: "Award-Winning Kitchen",
    body: "Veg & non-veg signatures perfected over a decade of feeding Nagrakata's celebrations.",
  },
  {
    icon: Utensils,
    title: "Event Mastery",
    body: "From a ten-guest anniversary to a three-hundred-guest banquet — flawless, every time.",
  },
];

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Anniversary Guest",
    text: "The candle-lit corner, the rose petals, the slow-roasted lamb — Maharaji turned our 5th anniversary into a memory we will never forget.",
    rating: 5,
  },
  {
    name: "Anirban Das",
    role: "Father of the Bride",
    text: "We hosted 220 guests for our engagement. Not a single complaint, not a single late plate. Royal, in every sense of the word.",
    rating: 5,
  },
  {
    name: "Pradip Roy",
    role: "Birthday Host",
    text: "My daughter's 18th birthday felt like a Bollywood premiere. The team's attention to detail is unreal — and the food, simply legendary.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Where is Maharaji Kitchen located?",
    a: "We are at Sukhani Basti, NH31C, Nagrakata, West Bengal — easily reachable from Malbazar, Chalsa, and the Dooars tea-garden belt.",
  },
  {
    q: "Do you offer both veg and non-veg menus?",
    a: "Yes. Our kitchen runs separate veg and non-veg sections so every guest is served with care, authenticity, and respect for tradition.",
  },
  {
    q: "How do I book a table or an event?",
    a: "Tap any 'Reserve' button on this page. You will be connected on WhatsApp instantly and our reservations desk will confirm within minutes.",
  },
  {
    q: "How does the discount coupon work?",
    a: "Claim your coupon today on WhatsApp — it stays valid for 7 days and can be redeemed for any dine-in, table reservation, or event package.",
  },
  {
    q: "Do you handle large events and outdoor catering?",
    a: "Absolutely. We have hosted weddings, naming ceremonies, and corporate celebrations across the Dooars region. Tell us your vision — we will craft it.",
  },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full border border-gold/15 px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled ? "glass-strong shadow-elegant" : "glass"
          }`}
        >
          <a href="#top" className="min-w-0 leading-tight">
            <div className="truncate font-serif text-base text-gradient-gold sm:text-lg">
              Maharaji Kitchen
            </div>
            <div className="truncate text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              A Family Restaurant
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-gold"
              >
                {item.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href={wa(MESSAGES.reserveTable())}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal min-h-11 !px-4 !py-2 text-[11px] sm:!px-5 sm:text-xs"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Reserve Now</span>
            <span className="sm:hidden">Book</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
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

      <img
        src={dishButter}
        alt=""
        aria-hidden
        className="absolute -left-10 top-1/3 hidden w-48 rounded-full opacity-90 shadow-crimson md:block lg:w-64 animate-float-slow"
        style={{ filter: "drop-shadow(0 30px 60px oklch(0.62 0.24 28 / 0.5))" }}
      />
      <img
        src={dishThali}
        alt=""
        aria-hidden
        className="absolute -right-16 bottom-24 hidden w-56 rounded-full opacity-80 md:block lg:w-80 animate-float-mid"
        style={{ filter: "drop-shadow(0 30px 60px oklch(0 0 0 / 0.6))" }}
      />
      <img
        src={floatingSpices}
        alt=""
        aria-hidden
        className="absolute right-2 top-24 w-24 opacity-40 mix-blend-screen sm:right-4 sm:w-40 sm:opacity-50 animate-float-mid"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-28 text-center sm:px-6 sm:pt-24">
        <div className="mb-6 flex justify-center animate-rise">
          <Logo size={92} />
        </div>
        <div
          className="eyebrow mb-6 justify-center text-center animate-rise"
          style={{ animationDelay: "0.1s" }}
        >
          Sukhani Basti · Nagrakata · West Bengal
        </div>
        <h1
          className="font-serif text-4xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl animate-rise"
          style={{ animationDelay: "0.15s" }}
        >
          The <em className="font-display font-light italic text-gradient-gold">Art</em> of
          <br />
          Fine Dining
        </h1>
        <p
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg animate-rise"
          style={{ animationDelay: "0.25s" }}
        >
          A royal table set in the heart of North Bengal — where every spice tells a story,
          every plate is a celebration, and every guest is treated like family.
        </p>
        <div
          className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 animate-rise"
          style={{ animationDelay: "0.35s" }}
        >
          <a
            href={wa(MESSAGES.reserveTable())}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal min-h-12 w-full justify-center sm:w-auto"
          >
            <Crown className="h-4 w-4" /> Reserve a Table
          </a>
          <a href="#events" className="btn-ghost-gold min-h-12 w-full justify-center sm:w-auto">
            Explore Packages <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href={wa(MESSAGES.generalInquiry())}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crimson min-h-12 w-full justify-center sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:mt-14 sm:text-xs sm:tracking-[0.28em] animate-rise"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="flex items-center gap-2">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" /> 4.9 · 1,200+ Guests
          </span>
          <span className="hidden opacity-40 sm:inline">·</span>
          <span className="flex items-center gap-2">
            <Leaf className="h-3.5 w-3.5 text-gold" /> Veg & Non-Veg
          </span>
          <span className="hidden opacity-40 sm:inline">·</span>
          <span className="flex items-center gap-2">
            <Award className="h-3.5 w-3.5 text-gold" /> A Family Restaurant
          </span>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-gold/70 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
        <div className="h-10 w-px animate-pulse bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}

function CouponBanner() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.52 0.21 25 / 0.25), transparent 70%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-5xl">
        <div className="premium-card grain animate-scale-fade rounded-[2rem] p-1.5">
          <div
            className="relative overflow-hidden rounded-[1.7rem]"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.22 0.05 25 / 0.9), oklch(0.16 0.04 25 / 0.95))",
            }}
          >
            <CornerOrnament className="left-4 top-4" />
            <CornerOrnament className="right-4 top-4 scale-x-[-1]" />
            <CornerOrnament className="bottom-4 left-4 scale-y-[-1]" />
            <CornerOrnament className="bottom-4 right-4 scale-x-[-1] scale-y-[-1]" />

            <div className="relative px-4 py-10 text-center sm:px-10 sm:py-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.32em] text-gold">
                <Flame className="h-3.5 w-3.5" /> Limited Time Offer
              </div>
              <h2 className="mt-6 font-serif text-3xl sm:text-5xl lg:text-6xl">
                Get Your <span className="text-gradient-gold">Discount Coupon</span> Now
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
                Claim your exclusive Maharaji Kitchen coupon today — use it whenever you wish.
                <br className="hidden sm:block" />
                Valid for dine-in, table reservations, and every event package on our menu.
              </p>

              <div className="my-8 sm:my-9">
                <CouponCountdown />
              </div>

              <a
                href={wa(MESSAGES.todayOffer())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal min-h-12 w-full justify-center text-sm !px-6 !py-3.5 sm:w-auto sm:text-base sm:!px-7 sm:!py-4"
              >
                <Gift className="h-5 w-5" /> Get Your Discount Coupon
                <ArrowRight className="h-4 w-4" />
              </a>
              <div className="mt-5 text-xs tracking-wider text-muted-foreground/80">
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
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      className={`absolute text-gold/70 ${className}`}
      aria-hidden
    >
      <path d="M2 2 L2 22 M2 2 L22 2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="2" cy="2" r="2" fill="currentColor" />
      <path
        d="M10 10 Q18 6 22 14"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}

function Marquee() {
  const items = [
    "Royal Hospitality",
    "Veg & Non-Veg",
    "Fine Dining",
    "Event Mastery",
    "North Bengal Heritage",
    "Cinematic Celebrations",
  ];

  return (
    <div className="overflow-hidden border-y border-gold/15 bg-ink/40 py-5">
      <div
        className="flex gap-12 whitespace-nowrap animate-[spin-slow_unset]"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {[...items, ...items, ...items].map((text, index) => (
          <span
            key={index}
            className="flex items-center gap-12 font-display text-xl italic text-gold/70 sm:text-2xl"
          >
            {text}
            <Sparkles className="h-4 w-4" />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

function WhyUs() {
  return (
    <section id="why" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="eyebrow mb-5 justify-center">Why Maharaji Kitchen</div>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            A restaurant that feels <em className="font-display italic text-gradient-gold">like home</em>
            {' '}
            — served like royalty.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Born in the tea-garden country of Nagrakata, Maharaji Kitchen marries North Bengal
            warmth with fine-dining precision. Every plate is a quiet ceremony.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, index) => (
            <div
              key={item.title}
              className="premium-card grain animate-rise p-7"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div
                className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.79 0.14 85 / 0.18), oklch(0.52 0.21 25 / 0.2))",
                }}
              >
                <item.icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
              </div>
              <h3 className="mb-2 font-serif text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignatureDishes() {
  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="premium-card relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <img
              src={aboutTandoor}
              alt="Tandoor flames"
              width={1280}
              height={896}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          </div>
          <img
            src={dishButter}
            alt="Butter chicken"
            width={1024}
            height={1024}
            loading="lazy"
            className="absolute -bottom-10 -right-8 hidden w-56 rounded-full premium-card md:block animate-float-mid"
          />
          <div className="glass-strong shadow-gold absolute -top-6 -left-6 hidden rounded-2xl px-5 py-4 md:block animate-float-slow">
            <div className="font-serif text-3xl leading-none text-gradient-gold">12+</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Years of Royal Service
            </div>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-5">Our Story</div>
          <h2 className="font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Royal recipes,
            <br />
            <em className="font-display italic text-gradient-gold">North Bengal soul.</em>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            From the slow-burning tandoor at sunrise to the final flicker of candlelight at
            dinner, Maharaji Kitchen is built around one quiet promise — that every guest leaves
            with a story. We hand-select tea-garden herbs, stone-grind every masala, and plate
            every dish as if a maharaja were watching.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { n: "350+", l: "Events Hosted" },
              { n: "1,200+", l: "Happy Families" },
              { n: "60+", l: "Signature Dishes" },
              { n: "4.9★", l: "Guest Rating" },
            ].map((stat) => (
              <div key={stat.l} className="glass rounded-2xl p-5">
                <div className="font-serif text-3xl text-gradient-gold">{stat.n}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-9 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
            <a
              href={wa(MESSAGES.reserveTable())}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal min-h-12 w-full justify-center sm:w-auto"
            >
              <Crown className="h-4 w-4" /> Reserve Your Table
            </a>
            <a
              href={wa(MESSAGES.todayOffer())}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-gold min-h-12 w-full justify-center sm:w-auto"
            >
              <Gift className="h-4 w-4" /> Today's Offers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventPackages() {
  const [tab, setTab] = useState<"family" | "seasonal">("family");
  const list = tab === "family" ? familyEvents : seasonalEvents;

  return (
    <section id="events" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="eyebrow mb-5 justify-center">Signature Event Packages</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
            Celebrations, <em className="font-display italic text-gradient-gold">crafted royally.</em>
          </h2>
          <p className="mt-5 text-muted-foreground">
            From the first candle to the final toast — every detail is staged, lit, and plated by hand.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="glass grid w-full max-w-xl grid-cols-2 rounded-full p-1.5">
            {([
              ["family", "Family & Social"],
              ["seasonal", "Seasonal & Festival"],
            ] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`relative px-3 py-3 text-[11px] uppercase tracking-[0.14em] rounded-full transition-all duration-500 sm:px-7 sm:text-sm sm:tracking-[0.2em] ${
                  tab === key ? "text-ink" : "text-muted-foreground hover:text-gold"
                }`}
              >
                {tab === key && <span className="gradient-gold absolute inset-0 rounded-full" aria-hidden />}
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((event, index) => (
            <article
              key={event.name}
              className="premium-card grain animate-rise"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={event.img}
                  alt={event.name}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="glass-strong absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-gold">
                  <Flame className="h-3 w-3" /> Coupon Eligible
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="glass-strong inline-flex h-11 w-11 items-center justify-center rounded-2xl">
                    <event.icon className="h-5 w-5 text-gold" strokeWidth={1.4} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-serif text-2xl">{event.name}</h3>
                <p className="min-h-[3.5rem] text-sm leading-relaxed text-muted-foreground">
                  {event.blurb}
                </p>
                <div className="gold-divider my-5 opacity-40" />
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <a
                    href={wa(MESSAGES.eventDiscount())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-gold min-h-11 justify-center !px-4 !py-2 !text-[11px]"
                  >
                    <Gift className="h-3.5 w-3.5" /> Get Coupon
                  </a>
                  <a
                    href={wa(MESSAGES.reservePackage(event.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-royal min-h-11 justify-center !px-4 !py-2 !text-[11px]"
                  >
                    Reserve <ChevronRight className="h-3.5 w-3.5" />
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
    <section className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="eyebrow mb-5">Bespoke Builder</div>
            <h2 className="font-serif text-4xl sm:text-5xl">
              Design your <em className="font-display italic text-gradient-gold">own</em> royal evening.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Tell us your dream — we'll build the menu, the decor, and the magic around it.
              Every custom package qualifies for today's exclusive coupon.
            </p>
            <div className="mt-8 hidden lg:block">
              <img
                src={floatingSpices}
                alt=""
                aria-hidden
                width={1280}
                height={896}
                loading="lazy"
                className="w-full rounded-2xl opacity-80 mix-blend-screen"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="premium-card grain p-6 sm:p-8">
              <div className="space-y-6">
                <Field label="Event Type">
                  <SelectInput
                    value={eventType}
                    onChange={setEventType}
                    options={[
                      "Birthday Party",
                      "Anniversary",
                      "Naming Ceremony",
                      "Engagement",
                      "Festival Feast",
                      "Corporate Dinner",
                    ]}
                  />
                </Field>
                <Field label={`Guest Count · ${guests}`}>
                  <input
                    type="range"
                    min={10}
                    max={300}
                    step={5}
                    value={guests}
                    onChange={(e) => setGuests(Number.parseInt(e.target.value))}
                    className="w-full accent-[var(--gold)]"
                  />
                  <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    <span>10</span>
                    <span>150</span>
                    <span>300+</span>
                  </div>
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Menu Preference">
                    <SelectInput
                      value={menu}
                      onChange={setMenu}
                      options={["Pure Veg", "Non-Veg", "Veg & Non-Veg", "Bengali Traditional"]}
                    />
                  </Field>
                  <Field label="Decoration">
                    <SelectInput
                      value={decor}
                      onChange={setDecor}
                      options={["Royal Gold", "Crimson Romance", "Floral Marigold", "Minimal Elegance"]}
                    />
                  </Field>
                </div>

                <div className="rounded-2xl border border-gold/20 bg-gold/5 p-5">
                  <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-gold">Live Preview</div>
                  <div className="font-serif text-lg">
                    {eventType} for {guests} guests — {menu}, styled in {decor}.
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2 sm:flex sm:flex-wrap">
                  <a
                    href={wa(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-royal min-h-12 w-full justify-center sm:w-auto"
                  >
                    <MessageCircle className="h-4 w-4" /> Send on WhatsApp
                  </a>
                  <a
                    href={wa(MESSAGES.eventDiscount())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-gold min-h-12 w-full justify-center sm:w-auto"
                  >
                    <Gift className="h-4 w-4" /> Ask for Event Discount
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
      <span className="mb-2.5 block text-[10px] uppercase tracking-[0.28em] text-gold">
        {label}
      </span>
      {children}
    </label>
  );
}

function SelectInput({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-gold/20 bg-card/60 px-4 py-3 text-sm transition focus:border-gold/60 focus:outline-none"
    >
      {options.map((option) => (
        <option key={option} value={option} className="bg-card">
          {option}
        </option>
      ))}
    </select>
  );
}

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
    <section id="reserve" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at top, oklch(0.52 0.21 25 / 0.15), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          <div className="premium-card relative min-h-[420px] overflow-hidden rounded-[2rem]">
            <img
              src={interior}
              alt="Restaurant interior"
              width={1536}
              height={864}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-8">
              <div className="eyebrow mb-3">Reserve Your Table</div>
              <h2 className="font-serif text-4xl sm:text-5xl">
                A seat at the <em className="font-display italic text-gradient-gold">royal table</em> awaits.
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Tell us when — we will set the candles, dim the lights, and have your favourite table ready.
              </p>
            </div>
          </div>

          <div className="premium-card grain p-6 sm:p-8">
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Date">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-gold/20 bg-card/60 px-4 py-3 text-sm focus:border-gold/60 focus:outline-none"
                  />
                </Field>
                <Field label="Time">
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-xl border border-gold/20 bg-card/60 px-4 py-3 text-sm focus:border-gold/60 focus:outline-none"
                  />
                </Field>
              </div>
              <Field label={`Guests · ${guests}`}>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="glass h-11 w-11 rounded-full border border-gold/30 transition hover:bg-gold hover:text-ink"
                  >
                    −
                  </button>
                  <div className="flex-1 text-center font-serif text-2xl text-gradient-gold">{guests}</div>
                  <button
                    onClick={() => setGuests(Math.min(30, guests + 1))}
                    className="glass h-11 w-11 rounded-full border border-gold/30 transition hover:bg-gold hover:text-ink"
                  >
                    +
                  </button>
                </div>
              </Field>
              <Field label="Special Request">
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  placeholder="Anniversary cake, window seat, allergies…"
                  className="w-full resize-none rounded-xl border border-gold/20 bg-card/60 px-4 py-3 text-sm focus:border-gold/60 focus:outline-none"
                />
              </Field>
              <div className="grid grid-cols-1 gap-3 pt-2 sm:flex sm:flex-wrap">
                <a
                  href={wa(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal min-h-12 w-full justify-center sm:w-auto"
                >
                  <CalendarDays className="h-4 w-4" /> Confirm on WhatsApp
                </a>
                <a
                  href={wa(MESSAGES.todayOffer())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-gold min-h-12 w-full justify-center sm:w-auto"
                >
                  <Gift className="h-4 w-4" /> Get Today's Coupon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="eyebrow mb-5 justify-center">Guest Stories</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
            Words from our <em className="font-display italic text-gradient-gold">family.</em>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className="premium-card grain animate-rise p-7"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <Quote className="h-8 w-8 text-gold/60" />
              <blockquote className="mt-4 font-serif text-lg leading-relaxed text-foreground/90">
                "{testimonial.text}"
              </blockquote>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, ratingIndex) => (
                  <Star key={ratingIndex} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <figcaption className="mt-4 border-t border-gold/15 pt-4">
                <div className="font-medium">{testimonial.name}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {testimonial.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    {
      src: galleryBirthdayHall.url,
      alt: "Birthday celebration dining hall at Maharaji Kitchen",
    },
    {
      src: galleryCandlelightDinner.url,
      alt: "Romantic candlelight dinner setup at Maharaji Kitchen",
    },
    {
      src: galleryAnniversaryParty.url,
      alt: "Family anniversary celebration at Maharaji Kitchen",
    },
    {
      src: gallerySilverJubilee.url,
      alt: "Silver jubilee celebration at Maharaji Kitchen",
    },
    {
      src: galleryCeremonyMoments.url,
      alt: "Naming ceremony and family celebration moments at Maharaji Kitchen",
    },
    {
      src: galleryCelebrationCollage.url,
      alt: "Guest celebration collage from Maharaji Kitchen gallery",
    },
  ];

  return (
    <section id="gallery" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="eyebrow mb-5">Gallery</div>
            <h2 className="max-w-2xl font-serif text-4xl sm:text-5xl lg:text-6xl">
              A feast for the <em className="font-display italic text-gradient-gold">eyes</em>, first.
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-gold min-h-12 self-start justify-center lg:self-auto"
          >
            <Instagram className="h-4 w-4" /> Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="premium-card group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={1280}
                height={960}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="eyebrow mb-5 justify-center">Questions, Answered</div>
          <h2 className="font-serif text-4xl sm:text-5xl">
            Before you <em className="font-display italic text-gradient-gold">reserve.</em>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`premium-card overflow-hidden transition-all ${open === index ? "shadow-gold" : ""}`}
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 text-left sm:p-6"
              >
                <span className="min-w-0 font-serif text-base sm:text-lg">{faq.q}</span>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform ${
                    open === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ${
                  open === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative border-t border-gold/15 bg-ink px-4 pb-10 pt-24 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Logo size={52} />
            <div className="leading-tight">
              <div className="font-serif text-xl text-gradient-gold">Maharaji Kitchen</div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                A Family Restaurant
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Veg & Non-Veg fine dining, signature event packages, and a royal welcome — all under one roof in Nagrakata.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 transition hover:bg-gold hover:text-ink"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 transition hover:bg-gold hover:text-ink"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={wa(MESSAGES.generalInquiry())}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 transition hover:bg-gold hover:text-ink"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="mb-5 text-xs uppercase tracking-[0.28em] text-gold">Visit Us</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Sukhani Basti, NH31C,
              Nagrakata, West Bengal
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> +91 70764 30467
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Daily · 11:00 AM — 11:00 PM
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-5 text-xs uppercase tracking-[0.28em] text-gold">Explore</div>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="#why" className="transition hover:text-gold">
                Why Maharaji
              </a>
            </li>
            <li>
              <a href="#events" className="transition hover:text-gold">
                Event Packages
              </a>
            </li>
            <li>
              <a href="#reserve" className="transition hover:text-gold">
                Reserve a Table
              </a>
            </li>
            <li>
              <a href="#gallery" className="transition hover:text-gold">
                Gallery
              </a>
            </li>
            <li>
              <a
                href={wa(MESSAGES.todayOffer())}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gold"
              >
                Today's Coupon
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-5 text-xs uppercase tracking-[0.28em] text-gold">Find Us</div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20">
            <iframe
              title="Maharaji Kitchen location"
              src="https://www.google.com/maps?q=Nagrakata,West+Bengal&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-gold/10 pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
        <div>© {new Date().getFullYear()} Maharaji Kitchen. A Family Restaurant.</div>
        <div className="uppercase tracking-[0.2em]">Crafted with royalty in North Bengal</div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={wa(MESSAGES.generalInquiry())}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" aria-hidden />
      <span className="relative flex min-h-12 items-center gap-2 rounded-full gradient-gold px-4 py-3 text-ink shadow-gold sm:px-5 sm:py-3.5">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden text-sm font-medium sm:inline">Chat with us</span>
      </span>
    </a>
  );
}

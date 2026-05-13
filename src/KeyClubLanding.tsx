import { useId, useState } from 'react'
import { ASSETS, figmaAsset } from './figmaAssets'

const FAQS = [
  {
    q: 'How do I join? Is it free?',
    a: "Create your free account with us and become a member of our Key Club. You'll receive 5 keys (=$5) just for joining.",
  },
  {
    q: 'How do I earn keys?',
    a: 'For every $10 you spend on qualifying purchases, you receive 1 key. Keys post to your account after your order ships.',
  },
  {
    q: 'How do I view my key balance?',
    a: 'Sign in to your account and open your Key Club dashboard to see your current balance, tier, and recent activity.',
  },
  {
    q: 'How do I redeem keys?',
    a: 'At checkout, apply your available keys toward your order. Every 10 keys equals $1 off, applied before tax where eligible.',
  },
  {
    q: 'What does the key status mean?',
    a: 'Your status reflects your recent activity and unlocks the perks shown on this page, including birthday gifts and VIP access.',
  },
  {
    q: 'Do my keys expire?',
    a: 'Key Club keys may expire if your account is inactive for an extended period. See the loyalty terms for the current policy.',
  },
  {
    q: 'What are the Terms & Conditions?',
    a: 'The Key Club program terms describe eligibility, earning, redemption, and limitations. Read the full terms on our legal page.',
  },
] as const

const NAV_LINKS = ['New In', 'SHOP', 'names & initials', 'gifts', 'sale', 'Stories'] as const

const CUSTOMER_CARE = [
  'Help Center',
  'Track My Order',
  'Shipping Information',
  'Payment Policy',
  'Return Policy',
  'Jewelry Care',
  'Warranty',
] as const

const WORLD = ['Our Story', 'Blog', 'Fit Guide', 'Collaborations', 'Sustainability'] as const

const LEGAL = ['Terms & Conditions', 'Privacy Policy'] as const

function LogoWordmark({ className }: { className?: string }) {
  return (
    <span
      className={`font-['Gill_Sans',sans-serif] text-lg font-semibold tracking-[0.2em] text-black ${className ?? ''}`}
      aria-label="Oak and Luna"
    >
      OAK & LUNA
    </span>
  )
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12.5 12.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconAccount({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M10 11.5C12.4853 11.5 14.5 9.48528 14.5 7C14.5 4.51472 12.4853 2.5 10 2.5C7.51472 2.5 5.5 4.51472 5.5 7C5.5 9.48528 7.51472 11.5 10 11.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M3.5 17.5C4.5 14.5 7 13 10 13C13 13 15.5 14.5 16.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconBag({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M5 7.5H15V16.5H5V7.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 7.5V5.5C7 3.84315 8.34315 2.5 10 2.5C11.6569 2.5 13 3.84315 13 5.5V7.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconMenu({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M3 5.5H17M3 10H17M3 14.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconPlus({ className, open }: { className?: string; open?: boolean }) {
  return (
    <span className={`relative inline-flex size-[11px] items-center justify-center text-black ${className ?? ''}`} aria-hidden>
      <span className={`absolute h-px w-[11px] bg-current transition-transform duration-200 ${open ? 'rotate-45' : ''}`} />
      <span className={`absolute h-[11px] w-px bg-current transition-transform duration-200 ${open ? 'rotate-45' : ''}`} />
    </span>
  )
}

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M11.5 18.5V10.5H14L14.5 7.5H11.5V5.75C11.5 4.9 11.75 4.25 13 4.25H14.5V1.75C14.25 1.7 13.35 1.5 12.25 1.5C9.95 1.5 8.25 3.05 8.25 5.45V7.5H5.5V10.5H8.25V18.5H11.5Z" />
    </svg>
  )
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.5" cy="5.5" r="0.75" fill="currentColor" />
    </svg>
  )
}

function IconTiktok({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M13.5 3.5V12.25C13.5 14.25 11.75 16 9.75 16C7.75 16 6 14.25 6 12.25C6 10.25 7.75 8.5 9.75 8.5V10.75C9 10.75 8.25 11.5 8.25 12.25C8.25 13.25 9 14 10 14C11 14 11.75 13.25 11.75 12.25V3.5H13.5Z" />
    </svg>
  )
}

function IconPinterest({ className }: { className?: string }) {
  return (
    <svg className={className} width="21" height="20" viewBox="0 0 21 20" fill="none" aria-hidden>
      <path
        d="M10.5 2.5C6.5 2.5 3.5 5.75 3.5 9.5C3.5 12.5 5.25 14.75 7.75 14.75C8.5 14.75 9.25 14.25 9.5 13.5L10 11.5C9.75 11 9.5 10.25 9.5 9.5C9.5 7.25 10.75 5.5 12.5 5.5C14 5.5 15 6.75 15 8.5C15 10.75 13.75 12.5 12.25 12.5C11.25 12.5 10.75 11.75 11 10.75L11.75 7.75C11.5 6.5 12 5.5 13.25 5.5C14.5 5.5 15.5 6.75 15.5 8.75C15.5 10 15 11 14.25 11.75L13.75 13.75C13.25 15.5 14 16.75 15.5 16.75C17 16.75 18.25 15.25 18.25 12.75C18.25 7.75 15 2.5 10.5 2.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  )
}

function IconTwitter({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M15.5 4.5H13.75L10.75 8.25L8.25 4.5H4.5L8.75 11.25L4.5 15.5H6.25L9.5 11.5L12.25 15.5H15.5L10.75 8.5L15.5 4.5Z" />
    </svg>
  )
}

function HeaderDesktop() {
  return (
    <header className="relative z-30 hidden w-full flex-col lg:flex">
      <div className="flex h-10 items-center overflow-hidden bg-black px-8 py-2 text-white">
        <div className="flex w-[220px] shrink-0 gap-6 font-['Gill_Sans',sans-serif] text-sm font-semibold leading-[18px] tracking-[0.4px]">
          <span>HELP</span>
          <span>TRACK MY ORDER</span>
        </div>
        <p className="min-w-0 flex-1 text-center font-['Gill_Sans',sans-serif] text-sm font-semibold leading-[18px] tracking-[0.4px]">
          ETHICALLY-SOURCED MATERIALS
        </p>
        <div className="flex w-[220px] shrink-0 justify-end font-['Gill_Sans',sans-serif] text-sm font-semibold leading-[18px] tracking-[0.4px]">
          SUBSCRIBE & GET 10% OFF
        </div>
      </div>
      <div className="flex items-center justify-between overflow-hidden bg-white px-8 py-2">
        <LogoWordmark />
        <nav className="flex items-center gap-6 p-3" aria-label="Primary">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="font-['Gill_Sans',sans-serif] text-sm font-semibold uppercase leading-[18px] tracking-[0.7px] text-black"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex w-[145px] shrink-0 items-end justify-end gap-4 text-black">
          <IconSearch />
          <IconAccount />
          <IconBag />
        </div>
      </div>
    </header>
  )
}

function HeaderMobile() {
  return (
    <header className="sticky top-0 z-30 lg:hidden">
      <div className="flex h-8 items-center overflow-hidden bg-black px-2 py-2">
        <p className="w-full text-center font-['Gill_Sans',sans-serif] text-sm font-semibold leading-[18px] tracking-[0.4px] text-white">
          ETHICALLY-SOURCED MATERIALS
        </p>
      </div>
      <nav className="relative flex h-11 items-center overflow-hidden bg-white text-black" aria-label="Primary mobile">
        <button type="button" className="absolute bottom-3 left-3" aria-label="Open menu">
          <IconMenu />
        </button>
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <LogoWordmark className="text-sm tracking-[0.15em]" />
        </div>
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <IconSearch />
          <IconBag />
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  const heroSrc = figmaAsset(ASSETS.hero)
  return (
    <section className="relative w-full bg-white">
      <div className="flex min-h-0 w-full max-w-[1920px] flex-col lg:flex-row">
        <div className="relative aspect-[375/308] w-full shrink-0 overflow-hidden lg:hidden">
          <img alt="" className="absolute inset-0 size-full object-cover object-center" src={heroSrc} />
        </div>

        <div className="relative order-2 flex min-h-[400px] flex-1 flex-col justify-center gap-4 bg-black px-8 py-10 lg:order-none lg:min-h-[560px] lg:max-w-[50%] lg:px-[180px] lg:py-0">
          <h1
            className="font-['Bebas_Neue',sans-serif] text-[50px] font-normal uppercase leading-[44px] text-white lg:text-[92px] lg:leading-[80px]"
            style={{ fontFeatureSettings: "'lnum', 'pnum'" }}
          >
            key club members{' '}
            <br className="hidden lg:block" />
            get more
          </h1>
          <p className="font-['Gill_Sans',sans-serif] text-base font-normal leading-[21px] tracking-[0.4px] text-white lg:text-xl lg:leading-[25px]">
            As a Key Club member, you&apos;ll get early access to new drops, VIP offers, birthday gifts and keys (every 10 keys = $1) for
            every $10 you spend.
          </p>
          <a
            href="#join"
            className="inline-flex w-fit border-b border-white pb-1 font-['Gill_Sans',sans-serif] text-sm font-semibold uppercase leading-[17px] tracking-[0.7px] text-white"
          >
            join now
          </a>
        </div>

        <div className="relative order-1 hidden min-h-[480px] flex-1 overflow-hidden lg:block lg:min-h-[960px]">
          <img alt="" className="absolute inset-0 size-full object-cover object-center" src={heroSrc} />
        </div>
      </div>
    </section>
  )
}

function BenefitCard({
  title,
  body,
  imageKey,
}: {
  title: string
  body: string
  imageKey: 'benefit1' | 'benefit2' | 'benefit3'
}) {
  return (
    <article className="flex w-full flex-col gap-6">
      <div className="relative aspect-[343/432] w-full overflow-hidden bg-neutral-200">
        <img alt="" className="absolute inset-0 size-full object-cover object-center" src={figmaAsset(ASSETS[imageKey])} />
      </div>
      <div className="flex flex-col gap-3 text-black">
        <h3
          className="font-['Bebas_Neue',sans-serif] text-[32px] font-normal uppercase leading-8 tracking-[0.4px]"
          style={{ fontFeatureSettings: "'lnum', 'pnum'" }}
        >
          {title}
        </h3>
        <p className="font-['Gill_Sans',sans-serif] text-base font-normal leading-[21px] tracking-[0.4px] lg:text-xl lg:leading-[25px]">{body}</p>
      </div>
    </article>
  )
}

function Benefits() {
  return (
    <section className="w-full bg-white px-4 py-10 lg:px-8 lg:py-[60px]">
      <div className="mx-auto flex max-w-[1856px] flex-col items-center gap-8">
        <div className="flex w-full flex-col items-center gap-3 text-center text-black">
          <h2 className="font-['Bebas_Neue',sans-serif] text-[50px] font-normal uppercase leading-[44px]" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
            key club benefits
          </h2>
          <p className="font-['Gill_Sans',sans-serif] text-base font-normal leading-[21px] tracking-[0.4px] lg:text-xl lg:leading-[25px]">
            Here&apos;s what you&apos;ll get as a member:
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6">
          <BenefitCard title="earn keys as you shop" body="For every $10 you spend, you get 1 key (=$1)" imageKey="benefit1" />
          <BenefitCard
            title="Receive a birthday gift"
            body="Surprise! A free birthday gift every year sent to your door"
            imageKey="benefit2"
          />
          <BenefitCard
            title="get vip access"
            body="Monthly gifts and early access to exclusive sales? Yes please!"
            imageKey="benefit3"
          />
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const baseId = useId()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="w-full bg-[#f8f8f8] px-4 py-9 lg:py-14">
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-7 lg:gap-10">
        <h2 className="text-center text-black" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
          <span className="font-['Gill_Sans',sans-serif] text-[22px] font-semibold uppercase leading-7 tracking-[1px] lg:hidden">FAQS</span>
          <span className="hidden font-['Bebas_Neue',sans-serif] text-[50px] font-normal uppercase leading-[44px] lg:inline">FAQ</span>
        </h2>

        <div className="w-full rounded border-[1.5px] border-solid border-[#ebebeb] px-0 py-4 lg:py-5">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            const panelId = `${baseId}-panel-${i}`
            const headerId = `${baseId}-header-${i}`
            return (
              <div key={item.q}>
                {i > 0 && <div className="mx-0 h-px bg-[#ebebeb]" role="presentation" />}
                <h3 className="m-0">
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-2 text-left lg:px-4 lg:py-2"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="min-w-0 font-['Gill_Sans',sans-serif] text-sm font-semibold leading-[18px] tracking-[0.4px] text-black lg:text-base lg:leading-[21px] lg:tracking-normal">
                      {item.q}
                    </span>
                    <IconPlus open={isOpen} />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={headerId} hidden={!isOpen} className="px-4 pb-3 pt-0 lg:px-4">
                  <p className="font-['Gill_Sans',sans-serif] text-sm font-normal leading-[18px] tracking-[0.4px] text-black">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>

        <a
          id="join"
          href="#"
          className="flex h-11 w-full max-w-[343px] items-center justify-center rounded bg-black px-4 py-[11px] font-['Gill_Sans',sans-serif] text-sm font-semibold uppercase leading-[17px] tracking-[0.7px] text-white"
        >
          join now
        </a>
      </div>
    </section>
  )
}

function FooterDesktop() {
  return (
    <footer className="relative hidden w-full bg-[#f7f7f7] px-8 py-10 lg:block">
      <div className="mx-auto grid max-w-[1920px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-2">
          <p className="mb-4 font-['Gill_Sans',sans-serif] text-xs font-semibold uppercase leading-4 tracking-[0.6px] text-black">customer care</p>
          <ul className="space-y-2.5">
            {CUSTOMER_CARE.map((t) => (
              <li key={t}>
                <a href="#" className="font-['Gill_Sans',sans-serif] text-xs leading-4 tracking-[0.36px] text-black">
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="mb-4 font-['Gill_Sans',sans-serif] text-xs font-semibold uppercase leading-4 tracking-[0.6px] text-black">World of Oak & Luna</p>
          <ul className="space-y-2.5">
            {WORLD.map((t) => (
              <li key={t}>
                <a href="#" className="font-['Gill_Sans',sans-serif] text-xs leading-4 tracking-[0.36px] text-black">
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="mb-4 font-['Gill_Sans',sans-serif] text-xs font-semibold uppercase leading-4 tracking-[0.6px] text-black">Legal & Privacy</p>
          <ul className="space-y-2.5">
            {LEGAL.map((t) => (
              <li key={t}>
                <a href="#" className="font-['Gill_Sans',sans-serif] text-xs leading-4 tracking-[0.36px] text-black">
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6 lg:justify-self-end lg:text-right">
          <p className="mb-2 font-['Gill_Sans',sans-serif] text-xs font-semibold uppercase leading-4 tracking-[0.6px] text-black">Join our world</p>
          <p className="mb-6 font-['Gill_Sans',sans-serif] text-xs leading-4 tracking-[0.36px] text-black">Subscribe to receive 10% off your first order</p>
          <div className="mx-auto flex max-w-md border-b border-black pb-2 pt-1 lg:ml-auto lg:mr-0">
            <span className="font-['Gill_Sans',sans-serif] text-xs tracking-[0.36px] text-[#8f8f8f]">Email Address</span>
            <span className="ml-auto flex items-center gap-2 font-['Gill_Sans',sans-serif] text-xs tracking-[0.36px] text-black">
              Subscribe
              <IconArrowRight className="size-5 shrink-0" />
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1920px] flex-wrap items-end justify-between gap-6 border-t border-transparent pt-4 text-black">
        <p className="font-['Gill_Sans',sans-serif] text-xs leading-4 tracking-[0.36px]">Copyright 2022 Oak & Luna Custom Jewelry All rights reserved.</p>
        <div className="flex gap-5">
          <IconFacebook className="size-5" />
          <IconInstagram className="size-5" />
          <IconTiktok className="size-5" />
          <IconPinterest className="h-5 w-[21px]" />
          <IconTwitter className="size-5" />
        </div>
      </div>
    </footer>
  )
}

function FooterMobile() {
  const [section, setSection] = useState<string | null>(null)
  const toggle = (id: string) => setSection((s) => (s === id ? null : id))

  return (
    <footer className="bg-[#f8f8f8] px-0 py-8 lg:hidden">
      <div className="flex flex-col gap-5 px-4 text-black">
        <div>
          <p
            className="font-['Gill_Sans',sans-serif] text-[22px] font-semibold uppercase leading-7 tracking-[1px]"
            style={{ fontFeatureSettings: "'lnum', 'pnum'" }}
          >
            JOIN OUR WORLD
          </p>
          <p className="mt-3 font-['Gill_Sans',sans-serif] text-sm leading-[18px] tracking-[0.4px]">Subscribe to receive 10% off your first order</p>
        </div>
        <div className="flex border-b border-black pb-2 pt-1">
          <span className="font-['Gill_Sans',sans-serif] text-sm tracking-[0.4px] text-[#8f8f8f]">Email Address</span>
          <span className="ml-auto flex items-center gap-2 font-['Gill_Sans',sans-serif] text-sm tracking-[0.4px]">
            Subscribe
            <IconArrowRight className="size-[18px] shrink-0" />
          </span>
        </div>
        <div className="flex gap-5">
          <IconFacebook className="size-5" />
          <IconInstagram className="size-5" />
          <IconTiktok className="size-5" />
          <IconPinterest className="h-5 w-[21px]" />
          <IconTwitter className="size-5" />
        </div>
      </div>

      <div className="mt-2 w-full text-black">
        {[
          { id: 'care', label: 'CUSTOMER CARE', items: CUSTOMER_CARE },
          { id: 'world', label: 'WORLD OF OAK AND LUNA', items: WORLD },
          { id: 'legal', label: 'LEGAL & PRIVACY', items: LEGAL },
        ].map((block, idx) => (
          <div key={block.id}>
            <button
              type="button"
              className={`flex w-full items-center justify-between border-[#ebebeb] px-4 py-3 text-left font-['Gill_Sans',sans-serif] text-sm font-semibold uppercase leading-[18px] tracking-[0.4px] ${idx === 0 ? 'border-y' : 'border-b'}`}
              aria-expanded={section === block.id}
              onClick={() => toggle(block.id)}
            >
              {block.label}
              <IconChevronDown className="size-5 shrink-0" />
            </button>
            {section === block.id && (
              <ul className="space-y-2 border-b border-[#ebebeb] px-4 py-3">
                {block.items.map((t) => (
                  <li key={t}>
                    <a href="#" className="font-['Gill_Sans',sans-serif] text-sm leading-[18px] tracking-[0.4px]">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4 px-4 font-['Gill_Sans',sans-serif] text-xs text-neutral-600">
        <p className="text-sm leading-[18px] tracking-[0.4px] text-black">
          Copyright 2022 Oak & Luna Custom Jewelry
          <br />
          All rights reserved.
        </p>
        <p className="leading-4 tracking-[0.36px]">Visa · Mastercard · Amex · PayPal · Klarna · Apple Pay</p>
      </div>
    </footer>
  )
}

export default function KeyClubLanding() {
  return (
    <div className="min-h-svh w-full bg-white text-black">
      <HeaderDesktop />
      <HeaderMobile />
      <main>
        <Hero />
        <Benefits />
        <FaqSection />
      </main>
      <FooterDesktop />
      <FooterMobile />
    </div>
  )
}

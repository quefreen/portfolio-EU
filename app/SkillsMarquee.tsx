"use client"

const TAGS = [
  "#design system",
  "#figma",
  "#adobe xd",
  "#photoshop/illustrator",
  "#ui design",
  "#ux design",
  "#design de produto",
  "#pesquisa com usuários",
  "#wirefre",
  "#prototipação",
  "#design responsivo",
  "#next.js",
  "#tailwind",
]

export default function SkillsMarquee() {
  return (
   <div className="max-w-[1400px] mx-auto w-full px-8 sm:px-4 md:px-12 lg:px-28 h-10 flex items-center">
  <div className="relative w-full overflow-hidden">
      <div className="marquee inline-flex gap-8">
        {[...TAGS, ...TAGS].map((tag, i) => (
           <span
          key={i}
          className="text-[#999] whitespace-nowrap text-[14px] leading-[10px] font-light leading-[10px]"
        >
          {tag}
        </span>
      ))}
    </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f6f6f6] to-transparent" />

    
    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f6f6f6] to-transparent" />

      <style jsx>{`
        .marquee {
          white-space: nowrap;
          animation: marquee 40s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div></div>
  )
}

import { SOCIAL_LINKS } from "@/lib/site";

const iconClass = "h-5 w-5";

const hoverClass = {
  Facebook: "hover:text-brand-blue",
  Instagram: "hover:text-brand-orange",
  LinkedIn: "hover:text-brand-blue",
  YouTube: "hover:text-brand-red",
  X: "hover:text-ivory",
} as const;

function FacebookIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-1c0-.6.4-1 1-1Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16.7" cy="7.3" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M8.2 10.2V16M8.2 8.1v.05M12 16v-3.4c0-1.2.8-2 1.9-2s1.9.8 1.9 2V16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="7"
        width="18"
        height="10"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M11 10.2v3.6L14.2 12 11 10.2Z" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.8 4H20l-5.7 6.5L20.7 20h-4.2l-3.3-4.6L8.8 20H6.6l6.1-7L3.5 4h4.3l3 4.2L17.8 4Zm-1.5 14.4h1.2L7.8 5.5H6.5l9.8 12.9Z"
      />
    </svg>
  );
}

const icons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
  X: XIcon,
} as const;

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((item) => {
        const Icon = icons[item.name];
        const visual = (
          <span
            className={`inline-flex text-ivory/75 transition-colors ${hoverClass[item.name]}`}
          >
            <Icon />
          </span>
        );

        return (
          <li key={item.name}>
            {item.href ? (
              <a
                href={item.href}
                aria-label={item.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {visual}
              </a>
            ) : (
              <span aria-label={item.name}>{visual}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

import type { CtaLink } from "@/config/site";
import { Icon } from "@/components/Icon";

type CtaButtonProps = {
  link: CtaLink;
  variant?: "primary" | "secondary";
  icon?: "userPlus" | "user" | "download";
  className?: string;
};

export function CtaButton({ link, variant = "primary", icon, className }: CtaButtonProps) {
  const external = link.href !== "";
  return (
    <a
      href={external ? link.href : `/#${link.fallbackId}`}
      className={`cta-button cta-${variant}${className ? ` ${className}` : ""}`}
      {...(external && { target: "_blank", rel: "nofollow sponsored noopener" })}
    >
      {icon && <Icon name={icon} size={18} strokeWidth={2} />}
      {link.label}
    </a>
  );
}

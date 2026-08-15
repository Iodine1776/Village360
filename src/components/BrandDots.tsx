import { BRAND_COLORS } from "@/lib/brand";

type BrandDotsProps = {
  orientation?: "vertical" | "horizontal";
  className?: string;
};

export function BrandDots({
  orientation = "vertical",
  className = "",
}: BrandDotsProps) {
  return (
    <ul
      className={`flex ${orientation === "vertical" ? "flex-col" : "flex-row"} gap-2 ${className}`}
      aria-hidden
    >
      {BRAND_COLORS.map((color) => (
        <li
          key={color.name}
          className="size-1.5 rounded-full sm:size-2"
          style={{ backgroundColor: color.hex }}
        />
      ))}
    </ul>
  );
}

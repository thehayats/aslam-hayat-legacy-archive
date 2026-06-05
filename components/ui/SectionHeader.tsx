interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  goldDivider?: boolean;
  arabicTitle?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  goldDivider = true,
  arabicTitle,
}: SectionHeaderProps) {
  const alignClass = centered ? 'text-center' : 'text-left';

  return (
    <div className={`mb-8 ${alignClass}`}>
      {arabicTitle && (
        <p className={`arabic-text text-gold text-xl mb-2 ${centered ? 'text-center' : ''}`}>
          {arabicTitle}
        </p>
      )}
      <h2 className="font-playfair text-3xl md:text-4xl text-green font-bold leading-tight">
        {title}
      </h2>
      {goldDivider && (
        <div className={`mt-3 h-0.5 w-16 bg-gold ${centered ? 'mx-auto' : ''}`} />
      )}
      {subtitle && (
        <p className="font-lora text-base md:text-lg text-gray-600 mt-4 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

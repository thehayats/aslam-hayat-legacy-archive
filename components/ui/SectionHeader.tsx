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
      <h2 className="font-playfair text-2xl md:text-3xl text-green font-bold leading-tight">
        {title}
      </h2>
      {goldDivider && (
        <div
          className={`mt-4 h-px w-16 ${centered ? 'mx-auto' : ''}`}
          style={{
            background: centered
              ? 'linear-gradient(90deg, transparent, #c9a84c 35%, #c9a84c 65%, transparent)'
              : 'linear-gradient(90deg, #c9a84c, rgba(201,168,77,0.1))',
          }}
        />
      )}
      {subtitle && (
        <p className={`font-lora text-sm text-gray-500 mt-3 leading-relaxed ${centered ? '' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

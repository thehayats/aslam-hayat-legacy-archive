interface TranslationSideBySideProps {
  urduContent: React.ReactNode;
  englishContent: React.ReactNode;
  urduTitle: string;
  englishTitle: string;
}

export default function TranslationSideBySide({
  urduContent,
  englishContent,
  urduTitle,
  englishTitle,
}: TranslationSideBySideProps) {
  return (
    <div className="relative">
      {/* Column headings */}
      <div className="grid md:grid-cols-2 gap-0 mb-6">
        <div className="px-6 py-3 bg-green rounded-tl-lg">
          <h3 className="font-lora text-cream-light text-base font-medium">English Translation</h3>
        </div>
        <div className="px-6 py-3 bg-green rounded-tr-lg text-right">
          <h3 className="font-urdu text-gold-light text-base font-medium">{urduTitle}</h3>
          <p className="font-lora text-cream-dark text-xs">{englishTitle}</p>
        </div>
      </div>

      {/* Side-by-side content */}
      <div className="grid md:grid-cols-2 border border-cream-dark rounded-b-lg overflow-hidden">
        {/* English — Left */}
        <div className="px-6 py-6 bg-cream-light border-r border-gold border-opacity-40">
          <div className="prose-archive">{englishContent}</div>
        </div>

        {/* Gold vertical divider (visible on md+) */}
        {/* The border-r above serves as the divider */}

        {/* Urdu — Right */}
        <div
          className="px-6 py-6 bg-parchment"
          dir="rtl"
          lang="ur"
        >
          <div className="urdu-content prose-archive">{urduContent}</div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-6 text-xs font-lora text-gray-500">
        <span>← English Translation</span>
        <span className="w-px h-4 bg-gold" />
        <span>ترجمہ — اردو اصل →</span>
      </div>
    </div>
  );
}

import { getCategoryColor } from '@/lib/utils';
import type { TimelineEntry as TimelineEntryType } from '@/lib/articles';

interface TimelineEntryProps {
  entry: TimelineEntryType;
  index: number;
}

export default function TimelineEntry({ entry, index }: TimelineEntryProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start mb-12 last:mb-0">
      {/* Desktop: alternating layout */}
      <div className="hidden md:flex w-full items-start gap-0">
        {/* Left content */}
        <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'order-3 text-left pl-8'}`}>
          {isLeft && (
            <div className="bg-cream-light border border-cream-dark rounded-lg p-5 shadow-sm card-hover">
              <div className="flex items-center justify-end gap-2 mb-2">
                <span className={`text-xs font-lora px-2 py-0.5 rounded-full ${getCategoryColor(entry.category)}`}>
                  {entry.category}
                </span>
              </div>
              <h3 className="font-playfair text-xl text-green font-bold mb-2">
                {entry.title}
              </h3>
              <p className="font-lora text-sm text-gray-600 leading-relaxed">
                {entry.description}
              </p>
            </div>
          )}
        </div>

        {/* Center: year + dot */}
        <div className="w-2/12 flex flex-col items-center order-2">
          <div className="w-12 h-12 rounded-full bg-green border-4 border-gold flex items-center justify-center z-10 shadow-md">
            <span className="font-playfair text-xs text-gold-light font-bold leading-none text-center">
              {entry.year}
            </span>
          </div>
          <div className="w-0.5 flex-1 bg-gradient-to-b from-gold to-transparent mt-1 min-h-8" />
        </div>

        {/* Right content */}
        <div className={`w-5/12 ${!isLeft ? 'text-left pl-8 order-3' : 'order-3'}`}>
          {!isLeft && (
            <div className="bg-cream-light border border-cream-dark rounded-lg p-5 shadow-sm card-hover">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-lora px-2 py-0.5 rounded-full ${getCategoryColor(entry.category)}`}>
                  {entry.category}
                </span>
              </div>
              <h3 className="font-playfair text-xl text-green font-bold mb-2">
                {entry.title}
              </h3>
              <p className="font-lora text-sm text-gray-600 leading-relaxed">
                {entry.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="flex md:hidden w-full gap-4">
        {/* Dot + line */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-green border-3 border-gold flex items-center justify-center shadow-md">
            <span className="font-playfair text-xs text-gold-light font-bold leading-none text-center">
              {entry.year}
            </span>
          </div>
          <div className="w-0.5 flex-1 bg-gradient-to-b from-gold to-transparent mt-1 min-h-6" />
        </div>

        {/* Content */}
        <div className="flex-1 pb-4">
          <div className="bg-cream-light border border-cream-dark rounded-lg p-4 shadow-sm">
            <span className={`text-xs font-lora px-2 py-0.5 rounded-full ${getCategoryColor(entry.category)} mb-2 inline-block`}>
              {entry.category}
            </span>
            <h3 className="font-playfair text-lg text-green font-bold mb-2">
              {entry.title}
            </h3>
            <p className="font-lora text-sm text-gray-600 leading-relaxed">
              {entry.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

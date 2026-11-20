import { Language, SITE_CONTENT } from '../data/content';

interface StatsStripProps {
  lang: Language;
}

export function StatsStrip({ lang }: StatsStripProps) {
  const coreStats = SITE_CONTENT.stats.items.slice(0, 4);
  const placeholderStats = SITE_CONTENT.stats.items.slice(4);

  return (
    <section
      data-animate="fade-up"
      aria-label={SITE_CONTENT.stats.sectionLabel[lang]}
      className="bg-white dark:bg-[#1C1618] border-b border-[#E8DFD1] dark:border-[#2C2225]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Core verified stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {coreStats.map((stat) => (
            <div
              key={stat.id}
              className="pb-4 sm:pb-0 border-b sm:border-b-0 last:border-b-0 lg:border-r lg:last:border-r-0 border-[#EFE7DA] dark:border-[#2C2225] lg:pr-6"
            >
              <div className="font-serif-display font-bold text-3xl sm:text-4xl text-[#7A1F2B] dark:text-[#E5C16C] tabular-nums mb-1.5">
                {stat.numericValue !== null ? (
                  <span
                    data-count-to={stat.numericValue}
                    data-count-suffix={stat.suffix}
                    data-count-comma={stat.formatComma ? 'true' : undefined}
                  >
                    {stat.formatComma
                      ? stat.numericValue.toLocaleString('en-US')
                      : stat.numericValue}
                    {stat.suffix}
                  </span>
                ) : (
                  stat.displayOverride
                )}
              </div>
              <div className="text-base font-semibold text-[#1F1B1D] dark:text-[#F5EFEA]">
                {stat.label[lang]}
              </div>
              <div className="text-sm text-[#6B6063] dark:text-[#B4A9A3] mt-0.5">
                {stat.detail[lang]}
              </div>
            </div>
          ))}
        </div>

        {/* Clearly marked placeholder stats for staff to populate */}
        <div className="mt-8 pt-6 border-t border-[#EFE7DA] dark:border-[#2C2225] grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {placeholderStats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-baseline justify-between md:block px-4 py-3 md:p-0 rounded-xl md:rounded-none bg-[#FAF7F2] md:bg-transparent dark:bg-[#231B1E] md:dark:bg-transparent"
            >
              <div>
                <span className="text-sm font-medium text-[#3A3033] dark:text-[#D8CFC9]">
                  {stat.label[lang]}
                </span>
                <span className="hidden md:inline text-xs text-[#7D7175] dark:text-[#9F948E] ml-2">
                  · {stat.detail[lang]}
                </span>
              </div>
              <div className="text-sm font-mono font-medium text-[#7A1F2B] dark:text-[#C9A24B] mt-0.5 tabular-nums">
                {stat.displayOverride}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FileText, Download } from 'lucide-react';
import { DocumentItem, Language } from '../data/content';

interface DocumentListProps {
  documents: DocumentItem[];
  lang: Language;
}

export function DocumentList({ documents, lang }: DocumentListProps) {
  return (
    <div className="divide-y divide-[#EAE1D4] dark:divide-[#2E2427] rounded-2xl border border-[#EAE1D4] dark:border-[#2E2427] bg-white dark:bg-[#1C1618] overflow-hidden print-container">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="p-4 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#FAF7F2] dark:hover:bg-[#231B1E] transition-colors"
        >
          <div className="flex items-start gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#7A1F2B]/10 dark:bg-[#C9A24B]/15 text-[#7A1F2B] dark:text-[#C9A24B] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm sm:text-base font-semibold text-[#1F1B1D] dark:text-[#F5EFEA] leading-snug">
                {doc.title[lang]}
              </h4>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#6B6063] dark:text-[#B4A9A3] tabular-nums">
                <span>PDF</span>
                <span aria-hidden="true">·</span>
                <span>
                  {lang === 'en' ? 'Year:' : 'ವರ್ಷ:'} {doc.year}
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {lang === 'en' ? 'Size:' : 'ಗಾತ್ರ:'} {doc.size}
                </span>
              </div>
            </div>
          </div>

          <a
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-center inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF7F2] dark:bg-[#261D20] hover:bg-[#7A1F2B] hover:text-white dark:hover:bg-[#C9A24B] dark:hover:text-[#1A1315] border border-[#E5DCCF] dark:border-[#34292C] text-xs font-semibold text-[#7A1F2B] dark:text-[#E5C16C] transition-colors whitespace-nowrap shrink-0 no-print"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{lang === 'en' ? 'View PDF' : 'PDF ನೋಡಿ'}</span>
          </a>
        </div>
      ))}
    </div>
  );
}

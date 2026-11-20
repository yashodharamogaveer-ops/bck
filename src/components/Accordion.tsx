import { ReactNode, useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { animateAccordionPanel } from '../lib/animations';

export interface AccordionEntry {
  id: string;
  prefix?: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionEntry[];
  defaultOpenId?: string | null;
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionEntry;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      if (panelRef.current) {
        panelRef.current.style.height = isOpen ? 'auto' : '0px';
        panelRef.current.style.opacity = isOpen ? '1' : '0';
      }
      return;
    }
    animateAccordionPanel(panelRef.current, isOpen);
  }, [isOpen]);

  return (
    <div className="border-b last:border-b-0 border-[#EAE1D4] dark:border-[#2E2427]">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`acc-panel-${item.id}`}
        id={`acc-btn-${item.id}`}
        onClick={onToggle}
        className="w-full min-h-[48px] px-4 sm:px-5 py-3.5 flex items-center justify-between gap-4 text-left bg-[#FAF7F2] dark:bg-[#221A1D] hover:bg-[#F3ECE0] dark:hover:bg-[#2A2023] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7A1F2B]"
      >
        <div className="text-sm sm:text-base font-semibold text-[#1F1B1D] dark:text-[#F5EFEA]">
          {item.prefix && (
            <span className="text-xs font-bold text-[#7A1F2B] dark:text-[#C9A24B] mr-2">
              {item.prefix}
            </span>
          )}
          <span>{item.title}</span>
        </div>
        <ChevronDown
          className={`w-4.5 h-4.5 text-[#7A1F2B] dark:text-[#C9A24B] shrink-0 transition-transform duration-200 no-print ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        ref={panelRef}
        id={`acc-panel-${item.id}`}
        role="region"
        aria-labelledby={`acc-btn-${item.id}`}
        className="overflow-hidden bg-white dark:bg-[#1C1618]"
        style={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      >
        <div className="p-4 sm:p-5 text-sm text-[#4A4144] dark:text-[#CFC6C0]">
          {item.content}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items, defaultOpenId = null }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  return (
    <div className="rounded-2xl border border-[#EAE1D4] dark:border-[#2E2427] overflow-hidden bg-white dark:bg-[#1C1618] print-container">
      {items.map((item) => (
        <AccordionRow
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}

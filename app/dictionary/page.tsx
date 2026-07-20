import type { Metadata } from 'next';
import { Search, BookA, BookOpen } from 'lucide-react';

export const metadata: Metadata = { title: 'Dictionary' };

export default function DictionaryPage() {
  const popularTerms = [
    { term: 'Variable (ভেরিয়েবল)', desc: 'A container for storing data values.' },
    { term: 'Function (ফাংশন)', desc: 'A block of code which only runs when it is called.' },
    { term: 'Loop (লুপ)', desc: 'A sequence of instructions that is continually repeated.' },
    { term: 'Syntax (সিনট্যাক্স)', desc: 'The rules that define the structure of a language.' },
  ];

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto space-y-8">
      <section className="text-center max-w-2xl mx-auto space-y-4 mt-8">
        <h1 className="text-4xl font-bold text-foreground font-bangla-ui">ডিকশনারি</h1>
        <p className="text-muted-foreground">Search for programming terms and understand them deeply in Bangla.</p>
        
        <div className="relative mt-8 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-surface/50 text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent glass text-lg transition-all"
            placeholder="Search for terms (e.g., Variable, Loop)..."
          />
        </div>
      </section>

      <section className="pt-8">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" /> Popular Terms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularTerms.map((item, i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors cursor-pointer group">
              <h3 className="font-semibold text-primary mb-1 group-hover:text-primary-hover font-bangla">{item.term}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="pt-12 flex flex-col items-center justify-center text-center opacity-60">
        <BookA className="w-16 h-16 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium text-foreground">Explore the Dictionary</h3>
        <p className="text-sm text-muted-foreground max-w-sm mt-2">
          Search for a programming term above to see its definition, analogy, and examples in Bangla.
        </p>
      </div>
    </div>
  );
}

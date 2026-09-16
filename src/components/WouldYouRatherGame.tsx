import React, { useState } from 'react';
import { Flame, RefreshCw, Trophy, Sparkles } from 'lucide-react';

interface Scenario {
  id: number;
  optionA: string;
  optionB: string;
  votesA: number;
  votesB: number;
  roastA: string;
  roastB: string;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    optionA: "Only write C++ without pointers for the rest of your life",
    optionB: "Have your browser history read aloud at every family gathering",
    votesA: 64,
    votesB: 36,
    roastA: "You chose safe syntactical torture over emotional damage. Respectable cowardice.",
    roastB: "Bold move! Either you have zero secrets or complete faith in your incognito tab."
  },
  {
    id: 2,
    optionA: "Fix a bug in assembly code with no documentation or line numbers",
    optionB: "Explain what an API is to your grand-aunt using only cooking metaphors",
    votesA: 42,
    votesB: 58,
    roastA: "You enjoy pain. Someone check if your CPU is thermal throttling.",
    roastB: "Hope you like explaining REST as 'pass the butter to table 4'."
  },
  {
    id: 3,
    optionA: "Your AI model hallucinates fake facts in front of 500 tech investors",
    optionB: "Your hardware prototype starts smoking 10 seconds into a live demo",
    votesA: 31,
    votesB: 69,
    roastA: "The classic 'it was working on my local GPU' excuse won't save you here!",
    roastB: "Ah, the smell of burning magic smoke! True hardware engineering experience."
  },
  {
    id: 4,
    optionA: "Never use Stack Overflow or LLMs again for coding",
    optionB: "Every code comment you write must be a rhyming Haiku",
    votesA: 18,
    votesB: 82,
    roastA: "Enjoy memorizing standard library signatures like it's 1992!",
    roastB: "Line four hundred three / Null pointer exception here / Sad compiler cries."
  }
];

const overallRoasts = [
  "Verdict: You choose chaos over comfort. You'd make a great hardware debugger or an extreme refactoring engineer!",
  "Verdict: You are painfully pragmatic. You always pick the option that minimizes immediate public embarrassment!",
  "Verdict: Pure risk-taker! You'd push code to production on a Friday afternoon without testing."
];

export const WouldYouRatherGame: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);
  const [history, setHistory] = useState<('A' | 'B')[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const currentScenario = scenarios[currentIndex];

  const handleSelect = (option: 'A' | 'B') => {
    if (selectedOption) return;
    setSelectedOption(option);
    const newHistory = [...history, option];
    setHistory(newHistory);
  };

  const handleNext = () => {
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setHistory([]);
    setIsFinished(false);
  };

  const calculateOverallRoast = () => {
    const aCount = history.filter(h => h === 'A').length;
    if (aCount >= 3) return overallRoasts[0];
    if (aCount === 2) return overallRoasts[1];
    return overallRoasts[2];
  };

  return (
    <div className="bg-canvas border-2 border-ink rounded-3xl p-6 sm:p-10 shadow-card relative overflow-hidden">
      {/* Decorative Badge */}
      <div className="flex items-center justify-between border-b border-editorial pb-6 mb-6">
        <div className="flex items-center space-x-2 text-vermilion">
          <Flame size={20} className="animate-bounce" />
          <span className="font-editorial font-bold text-lg text-ink">
            Would You Rather — Roasting Engine
          </span>
        </div>
        <div className="font-mono text-xs bg-surface px-3 py-1 rounded-full text-ink-muted border border-border-subtle">
          {!isFinished ? `Scenario ${currentIndex + 1} of ${scenarios.length}` : 'Roast Complete'}
        </div>
      </div>

      {!isFinished ? (
        <div>
          <h4 className="font-editorial text-xl sm:text-2xl font-bold text-ink mb-6 text-center">
            Pick your poison:
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Option A */}
            <button
              onClick={() => handleSelect('A')}
              disabled={!!selectedOption}
              className={`p-6 rounded-2xl text-left border-2 transition-all duration-300 flex flex-col justify-between ${
                selectedOption === 'A'
                  ? 'border-vermilion bg-vermilion/5 ring-2 ring-vermilion/20'
                  : selectedOption === 'B'
                  ? 'border-border-subtle opacity-50 bg-surface'
                  : 'border-editorial bg-surface hover:border-ink hover:bg-canvas shadow-subtle'
              }`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-wider block mb-2">
                  Option A
                </span>
                <p className="font-sans font-semibold text-ink text-base sm:text-lg leading-snug">
                  {currentScenario.optionA}
                </p>
              </div>

              {selectedOption && (
                <div className="mt-4 pt-4 border-t border-border-subtle animate-fadeIn">
                  <div className="flex items-center justify-between font-mono text-xs font-bold text-ink mb-1">
                    <span>Community Votes</span>
                    <span>{currentScenario.votesA}%</span>
                  </div>
                  <div className="w-full bg-surface-hover h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-vermilion h-full transition-all duration-500" 
                      style={{ width: `${currentScenario.votesA}%` }} 
                    />
                  </div>
                </div>
              )}
            </button>

            {/* Option B */}
            <button
              onClick={() => handleSelect('B')}
              disabled={!!selectedOption}
              className={`p-6 rounded-2xl text-left border-2 transition-all duration-300 flex flex-col justify-between ${
                selectedOption === 'B'
                  ? 'border-vermilion bg-vermilion/5 ring-2 ring-vermilion/20'
                  : selectedOption === 'A'
                  ? 'border-border-subtle opacity-50 bg-surface'
                  : 'border-editorial bg-surface hover:border-ink hover:bg-canvas shadow-subtle'
              }`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">
                  Option B
                </span>
                <p className="font-sans font-semibold text-ink text-base sm:text-lg leading-snug">
                  {currentScenario.optionB}
                </p>
              </div>

              {selectedOption && (
                <div className="mt-4 pt-4 border-t border-border-subtle animate-fadeIn">
                  <div className="flex items-center justify-between font-mono text-xs font-bold text-ink mb-1">
                    <span>Community Votes</span>
                    <span>{currentScenario.votesB}%</span>
                  </div>
                  <div className="w-full bg-surface-hover h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-amber-600 h-full transition-all duration-500" 
                      style={{ width: `${currentScenario.votesB}%` }} 
                    />
                  </div>
                </div>
              )}
            </button>
          </div>

          {/* AI Roast Output Banner */}
          {selectedOption && (
            <div className="p-5 rounded-2xl bg-surface border border-vermilion/30 text-ink mb-6 animate-fadeIn flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-vermilion flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-wider block">
                  AI Verdict & Roast:
                </span>
                <p className="text-sm font-sans font-medium text-ink mt-1">
                  {selectedOption === 'A' ? currentScenario.roastA : currentScenario.roastB}
                </p>
              </div>
            </div>
          )}

          {/* Next Button */}
          {selectedOption && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-full bg-ink text-canvas font-mono text-xs font-bold hover:bg-vermilion transition-colors duration-200 flex items-center space-x-2"
              >
                <span>{currentIndex < scenarios.length - 1 ? 'Next Scenario →' : 'See Final Roast Verdict →'}</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Final Results & Summary */
        <div className="text-center py-6 animate-fadeIn space-y-6">
          <div className="w-16 h-16 rounded-full bg-vermilion/10 text-vermilion flex items-center justify-center mx-auto mb-2">
            <Trophy size={32} />
          </div>

          <h3 className="font-editorial text-3xl font-bold text-ink">
            You Survived the Roasting Game!
          </h3>

          <div className="p-6 rounded-2xl bg-surface border border-editorial max-w-xl mx-auto text-left">
            <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-wider block mb-2">
              Final Personality Evaluation:
            </span>
            <p className="font-sans text-base font-medium text-ink leading-relaxed">
              {calculateOverallRoast()}
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={handleReset}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-ink text-canvas font-mono text-xs font-bold hover:bg-vermilion transition-colors duration-200"
            >
              <RefreshCw size={14} />
              <span>Play Again</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

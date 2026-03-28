import { useState, useCallback } from 'react';

const STAT_LABELS = {
  hp: 'HP',
  stamina: 'STA',
  will: 'WILL',
  arousal: 'ARO',
  milk: 'MILK'
};

const StatBadge = ({ label, value }) => {
  if (value === 0) return null;
  const isPositive = value > 0;
  return (
    <span className={`inline-block text-xs font-bold px-1.5 py-0.5 rounded border ${
      isPositive
        ? 'text-green-400 border-green-800/50 bg-green-900/20'
        : 'text-red-400 border-red-800/50 bg-red-900/20'
    }`}>
      {label} {isPositive ? '+' : ''}{value}
    </span>
  );
};

const FighterCard = ({ fighter, isSelected, selectionType, onClick }) => {
  const borderClass = isSelected
    ? selectionType === 'player'
      ? 'border-pink-500 shadow-[0_0_20px_rgba(255,0,128,0.4)]'
      : 'border-purple-500 shadow-[0_0_20px_rgba(128,0,255,0.4)]'
    : 'border-red-900/30 hover:border-red-700/50';

  const labelColor = selectionType === 'player' ? 'text-pink-400' : 'text-purple-400';

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 bg-neutral-900 border-2 rounded-lg transition-all duration-200 cursor-pointer relative ${borderClass}`}
    >
      {isSelected && (
        <div className={`absolute top-2 right-2 text-[10px] font-black uppercase tracking-widest ${labelColor}`}>
          {selectionType === 'player' ? 'YOU' : 'OPPONENT'}
        </div>
      )}
      <h3 className="text-white font-black text-sm md:text-base tracking-wide">{fighter.name}</h3>
      <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">{fighter.subtitle}</p>
      <p className="text-gray-400 text-xs leading-relaxed mb-3">{fighter.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {Object.entries(fighter.statMods).map(([key, val]) => (
          <StatBadge key={key} label={STAT_LABELS[key]} value={val} />
        ))}
        {Object.values(fighter.statMods).every(v => v === 0) && (
          <span className="text-xs text-gray-600 italic">Baseline stats</span>
        )}
      </div>
    </button>
  );
};

const CharacterSelectScreen = ({ roster, onConfirm }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedEnemy, setSelectedEnemy] = useState(null);

  const pickRandomEnemy = useCallback((excludeId) => {
    const candidates = roster.filter(f => f.id !== excludeId);
    return candidates[Math.floor(Math.random() * candidates.length)].id;
  }, [roster]);

  const handleSelect = (fighterId) => {
    if (selectedEnemy === fighterId) return;
    setSelectedPlayer(fighterId);
    setSelectedEnemy(pickRandomEnemy(fighterId));
  };

  const handleReroll = () => {
    if (!selectedPlayer) return;
    const candidates = roster.filter(f => f.id !== selectedPlayer && f.id !== selectedEnemy);
    if (candidates.length === 0) {
      setSelectedEnemy(pickRandomEnemy(selectedPlayer));
    } else {
      setSelectedEnemy(candidates[Math.floor(Math.random() * candidates.length)].id);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center w-full max-w-5xl mx-auto p-2 md:p-4 z-10">
      <div className="w-full bg-neutral-950 border-2 border-red-900/40 rounded-lg p-5 md:p-8 shadow-[0_0_25px_rgba(220,38,38,0.1)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.03)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none"></div>

        <h2 className="text-xl md:text-3xl font-black text-red-600 mb-2 border-b border-red-900/50 pb-3 tracking-widest uppercase relative z-10 flex items-center">
          <span className="inline-block w-3 h-3 bg-red-600 rounded-full animate-pulse mr-3"></span>
          Select Your Fighter
        </h2>
        <p className="text-gray-500 text-xs md:text-sm mb-6 relative z-10 font-mono">Choose your condemned. The syndicate will assign your opponent.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 relative z-10">
          {roster.map(fighter => {
            const isPlayer = selectedPlayer === fighter.id;
            const isEnemy = selectedEnemy === fighter.id;
            const selectionType = isPlayer ? 'player' : isEnemy ? 'enemy' : null;
            return (
              <FighterCard
                key={fighter.id}
                fighter={fighter}
                isSelected={isPlayer || isEnemy}
                selectionType={selectionType}
                onClick={() => handleSelect(fighter.id)}
              />
            );
          })}
        </div>

        {selectedPlayer && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 border-t border-red-900/50 pt-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-pink-400 font-bold">{roster.find(f => f.id === selectedPlayer)?.name}</span>
              <span className="text-gray-600 font-black">VS</span>
              <span className="text-purple-400 font-bold">{roster.find(f => f.id === selectedEnemy)?.name}</span>
              <button
                onClick={handleReroll}
                className="ml-2 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded transition-all bg-neutral-900 hover:bg-neutral-800"
              >
                Re-roll Opponent
              </button>
            </div>

            <button
              onClick={() => onConfirm(selectedPlayer, selectedEnemy)}
              className="px-6 md:px-10 py-3 md:py-4 bg-red-900/20 hover:bg-red-800/40 border border-red-600 text-red-500 hover:text-white font-black uppercase tracking-widest transition-all rounded shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]"
            >
              [ Enter the Ring ]
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterSelectScreen;

import { MAX_HP, MAX_STAMINA, MAX_WILL, MAX_AROUSAL, MAX_MILK } from './constants.js';

export const FIGHTER_ROSTER = [
  {
    id: 'jax',
    name: 'Jax "The Butcher"',
    subtitle: 'Default Issue',
    description: 'Three prior matches, no title, just grit. The bookies call her "default issue" — no edges, no holes. She survives because she doesn\'t quit.',
    statMods: { hp: 0, stamina: 0, will: 0, arousal: 0, milk: 0 }
  },
  {
    id: 'siobhan',
    name: 'Siobhan',
    subtitle: 'Pit-Racer',
    description: 'Former Underhive pit-racer. Lean and wiry — built for cardio, not for taking hits. Her fast metabolism means the hormone cocktail hits her system harder; she runs hotter from the opening bell.',
    statMods: { hp: -50, stamina: 50, will: 0, arousal: 5, milk: 0 }
  },
  {
    id: 'kova',
    name: 'Kova "The Slab"',
    subtitle: 'Foundry Stock',
    description: 'Ex-foundry laborer from the industrial level. Built like rebar and concrete. Her dense frame absorbs punishment but gasses fast under exertion. A botched black-market hormone blocker left her arousal response slightly dulled — the syndicate calls her "defective merchandise."',
    statMods: { hp: 100, stamina: -100, will: 0, arousal: -5, milk: 0 }
  },
  {
    id: 'nyx',
    name: 'Nyx',
    subtitle: 'Spire-Born',
    description: 'Spire-born contract killer. Elite cardio, ruthless efficiency, zero experience being bred. First time in the pits. The psychological horror of what the injections do to her body erodes her willpower faster than the veterans.',
    statMods: { hp: -50, stamina: 100, will: -10, arousal: 0, milk: 0 }
  },
  {
    id: 'vex',
    name: 'Vex "54"',
    subtitle: 'Four-Time Survivor',
    description: 'Four-time survivor. Inmate number tattooed on her neck. Her body has been through the Strain 88.4 load before — she starts with residual milk production that never fully stopped. But her willpower is slag-hardened. The syndicate keeps bringing her back because the crowd loves watching a veteran resist.',
    statMods: { hp: 0, stamina: -50, will: 15, arousal: 0, milk: 5 }
  },
  {
    id: 'rhea',
    name: 'Rhea "Lot 7"',
    subtitle: 'Ex-Breeding Stock',
    description: 'Former corporate breeding stock who earned a ring slot by killing a handler with her bare hands. Thick, durable frame — but her endocrine system is already primed from years in the surrogacy wards. Starts hotter and milkier because her body remembers.',
    statMods: { hp: 50, stamina: 0, will: -10, arousal: 10, milk: 5 }
  }
];

export function applyStatMods(baseFighter, rosterEntry) {
  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
  return {
    ...baseFighter,
    name: rosterEntry.name,
    hp: clamp(baseFighter.hp + rosterEntry.statMods.hp, 1, MAX_HP),
    stamina: clamp(baseFighter.stamina + rosterEntry.statMods.stamina, 1, MAX_STAMINA),
    will: clamp(baseFighter.will + rosterEntry.statMods.will, 1, MAX_WILL),
    arousal: clamp(baseFighter.arousal + rosterEntry.statMods.arousal, 0, MAX_AROUSAL),
    milk: clamp(baseFighter.milk + rosterEntry.statMods.milk, 0, MAX_MILK),
  };
}

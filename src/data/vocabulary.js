export const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const T_BELLY = ["broodsac", "breeder-belly", "incubator-paunch", "fluid-balloon", "stretch-drum", "breeding-sack", "brood-tank", "front-loaded distension"];
export const T_BRATS = ["chonks", "piggies", "womb-hogs", "meat-leeches", "slosh-brats", "marrow-suckers", "greedy piglets", "massive brats"];
export const T_BRAT_ACT = ["startle-kick", "panic-thrash", "greed-slosh", "gut-punch", "strip-mine her muscle", "demand-squirm", "hunger-kick"];
export const T_TITS = ["squishtits", "dairy-jugs", "slosh-boulders", "milk-melons", "bloat-bags", "titmeat", "breeder-udders", "heavy liabilities"];
export const T_FAT = ["mommypadding", "breederfat", "fuckmattress", "cellulite-saddle", "thigh-jelly", "hip-slop", "breed-cushion", "heavily grounded base"];
export const T_SOFT = ["skinny-fat", "butter-flesh", "yield-squish", "pillowy-ruin", "doughy", "hyper-estrogenic", "ruined", "softened"];
export const T_FAT_ACT = ["waddle-slap", "tit-smother", "fat-trap", "squish-wedge", "blubber-slap", "adipose-drag"];
export const T_JOINTS = ["balloon-joints", "bloat-tendons", "puff-knuckles", "shudder-twigs", "rubber-knees", "jelly-ankles", "melt-ligaments", "noodle-hips"];
export const T_FLINCH = ["wobble-buckle", "pain-flinch", "joint-give", "lock up", "hyperextend", "snap-buckle", "grind-seize"];

export const FLAVOR_TEXTS = [
  { type: 'flavor', cond: (f) => f.fetalSize < 4 && !f.isDowned, text: "Sleek, hard, and toned. {name} moves with pure athletic arrogance, determined to rip her opponent apart before the seed can take root." },
  { type: 'flavor', cond: (f) => f.fetalSize >= 4 && f.fetalSize < 7 && !f.isDowned, text: `{name}'s taut fighting core is ruined by a firm, protruding ${rand(T_BELLY)}. She glares murderously at the crowd as they jeer her expanding shape.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 4 && f.fetalSize < 7 && !f.isDowned, text: `A vicious ${rand(T_BRAT_ACT)} from the ${rand(T_BRATS)} makes {name} gasp. She angrily tightens her remaining abs, refusing to submit.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 7 && f.fetalSize < 12, text: `The perverse crowd roars with sick glee, heavily objectifying {name}'s waddling frame. She spits on the mat, furiously trying to stabilize her incredibly heavy, distended ${rand(T_BELLY)}.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 12 && !f.isDowned, text: `Physically ruined, but mentally furious. {name} grits her teeth in sheer agony, refusing to stop fighting even as her grotesque 12-month ${rand(T_BELLY)} violently stretches her skin to the tearing point.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 10 && f.hp > 0, text: `The crushing weight of the ${rand(T_BRATS)} grinds mercilessly against {name}'s prostate. She bites her lip until it bleeds, fighting back the humiliating, involuntary whimpers.` },
  { type: 'flavor', cond: (f) => f.voluptuousness < 25 && !f.isDowned, text: "Sweat gleams on {name}'s hard, toned physique. Her low-fat, lean fighting body is a testament to her athletic pride." },
  { type: 'flavor', cond: (f) => f.voluptuousness >= 25 && f.voluptuousness < 50 && !f.isDowned, text: `{name} snarls as her fighting core is erased. Thick, greedy layers of ${rand(T_FAT)} violently gorge her thighs, forcing an embarrassingly plush waddle she desperately tries to correct.` },
  { type: 'flavor', cond: (f) => f.voluptuousness >= 50 && f.voluptuousness < 75 && !f.isDowned, text: `Forced into an extreme, hyper-sexualized hourglass shape, {name} swings wildly, using the sheer, humiliating momentum of her ${rand(T_FAT)} as a weapon of pure spite.` },
  { type: 'flavor', cond: (f) => f.voluptuousness >= 75 && !f.isDowned, text: `Buried alive in her own targeted ${rand(T_FAT)}, {name} refuses to fall. Her body is a dripping fuck-toy, but her mind is still a gladiator's.` },
  { type: 'flavor', cond: (f) => f.voluptuousness >= 75 && !f.isDowned, text: `The absurd, gelatinous bulk of her incredible cellulite-choked thighs and heavily sloshing ${rand(T_TITS)} physically drags her down, but {name} roars, forcing her humiliated broodsow frame to keep fighting.` },
  { type: 'flavor', cond: (f) => f.strain > 20 && f.strain < 50 && !f.isDowned, text: `{name}'s joints ache subtly, but she violently forces her exceptionally meaty, rubenesque hips to follow her footwork.` },
  { type: 'flavor', cond: (f) => f.strain >= 50 && f.strain < 80 && !f.isDowned, text: `Every heavy step causes {name}'s ${rand(T_JOINTS)} to pop. She screams through the pain, punishing her skeleton to keep her massive meat moving.` },
  { type: 'flavor', cond: (f) => f.strain >= 80 && !f.isDowned, text: `A furious, guttural roar tears from {name}'s throat as her pulverized cartilage grinds. She refuses to let her own ${rand(T_JOINTS)} completely ${rand(T_FLINCH)}.` },
  { type: 'flavor', cond: (f) => f.milk > 40 && f.milk < 70, text: `Her overstimulated milk ducts throb painfully. {name} scowls at the hot pressure backing up beneath her areolas.` },
  { type: 'flavor', cond: (f) => f.milk >= 70, text: `Her body is a leaking, desperate dairy-cow, but her spirit is iron. {name} ignores the hot colostrum spraying from her violently engorged ducts, swinging through the agony.` },
  { type: 'flavor', cond: (f) => f.arousal > 60 && f.arousal < 70 && !f.inHeat, text: `Slick with filthy breeding-sweat, {name}'s traitorous ${rand(T_FAT)} involuntarily grind together. She punches her own leg in pure frustration, trying to break the arousal.` },
  { type: 'flavor', cond: (f) => f.arousal >= 70 && !f.inHeat, text: `Her hormone-cooked brain is melting, but {name} fights it! She furiously wipes the thick drool from her lips, ignoring her heavily engorged futa-hog twitching beneath her fat.` },
  { type: 'flavor', cond: (f) => f.inHeat, text: `SAVAGE HEAT! {name}'s mind screams in trapped horror! Her biology completely overrides her willpower, forcing her dripping, congested anatomy to wildly, humiliatingly rut!` },
  { type: 'flavor', cond: (f) => f.stamina < 300, text: `{name}'s doughy, cannibalized arms drop. She gasps for air, desperately ordering her massive, sloshing ${rand(T_BELLY)} to take just one more step.` },
  { type: 'flavor', cond: (f) => f.isDowned && f.fetalSize > 10, text: `Pinned like a stuck turtle under her own ${rand(T_BELLY)}, {name} thrashes violently on the mat, weeping in pure rage as her heavy, dimpled hips refuse to lift.` },
  { type: 'flavor', cond: (f) => f.isDowned && f.fetalSize > 6, text: `{name} claws at the canvas, her massive ${rand(T_BELLY)} acting like a boulder strapped to her core. She screams at her own useless body, commanding it to RISE.` },
  { type: 'flavor', cond: (f) => f.isDowned && f.voluptuousness >= 40, text: `Splayed on the canvas like a beached whale, {name}'s ${rand(T_FAT)} spreads obscenely around her. The crowd jeers as she fights to roll her ruined body onto its side.` },

  // Mid-pregnancy flavor (fetalSize 4-7 — critical transition)
  { type: 'flavor', cond: (f) => f.fetalSize >= 4 && f.fetalSize < 7 && !f.isDowned, text: `{name}'s center of gravity is visibly shifting. She stumbles on a pivot she's executed ten thousand times in training, cursing viciously as the growing ${rand(T_BELLY)} betrays her muscle memory.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 5 && f.fetalSize < 8 && !f.isDowned, text: `The ${rand(T_BRATS)} are getting heavier by the minute. {name} can feel them rearranging her insides, the greedy parasites already cannibalizing her hard-earned muscle to fuel their growth.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 4 && f.fetalSize < 7 && !f.isDowned, text: `{name}'s waistband has split. The firm dome of her pregnant belly juts forward, straining against whatever containment is left. She adjusts her stance wider, accommodating the alien mass with cold fury.` },

  // High voluptuousness (long-lived late-game state)
  { type: 'flavor', cond: (f) => f.voluptuousness >= 75 && !f.isDowned, text: `The sheer, obscene width of {name}'s hips forces the ropes apart when she leans back. Every square inch of her is padded with dense, sloshing ${rand(T_FAT)}, but behind her eyes, the killer still lives.` },
  { type: 'flavor', cond: (f) => f.voluptuousness >= 60 && f.voluptuousness < 85 && !f.isDowned, text: `{name}'s formerly athletic thighs now clap together with every step, the dense ${rand(T_FAT)} jiggling in humiliating waves. She grits her teeth and channels the shame into raw, desperate violence.` },

  // Arousal flavor
  { type: 'flavor', cond: (f) => f.arousal >= 40 && f.arousal < 60 && !f.inHeat && !f.isDowned, text: `A treacherous warmth pools between {name}'s thick thighs. She punches her own hip in furious denial, but her engorged anatomy throbs on, indifferent to her willpower.` },
  { type: 'flavor', cond: (f) => f.arousal >= 55 && f.arousal < 75 && !f.inHeat && !f.isDowned, text: `{name}'s pupils are dilating. Her breath comes in ragged, involuntary gasps as her hormone-flooded brain wages a losing war against the tide of forced arousal building in her ruined body.` },

  // Late-game crowd/environmental
  { type: 'flavor', cond: (f) => f.fetalSize >= 8 && f.voluptuousness >= 50 && !f.isDowned, text: `A handler at ringside mutters into a radio, pre-staging the maternity gurney. The crowd catches the movement and roars — they know what it means. The end is close.` },
  { type: 'flavor', cond: (f) => f.voluptuousness >= 65 && f.fetalSize >= 7 && !f.isDowned, text: `The arena's industrial ventilation struggles against the thick miasma of hormones, milk, and desperation. Front-row spectators press scarves to their faces, but none look away from {name}'s waddling, dripping spectacle.` },

  { type: 'warning', cond: (f) => f.strain >= 65 && f.strain < 85 && !f.isDowned, text: `STRAIN CRITICAL: {name}'s ${rand(T_JOINTS)} buckle! She is trading her skeletal integrity for every punch!` },
  { type: 'warning', cond: (f) => f.voluptuousness >= 65 && f.voluptuousness < 85, text: `BREEDERFAT CRITICAL: {name}'s dense, suffocating padding is actively crushing her lungs, starving her of stamina!` },
  { type: 'warning', cond: (f) => f.milk >= 60 && f.milk < 80, text: `MILK BLOAT CRITICAL: The sheer pressure in {name}'s violently swollen milk ducts is constantly draining her health!` },
  { type: 'warning', cond: (f) => f.arousal >= 40 && f.arousal < 55 && !f.inHeat, text: `AROUSAL RISING: {name}'s loaded balls throb painfully! She is fighting a desperate, losing battle against a humiliating, forced climax!` },
  { type: 'warning', cond: (f) => f.arousal >= 60 && f.arousal < 70 && !f.inHeat, text: `HEAT IMMINENT: {name}'s willpower is cracking! One more spike of lust and her traitorous body will completely hijack her mind into Savage Heat!` },
  { type: 'warning', cond: (f) => f.fetalSize >= 10 && f.fetalSize < 12 && !f.isDowned, text: `LABOR IMMINENT: The gruesome size of {name}'s macrosomic male litters practically paralyzes her, fighting her every desperate movement!` },

  // EARLY GAME TENSION — fire before degradation kicks in
  { type: 'flavor', cond: (f) => f.fetalSize < 3 && f.voluptuousness < 10 && !f.isDowned, text: `{name} can feel it. Deep in her gut, the engineered seed is already dividing, burrowing into her uterine wall. The clock is ticking.` },
  { type: 'flavor', cond: (f) => f.fetalSize < 3 && f.voluptuousness < 10 && !f.isDowned, text: `Every muscle on {name}'s body is still perfectly defined, glistening under the harsh arena lights. Savor it. The hormones haven't found her yet.` },
  { type: 'flavor', cond: (f) => f.fetalSize < 2 && f.strain < 10 && !f.isDowned, text: `{name}'s joints are still razor-sharp, pivoting with elite precision. Somewhere deep in her bloodstream, the relaxin is already seeping into her cartilage.` },
  { type: 'flavor', cond: (f) => f.fetalSize < 3 && !f.isDowned, text: `A faint, sick warmth pulses in {name}'s lower abdomen. The Strain 88.4 synthetic gametes are aggressively implanting, and there is absolutely nothing she can do about it.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 2 && f.fetalSize < 4 && f.voluptuousness < 15 && !f.isDowned, text: `{name} catches a glimpse of her reflection in the sweaty plexiglass barrier. Still lean. Still lethal. But her lower abs are softening, just barely. The theft has begun.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 1 && f.fetalSize < 3 && !f.isDowned, text: `The bookmakers haven't adjusted their odds yet. {name} still looks like a killer. But the engineered litter is doubling in mass every few minutes, invisibly eating her from inside.` },

  // ENVIRONMENTAL / CROWD — the arena is alive
  { type: 'flavor', cond: (f) => f.fetalSize >= 4 && f.voluptuousness >= 20 && !f.isDowned, text: `The Underhive crowd erupts in jeering catcalls as {name}'s widening hips force a visible waddle. Someone throws a nursing bra onto the canvas.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 7 && !f.isDowned, text: `Harsh sodium lights catch the oily sheen of stretched skin across {name}'s massive belly. The arena floor is slick with sweat, milk, and something worse.` },
  { type: 'flavor', cond: (f) => f.voluptuousness >= 40 && !f.isDowned, text: `A roar of sick, objectifying laughter ripples through the stands as {name}'s ruined, jiggling frame stumbles. The betting screens flash wildly — the bookmakers are recalculating in real time.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 6 && f.milk >= 30, text: `Droplets of warm milk splatter the blood-stained canvas beneath {name}. The arena's drainage grates are already clogged with the fluids of previous fighters.` },
  { type: 'flavor', cond: (f) => f.voluptuousness >= 50 && f.fetalSize >= 8 && !f.isDowned, text: `The stench of hormones, breast milk, and breeding-sweat hangs thick under the arena lights. {name} gags on the humid air, her own body contributing to the reek.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 5 && f.strain >= 30, text: `A section of the crowd begins rhythmically chanting, pounding the plexiglass barriers as {name} struggles to stay upright. They've seen this before. They know what comes next.` },
  { type: 'flavor', cond: (f) => f.arousal >= 50 && !f.inHeat && !f.isDowned, text: `The arena cameras zoom in on {name}'s flushed, sweating face and the wet, visible bulge straining through her ruined shorts. The audience howls with perverse delight.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 9 && f.voluptuousness >= 60 && !f.isDowned, text: `The overhead display flashes {name}'s biometrics to the crowd — fetal mass, fat percentage, arousal index. Every stat is a public humiliation, broadcast to thousands of leering spectators.` },
  { type: 'flavor', cond: (f) => f.downs >= 1 && f.fetalSize >= 6 && !f.isDowned, text: `Corner crews hose down {name}'s section of the canvas between exchanges. The pink, milk-streaked runoff pools in the drainage channel. The arena has seen far worse.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 3 && f.fetalSize < 6 && !f.isDowned, text: `A veteran bettor in the front row leans forward, squinting at the subtle swell beneath {name}'s waistband. He nods slowly and taps his datapad. The smart money is already moving.` },

  // COMPOUND-STAT: Pregnancy + Strain (relaxin-melted joints crushed by fetal weight)
  { type: 'flavor', cond: (f) => f.fetalSize >= 6 && f.strain >= 40 && !f.isDowned, text: `A sickening double cruelty: the ${rand(T_BRATS)} have flooded {name}'s bloodstream with relaxin, turning her cartilage to warm putty — and then stacked forty pounds of squirming fetal mass directly on top of those melted joints. Every step is a controlled demolition of her own skeleton.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 7 && f.strain >= 50 && !f.isDowned, text: `{name}'s ${rand(T_JOINTS)} make a sound like wet gravel as the crushing weight of the ${rand(T_BRATS)} grinds through relaxin-dissolved cartilage. Her body has been chemically softened and then mechanically overloaded — the pregnancy's cruelest trick, and there's no way to fight both at once.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 8 && f.strain >= 60 && !f.isDowned, text: `The relaxin has done its work too well. {name}'s pelvis is so hormonally loosened that the ${rand(T_BRATS)}' mass is physically spreading her hip bones apart, widening her stance against her will. She can feel her skeleton rearranging itself in real time, redesigning her body for birth whether she wants it or not.` },

  // COMPOUND-STAT: Pregnancy + Arousal (prostate grinding from fetal mass)
  { type: 'flavor', cond: (f) => f.fetalSize >= 7 && f.arousal >= 35 && !f.inHeat && !f.isDowned, text: `The macrosomic ${rand(T_BRATS)} have settled low in {name}'s pelvis, their combined weight pressing directly onto her prostate with every movement. It's not pain — it's worse than pain. It's a constant, grinding, involuntary stimulation that makes her futa-meat twitch and leak no matter how hard she clenches.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 8 && f.arousal >= 40 && !f.inHeat && !f.isDowned, text: `Every time {name} shifts her weight, the massive fetal mass rocks across her prostate like a pestle in a mortar. Her eyes go wide and glassy for half a second before she bites down on her mouthguard hard enough to crack it. The pregnancy is weaponizing her own anatomy against her.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 9 && f.arousal >= 45 && !f.inHeat && !f.isDowned, text: `The ${rand(T_BRATS)} are so massive that their weight creates a permanent, grinding pressure on {name}'s prostate. She hasn't been able to make it stop for three rounds. Her futa-meat is visibly engorged, tenting her ruined shorts, and every fetal kick sends a jolt of horrifying, unwanted pleasure through her entire pelvic floor.` },

  // COMPOUND-STAT: Mid-pregnancy downed (fetalSize 4-6, gap between existing >6 and >10 downed texts)
  { type: 'flavor', cond: (f) => f.isDowned && f.fetalSize >= 4 && f.fetalSize < 7, text: `{name} hits the canvas belly-first and a strangled scream tears from her throat — not for herself, but from the sickening sensation of the ${rand(T_BRATS)} violently sloshing inside her on impact. She rolls awkwardly onto her side, her growing belly making the recovery she's drilled a thousand times suddenly, infuriatingly wrong.` },
  { type: 'flavor', cond: (f) => f.isDowned && f.fetalSize >= 4 && f.fetalSize < 7, text: `The belly isn't big enough to pin her yet, but it's big enough to MATTER. {name} pushes up from the canvas and the unfamiliar weight shifts forward, throwing off her center of gravity mid-rise. She stumbles, catches herself, and snarls — furious that a body she's trained for years is already becoming a stranger.` },

  // COMPOUND-STAT: Skin stretching horror (late pregnancy visual horror)
  { type: 'flavor', cond: (f) => f.fetalSize >= 9 && !f.isDowned, text: `Under the harsh arena lights, {name}'s belly has become translucent — the blue tributaries of veins and the dark, shifting shadows of fetal bodies visible through skin stretched to its engineering limits. Angry purple stretch marks claw across her flanks like claw marks, splitting open as the ${rand(T_BRATS)} push outward.` },
  { type: 'flavor', cond: (f) => f.fetalSize >= 10 && !f.isDowned, text: `A distinct fetal elbow pushes outward against {name}'s drum-tight skin, dragging slowly across her belly like something trying to escape a membrane. The crowd gasps. {name} doesn't even flinch — she's felt it so many times now that the horror has become background noise, just another insult her body inflicts between punches.` }
];

export const ENEMY_BARKS = [
  // Early game — defiant, cocky
  { cond: (f) => f.fetalSize < 4 && f.voluptuousness < 20 && !f.isDowned, text: `"You'll drop before I do, bitch."` },
  { cond: (f) => f.fetalSize < 4 && f.voluptuousness < 20 && !f.isDowned, text: `"Still tight. Still fast. Still me."` },
  { cond: (f) => f.fetalSize < 3 && !f.isDowned, text: `"I've killed bigger fighters than you before the seed even took."` },
  { cond: (f) => f.fetalSize < 4 && f.stamina > 600 && !f.isDowned, text: `"Come closer. I want you to feel this."` },

  // Mid degradation — frustrated, struggling
  { cond: (f) => f.fetalSize >= 4 && f.fetalSize < 8 && !f.isDowned, text: `"These fucking parasites... I can feel them feeding..."` },
  { cond: (f) => f.voluptuousness >= 25 && f.voluptuousness < 60 && !f.isDowned, text: `"My hips won't... stop... swaying..."` },
  { cond: (f) => f.fetalSize >= 5 && f.fetalSize < 9 && !f.isDowned, text: `"This body isn't mine anymore. But my fists still are."` },
  { cond: (f) => f.voluptuousness >= 30 && f.voluptuousness < 65 && !f.isDowned, text: `"I used to be... lean. Fast. I was beautiful. Not like THIS."` },
  { cond: (f) => f.strain >= 30 && f.strain < 65 && !f.isDowned, text: `"My knees are... making sounds. Bad sounds."` },

  // Late degradation — desperate, breaking
  { cond: (f) => f.fetalSize >= 9 && !f.isDowned, text: `"I can't... feel my knees anymore..."` },
  { cond: (f) => f.voluptuousness >= 65 && !f.isDowned, text: `"Just... one more punch. Just... one..."` },
  { cond: (f) => f.fetalSize >= 10 && !f.isDowned, text: `"They're... so heavy... the brats are tearing me apart from inside..."` },
  { cond: (f) => f.strain >= 70 && !f.isDowned, text: `"Everything... grinds. Every step is glass in my joints."` },
  { cond: (f) => f.voluptuousness >= 75 && !f.isDowned, text: `"I'm drowning... in my own fat... I used to be a FIGHTER..."` },

  // Mid degradation — additional
  { cond: (f) => f.fetalSize >= 5 && f.fetalSize < 9 && f.voluptuousness >= 25 && !f.isDowned, text: `"I can hear them... moving inside me... feeding... I HATE them..."` },

  // Late degradation — additional
  { cond: (f) => f.fetalSize >= 9 && f.voluptuousness >= 50 && !f.isDowned, text: `"I used to... run marathons... now I can't... even stand up straight..."` },

  // Arousal / heat
  { cond: (f) => f.arousal >= 50 && f.arousal < 70 && !f.inHeat && !f.isDowned, text: `"N-no... not here... not in front of them..."` },
  { cond: (f) => f.arousal >= 60 && !f.inHeat && !f.isDowned, text: `"Stop... looking at me... I can't... concentrate..."` },
  { cond: (f) => f.arousal >= 45 && f.arousal < 65 && !f.inHeat && !f.isDowned, text: `"My body is... betraying me... I can feel it... throbbing... NO..."` },
  { cond: (f) => f.arousal >= 55 && !f.inHeat && !f.isDowned, text: `"If I cum in front of... all these people... I'll... I'll never..."` },

  // Downed
  { cond: (f) => f.isDowned && f.fetalSize < 8, text: `"Get UP. GET UP, you stupid body!"` },
  { cond: (f) => f.isDowned && f.fetalSize >= 8, text: `"I can't... the belly... it's pinning me... NO!"` },
  { cond: (f) => f.isDowned && f.voluptuousness >= 50, text: `"My own fat... is holding me down... this isn't... I'm not this..."` },
  { cond: (f) => f.isDowned && f.fetalSize >= 6, text: `"The mat is... so far down... and getting back up is... impossible... NO. MOVE."` },
  { cond: (f) => f.isDowned && f.strain >= 40, text: `"My knees... I can hear them grinding... just... one... more... time..."` },

  // Pregnancy-internal horror — fetal movement, body hijack, labor dread
  { cond: (f) => f.fetalSize >= 4 && f.fetalSize < 7 && !f.isDowned, text: `"I felt them... MOVE. They're awake in there. They're... aware."` },
  { cond: (f) => f.fetalSize >= 5 && f.fetalSize < 8 && !f.isDowned, text: `"One of them just... kicked my spine. From INSIDE. The little monster is rearranging my organs..."` },
  { cond: (f) => f.fetalSize >= 7 && f.fetalSize < 10 && !f.isDowned, text: `"Stop... MOVING... you greedy... little... parasites... I'm trying to FIGHT..."` },
  { cond: (f) => f.fetalSize >= 7 && f.fetalSize < 10 && !f.isDowned, text: `"I can feel them... feeding. Literally sucking the strength out of my muscles. Every second I get weaker and THEY get bigger."` },
  { cond: (f) => f.fetalSize >= 10 && !f.isDowned, text: `"If I go into labor... in this ring... in front of all of them... no... NO. I won't. I WON'T."` },
  { cond: (f) => f.fetalSize >= 10 && !f.isDowned, text: `"They're pushing... against my cervix... pressing DOWN. The brats want OUT and I'm the only thing stopping them..."` },
  { cond: (f) => f.fetalSize >= 6 && f.arousal >= 40 && !f.inHeat && !f.isDowned, text: `"They're... pressing on my... the weight is grinding right on my... no... not NOW... stop MOVING..."` },
  { cond: (f) => f.milk >= 50 && f.fetalSize >= 5 && !f.isDowned, text: `"My body is... making milk. For THEM. I can feel my tits filling up against my will. I'm not a fucking cow, I'm a FIGHTER..."` }
];

export const MILESTONE_TEXTS = {
  m4: [
    `The denial shatters. {name}'s lower abs — her pride, her armor, the last monument to years of brutal training — visibly surrender. A firm, unmistakable dome pushes forward through the ruins of her six-pack, and a nauseating whisper ripples through the crowd. They see it now. Everyone sees it. The pregnancy is real, it is growing, and it is already winning.`,
    `{name}'s hand instinctively drops to her belly mid-stance, and the crowd roars. There it is — the undeniable swell, the engineered litter announcing itself in taut, protruding flesh. Her face contorts in a spasm of pure revulsion as she feels them shifting inside her for the first time, alive and hungry and utterly indifferent to her desperate need to fight.`,
    `A veteran ringside commentator leans into his mic: "There it is, folks. Month four. She's showing." {name}'s abdomen has crossed the line from 'bloated' to 'pregnant' — a firm, rounded intrusion that no amount of flexing can disguise. She catches her reflection in the plexiglass and her jaw tightens so hard a molar cracks. The war against her own body has officially begun.`,
    `The ${rand(T_BRATS)} have reached critical implantation mass. {name} staggers as a wave of nausea and pressure rolls through her pelvis — the engineered litter rooting deep, locking into her blood supply with parasitic efficiency. Her lean belly pushes outward, straining her waistband, and the arena erupts. The transformation has begun, and it cannot be stopped.`
  ],
  m7: [
    `Month seven. The word 'fighter' barely applies anymore. {name}'s grotesquely heavy ${rand(T_BELLY)} hangs low and hard, forcing her knees apart into a humiliating wide-legged stance that the crowd mimics in jeering mockery. Every step is a negotiation with gravity — her spine curves inward, her hips flare with relaxin-softened joints grinding audibly, and the massive ${rand(T_BRATS)} inside her press their combined weight directly onto her crushed prostate. She locks her jaw against the obscene pressure and keeps her fists up. She is still here. She is still fighting. God help her.`,
    `The tipping point arrives with sickening finality. {name}'s center of mass has shifted so catastrophically that her footwork — years of elite training, thousands of hours of drilling — is simply erased. She waddles now, a thick, heavy, unmistakably pregnant waddle, her ${rand(T_BELLY)} leading every movement like a wrecking ball she can't put down. The engineered ${rand(T_BRATS)} have consumed enough muscle to pad her frame with dense, sloshing ${rand(T_FAT)}, and her joints groan with every tortured step. But her eyes are still a killer's eyes.`,
    `{name}'s body has become a factory working against her. At seven months, the macrosomic ${rand(T_BRATS)} have established total metabolic dominance — her hormones serve THEM now, her calories feed THEM now, her muscle melts to fatten THEM now. She can feel the massive weight grinding against her pelvic floor with every step, a constant, maddening pressure on her prostate that makes her clench her teeth until her gums bleed. The crowd chants something obscene. She blocks it out. She has to.`
  ],
  m10: [
    `Biomechanical catastrophe. {name}'s skeleton was never designed to carry this — the macrosomic ${rand(T_BRATS)} have swollen past any natural limit, their combined mass crushing her spine into a permanent lordotic curve that makes standing feel like deadlifting a car. Her ${rand(T_JOINTS)} have been so thoroughly dissolved by relaxin that they move in directions joints should not move. Braxton Hicks contractions ripple across her drum-tight belly every few minutes, rehearsing for the birth that will end everything. She pisses herself when they hit. She doesn't even flinch anymore. There are worse indignities happening inside her.`,
    `The arena's medical team edges closer, trauma kits in hand. At ten months with engineered multiples, {name} has entered what the Underhive pits euphemistically call "the red zone" — a state of pregnancy so extreme that every step risks catastrophic joint failure, every contraction threatens premature labor, and the crushing fetal mass has compressed her organs into a screaming, barely-functional mess. Her belly is a translucent horror show of visible fetal shadows and stretch marks splitting open like fault lines. She should not be standing. She should not be conscious. She is both, and she is FURIOUS.`,
    `{name} has become a monument to biological cruelty. The ${rand(T_BRATS)} have ballooned into grotesque, oversized parasites that visibly distort her belly with their shifting — elbows, knees, and skulls pressing against skin stretched so thin it's nearly transparent. Her prostate is under constant, grinding siege from the fetal mass above it, keeping her in a state of agonizing semi-arousal that no willpower can fully suppress. Her ${rand(T_JOINTS)} pop and grind with every micro-movement. Incontinence has become a background condition. And still — STILL — her fists are up.`
  ],
  m12: [
    `Terminal pregnancy. {name}'s body has surrendered everything it had to give, and the engineered ${rand(T_BRATS)} are STILL demanding more. Her belly is an obscene, planet-sized ${rand(T_BELLY)} that drags her forward like an anchor, the skin so catastrophically stretched that individual fetal limbs are visible pressing outward in constant, nightmarish motion. Real contractions have begun — not Braxton Hicks, not practice runs, but genuine, cervix-dilating labor contractions that double her over every ninety seconds. The medical team is on their feet. The crowd is on their feet. {name} is somehow still on HER feet, tears of pure agony and defiance streaming down her face, fists raised, DARING the universe to take one more thing from her.`,
    `The twelve-month mark was supposed to be impossible. The fight doctors said the human body couldn't sustain macrosomic multiples past eleven months without total structural failure. {name}'s body did not get the memo. Or rather, it DID fail — her joints are ground to powder, her muscles have been cannibalized into thick ${rand(T_FAT)}, her organs are compressed into a fraction of their natural space, and real labor contractions are ripping through her every minute and a half. But some furious, indestructible spark in her refuses to acknowledge the biological reality. She stands in the ruins of her own body like a general on a burning ship, still swinging, still FIGHTING, still absolutely refusing to let the ${rand(T_BRATS)} win.`,
    `This is what the Underhive crowds pay to see. Not the fighting — anyone can fight. They pay to see THIS: a once-elite athlete reduced to a waddling, leaking, contracting wreck of overstretched skin and stolen muscle, carrying an engineered litter so massive it has literally reshaped her skeleton — and STILL coming forward with her fists up. {name}'s body is in active labor. Her ${rand(T_BELLY)} hangs so low it brushes the canvas. Her waters could break at any second. And she just threw a punch. The arena has never been louder.`
  ]
};

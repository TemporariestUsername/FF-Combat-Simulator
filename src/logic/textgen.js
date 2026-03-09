import { rand, T_BELLY, T_BRATS, T_BRAT_ACT, T_TITS, T_FAT, T_SOFT, T_FAT_ACT, T_JOINTS, T_FLINCH } from '../data/vocabulary.js';

export const generateActionText = (result, action, attacker, defender, isDefResting, actionTarget) => {
    let log = `[${result.text}] `;

    const isAttackerFit = attacker.fetalSize < 4;
    const isAttackerSoft = attacker.fetalSize >= 4 && attacker.fetalSize < 10;
    const isAttackerRuined = attacker.fetalSize >= 10;

    const isDefenderBellyFit = defender && defender.fetalSize < 4;
    const isDefenderBellySoft = defender && defender.fetalSize >= 4 && defender.fetalSize < 10;
    const isDefenderBellyRuined = defender && defender.fetalSize >= 10;

    const isAttackerLean = attacker.voluptuousness < 30;
    const isAttackerPlush = attacker.voluptuousness >= 30 && attacker.voluptuousness < 75;
    const isAttackerFat = attacker.voluptuousness >= 75;

    const isDefenderLean = defender && defender.voluptuousness < 30;
    const isDefenderPlush = defender && defender.voluptuousness >= 30 && defender.voluptuousness < 75;
    const isDefenderFat = defender && defender.voluptuousness >= 75;

    if (action.type === 'move') {
        if (!result.isSuccess) {
            if (isAttackerLean && isAttackerFit) return log + rand([
                `${attacker.name} executes a tactical ${action.name.toLowerCase()}, but misjudges her footing on the slick canvas!`,
                `${attacker.name} commits to a sharp ${action.name.toLowerCase()}, but overextends and slides on the sweat-slick mat!`,
                `${attacker.name} explodes into a ${action.name.toLowerCase()} with perfect form, but a patch of spilled milk betrays her pivot foot!`
            ]);
            if (isAttackerPlush || isAttackerSoft) return log + rand([
                `${attacker.name} attempts to ${action.name.toLowerCase()}, but her newly voluptuous, incredibly thick hips throw off her balance!`,
                `${attacker.name} violently commands her legs to move, but her highly estrogenic, heavy-bottomed thighs chafe wetly, ruining her footwork!`,
                `The heavy drag of her tight pregnant bump makes ${attacker.name} stumble clumsily! She curses her expanding body!`
            ]);
            return log + rand([
                `${attacker.name} desperately tries to ${action.name.toLowerCase()}, but her ridiculously huge, sloshing ${rand(T_BELLY)} completely anchors her in place!`,
                `Her traitorous ${rand(T_JOINTS)} give out! ${attacker.name} trips over the sheer gelatinous mass of her own incredibly thick, cellulite-choked ${rand(T_FAT)}!`,
                `The agonizing, suffocating heft of her bloated ${rand(T_TITS)} throws her off balance as ${attacker.name} pitifully fails to move! She sobs in frustration!`,
                `She tries to move, but her massive, pudding-like ${rand(T_TITS)} physically ooze against her own biceps, trapping her arms and ruining her momentum!`
            ]);
        }
        let direction;
        if (action.id === 'advance') {
            if (isAttackerRuined) direction = rand([
                `roars, aggressively waddling her massive, dripping bulk forward, her breasts spilling over her ${rand(T_BELLY)}`,
                `charges forward with a furious, ground-shaking waddle, her enormous ${rand(T_BELLY)} swinging like a wrecking ball`,
                `screams through gritted teeth, violently shoving her gelatinous mass forward one agonizing, floor-cracking step at a time`
            ]);
            else if (isAttackerPlush || isAttackerSoft) direction = rand([
                'forces her plump twin-bump and swaying hips forward',
                'lurches forward, her thickened thighs chafing audibly as she closes the distance',
                'pushes in aggressively, using the momentum of her heavy, swinging hips to carry her forward'
            ]);
            else direction = rand([
                'darts inward with lethal speed',
                'explodes forward on powerful, lean legs, closing the gap in a heartbeat',
                'surges in with a predatory burst of elite footwork'
            ]);
        } else {
            if (isAttackerRuined) direction = rand([
                'clumsily backs away, dragging her deeply dimpled, jiggly frame in a desperate retreat',
                `staggers backward, her massive ${rand(T_TITS)} sloshing violently as she tries to create distance`,
                `retreats in a panicked waddle, her enormous ${rand(T_BELLY)} swaying dangerously with every lurching step`
            ]);
            else if (isAttackerPlush || isAttackerSoft) direction = rand([
                'steps back, her plush thighs slapping wetly together',
                'retreats with a heavy, hip-swaying backstep, her softened core jiggling',
                'backs away cautiously, fighting the drag of her newly voluptuous lower body'
            ]);
            else direction = rand([
                'swiftly retreats',
                'snaps back with a clean, disciplined backstep',
                'disengages with razor-sharp footwork, resetting her stance instantly'
            ]);
        }
        return log + `${attacker.name} ${direction}!`;
    }

    if (action.type === 'rest' || action.type === 'restDowned') {
        if (isAttackerLean && isAttackerFit) return log + rand([
            `${attacker.name} breathes sharply, tightly bracing her washboard abs and resetting her gladiator stance! Pure spite refuels her mind.`,
            `${attacker.name} tucks behind a crisp guard, her hard forearms shielding her lean torso. A deep, furious reserve of defiance refills her focus.`,
            `${attacker.name} drops into a defensive crouch, muscles coiled tight, using the precious seconds to let her elite conditioning reset. Her mind is still a weapon.`,
            `Rolling her shoulders with predatory calm, ${attacker.name} resets her breathing. Cold, trained discipline floods back through her hard, athletic frame.`,
            `${attacker.name} circles slowly, conserving energy with textbook efficiency. Every lean muscle fiber is primed and waiting. She is patient, dangerous, and absolutely furious.`
        ]);
        if (isAttackerPlush) return log + rand([
            `${attacker.name} wipes sweat from her plush cleavage, panting heavily as she forces her thick, soft hips to sink into a wide stance.`,
            `${attacker.name} tucks her swelling belly behind her forearms, creating a fleshy, improvised shield. She finds spite in the weight, using it as cover.`,
            `Bracing her thickened thighs apart for balance, ${attacker.name} sucks air through gritted teeth, furiously willing her softening core to hold together for one more exchange.`,
            `${attacker.name} leans back against the ropes, letting them take the weight of her widening hips for a merciful second. She wipes the sweat from her brow and resets with murderous focus.`,
            `Planting her soft, heavy legs wide, ${attacker.name} hunches behind her thickened forearms. Her body is betraying her, but her boxing brain is still working perfectly.`
        ]);
        return log + rand([
            `The exhausted fighter violently hoists her massive, sloshing ${rand(T_BELLY)} up with her forearms, roaring in effort just to take the crushing pressure off her pulverized spine so she can gasp a single breath.`,
            `${attacker.name} groans through gritted teeth, aggressively digging her puffy fingers into her own gelatinous ${rand(T_FAT)} as she begs her crushed lungs for air.`,
            `A furious, sweaty moan escapes her lips as ${attacker.name} literally uses her massive, sloshing ${rand(T_BELLY)} as a fleshy table to rest her doughy arms.`,
            `She violently shoves her heavy, oozing ${rand(T_TITS)} aside, desperately trying to expose her ribcage enough to suck in a ragged breath.`,
            `${attacker.name} wedges her massive, sagging ${rand(T_BELLY)} against the ropes for support, gasping like a landed fish. The weight is unbearable, but her mind refuses to break.`,
            `Drowning in her own suffocating bulk, ${attacker.name} hooks her doughy arms over the top rope and hangs there, wheezing violently. Her spirit burns even as her body fails.`,
            `${attacker.name} drops her guard entirely, letting her impossibly heavy ${rand(T_TITS)} hang free just to relieve the crushing pressure on her spine. Pure, furious defiance is all that keeps her upright.`,
            `She cradles the enormous weight of her ${rand(T_BELLY)} from below, her ruined arms trembling, and forces a single rattling breath. The gladiator inside her screams for just one more exchange.`
        ]);
    }
    if (action.type === 'slowRise' || action.type === 'heaveUp') {
        if (isAttackerLean && isAttackerFit) return log + rand([
            `${attacker.name} uses her elite core strength to spring powerfully off the mat!`,
            `${attacker.name} kips up with pure athletic fury, snapping back to her feet like a coiled spring!`,
            `A burst of trained muscle memory fires through ${attacker.name}'s lean frame — she's up, guard set, eyes locked on her target!`
        ]);
        if (isAttackerPlush) return log + rand([
            `Struggling against her new, exceptionally heavy birthing hips, ${attacker.name} furiously manages to heave her deeply plush frame upward!`,
            `${attacker.name} rolls onto her thickened haunches and forces herself up, her softened core screaming in protest!`,
            `Grunting through clenched teeth, ${attacker.name} uses the ropes to haul her plush, estrogenic body vertical, refusing to stay down!`
        ]);
        return log + rand([
            `With an agonized, defiant roar, ${attacker.name} somehow forces her incredibly heavy, dimpled ${rand(T_FAT)} to defy gravity!`,
            `${attacker.name} violently swings her massive, sloshing belly upward, fighting desperately against her own deep, anchor-like adipose tissue!`,
            `Her pulverized cartilage grinds loudly as ${attacker.name} manages to heave her dripping, hyper-fertile, immensely fat frame off the canvas, refusing to submit!`,
            `${attacker.name} hooks her doughy arms over the middle rope and physically drags her mountainous, wobbling bulk upright, screaming in fury the entire way!`
        ]);
    }
    if (action.type === 'arousal') {
        if (isAttackerLean && isAttackerFit) return log + rand([
            `${attacker.name} executes a flawless takedown, forcing her hard, toned futa-body against ${defender.name} in a dominant pin!`,
            `${attacker.name} shoots in low, driving a lean, muscular shoulder into ${defender.name}'s hips — pure wrestling dominance, grinding and humiliating!`,
            `With ruthless precision, ${attacker.name} locks up ${defender.name} in a tight clinch, deliberately pressing her hard, athletic body against every sensitive point!`
        ]);
        if (isAttackerPlush) return log + rand([
            `${attacker.name} traps her opponent, using her extremely dense, highly estrogenic thighs to create intense, humiliating friction!`,
            `${attacker.name} smothers ${defender.name} in a clinch, her newly thick, pillowy curves creating an inescapable prison of soft, hot flesh!`,
            `Leveraging her heavier frame, ${attacker.name} pins ${defender.name} against the ropes and deliberately grinds her plush, sweaty hips into her opponent's trapped body!`
        ]);
        return log + rand([
            `${attacker.name} weaponizes her ruination! She forces her massive, gelatinous, heavy-bottomed curves into ${defender.name}, grinding her dripping breeder-loins mercilessly!`,
            `A desperate, overwhelmingly lewd smothering! ${attacker.name} aggressively buries her opponent beneath a suffocating, oozing mountain of leaking milk and hot broodsow ${rand(T_FAT)}!`,
            `Fighting through the haze of lust, ${attacker.name} traps ${defender.name} in an obscene pile of deep, grab-able hip-meat and violently rubs her engorged futa-hog against the squish!`,
            `${attacker.name} collapses her entire ruined, sloshing mass onto ${defender.name}, weaponizing the sheer crushing weight of her ${rand(T_BELLY)} and suffocating ${rand(T_TITS)} to pin and grind!`
        ]);
    }

    if (action.type === 'strike') {
        let punchName = action.name.toLowerCase();
        let motions = [];
        if (isAttackerLean) {
            motions = [
                `Pivoting on lean hips, {attacker} drives a lightning-fast ${punchName}`,
                `Using her peak athletic conditioning, {attacker} snaps a brutal ${punchName}`,
                `{attacker}'s hard, toned muscles coil and release, launching a precise ${punchName}`,
                `With textbook footwork and a vicious exhale, {attacker} whips a razor-sharp ${punchName}`,
                `Channeling raw, competitive fury through her still-pristine frame, {attacker} fires a punishing ${punchName}`
            ];
        } else if (isAttackerPlush) {
            motions = [
                `Leaning into her hyper-curvy, heavily padded mommy-bod, {attacker} throws a heavy ${punchName}`,
                `Weaponizing her ridiculously wide, heavy-bottomed birthing hips, {attacker} hurls a fleshy ${punchName}`,
                `{attacker}'s extremely thick, rubenesque hips drag slightly as she swings a plush, sweaty ${punchName}`,
                `Gritting her teeth against the unfamiliar drag of her softened core, {attacker} winds up a meaty ${punchName}`,
                `{attacker} rotates her thickened torso with surprising force, whipping a sweat-slick ${punchName}`
            ];
        } else {
            motions = [
                `Roaring in absolute defiance, {attacker} forces her incredibly fat, gelatinous broodsow bulk forward into a desperate ${punchName}`,
                `Screaming in frustration, {attacker} commands her completely cannibalized, doughy arms to throw a pathetic ${punchName}`,
                `Gritting her teeth against the agonizing heft of her bloated ${rand(T_TITS)}, {attacker} violently throws her ruined pornbody into a frantic ${punchName}`,
                `Awkwardly cupping one fat, pudding-like udder out of her way, {attacker} desperately throws a wide, flabby ${punchName}`,
                `Sobbing with effort, {attacker} heaves the dead weight of her ${rand(T_FAT)} forward, converting the momentum into a sloppy, furious ${punchName}`,
                `{attacker} screams at her own body, physically wrenching her doughy, hormone-wrecked arm through the thick resistance of her own ${rand(T_TITS)} to throw a wild ${punchName}`
            ];
        }
        let motionStr = rand(motions).replace(/\{attacker\}/g, attacker.name);

        let targets = [];
        if (actionTarget === 'face') {
            targets = [`directly at {defender}'s jaw`, `toward {defender}'s sweaty, flushed face`, `at the side of {defender}'s head`, `straight at {defender}'s drool-slick chin`, `toward the bridge of {defender}'s nose`];
        } else if (actionTarget === 'tits') {
            if (isDefenderLean) targets = [`into {defender}'s firm pectorals`, `at {defender}'s aching, hormone-injected chest`, `against the tender buds swelling beneath {defender}'s sports bra`, `into {defender}'s still-flat but increasingly sensitive chest`];
            else if (isDefenderPlush) targets = [`into {defender}'s rapidly swelling, heavily padded cleavage`, `against {defender}'s tender, jiggling new assets`, `directly into the soft, wobbling mass of {defender}'s hormone-bloated new rack`, `against {defender}'s heavy, sweaty cleavage, the flesh rippling on impact`];
            else targets = [`deep into {defender}'s painfully distended, highly estrogenic ${rand(T_TITS)}`, `against {defender}'s absurdly massive, bouncing hucow ${rand(T_TITS)}`, `directly into {defender}'s incredibly heavy, oozing milkers`, `squarely into the swollen, vein-laced underside of {defender}'s leaking ${rand(T_TITS)}`, `against the painfully taut, cream-dripping peak of {defender}'s grotesque ${rand(T_TITS)}`];
        } else if (actionTarget === 'belly') {
            if (isDefenderBellyFit) targets = [`into {defender}'s taut, muscular midsection`, `at {defender}'s hard, flat stomach`, `against {defender}'s still-lean core, right where the seed is rooting`, `into the firm wall of {defender}'s uncompromised abs`];
            else if (isDefenderBellySoft) targets = [`against {defender}'s high, tight pregnant belly`, `into {defender}'s firm, distinctly pregnant bump`, `directly into the taut curve of {defender}'s visibly swelling womb`, `against the straining skin of {defender}'s increasingly heavy bump`];
            else targets = [`directly into {defender}'s ridiculously overstuffed, sloshing ${rand(T_BELLY)}`, `against the drum-tight, oily, vein-streaked skin of {defender}'s overdue 12-month belly`, `deep into the extremely heavy, bulging broodsow uterus of {defender}`, `into the lowest, heaviest sag of {defender}'s grotesquely distended ${rand(T_BELLY)}`, `against the violently shifting mass of {defender}'s macrosomic ${rand(T_BELLY)}, the ${rand(T_BRATS)} visibly recoiling from the blow`];
        }
        let targetStr = rand(targets).replace(/\{defender\}/g, defender.name);

        let resolutionStr = "";
        if (!result.isSuccess) {
            if (isAttackerLean && isAttackerFit) {
                resolutionStr = rand([
                    `... but ${defender.name} flawlessly slips the strike with elite reflexes!`,
                    `... but ${defender.name} reads it perfectly, pivoting away with trained precision!`,
                    `... but ${defender.name} rolls with the punch, neutralizing the impact with textbook head movement!`
                ]);
            } else {
                resolutionStr = rand([
                    `... but her traitorous, cannibalized muscles outright refuse the command, turning the fierce strike into a pathetic whiff!`,
                    `... but the sheer, gravity-warping weight of her own heavy estrogenic fat violently drags her off balance!`,
                    `... but her incredibly thick, cellulite-choked thighs aggressively trip her up. She sobs in rage as her ${rand(T_JOINTS)} ${rand(T_FLINCH)}!`,
                    `... but her massive ${rand(T_BELLY)} physically blocks her own momentum, ruining the blow entirely in a sweaty, frustrating mess!`,
                    `... but her oozing ${rand(T_TITS)} ${rand(T_FAT_ACT)} heavily against her own skinny-fat bicep, physically blocking the swing mid-air!`,
                    `... but her ${rand(T_JOINTS)} violently ${rand(T_FLINCH)} at the worst possible moment, turning the strike into an embarrassing flail!`
                ]);
            }
        } else if (isDefResting) {
            if (isDefenderLean) {
                resolutionStr = rand([
                    `... but it glances harmlessly off a crisp, professional guard!`,
                    `... but ${defender.name} catches it on her hard forearms, barely flinching behind a tight, disciplined shell!`,
                    `... but ${defender.name}'s high guard deflects it cleanly — elite defense from a still-athletic frame!`
                ]);
            } else {
                resolutionStr = rand([
                    `... but it sinks uselessly into a deep, humiliating sea of highly estrogenic hip-meat! The dense ${rand(T_FAT)} swallows the impact entirely!`,
                    `... but ${defender.name}'s incredibly thick, grabbing ${rand(T_FAT)} absorbs the shock like a giant, squishy sponge!`,
                    `... but the heavy, gelatinous layer of shameful breederfat neutralizes the impact, making her massive thighs jiggle violently but safely!`,
                    `... but ${defender.name}'s grotesque padding actually saves her! The fist disappears into wobbling ${rand(T_FAT)}, the blow completely smothered!`,
                    `... but the punch buries itself in ${defender.name}'s dense, protective layer of ${rand(T_FAT)} and stops dead, like hitting a warm, squishy wall!`
                ]);
            }
        } else {
            let impacts = [];
            if (actionTarget === 'face') {
                if (result.id === 'CRIT_SUCCESS') impacts = [`... A devastating, bone-rattling connection! ${defender.name}'s hormone-cooked brain is totally scrambled!`, `... A catastrophic blow that nearly snaps her neck!`, `... The brutal impact leaves ${defender.name} completely dazed, drooling, and reeling!`, `... She connects perfectly! The sheer mass behind the strike violently rocks ${defender.name}!`, `... A sickening crack echoes through the arena! ${defender.name}'s eyes roll back as her legs buckle!`];
                else impacts = [`... smacking her solidly!`, `... leaving her dizzy and highly distracted!`, `... clattering heavily against her skull!`, `... A solid, wet hit that sends sweat flying!`, `... snapping her head sideways in a spray of drool and perspiration!`];
            } else if (actionTarget === 'tits') {
                if (result.id === 'CRIT_SUCCESS') impacts = [`... A catastrophic crush of her hucow anatomy! Hot milk violently erupts as a blinding spike of pure, desperate arousal completely melts her mind!`, `... The heavy slosh balloons are brutally compressed, sending a massive shockwave of leaking cream and agonizing heat directly to her flooded loins!`, `... A devastating impact! The squishy ${rand(T_TITS)} practically bursts, overloading the broodsow with desperate, dripping lust!`, `... The bloated ${rand(T_TITS)} detonates in a geyser of pressurized cream! ${defender.name} screams, her entire nervous system hijacked by the agonizing spike of forced arousal!`, `... A brutal, milk-spraying compression! The shockwave travels straight to her swollen loins, and ${defender.name}'s knees visibly buckle as lust overwhelms her!`];
                else impacts = [`... violently splashing hot colostrum all over the canvas!`, `... making the massive ${rand(T_TITS)} jiggle agonizingly, severely spiking her heat!`, `... sending a painful, deeply arousing jolt through the tender, bloated udders!`, `... completely burying the fist in soft, leaking milky squish!`, `... the swollen gland compresses wetly, squirting a humiliating arc of warm milk across the ring!`];
            } else if (actionTarget === 'belly') {
                if (result.id === 'CRIT_SUCCESS') impacts = [`... It's a catastrophic, deep-sinking blow! The massive, macrosomic litter shifts violently, pulverizing her ruined pelvis and sending the greedy ${rand(T_BRATS)} into an absolute frenzy!`, `... A deeply humiliating, devastating impact! The drum-tight ${rand(T_BELLY)} absorbs the massive force, causing the demanding male brats inside to panic-thrash wildly!`, `... The heavy, sloshing ${rand(T_BELLY)} is brutally compressed! The highly agitated engineered litters aggressively demand immediate caloric sacrifice!`, `... A devastating gut-buster! The ${rand(T_BRATS)} thrash in absolute panic, their ${rand(T_BRAT_ACT)} sending visible shockwaves across her drum-tight skin! ${defender.name} doubles over, retching!`, `... The blow sinks deep into the overloaded ${rand(T_BELLY)}! A visible bulge of displaced ${rand(T_BRATS)} rolls sickeningly across her stretched abdomen!`];
                else impacts = [`... sending a violent, sickening ripple through the heavy amniotic fluid!`, `... a wet, echoing smack that deeply agitates the testy ${rand(T_BRATS)}!`, `... mercilessly mashing into the bulging uterus and startling the greedy ${rand(T_BRATS)}!`, `... causing the heavy belly to slosh and pull agonizingly on her ruined spine!`, `... the ${rand(T_BRATS)} respond with a furious ${rand(T_BRAT_ACT)}, punishing her from the inside as the blow rattles them from without!`];
            }
            resolutionStr = rand(impacts);
        }

        log += `${motionStr} ${targetStr}${resolutionStr} `;
        return log;
    }
    return log;
};

export const generateStatusReport = (f, isPlayer) => {
    let report = "";
    const p = isPlayer ? {
        abs_tight: "You feel your hard abs tighten and flex. The implanted seed is just a heavy knot deep in your gut.",
        belly_med: `Your firm, distinctly pregnant belly bulges outward, ruining your center of mass. The growing ${rand(T_BRATS)} slosh uncomfortably inside you.`,
        belly_high: `Your brutally distended belly lurches with heavy, impatient life, practically tearing your skin. The massive ${rand(T_BRATS)} mercilessly crowd your lungs and crush your bladder.`,
        fat_low: "Your lean, athletic muscle remains fully intact, ready to strike.",
        fat_med: `Thick, squishy padding has swallowed your core. Your new, highly estrogenic hips sway heavily, forcing a humiliating waddle.`,
        fat_high: `Total adipose surrender. You are buried in your own ruined flesh. Deep, dimpled ${rand(T_FAT)} anchors your waddling thighs to the mat, and permanent, heavy ${rand(T_TITS)} smother your chest.`,
        milk_med: `Your swollen milk ducts throb and ache with pressurized fluid beneath the skin.`,
        milk_high: `Hot colostrum constantly streams from your painfully engorged, violently leaking teats.`,
        strain_med: `Trapped fluid bloats your ankles, while relaxin makes your knees feel terrifyingly loose and wobbly.`,
        strain_high: `Your pulverized cartilage grinds bone-on-bone. The sheer agony in your chemically melted ${rand(T_JOINTS)} demands pure willpower just to remain standing.`,
        arousal_med: `Slick, musky pre-cum heavily soaks your thighs as your congested futa-meat throbs against your will.`,
        arousal_high: `SAVAGE HEAT. Your preggo-brain is completely cooked by lust. Thick drool hangs from your lips as your heavy hips involuntarily rut the empty air!`
    } : {
        abs_tight: `Tight skin stretches over ${f.name}'s hard, lean torso. The seed hasn't ruined her yet.`,
        belly_med: `Her firm, protruding belly pulls her athletic posture out of alignment, the growing ${rand(T_BRATS)} visibly shifting inside her.`,
        belly_high: `Her brutally distended belly lurches with heavy, impatient life. The sheer weight of the ${rand(T_BRATS)} forces her into a desperate, wide-legged stance.`,
        fat_low: "Her low-fat, highly lethal fighting frame remains sharp and uncompromised.",
        fat_med: `Squishy padding has erased her abs, and her thick, rubenesque hips drag with a humiliating, estrogenic heaviness.`,
        fat_high: `Total adipose surrender. She is an immobile mountain of jiggly broodsow meat. The utterly unfair weight drags heavily on her deep, dimpled ${rand(T_FAT)}.`,
        milk_med: `Her swollen milk ducts visibly bulge, the pressure making her wince with every movement.`,
        milk_high: `Thick, hot cream constantly leaks from her painfully engorged teats, splashing down her sweaty belly.`,
        strain_med: `Edema visibly puffs her ankles, and her knees tremble unsteadily under her shifting weight.`,
        strain_high: `Her ${rand(T_JOINTS)} pop and crunch sickeningly. Sharp agony radiates through her completely pulverized pelvis.`,
        arousal_med: `Thick pre-cum pours down her thighs. Her heavy, engorged futa-hog violently throbs through her soaked shorts.`,
        arousal_high: `SAVAGE HEAT. Her preggo-brain is fried. She moans like a feral animal, her dripping hips involuntarily rutting the air!`
    };

    if (f.fetalSize >= 10) report += p.belly_high + " ";
    else if (f.fetalSize >= 5) report += p.belly_med + " ";
    else report += p.abs_tight + " ";

    if (f.voluptuousness >= 75) report += p.fat_high + " ";
    else if (f.voluptuousness >= 35) report += p.fat_med + " ";
    else report += p.fat_low + " ";

    if (f.strain >= 80) report += p.strain_high + " ";
    else if (f.strain >= 40) report += p.strain_med + " ";

    if (f.inHeat) report += p.arousal_high + " ";
    else if (f.arousal >= 60) report += p.arousal_med + " ";

    if (f.milk >= 70) report += p.milk_high + " ";
    else if (f.milk >= 40) report += p.milk_med + " ";

    return report.trim();
};

export const getPitstopLog = (choice, fighter) => {
    const name = fighter.name;
    switch (choice) {
        case 'feed':
            return rand([
                `${name} desperately inhales the greasy caloric slop, feeling the thick nutrients flow to her aching muscles... and straight to her widening hips. (+250 HP, +300 Stamina, +3 Fat, +2 Strain)`,
                `Gagging on the foul hucow nutrient paste, ${name} forces it down. The calories flood her depleted body, but the ${rand(T_BRATS)} greedily redirect the excess into dense, squishy ${rand(T_FAT)}. (+250 HP, +300 Stamina, +3 Fat, +2 Strain)`,
                `${name} wolfs down the disgusting slop. Her body immediately begins packing the surplus calories into her ${rand(T_TITS)} and thighs. (+250 HP, +300 Stamina, +3 Fat, +2 Strain)`,
                `The thick, gray nutrient paste hits ${name}'s stomach like concrete. Within seconds, she can feel the ${rand(T_BRATS)} ravenously siphoning the calories, and her ${rand(T_FAT)} visibly thickens as the excess is stored. (+250 HP, +300 Stamina, +3 Fat, +2 Strain)`
            ]);
        case 'ring':
            return rand([
                `A handler roughly clamps a tight steel ring around ${name}'s violently throbbing, backed-up anatomy. The agonizing pressure suppresses the urge to climax... for now. (Orgasm check blocked this turn)`,
                `${name} bites back a humiliated whimper as the cold cockring clicks shut, painfully compressing her swollen, desperately twitching meat. (Orgasm check blocked this turn)`,
                `The steel ring snaps tight with a clinical click. ${name} shudders violently, her backed-up anatomy throbbing against the cruel restraint. The edge recedes — barely. (Orgasm check blocked this turn)`
            ]);
        case 'pump':
            return rand([
                `The industrial breast pump latches onto ${name}'s painfully engorged ${rand(T_TITS)} with a harsh vacuum seal. Thick, warm cream is violently extracted, leaving her gasping and deeply aroused. (Milk drained, +200 HP, +15 Arousal)`,
                `${name} groans as the pump aggressively drains her swollen, aching ${rand(T_TITS)}. The relief is immediate but the rhythmic suction sends humiliating waves of heat straight to her loins. (Milk drained, +200 HP, +15 Arousal)`,
                `The mechanical pump cycles mercilessly, each pulse dragging thick, warm cream from ${name}'s distended ${rand(T_TITS)}. Her toes curl involuntarily as the rhythmic extraction sends treacherous sparks of pleasure through her exhausted body. (Milk drained, +200 HP, +15 Arousal)`
            ]);
        case 'bladder':
            return rand([
                `${name} finally relieves her agonizingly crushed bladder, sobbing quietly as the immense pressure on her pelvic floor eases. The ${rand(T_BRATS)} shift slightly, granting a moment of blessed relief. (+200 Stamina)`,
                `With a desperate, shuddering gasp, ${name} empties her pulverized bladder. The relief from the crushing downward pressure of her massive ${rand(T_BELLY)} is immediate. (+200 Stamina)`,
                `${name} sobs with shameful relief as the agonizing bladder pressure finally releases. The ${rand(T_BRATS)} immediately expand into the vacated space, but for one blessed moment, she can breathe. (+200 Stamina)`
            ]);
        default:
            return `${name} rests briefly.`;
    }
};

export const generateRoundTransition = (round, player, enemy) => {
    const avgFetal = (player.fetalSize + enemy.fetalSize) / 2;
    const avgVol = (player.voluptuousness + enemy.voluptuousness) / 2;

    if (round <= 3) {
        return rand([
            `The corner crews watch with clinical indifference. Both fighters are still lean, still dangerous. The crowd murmurs in anticipation — the real show hasn't started yet.`,
            `The arena buzzes with impatient energy. The fighters still look like athletes. The bookmakers know this won't last. It never does.`,
            `Harsh sodium lights cast long shadows as both fighters retreat to their stools. The canvas is still clean. By the final round, it won't be.`,
            `A low hum of anticipation fills the Underhive pit. The crowd has seen enough Regulation 88.4 fights to know the first few rounds are just foreplay for the real horror.`,
            `The fighters return to their corners, still breathing clean. The corner crews check vitals with bored efficiency — these numbers will be unrecognizable in six rounds. The seed is patient. The crowd is not.`
        ]);
    }

    if (round <= 6) {
        return rand([
            `The crowd stirs as the physical toll becomes visible. ${avgVol > 30 ? "Widening hips and softening cores are clearly evident under the harsh lights." : "The fighters are holding their shape, but the subtle swell of early pregnancy is unmistakable."} The betting boards recalculate.`,
            `Sweat and the first traces of milk slicken the canvas. The corner crews mop frantically between rounds. ${avgFetal > 4 ? "Both fighters waddle noticeably as they reach their stools." : "The fighters move with visible discomfort, their bellies tightening with each step."}`,
            `The Underhive crowd is growing louder, more aggressive. They've spotted the softening — the first signs of the hormonal cascade that will turn these warriors into something else entirely.`,
            `A stale cocktail of breeding-sweat, hormone-laced perspiration, and industrial disinfectant hangs in the recycled air. The audience leans forward in their seats. The degradation is accelerating.`,
            `The corner medics exchange knowing glances as they review the biometric readouts. Both fighters' estrogen levels have tripled since the opening bell. The real fight — fighter versus her own mutating body — is only just beginning.`
        ]);
    }

    if (round <= 9) {
        return rand([
            `The arena erupts as both fighters heave themselves off the canvas. The transformation is undeniable — what stepped into this ring as elite gladiators are now waddling, leaking, hormone-ravaged broodsows struggling against their own flesh.`,
            `The canvas is a disaster zone — streaked with milk, sweat, and worse. ${avgVol > 60 ? "Both fighters barely fit on their stools, their massive, dimpled thighs spilling over the edges." : "The fighters collapse onto their stools, gasping, their swollen bellies pressing against their thighs."}`,
            `Corner crews shout instructions that neither fighter can hear over the roaring crowd. The Underhive pit is in full, savage frenzy — this is what they paid to see. The proud gladiators reduced to gasping, jiggling incubators.`,
            `The overhead biometric display shows catastrophic hormone levels for both fighters. The crowd howls with perverse satisfaction as the numbers spike higher with every passing minute.`,
            `The bell rings and neither fighter moves immediately. Their corner crews physically haul them to their feet, slapping and screaming. The canvas squelches underfoot. The air is thick with the reek of hormones and defeat.`
        ]);
    }

    // Rounds 10+
    return rand([
        `The arena has descended into pure, feral chaos. Both fighters are barely recognizable — massive, sloshing, milk-streaked parodies of the lean warriors who entered this ring. The crowd is standing, screaming, drunk on the spectacle of total biological defeat.`,
        `The canvas is flooded. Milk, sweat, amniotic fluid — the drainage grates can't keep up. Both fighters collapse into their corners, their ruined bodies unable to stop shaking. The final bell is close. The only question is whether their bodies will hold.`,
        `Handlers rush in with mops and industrial towels. The stench is overpowering. In the stands, the betting has shifted from "who wins" to "who goes into labor first." The Underhive pit has seen its share of horrors, but the final rounds of Regulation 88.4 never fail to deliver.`,
        `The crowd chants in rhythmic, degrading unison. Both fighters sit motionless on their stools, their impossibly heavy bellies resting on their fat, splayed thighs. The corner crews slap their faces, screaming at them to get back up. The bell is merciless.`,
        `The arena medic shakes his head in grim fascination at the biometric readouts. Both fighters have exceeded every predicted threshold for physical degradation. The Regulation 88.4 commission will have new records after tonight. The crowd couldn't care less about records — they want to see these ruined gladiators drag themselves through one more round.`
    ]);
};

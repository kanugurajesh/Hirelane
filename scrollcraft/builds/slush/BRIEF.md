# Slush: scroll brief

Partly interviewed. The user answered four questions (structure, peak moment,
energy curve, content freedom). Everything else is authored from the supplied
Slush style reference, which is treated as the brand kit and wins on any
conflict with skill taste defaults (pure #000, uppercase pill labels, 1600px
pill radius, no gradients, no shadows).

## The eight topics

1. **Vibe.** From the style reference: "inflatable sticker universe on pastel
   paper". A physical collage pinned to a pale wall.
2. **Journey.** Authored: wordmark, the four things you do, the seed phrase
   problem going away, safety, the bow, the quiet way to get it.
3. **Energy curve.** User: *"Loud, quiet, then big"*. A big opening, a calm
   stretch about security, then the loudest moment just before the download.
4. **Feeling and the one moment.** User: *"Ribbon ties a bow"*. The blue ribbon
   is drawn by the visitor's scroll, threads through every section and ties
   itself into a bow around the way to get Slush.
5. **What no other site does.** The ribbon is a single continuous line the
   visitor draws with their own scroll. It never cuts, from the first screen to
   the bow.
6. **Range.** Playful. User picked the type-poster structure.
7. **One world or scenes.** Distinct scenes (colour bands), linked by one
   ribbon that crosses every seam.
8. **Assets.** None supplied, no KIE_AI_API_KEY. The brand is genuinely
   illustrated (stickers, rendered ribbon), so the world is drawn in SVG, not
   generated. No spend.

Content: user chose *"Rewrite freely"*. Facts kept: a Sui wallet; send, swap,
stake, collect; Google sign-in; Chrome, iPhone, Android, web. No invented
numbers, so no counters.

## Grammar

**Typographic poster.** Type is the imagery. Scale contrast does the work.

Why the others lost: filmic one-shot needs footage and is the default drift;
chaptered editorial is too quiet for a sticker brand; live surface would need
a real wallet running in the page; continuous world requires worldflight
video; gallery suits a range of products, not one app; split stage needs a
two-sided argument; rhythmic cutlist bans the long pin the bow needs.

Honoured bans: no scrub, no pan rails, no tilt, no parallax on text, no cards,
no scrims. Stickers are brand imagery, not decoration motion.

## Journey and feeling curve

```
1  Hero       Delight      SLUSH fills the screen, the ribbon is already mid-stroke behind it
2  Send       Recognition  the first verb wipes in on lavender, the ribbon knots beside it
3  Swap       Momentum     the second verb, mint, anchored the other side
4  Stake      Momentum+    white, smaller, the ribbon runs straight through
5  Collect    Appetite     violet, the last verb, the widest word
6  Seed       Relief       twelve seed words fall away, NO SEED PHRASE lands
7  Security   Calm         grey, small type, the ribbon goes still and straight (authored silence)
8  Peak       Joy          the ribbon drops into frame and ties a bow over GET SLUSH
9  Close      Settled      the smallest type on the page, plain links, a QR code
```

2 to 5 are four verbs. To stop them reading as one feeling four times, each
gets a different ground, anchor, scale and wipe direction, and the ribbon does
something different at each (loop, loop, straight run, loop).

## The peak

> "I scrolled and the blue ribbon followed me all the way down, then it tied
> itself into a bow around the download button."

Act 8. Largest span on the page (3.2 viewport-heights). The act before it
(security) is the quietest on the page.

## Tell-someone sentence

It's the site where **the ribbon you draw by scrolling ties itself into a bow
at the end**.

## Authored silence

Act 7 (security) is deliberately quiet: grey ground, small type, no stickers
except one lock, and the ribbon runs straight. It is not dead scroll.

## Score

| Act | Device | Why |
|---|---|---|
| Hero | pin + scale from `--sc-p` | The wordmark settles while the stickers lift off at different rates (depth) |
| Verbs | flow + `reveal` wipes | A wipe across letterforms is the poster grammar's change of state |
| Seed | pin + bespoke fall | Holding still while the words fall is the relief |
| Security | flow + `in` | Plain reading, the silence before the peak |
| Peak | pin + bespoke bow | The signature move needs the hold |
| Close | flow | Quiet resolution, nothing moves |

Signature move: the scroll-drawn ribbon (page-length SVG whose drawn length
follows a fixed pen point at 62% of the viewport) handing off to a bow drawn by
the peak act's progress.

## Fingerprint gate

The registry was empty, so there was nothing to clear. This build is row 1.

## Feel check (after the first harness run)

| Act | Intended | Felt |
|---|---|---|
| Hero | Delight | Delight |
| Send | Recognition | Recognition |
| Swap | Momentum | Momentum |
| Stake | Momentum+ | Momentum (same as Swap) |
| Collect | Appetite | Momentum |
| Seed | Relief | Relief |
| Security | Calm | Calm |
| Peak | Joy | Joy, and clearly the largest change on the sheet |
| Close | Settled | Settled |

Diff: Stake and Collect feel like Swap. The four verbs are one feeling
stretched across four screens, which is the filler finding from feel.md §1.
Left as is for this pass because the user asked for these four facts. The next
improvement is to merge Stake and Collect into one screen, or give Collect a
different kind of action from the visitor.

Fixes made from verification: hid undrawn tubes (round caps painted dots),
shortened the bow tails so they stop above GET SLUSH, rerouted the ribbon on
phones so it stays clear of white text on violet, padded the security list on
phones, delayed the nav button until the hero has left, added a favicon (the
only 404).

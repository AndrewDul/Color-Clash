# Color Clash 🌈

Color Clash is a responsive match-3 adventure built with HTML, CSS and JavaScript. It works directly in the browser on desktop and mobile — no installation or build step required.

## Play

**Live game:** [andrewdul.github.io/Color-Clash](https://andrewdul.github.io/Color-Clash/)

## Features

- 15 campaign levels across 3 animated worlds
- varied objectives: score, colors, coins, ice, special gems and artifact shards
- rockets from a match of 4, rainbow gems from a match of 5, and bombs from T/L shapes
- chain reactions, special-gem combinations and automatic board reshuffling
- artifact collection and world progression
- persistent coins, XP, stars, boosters and settings
- power shop with a hammer, 5×5 bomb, rainbow wipe and shuffle
- daily missions, daily gift and 12 permanent achievements
- Polish and English language switch
- independent music, sound-effect and reduced-animation settings
- click, tap and swipe controls
- responsive layouts designed for desktop and phone screens

## How to play

Swap two adjacent gems to create a horizontal or vertical line of at least three. Only a successful swap uses a move. Complete every objective before the move counter reaches zero.

- **4 gems:** creates a row or column rocket
- **5 gems:** creates a rainbow gem and awards an artifact shard on artifact levels
- **T or L shape:** creates an area bomb
- **two powers:** swap them together for a larger combined effect

Progress is stored locally in the browser with `localStorage`.

## Run locally

Serve this folder with any static HTTP server, then open `index.html`. For example:

```bash
python -m http.server 4173
```

## Author

Created by [Andrew Dul](https://github.com/AndrewDul).

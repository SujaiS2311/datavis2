# Australia's Hidden Wings — FIT3179 DV2 draft

This is a **critique-ready first draft** for FIT3179 Data Visualisation 2. It uses six user-supplied files and contains 11 Vega-Lite charts including three map idioms.

## Open the website

- In VS Code, install Live Server (or run `python -m http.server 8000` in this folder).
- Open `http://localhost:8000/` in a browser. Do **not** double-click `index.html`, because local CSV fetches may fail under `file://`.
- The site loads Vega, Vega-Lite, Vega-Embed, fonts and Australian state boundaries from public URLs; an internet connection is needed.
- To publish, push the entire folder contents to a public GitHub repository, then Settings → Pages → Deploy from a branch → main / root.
- Open the deployed link and inspect all 11 figures before posting to the critique Moodle forum.

## Exact six inputs

1. `Lepidoptera.zip` — ALA DOI https://doi.org/10.26197/ala.7f987737-cfe8-4755-8888-a3f9dc9ac02f
2. `Hymenoptera-2026-10-11(1).zip` — ALA DOI https://doi.org/10.26197/ala.6d3995a2-71c7-4a7f-a55d-4393f5f22ded
3. `Odonata-2026-10-11(1).zip` — ALA DOI https://doi.org/10.26197/ala.b7db76a0-7501-4f32-83d0-beaec3490e81
4. `australian_insects_monthly_ala_2023_2025(3).csv` — separate ALA monthly summary
5. `checklist-2026-10-10(4).csv` — ALA-style taxonomic checklist
6. `20260828spcs (1)(3).csv` — threatened-species list; confirm publication authority, source URL and licence before final submission.

State boundaries are from https://github.com/rowanhogan/australian-states (external file hosted on GitHub). Check usage rights and attribute appropriately.

## Data preparation

Occurrence CSVs inside ZIPs were read directly. Keep rows satisfying:
- numeric year 2023, 2024 or 2025;
- valid numeric month 1–12;
- latitude between -45 and -9 degrees, longitude between 110 and 155 degrees (approximate Australia bounds only).
- stateProvince standardised to eight state/territory names; 26 observations with unmapped states excluded from state-level summaries but included in national totals.
- **Not** deduplicated at occurrenceID level. Filtered records may contain duplicate observations or identifications; inspect further before final submission.
- Species counts are distinct scientificName values at taxonRank `species`, not taxonomically reconciled accepted concepts.
- `points_sample.csv` selects up to 700 observations per order per year with random seed 3179; it is a cartographic sample, not an inference sample.
- State markers are approximate in-state positions and NOT observation sites.
- Monthly summary `original_monthly_summary.csv` was *not* recomputed from ZIP exports and must not be added to them.
- The threatened species extract filters Class exactly `Insecta`; entries are not all three target orders.

## Chart specifications

`charts/01_state_choropleth.json` choropleth by distinct recorded species-level names with an order selector.
`charts/02_point_map.json` dot map of selected sampled ALA observations with an order selector.
`charts/03_bubble_map.json` proportional-symbol map of state observations with an order selector.
`charts/04_order_comparison.json` bars of species-level names per order.
`charts/05_annual_trend.json` annual record-count trend.
`charts/06_seasonal_heatmap.json` monthly heatmap across years.
`charts/07_month_by_month.json` continuous monthly series.
`charts/08_state_group_heatmap.json` state × order observation volume.
`charts/09_checklist.json` supplementary checklist taxonomic counts, includes beetles.
`charts/10_threatened.json` threatened insect-status counts.
`charts/11_monthly_source_comparison.json` distinct ALA monthly aggregate, includes beetles.

## Limitations / critique questions

- Observation effort varies by geography and time. Do not label ALA occurrence totals as population sizes.
- Three maps are substantively different idioms, but all use same underlying occurrence exports.
- The map boundaries are a third-party GeoJSON remote file; consider replacing with licensed ABS boundaries for the final submission.
- For the *final*, validate all chart styling and map property joins in the browser; confirm the threatened list provenance and citations; incorporate a second independent publisher meaningfully in the narrative.
- Draw an A4 page layout sketch, export it as PDF, and publish that in your GitHub repo too. This draft does not include your hand-drawn sketch.
- The critique requires a meaningful live draft, four substantial peer-improvement suggestions, and a two-minute presentation.

This README documents the limitations rather than asserting ecological conclusions beyond the data.

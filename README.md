# Rosehill Cycleway

Interactive Gatsby site for the Rosehill Cycleway proposal, featuring a React-Leaflet map with custom layers, POIs, and story panes that explain route plans and impacts.

![Rosehill Cycleway preview](rosehill_cycleway_preview.gif)

## What this is

This project is a proposal for the 40th Ward's 2023 Participatory Budget.

Powered by [Gatsby](https://www.gatsbyjs.com/) and [React-Leaflet](https://react-leaflet.js.org/).

## Quick start

```bash
npm install
npm run develop
```

Other scripts:

- `npm run build` - Gatsby production build
- `npm run serve` - Serve the production build
- `npm run clean` - Clean Gatsby caches
- `npm run typecheck` - Run TypeScript checks

## Project structure

- `src/components/App` - Main app shell and state
- `src/components/Map` - Map rendering, layers, and markers
- `src/components/Map/layers` - GeoJSON-like layers and route data
- `src/components/StoryPane` - Narrative content and route panes
- `src/components/Icon` - Custom icons used for markers
- `src/pages` - Gatsby pages (index, privacy policy, 404)

## Data sources

Most spatial data were created manually by referencing CDOT planning documents and the 2022 Western Avenue Corridor Study data, as well as by filling gaps in the ["Bike Routes" dataset](https://data.cityofchicago.org/Transportation/Bike-Routes/3w5d-sru8) from the Chicago Data Portal.

## Tradeoffs and known issues

- The MVP was built for web first, so a rudimentary web/mobile split logic is used (rendering different CSS when a mobile browser is detected) rather than a mobile-first design.
- Custom point icons are hard coded because Gatsby did not mix well with custom markers on GeoJSON objects in React-Leaflet. Others found a way to make it work for [single marker objects](https://stackoverflow.com/questions/47723812/custom-marker-icon-with-react-leaflet), but not for mapping custom icons by feature properties on an entire GeoJSON component.
- Local state is used in the main app instead of Redux due to React-Leaflet state integration challenges. One side effect is that switching story panes on mobile retains the current scroll position on the Story Pane. Ideally, the pane would reset scroll to top on content change.

## Analytics

This site uses `gatsby-plugin-google-gtag`. Update tracking IDs in `gatsby-config.ts`.

## Deployment

This is a standard Gatsby build. Deploy the output of `gatsby build` and serve the `public` directory.

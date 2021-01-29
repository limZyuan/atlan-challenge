# Atlan Challenge

## What have I done to speed up the site

- Optimise image by compressing it and converting to .webp format
- Bundle up and minify Javascript and CSS code
- Hosting on Heroku with SSL. Able to make use of http/2 which is much faster as compared to http/1

## What could be done to further speed up the site

- Data could be fetched from database / API instead of being in src folder
- Implementation of infinite scroll for the data entries (Only the entries that are visible by the user are loaded rather than all the entries. Could be implemented with the react-window library or usage of scroll event listeners. There is excessive DOM size right now which will affect page load time.)
- Removal of Font Awesome html link tag and download the package locally instead (Would help to reduce blocking time.)

## Page load time

### Dev tools Network Tab

- Without cache: 2.68s (Under Dev tools, look at the network tab and disable cache)
- With cache: 2.11s (Under Dev tools, look at the network tab and enable cache)

### Dev tools Lighthouse Tab
- Generate lighthouse audit report for performance
- Time to interactive: 2.4s (Most important metric in my opinion as it allows the users to start navigating the site)
- First contentful paint: 1.9s
- Speed index: 2.8s
- Total blocking time: 190ms
- Largest contentful paint: 2.2s
- Cumulative layout shift: 0

## Conclusion 
- Page load time is around 2-3s which is alright but not ideal. Best would be 1-2 seconds if possible.

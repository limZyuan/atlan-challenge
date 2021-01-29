# Atlan Challenge

## What have I done to speed up the site

-Optimise image by compressing it and converting to .webp format
-Bundle up and minify Javascript and CSS code
-Hosting on Heroku with SSL. Able to make use of http/2 which is much faster as compared to http/1

## What could be done to further speed up the site

-Data could be fetched from database / API instead of being in src folder
-Implementation of infinite scroll for the data entries (Only the entries that are visible by the user are loaded rather than all the entries. Could be implemented with the react-window library or usage of scroll event listeners.)

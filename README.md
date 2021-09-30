# on-the-dot

[on-the-dot](https://edyuenyw.github.io/on-the-dot/) is a productivity app that is used to organise your day to day driving. The dashboard allows you to have a quick view of how much time is required to go from point A to point B by calculating required travel time from your daily activities and tasks.

## Overview

The application uses components from [google-map-react](https://github.com/google-map-react/google-map-react) package
which is configured to be used only in Australia region at the moment and return best guess calculated time. Further info [*(Google Map Distance Matrix)*](https://developers.google.com/maps/documentation/javascript/distancematrix).

## Features

### Activities search and Activity cards
Standard text search to show any activities based on the search input.
Add new activity by entering *(Date, Time, Activity Name, Address From and Address To)* fields.

### Tasks search
Each activity has its own task lists. Each task created/deleted will determine new duration required for the activity.

## Limitations

* Only calculates arrival time.
* Limited API calls to refresh activities.
* Creating activity is constrained to Date and the Activity
* No deletion of activity. Historical data to be preserved but requires improvement i.e batch deletion of flagged items at later time.

## Bugs
* Adding different activity will show up when it is different from the search query.

## Backlog and other Issues
* Editing details of existing cards.

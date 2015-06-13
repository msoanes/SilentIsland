# SilentIsland

[Heroku link][heroku]

[heroku]: https://silentisland.herokuapp.com/

## Minimum Viable Product
SilentIsland is a music hosting and playing site, inspired by SoundCloud, built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts and profiles
- [x] Create sessions (log in)
- [x] Upload and tag songs
- [x] Listen to songs
- [x] Subscribe to tags
- [x] View a feed of songs with subscribed tags
- [ ] Search for songs by description
- [x] Queue songs for automatic playback

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Song Creation (~1 day)
I will implement a simple authentication system. By the end of this phase, users will be able to create accounts, log in and out, and create song entries using a simple text form in a Rails view. The most important part of this phase will be pushing the app to Heroku and ensuring that everything works before moving on to phase 2.

[Details][phase-one]

### Phase 2: Uploading and Viewing Songs (~2 days)
I will add API routes to serve song data as JSON, then add Backbone models and collections that fetch data from those routes. By the end of this phase, users will be able to upload song files using Filepicker.io, view individual songs, listen through the default HTML5 audio player, and view a list of all songs on the index page, from a single-page backbone application.

[Details][phase-two]

### Phase 3: Song controls (~1 day)
I will add a Backbone `AudioPlayer` View, which should always be present within the single-page backbone application. When I reach the end of this phase, users should be able to click the play button on songs and have them start playing in the `AudioPlayer`, as well as being able to pause and unpause, change volume, and skip to a particular position in the track, all through custom controls in the `AudioPlayer` View.

[Details][phase-three]

### Phase 4: Feeds + Follows (~2 days)
I will include associated songs in the Tags and Users `show` views, and create a composite view containing a `SongsIndex` subview, as well as the relevant information for the Tag or User at hand. In addition, I will add a `stream` route to Songs, to return songs in the tags and users followed by the current user.

[Details][phase-four]

### Phase 5: Play queues (~2 days)
I will add a `SongQueue` Backbone view to hold and manage a `Songs` collection, which will always be visible in the Backbone application, near the `AudioPlayer`. I will add enqueue buttons, which will append the song to the end of the collection. By the end of this phase, users should be able to enqueue songs and listen to multiple songs in a row without needing to manually change them.


[Details][phase-five]

### Bonus Features (TBD)
- [ ] Play lists
- [ ] Listenings history
- [ ] Pagination/infinite scroll
- [ ] Recommendations based on past listens (item-based collaborative filtering)
- [ ] Song and User comments
- [ ] Song and User likes
- [ ] Multiple sessions/session management
- [ ] User avatars
- [ ] Song cover images
- [ ] Typeahead search bar
- [ ] Trending songs
- [ ] Searching for Songs and Users

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md

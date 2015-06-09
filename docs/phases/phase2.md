# Phase 2: Uploading and Viewing Songs

## Rails
### Models

### Controllers
* Api::SongsController (create, destroy, index, show)
* Api::TagsController (show)

### Views
* songs/show.json.jbuilder
* tags/show.json.jbuilder

## Backbone
### Models
* Tag
* Song (parses nested `posts` association)

### Collections
* Tags
* Songs

### Views
* SongForm
* SongShow
* Stream (composite view, contains SongsIndex subviews)
* SongsIndex (composite view, contains SongsIndexItem subviews)
* SongsIndexItem
* SongShow

## Gems/Libraries
* Filepicker.io

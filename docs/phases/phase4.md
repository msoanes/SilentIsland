# Phase 4: User Feeds

## Rails
### Models

### Controllers
* Api::UsersController (show)
* Api::TagsController (show)
* Api::SongsController (stream)

### Views
* users/show.json.jbuilder
* tags/show.json.jbuilder

## Backbone
### Models

### Collections

### Views
* TagShow (composite view, contains SongsIndex subviews)
* UserShow (composite view, contains SongsIndex subviews)
* Stream (composite view, contains SongsIndex subviews)

## Gems/Libraries

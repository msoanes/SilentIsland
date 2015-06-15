SilentIsland.Collections.Listens = Backbone.Collection.extend({
  url: '/api/listens',

  parse: SilentIsland.Mixins.PageableParse,

  model: SilentIsland.Models.Listen
})

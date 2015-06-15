SilentIsland.Models.User = Backbone.Model.extend(
  _.extend({},
    SilentIsland.Mixins.Subscribable,
    SilentIsland.Mixins.SongIndexable, {
      urlRoot: '/api/users',

      subscribableOptions: {
        foreignKey: "subscribable_id",
        subscribableType: 'User'
      },

      indexableOptions: {
        routeName: 'user'
      }
    }
  )
);

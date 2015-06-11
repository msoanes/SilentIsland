SilentIsland.Mixins.Subscribable = {
  subscription: function () {
    if (!this._subscription) {
      this._subscription = new SilentIsland.Models.Subscription;
    }
    return this._subscription;
  },

  createSubscription: function () {
    this.subscription().save();
  },

  destroySubscription: function () {
    this.subscription().destroy({
      success: function (model) {
        model.unset("id");
      }.bind(this)
    });
  },

  toggleSubscription: function () {
    if (this.subscription().isNew()) {
      this.createSubscription();
    } else {
      this.destroySubscription();
    }
  },

  parseSubscription: function (payload) {
    // Call this inside the model's #parse method.
    var attrs = {};
    attrs[this.subscribableOptions.foreignKey] = payload.id;
    this.subscription().set(attrs);

    if (payload.subscription) {
      this.subscription().set(payload.subscription);
      delete payload.subscription;
    }
  }
}

SilentIsland.Mixins.Subscribable = {
  subscription: function () {
    if (!this._subscription) {
      this._subscription = new SilentIsland.Models.Subscription;
    }
    return this._subscription;
  },

  createSubscription: function () {
    console.log('Should be creating');
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
    console.log(this.subscription().isNew())
    if (this.subscription().isNew()) {
      console.log(this.subscription());
      this.createSubscription();
    } else {
      console.log('Got there');
      this.destroySubscription();
    }
  },

  parseSubscription: function (payload) {
    // Call this inside the model's #parse method.
    var attrs = {};
    attrs[this.subscribableOptions.foreignKey] = payload.id;
    attrs['subscribable_type'] = this.subscribableOptions.subscribableType;
    this.subscription().set(attrs);

    if (payload.subscription) {
      this.subscription().set(payload.subscription);
      delete payload.subscription;
    }
  }
}

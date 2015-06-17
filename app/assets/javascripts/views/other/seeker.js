SilentIsland.Views.Seeker = SilentIslandBaseView.extend({
  template: JST['other/seeker'],

  tagName: 'input',

  className: 'seeker',

  attributes: {
    type: "range",
    name:"name",
    min: "0",
    max: "0",
    step: "0.1",
    value: "0",
  },

  events: {
    'input': 'seek',
    'mousedown': 'startSeek',
    'mouseup': 'endSeek',
  },

  render: function () {
    return this;
  },

  seek: function (event) {
    this.$audio[0].currentTime = this.$el.val();
    this.$audio[0].play();
  },

  startSeek: function () {
    this.$el.addClass('seeking');
  },

  endSeek: function () {
    this.$el.removeClass('seeking');
  },

  setDuration: function (duration) {
    this.$el.attr('max', duration);
  },

  resetVal: function () {
    this.$el.val(0);
  }
});

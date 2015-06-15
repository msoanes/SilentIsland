// <input class="volume" type="range" name="name" min="1" max="2.71" step="0.01" value="2">
SilentIsland.Views.VolumeControl = Backbone.View.extend({
  template: JST['other/volume_control'],

  tagName: 'input',

  className: 'volume',

  attributes: {
    type: "range",
    min: "1",
    max: "2.71",
    step: "0.01",
    value: "2",
  },

  events: {
    'input': 'setVolume'
  },

  render: function () {
    return this;
  },

  setVolume: function (event) {
    this.$audio[0].volume = Math.log($(event.currentTarget).val());
  },
});

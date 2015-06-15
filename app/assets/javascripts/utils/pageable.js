SilentIsland.Mixins.PageableParse = function (payload) {
  this.page_number = parseInt(payload.page);
  this.total_pages = parseInt(payload.total_pages);
  return payload.models;
};

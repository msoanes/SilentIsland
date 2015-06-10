json.extract! @song, :id, :title, :url, :description
json.tag_labels @song.tags.map { |tag| tag.label }

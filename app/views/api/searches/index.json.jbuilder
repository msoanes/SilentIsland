@songs.each do |song|
  json.child! { |json| json.partial! 'song', song: song }
end

@tags.each do |tag|
  json.child! { |json| json.partial! 'tag', tag: tag }
end

@users.each do |user|
  json.child! { |json| json.partial! 'user', user: user }
end

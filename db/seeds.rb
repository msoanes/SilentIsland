# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
# #
# # Examples:
# #
# #   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
# #   Mayor.create(name: 'Emanuel', city: cities.first)
#
puts "Creating users..."
User.create!(username: 'cdk', password: 'password')
User.create!(username: 'flatwound', password: 'password')
User.create!(username: 'pitx', password: 'password')
User.create!(username: '_ghost', password: 'password')
User.create!(username: 'zapac', password: 'password')
User.create!(username: 'gmz', password: 'password')
User.create!(username: 'djlang59', password: 'password')
User.create!(username: '7oop3d', password: 'password')

puts 'Created users!'

genres =

song_hashes = [
  {
    title: 'Silence Await',
    url: 'http://ccmixter.org/content/cdk/cdk_-_Silence_Await.mp3',
    uploader_id: 1,
    tag_labels: ['piano', 'chill', 'sad', 'strings', 'electronic']
  },

  {
    title: 'Reverie (small theme)',
    url: 'http://ccmixter.org/content/_ghost/_ghost_-_Reverie_(small_theme).mp3',
    uploader_id: 4,
    tag_labels: ['guitar', 'chill', 'sad', 'acoustic']
  },

  # {
  #   title: 'Drops of H2O',
  #   # url: 'http://ccmixter.org/content/_ghost/_ghost_-_Reverie_(small_theme).mp3',
  #   uploader_id: 7,
  #   tag_labels: ['chill', 'beats', 'electronic']
  # },
  #
  # {
  #   title: 'Feeling Dark',
  #   # url: 'http://ccmixter.org/content/_ghost/_ghost_-_Reverie_(small_theme).mp3',
  #   uploader_id: 8,
  #   tag_labels: ['dark', 'beats', 'electronic']
  # },
  #
  # {
  #   title: 'Plan Your Escape',
  #   # url: 'http://ccmixter.org/content/_ghost/_ghost_-_Reverie_(small_theme).mp3',
  #   uploader_id: 8,
  #   tag_labels: ['dark', 'beats', 'electronic']
  # },

  {
    title: 'The Long Goodbye',
    url: 'http://ccmixter.org/content/flatwound/flatwound_-_The_Long_Goodbye.mp3',
    uploader_id: 2,
    tag_labels: ['strings', 'electronic', 'free']
  },

  {
    title: 'See You Later',
    url: 'http://ccmixter.org/content/Pitx/Pitx_-_See_You_Later.mp3',
    uploader_id: 3,
    tag_labels: ['guitar', 'beats', 'free', 'analog']
  },

  {
    title: 'Ice and Chill',
    url: 'http://ccmixter.org/content/_ghost/_ghost_-_Ice_and_Chilli.mp3',
    uploader_id: 4,
    tag_labels: ['strings', 'guitar', 'chill', 'beats', 'electronic']
  },

  {
    title: 'Test Drive',
    url: 'http://ccmixter.org/content/Zapac/Zapac_-_Test_Drive.mp3',
    uploader_id: 5,
    tag_labels: ['guitar', 'beats', 'brass', 'analog']
  },

  {
    title: 'Parametaphoriquement',
    url: 'http://ccmixter.org/content/gmz/gmz_-_Parametaphoriquement.mp3',
    uploader_id: 6,
    tag_labels: ['chill', 'beats', 'electronic']
  }
]

puts 'Creating songs...'

# 10.times do |new_songs_num|
  song_hashes.each_with_index do |song_hash, idx|
    puts "#{idx}/6"
    song_hash[:title]
    Song.create!(song_hash)
  end
# end

puts 'Adding filler tags'
genres = File.readlines("#{Dir.pwd}/lib/assets/genres.txt").map(&:chomp)
genres.each_with_index do |tag_label, idx|
  Tag.create(label: tag_label)
  puts "#{idx} / #{genres.length}" if idx % 50 === 0
end

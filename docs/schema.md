# Schema Information


## followings
column name     | data type | details
--------------  |-----------|-----------------------
id              | integer   | not null, primary key
followable_id   | integer   | not null, foreign key (references tags/users)
followable_type | string    | not null
follower_id     | integer   | not null, foreign key (references users)

## listens
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null, foreign key (references songs)
listener_id | integer   | not null, foreign key (references users)

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
uploader_id | integer   | not null, foreign key (references users)
title       | string    | not null
description | string    |
song_url    | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null, foreign key (references songs)
tag_id      | integer   | not null, foreign key (references tags)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

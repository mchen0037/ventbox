DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags_posts;
DROP TABLE IF EXISTS tag;

CREATE TABLE posts(
	id int,
	story text,
	likes int,
	tag VARCHAR(50),
	timeStamp TIMESTAMP,
	polarity decimal(2,0)
);

CREATE TABLE tags_posts (
	tag_id int,
	post_id int
);

CREATE TABLE tag (
	tag_id int,
	tag VARCHAR(50)
);

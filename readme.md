This is a site for Princeton University's only student-run TV show on campus: Princeton Tonight.

# Usage
[Download Jekyll (Version: 2.5.3)](https://jekyllrb.com/docs/installation/)

Manual:
```
$ jekyll serve --watch
```

Using shortcut:
`$ ./serve.sh`
Must first allow file to run commands by running: `chmod +x serve.sh`

# Gems
Uses `bundle`. Installation: `gem install bundler`.

# For admin:
Create a shell script application that runs the admin and launches browser.  
https://stackoverflow.com/questions/281372/executing-shell-scripts-from-the-os-x-dock

# Bugs
* Tile layout didn't hover for some reason
* ~~Header background image was repeating~~

# Instagram Access Token
2940280590.6df8be9.0b623c0833674336af50d90a3ebcfec9

Instagram user ID for @princetontonight: 2940280590

See this [blog post](https://elfsight.com/blog/2016/05/how-to-get-instagram-access-token/).

# Upload to S3
``` bash
# Dryrun (test)
aws s3 sync . s3://princetontonight.com --exclude "readme.md" --dryrun

# Upload/sync
aws s3 sync . s3://princetontonight.com --exclude "readme.md"
```

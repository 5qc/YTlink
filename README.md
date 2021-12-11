# YTlink
**YTlink** is a JavaScript "plugin" that allows you to make a simple YouTube link using `<yt>`.

## Examples
- `<yt user="mrbeast6000"></yt>` will produce [mrbeast6000](//youtube.com/user/mrbeast6000).
- `<yt channel="UCbtGxM9x71G5695-JENj50Q"></yt>` will produce [UCbtGxM9x71G5695-JENj50Q](//youtube.com/channel/UCbtGxM9x71G5695-JENj50Q).
- `<yt c="Danny100"></yt>` will produce [Danny100](//youtube.com/c/Danny100).
- `<yt user="YouTube" section="about"></yt>` will produce [YouTube](//youtube.com/user/YouTube/about).
- `<yt video="jNQXAC9IVRw"></yt>` will produce [jNQXAC9IVRw](//youtube.com/watch?v=jNQXAC9IVRw).

## Components
### User
The **user** attribute is used for YouTube channel URLs that use */user/*.

### Channel
The **channel** attribute is used for YouTube channel URLs that use */channel/*.

### C
The **c** attribute is used for YouTube channel URLs that use */c/*.

### Section
The **section** attribute is used to go to a specific section on the YouTube channel. The only valid values are:
- `videos`/`video`
- `playlists`/`playlist`
- `community`
- `discussion`
- `channels`/`channel`
- `about`

This is not required in the channel URLs. Not defining the section will just go to the channel homepage.

### Video
The **video** attribute is used for video URLs. Attempting to define both **video** and **user**/**channel**/**c** will result in an error.

$(document).ready(function() {
  if ($("yt").attr("user") !== undefined) {
    if ($("yt").attr("section") == "videos" || "video") {
      $("yt").html("<a href='//youtube.com/user/" + $("yt").attr("user") + "/videos'>" + $("yt").attr("user") + "</a>")
    } else if ($("yt").attr("section") == "playlists" || "playlist") {
      $("yt").html("<a href='//youtube.com/user/" + $("yt").attr("user") + "/playlists'>" + $("yt").attr("user") + "</a>")
    } else if ($("yt").attr("section") == "community") {
      $("yt").html("<a href='//youtube.com/user/" + $("yt").attr("user") + "/community'>" + $("yt").attr("user") + "</a>")
    } else if ($("yt").attr("section") == "discussion") {
      $("yt").html("<a href='//youtube.com/user/" + $("yt").attr("user") + "/discussion'>" + $("yt").attr("user") + "</a>")
    } else if ($("yt").attr("section") == "channels" || "channel") {
      $("yt").html("<a href='//youtube.com/user/" + $("yt").attr("user") + "/channels'>" + $("yt").attr("user") + "</a>")
    } else if ($("yt").attr("section") == "about") {
      $("yt").html("<a href='//youtube.com/user/" + $("yt").attr("user") + "/about'>" + $("yt").attr("user") + "</a>")
    } else {
      $("yt").html("<a href='//youtube.com/user/" + $("yt").attr("user") + "'>" + $("yt").attr("user") + "</a>")
    }
  } else if ($("yt").attr("channel") !== undefined) {
    if ($("yt").attr("section") == "videos" || "video") {
      $("yt").html("<a href='//youtube.com/channel/" + $("yt").attr("channel") + "/videos'>" + $("yt").attr("channel") + "</a>")
    } else if ($("yt").attr("section") == "playlists" || "playlist") {
      $("yt").html("<a href='//youtube.com/channel/" + $("yt").attr("channel") + "/playlists'>" + $("yt").attr("channel") + "</a>")
    } else if ($("yt").attr("section") == "community") {
      $("yt").html("<a href='//youtube.com/channel/" + $("yt").attr("channel") + "/community'>" + $("yt").attr("channel") + "</a>")
    } else if ($("yt").attr("section") == "discussion") {
      $("yt").html("<a href='//youtube.com/channel/" + $("yt").attr("channel") + "/discussion'>" + $("yt").attr("channel") + "</a>")
    } else if ($("yt").attr("section") == "channels" || "channel") {
      $("yt").html("<a href='//youtube.com/channel/" + $("yt").attr("channel") + "/channels'>" + $("yt").attr("channel") + "</a>")
    } else if ($("yt").attr("section") == "about") {
      $("yt").html("<a href='//youtube.com/channel/" + $("yt").attr("channel") + "/about'>" + $("yt").attr("channel") + "</a>")
    } else {
      $("yt").html("<a href='//youtube.com/channel/" + $("yt").attr("channel") + "'>" + $("yt").attr("channel") + "</a>")
    }
  } else if ($("yt").attr("c") !== undefined) {
    if ($("yt").attr("section") == "videos" || "video") {
      $("yt").html("<a href='//youtube.com/c/" + $("yt").attr("c") + "/videos'>" + $("yt").attr("c") + "</a>")
    } else if ($("yt").attr("section") == "playlists" || "playlist") {
      $("yt").html("<a href='//youtube.com/c/" + $("yt").attr("c") + "/playlists'>" + $("yt").attr("c") + "</a>")
    } else if ($("yt").attr("section") == "community") {
      $("yt").html("<a href='//youtube.com/c/" + $("yt").attr("c") + "/community'>" + $("yt").attr("c") + "</a>")
    } else if ($("yt").attr("section") == "discussion") {
      $("yt").html("<a href='//youtube.com/c/" + $("yt").attr("c") + "/discussion'>" + $("yt").attr("c") + "</a>")
    } else if ($("yt").attr("section") == "channels" || "channel") {
      $("yt").html("<a href='//youtube.com/c/" + $("yt").attr("c") + "/channels'>" + $("yt").attr("c") + "</a>")
    } else if ($("yt").attr("section") == "about") {
      $("yt").html("<a href='//youtube.com/c/" + $("yt").attr("c") + "/about'>" + $("yt").attr("c") + "</a>")
    } else {
      $("yt").html("<a href='//youtube.com/c/" + $("yt").attr("c") + "'>" + $("yt").attr("c") + "</a>")
    }
  } else {
    $("yt").html("<yt-error>Invalid attribute. Has to be either \"user\", \"channel\", or \"c\".</yt-error>")
  }
  
  if ($("yt").attr("video") !== undefined) {
    if ($("yt").attr("user") !== undefined) {
      $("yt").html("<yt-error>\"user\" and \"video\" cannot be both defined.</yt-error>")
    } else if ($("yt").attr("channel") !== undefined) {
      $("yt").html("<yt-error>\"channel\" and \"video\" cannot be both defined.</yt-error>")
    } else if ($("yt").attr("c") !== undefined) {
      $("yt").html("<yt-error>\"c\" and \"video\" cannot be both defined.</yt-error>")
    } else {
      $("yt").html("<a href='//youtube.com/watch?v=" + $("yt").attr("video") + "'>" + $("yt").attr("video") + "</a>")
    }
  }
  
  $("yt-error").css("color", "red");
});

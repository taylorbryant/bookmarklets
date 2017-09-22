---
title: CSS Stats bookmarklet
permalink: /css-stats-bookmarklet
status: published
---

<a href="http://cssstats.com">CSS Stats</a> is a useful tool for getting a bird's eye view of the state of your website's CSS. By itself, it isn't anything particularly groundbreaking, but using the information it provides, you can get a feel for the quality of the code you have written.

## Bookmarklet
I made a nifty little bookmarklet that runs the current page through CSS Stats using the default user agent. To use it, drag <a href="javascript:location.href='http://cssstats.com/stats?url='+window.location.href+'&ua=Browser Default'" title="CSS Stats">`CSS Stats`</a> to your bookmarks bar or use the code snippet below to create the bookmark manually.

```
javascript:location.href='http://cssstats.com/stats?url='+window.location.href+'&ua=Browser Default'
```
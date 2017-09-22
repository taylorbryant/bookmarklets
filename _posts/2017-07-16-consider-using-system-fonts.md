---
title:  "Consider using system fonts"
permalink: consider-using-system-fonts
status: published
---

Next time you find yourself reaching for Google Fonts or Typekit, stop for a moment, and consider using system fonts. Defaulting to system fonts provides a performance boost and provides a comfortable, consistent experience for the end user. Loading a system font instead of a web font will save you at least one HTTP request and the headache of finding a nice looking font for your project. Try it out!

## Medium's approach
Here's an approach I borrowed from <a href="https://medium.com">Medium</a>. It provides support for versions of macOS, Windows, Android, and Ubuntu.

```css
body {
  font-family: -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
}
```

* **-apple-sytem** macOS/Mac OS X & iOS
* **BlinkMacSystemFont** Chrome on macOS/Mac OS X
* **Segoe UI** Windows & Windows Phone
* **Roboto** Android & Chrome OS
* **Oxygen** KDE
* **Ubuntu** Ubuntu
* **Cantarell** GNOME
* **Open Sans** Older versions of Android
* **Helvetica Neue** Older versions of Mac OS X
* **sans-serif** The vanilla ice cream of fonts
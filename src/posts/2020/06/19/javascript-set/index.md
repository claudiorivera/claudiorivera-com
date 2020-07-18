---
title: "JavaScript Set"
date: "2020-06-19"
featuredImage: "./images/scott-walsh-CQl3Y5bV6FA-unsplash-scaled.jpg"
category: "tech"
---

As part of my learning regimen, I've been doing a daily code challenge on [Codewars](https://codewars.com). So far, it's been going very smoothly, and I can often think up an algorithm and get it coded in under an hour--with some solutions coming to me immediately.

Today, however, I had to use my first life line, after racking my brain for over an hour.

The problem, as [described in the "Kata"](https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript), involved finding unique characters in a string. Specifically, checking whether a given string was a "pangram", which is a sentence that contains every letter of the alphabet (e.g. "the quick brown fox jumps over the lazy dog").

Of course, my first naive approach involved all kinds of desperate Regex patterns, and keeping a counter, and then checking whether the total count was at least 26 (one for each letter of the alphabet), but I had to abandon this path when I realized just how lost I had gotten.

Fortunately, it didn't take much time to search online for a hint, and my pal "Google" led me to [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), which immediately got me to [my solution](https://www.codewars.com/kata/reviews/54a5d4af37f43531e900002e/groups/5eecd6b5e5d13e000150e278). (Yes, I know I don't need the "i" flag, but I was so excited to submit my solution, that I accidentally left it in).

I know every experienced coder will tell you that the best skill one can have is Googling the solution, and I strongly agree with that, but it also feels nice to be able to think up an algorithm all by myself. However, I won't beat myself up too much, because the next time I need to find unique values in a set, I'll know exactly where to look!

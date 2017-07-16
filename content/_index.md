---
title: "Home"
date: 2017-07-15T16:33:47-07:00
---

# I often like to have long titles that end up wrapping several times</h1>

At the time of this writing, [CSS animations](#) work in most modern browsers, including Chrome, Firefox, and Opera, without prefixes. For older browsers, I recommend using auto prefixes.


~~~javascript
var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);
~~~


Let’s go through the syntax. I am a huge fan of the **mobile-first** approach because one of its benefits is you don’t need to set the width of your composition. Just squish your browser all the way in or close to 340-pixel wide and you can get a sense of how your text will look on a small screen. I always start my body text size at 100%, which is equivalent to 16px or 1em. If text at 100% looks too small or too big on small screens, I can adjust the paragraph element (p) to get the optimal reading size.

## Sometimes we drop some H2s in

For line height—the space between the lines—a comfortable measure is between 1.4 and 1.6, but it depends on the x-height of your type and the length of your text line. If the x-height is big and your line length is long, you will want to increase your leading. On the contrary, if the x-height is small and your line length is short, you will want to tighten up your leading. Achieving a comfortable spot requires experimentation and using your best judgment.

- Lists are very important?
- Lists are very important?
- Lists are very important?

For padding, I usually give at least 2em on the left and right sides. The reason is that I prefer using hanging bullet lists. On small-screen devices, the hanging bullets will touch against the edge of the screen if the left padding is set at less than 2em.

### And then have some H3s for mad subheadage that could be super long

The W3C’s spec for CSS animations has come a long way. We can use some of its features today to add movements to our typography. Although CSS animations required some coding skills, they are quite easy to comprehend. If you know your HTML and CSS, you can learn to use simple animations to bring your typography to life in no time.


At the time of this writing, CSS animations work in most modern browsers, including Chrome, Firefox, and Opera, without prefixes. For older browsers, I recommend using auto prefixes.

# List title
- Lists are very important?
- Lists are very important?
- Lists are very important?
## List title
- Lists are very important?
- Lists are very important?
- Lists are very important?
### List title
- Lists are very important?
- Lists are very important?
- Lists are very important?
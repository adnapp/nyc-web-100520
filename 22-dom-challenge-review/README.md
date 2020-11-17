# JS Mini Challenge: DOM Manipulation

## Instructions

Fork this repo, then run `git clone` to download it locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make a [pull request from your forked repo](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). If you worked with a partner, you can tag your partner on the pull request.

## Assignment

Today, we'll be building a prototype of a small application about Ian's favorite soccer team, Liverpool FC. If you don't like Liverpool, 1. sorry, and 2. feel free to change the data and personalize your app!

There's a section in this Readme file for your notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

A note on notation: when you see an element like `h1#header` in the Readme, that refers to the element's tag name and the CSS selector. For example, `h1#header` looks like this in the HTML:

```html
<h1 id="header">Some text here</h1>
```

And `div.player` looks like this (note the CSS class selector syntax):

```html
<div class="player">
  <!-- child elements here -->
</div>
```

## Deliverable 1

Open the `index.html` file in your browser and check the console in Chrome Dev Tools. You'll notice the console.log from line 2 of the `index.js` file is returning `null` instead of showing the `h1#header` element.

Figure out what you need to change to give Javascript access to the `h1#header` element.

**YOUR NOTES**

```

```

## Deliverable 2

Now that you have access to the `h1#header` element, use Javascript to change the element's font color to red (of course).

**YOUR NOTES**

```

```

## Deliverable 3

Now that we've got a beautiful red header, we can show some player data on the page. The player data is stored in a variable called `player` in the `data.js` file - you can still access that variable in your `index.js` file (see if you can figure out why!).

First, uncomment the `console.log` under Deliverable 3 in the `index.js` file to see the data in the console. 

Using the `player` object, update the DOM to show the player's *name*, *nickname*, and *photo* in the appropriate places. For the `<img>` tag, make sure to update the `src` attribute *and* the `alt` attribute (it's important for accessibility).

**YOUR NOTES**

```

```

## Deliverable 4

We also want to show some of the best goals for our player. You'll notice that within the `player` object, there's a `goals` property that contains an array of goal videos. *For each* of the goal videos, create a DOM element that looks like this and add it to the `ul#goals`:

```js
<li data-id="{goal id}">
  <p>{goal description}</p>
  <a href="{goal link}" target="_blank">{goal link}</a>
</li>
```

**YOUR NOTES**

```

```

**NOTE**: The `data-id` attribute is a custom property known as a "dataset attribute". They're useful for adding additional data to the DOM that doesn't have any effect on CSS of what the user sees - they're purely meant as tools for Javascript developers. We'll use this `data-id` attribute in the next deliverable.

For more info on `data-*` attributes, have a look at this [MDN article on using dataset attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

## Deliverable 5

Uh-oh! Another player's goal has snuck into our list. While it's certainly a [great goal](https://youtu.be/WLm-YK5Yfv0), it doesn't belong on the list with the rest of Mo Salah's goals. 

Since you gave each `<li>` a `data-id` attribute in the last deliverable, we can use that information to find the goal we're looking for. 

Use Javascript to find the element with the `[data-id='3']` attribute, and *remove* that element from the page.

> Hint: You can use `querySelector` with [CSS Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) to find an element with a specific data-id. 

**YOUR NOTES**
```

```


icebox
- do deliverable 4 artisinal way
- check `,`
- video
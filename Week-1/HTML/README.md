# Catty Board Project

Here's what the finished layout looks like, and it is completely laid out with Flexbox.

![image](https://user-images.githubusercontent.com/52990768/161255288-016cba6e-6f01-4301-9f7a-2f307afe9828.png)

You may view it online here

file:///C:/Users/madhavi.jyothi/Desktop/Assignment/p1-madhavijyothi-kolagatla-madhavijyothi/Week-1/HTML/index.html


We'll start off with the basic html set up below:

<!DOCTYPE html>
  <html>
  <head>
  <title>Catty Music</title>
  </head>
  <body>


  <main></main> <!--to contain the main section of the app-->

  <footer></footer> <!--to contain the music control buttons and song details-->


  </body>
</html>
So style this ...

html,
body {
  height: 100%; /*setting this explicitly is important*/
}

body {
  display: flex; /*flex superpowers activated! */
  flex-direction: column; /*Stack the flex-items (main and footer elements) vertically NOT horizontally*/
}
The first step to using the flexbox model is establishing a flex container. This is exactly what the code above does. It sets the body element's display property to flex

Now we have a flex container, the body element. The flex items are defined too (item 1 and item 2) - as in the breakdown earlier done. NB: You may take a look at the images shown in initial breakdown I discussed earlier if things look fuzzy now.

Keeping the image of the end in view, you should get the flex-items working. The footer which houses the music controls is to stick to the bottom of the page while the main section fills up the remaining space. How do you do that?

main {
  flex: 1 0 auto; /*fill the available space*/
}

footer {
  flex: 0 0 90px; /*don't grow or shrink - just stay at a height of 90px.*/
}
Thanks to the flex-grow property. 

The reason may not be evident here because the flex-direction is changed. In some browsers, there's a bug that allows flex-items shrink below their content size. It's quite a weird behavior. The workaround to this bug is to keep the flex-shrink value at 0 NOT the default, 1 and also set the flex-basis property to auto.

Now that you have things coming together, put in a bit of styling to define spacing, colors, etc.

body {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0;
  font-family: Lato, sans-serif;
  color: #222;
  font-size: 0.9em;
}
footer {
  flex: 0 0 90px;
  padding: 10px;
  color: #fff;
  background-color: rgba(61, 100, 158, 0.9);
}
Nothing magical yet. Here's what we've got now:

initial-look-1

Seeing how things are beginning to take shape, you'll make it even better. Fix the sidebar. If you're coding along, update your html document

<main>
  <aside> <!--This represents the sidebar and contained in it are icon sets from font-awesome-->
    <i class="fa fa-bars"></i>
    <i class="fa fa-home"></i>
    <i class="fa fa-search"></i>
    <i class="fa fa-volume-up"></i>
    <i class="fa fa-user"></i>
    <i class="fa fa-spotify"></i>
    <i class="fa fa-cog"></i>
    <i class="fa fa-soundcloud"></i>
  </aside>

  <section class="content"> <!--This section will house everything other than the sidebar-->
  </section>

</main>
The listing above is quite explanatory. As explained earlier, the "main" section above will also be made a flex container! So the sidebar (represented by the aside tag), and the section will both be flex-items. ]

Just as you made the footer stick to the bottom of the page, you also want the sidebar to stick - this time to the left. It's better explained in codes I guess.

main {
  flex: 1 0 auto; /*was a flex item*/
  display: flex; /*I just included this! - now a flex container with flex items: sidebar & main content section*/
}
Alright, this is getting interesting, huh? Now you have the main section as a flex container. Deal with one of its flex items, the sidebar.

There's something cool happening here. The sidebar has icons stacked vertically. You can make this a flex-container and give it a flex-direction that lets all icons stack vertically and in position! See how you may do this:

aside {
  flex: 0 0 40px; /*as a flex item: do not grow or shrink. Just stay fixed at 40px*/
  display: flex; /*Now you're a flex-container, you can decide how your flex-items are laid*/
  flex-direction: column; /*Stack my flex-item's vertically...change the default direction*/
  justify-content: space-around; /*Interesting...since direction is changed, this works on the vertical direction*/
  align-items: center; /*direction is changed! This affects the horizontal direction*/
  background-color: #f2f2f2; /*make me pretty*/
}

/*font size for the icons*/
aside i.fa {
  font-size: 0.9em;
}
I have obsessively commented through the code above and now see how pretty everything is laid out ...super neat with few lines of codes. Reasonable codes, no messy hacks.

second-layout

The main content section is empty but don't forget it's the second list-item. The sidebar is first.

<section class="content"> <!--This section was empty. Populating it with content-->

  <div class="music-head"> <!--First list item: contains music details-->

      <img src="images/cattyboard.jpg" /> <!--Album art-->

      <section class="catty-music"> <!--other details of the album-->
          <div>
            <p>CattyBoard Top 100 Single Charts (11.06.36)</p>
            <p>Unknown Artist</p>
            <p>2016 . Charts . 100 songs</p>
          </div>

          <div> <!--Music controls-->
            <i class="fa fa-play"> &nbsp;Play all</i>
            <i class="fa fa-plus"> &nbsp;Add to</i>
            <i class="fa fa-ellipsis-h">&nbsp;&nbsp;More</i>
          </div>
      </section>
  </div> <!--end .music-head-->


  <ul class="music-list">  <!--Second list item: Contains a list of all songs displayed-->
      <li>
          <p>1. One Dance</p>
          <p>Crake feat CatKid &amp; Cyla</p>
          <p>2:54</p>
          <p><span class="catty-cloud">CATTY CLOUD SYNC</span></p>
      </li>

      <li>
          <p>2. Panda</p>
          <p>Cattee</p>
          <p>4:06</p>
          <p><span class="catty-cloud">CATTY CLOUD SYNC</span></p>
      </li>

      <li>
          <p>3. Can't Stop the Feeling!</p>
          <p>Catin Cimberlake</p>
          <p>3:56</p>
          <p><span class="catty-cloud">CATTY CLOUD SYNC</span></p>
      </li>

      <li>
          <p>4. Work From Home</p>
          <p>Cat Harmony feat Colla</p>
          <p>3:34</p>
          <p><span class="catty-cloud">CATTY CLOUD SYNC</span></p>
      </li>
    </ul>
</section>
Uhmm, I added a bit more than the last time but its pretty simple.

First off, you should make the main content section a flex container...

.content {
  display: flex;
  flex: 1 0 auto; /*this makes sure the section grows o fill the entire available space*/
  flex-direction: column;
}
You should also deal with it's flex-items:

.music-head {
  flex: 0 0 280px; /*Same memo, don't grow or shrink - stay at 280px*/
  display: flex;
  padding: 40px;
  background-color: #4e4e4e;
}

.music-list {
  flex: 1 0 auto;
  list-style-type: none;
  padding: 5px 10px 0px;
}
.music-head holds the album art and other related album details. 

This doesn't feel very pretty yet but c'mon you're doing great if still following. Thumbs up.

third-look

I've got a few problems here:

The list of songs looks terrible.
list of songs

The section containing the music art has really ugly looking texts. You're going to deal with that too.
ugly texts

Again, I'd walk you through solving these problems. Here are the solution I propose.

Each list of songs contain 4 paragraphs: song title, artiste, duration, and "catty cloud sync". There's got to be a way to put all of this in one line with each paragraph taking up equal space along this line.
Flexbox to the rescue!! The concept here is the same employed in many grid systems. Translate that to codes:

li {
  display: flex; /*Targets each list containing the paragraphs*/
  padding: 0 20px;
  min-height: 50px;
}

li p {
  flex: 0 0 25%; /*This is the sweet sauce*/
}
You see what's happening there with the paragraphs? "Don't grow or shrink but each paragraph should take up 25% of the available space".

lists initial look

Style a bit more by giving the lists alternating colors and deal with the "catty cloud sync" label too.

li span.catty-cloud {
  border: 1px solid black;
  font-size: 0.6em;
  padding: 3px;
}

li:nth-child(2n) {
  background-color: #f2f2f2;
}
So, you're killing it, and really getting to understand the flex lingo better! This is what you should have now.

catty music- almost done

The second problem will be dealt with now. Making the album details text look prettier. Really simple stuff going on here:

.catty-music {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  font-weight: 300;
  color: #fff;
  padding-left: 50px;
}

.catty-music div:nth-child(1) {
  margin-bottom: auto;
}

.catty-music div:nth-child(2) {
  margin-top: 0;
}

.catty-music div:nth-child(2) i.fa {
  font-size: 0.9em;
  padding: 0 0.7em;
  font-weight: 300;
}
.catty-music div:nth-child(1) p:first-child {
  font-size: 1.8em;
  margin: 0 0 10px;
}

.catty-music div:nth-child(1) p:not(:first-child) {
  font-size: 0.9em;
  margin: 2px 0;
}


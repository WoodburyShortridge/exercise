# Axios Front End Excerise

## TODO

### Structure
- [ ] Module mapper and aliases
- [ ] Add next/react types to `_document`

### API
- [ ] Response schema validation
- [ ] Handle missing required fields
- [ ] Client side caching
- [ ] End-user error handling

### Components
- [ ] Readme mentions rendering the `display name` of the author, however this is not in figma?
- [ ] Disable article link clicks on desktop when being dragged (it's fine w/ mobile touch events but not mouse)
- [ ] Lazy load/query articles out of carousel view
- [ ] Create image src helper to choose the smallest image size from API that fits device

### Utils
- [ ] Continue profiling performance of `useGesture` listeners and side effects and making it more performant

### Tests
- [X] Carousel snapshot
- [X] Carousel indicator press effects
- [ ] Carousel swipe effects
- [X] Date format
- [X] Is mobile hook
- [ ] Latest articles hook
- [ ] Element width hook

Axios has a lot of award-winning journalism, and sometimes it doesn't all fit on one page, so we have to help readers easily find and read the stories they want. One of the ways we can do that is with a [Carousel](http://ui-patterns.com/patterns/Carousel), a user interface pattern that allows users to navigate between various stories while displaying a simple overview for each.

Our design team has supplied the following design for a Carousel. Your task is to build it.

https://www.figma.com/file/UpnImtkeDJSr21eFjxAoLN/Exercise---Horizontal-Scroll?node-id=0%3A1

We've set up the skeleton of an application for you in [NextJS](https://nextjs.org) with [Styled Components](https://styled-components.com), but there's still plenty of decisions to make.

## Before you start

We're not trying to get you to work for us for free, so please don't spend than more than 4 hours on this. Seriously. We already have a Carousel component 😉

You can write a `TODO` doc that explains how you'd complete any tasks you don't get to.

## Getting started
1. Fork this repo to begin the exercise.
2. In index.html, rebuild the mocks in the Figma design in semantic HTML, CSS and JS.
3. First make a call to the `stream endpoint` to retrieve an array of the 10 lastest story ids for Axios.com.
4. For each story id, make another call to the `content endpoint` to retrieve the data for each story.
5. For each slide in the carousel, display the following:
- The `headline` of the story.
- The `display name` of the author.
- The `section` label of the story.
- The `primary_image` of the story.
- The `published date` of the story.
- Link out the cover image and `Go Deeper` using the `permalink` returned by the API.

These are the endpoints you'll need to populate your Carousel:

### Stream endpoint
https://api.axios.com/api/render/stream/content

This returns the UUIDs of about 10 stories.

### Content endpoint
https://api.axios.com/api/render/content/c13dbda5-893d-46ba-ae6a-87ff8e34c74e

This returns the content and detail of one story, from its UUID.

## Details

- When landing on the page, the first story should be visible.
- When clicking through the Carousel, the headline, cover image, display name, and published date should all change.
- Clicking on an item in the Carousel should open that story on axios.com in a new tab.
- The `Visit axios.com` button should link to [https://www.axios.com](https://www.axios.com).

## Suggestions

- We're big fans of HTML5 semantic elements.

- We prefer tend to prefer functional components over classes, and [hooks](https://reactjs.org/docs/hooks-intro.html) where necessary.

- You can use any data fetching library you like. [Fetch](https://github.com/matthew-andrews/isomorphic-fetch), [Axios](https://github.com/axios/axios) (heh) or [SWR](https://github.com/vercel/swr) will all do just fine.

- We care about accessibility. Please make your page as accessible as possible.

- There are layouts for a smaller screen and a larger screen. We'd love to see a responsive page that works for both. The minimum width of the screen is 375px. The horizontal breakpoint is at 980px.

- Building software is a collaborative process, so if you're feeling adventurous, feel free to diverge from the designs somewhat and apply your own creativity. Let us know about the choices you made, and why.

- The application has [Jest](https://jestjs.io) already set up. Add the amount of test coverage you feel is appropriate.

- We use TypeScript at Axios. Bonus points if you define types and use them effectively to increase the reliability of your code.

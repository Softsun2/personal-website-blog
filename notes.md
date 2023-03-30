# React Notes
I found this [React routing tutorial](https://reactrouter.com/en/main/start/tutorial) helpful

## File Structure
I'm concerned with the fact that the file structure of the React apps I've seen so far don't separate browser functionality from its layout within the `src` directory. I like how intuitive/flexible it is to organize with the component pattern. Still want to read about view/page models/patterns.. Is that convention or convenience?

I've decided to try the following structure with seperations of concerns in mind, it's definitely unnecesarry to sperate presentation and logic with such a small example however.
```
..
├── public
│   └── index.html
└── src
    ├── App.js
    ├── components
    │   ├── behavior
    │   └── structure
    ├── index.css
    ├── index.js
    ├── pages
    │   ├── behavior
    │   └── structure
    └── util
```

## JSX
JSX is markup similar to html that is translated into actual javascript. Be careful to use javascript DOM attribute names for JSX attributes instead of the html counterparts. I.e.,
```jsx
/* correct */
<div className='card'>

/* incorrect */
<div class='card'>
```

## Props
Components have the parameter `props`. `props` is a key value attribute set where the keys are user defined. Values are passed to the componet as JSX attributes.

## State
Is there a functional implementation of state? Regardless the concept is simple yet wasn't obvious at first glance. Using react's `useState` component hook, react will "manage" a local variable for you. This reminds me of setting static function variables in **C**. Where `useState` is called with its initial value and returns a twople of `[stateValue, stateAccessor]`. Where `stateValue` is the current state value and `stateAccessor` is a function whose parameter is the new value of the state.

I worry that the functions/event handlers to apply state changes with this `stateAccessor` will be forwarded to an unreasonable depth.

## Routing (react-router-dom)
This is confusing to me coming from server side routing. What does client side routing even mean? How does this work? Is really only the DOM being manipulated? What is happening under the hood?

If we're doing the routing client side does that mean we never respond to http requests?

### According to the documentation
Client side routing allows your app to update the url without making another request for a document from the server. You request data with `fetch`? How is using fetch any different? As opposed to anchor tags and forms?

### Using `createBrowserRouter` and `RouterProvider`
`createBrowserRouter` creates a router initialized with a list of router objects. A router object has the following keys:
* `path`: the url path
* `element`: the jsx to be rendered
* `errorElement`: the jsx rendered on an error/exception
* `loader`: a function a (async) function that loads the data necessary to render the component
* `children`: a list of route objects that inherit the parent's layout. This requires that the parent element specifies where to render the child route with the `<Outlet />` tag.

See project for structure.

### `Link`
`Link` is another React abstraction. `Link` *links* to a url, this is different from the anchor tag that requests the corresponding page associated with the url. By clicking on a `Link` element the url is updated and the dom is manipulated correspondingly. The page never reloads and no page is requested.

### Loading Data with `loader` and `useLoaderData`
Some components require data to render. A `loader` may be declared for a route. When that route's component is executed the specified `loader`'s return value can be exposed to the component for use via `useLoaderData`

### Data writes and HTML forms
More React abstraction, under-the-hood magic. React emulates making requests to a server using client side-routing and sends them to a route `action`.

#### Using the `Form` tag (instead of `form`)
bruh

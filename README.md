GaAs.js
=======
Copyright (c) 2016 SpoonRocket, Inc.
Licensed under the MIT license.

![Screenshot](http://i.imgur.com/I3BXMzM.png)

Usage
-----

### Install
Firstly install the GaAs library

```html
<script src="http://trygaas.com/release/gaas.min.js"></script>
```

And then init GaAs with `user_id` and `api_token`

```js
GaAs.init({user_id: 5566, api_token: 'token-token'});
```

### Track events
```js
GaAs.track('event_name', options)
```

Available options:
```js
{
  preventDefault: false,  // if you don't want to see default notification
  callback: function(achivements=[]) {}  // so you can handle notification yourself.
}
```

### Get Summary Board
```js
GaAs.renderSummaryBoardInto('#summary-view-root');
```
Pass in a selector string or a DOM node.


### Fetch all achivements
```js
GaAs.getAllAchievements()
  .then(function(achivements){ // do your own stuff })
```

Developement
------------
### Local developement
1. Run `npm run static` to run a static server on `http://localhost:8000`
2. Run `npm run hots` to run webpack Hot Module Replacement server on port `:8080`

### Build distribution package
Run `npm run dist`.

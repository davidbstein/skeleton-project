# how to run

clone the repo, go to the root, run

```
npm start
```

everything should install and a server should start on `localhost:8900`. you can run this anytime.

## other commands

- `npm install` - refresh and update external dependencies
- `npm run build` - do a full build, with dependencies
- `gulp` - turn on the server without checking dependencies
- `gulp build` - build the project, don't turn on the server
- `gulp watch` - rebuild the project whenever a file in `src/` changes
- `gulp web` - turn on the local server

# how to edit

Everything useful is in `src`. The javascript for the frontend attempts to follow the "best practices" outlined in this one-pager https://facebook.github.io/flux/docs/flux-utils.html

Everything else is very much a __TODO__, including the rest of the docs.
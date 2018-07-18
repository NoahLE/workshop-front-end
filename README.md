# Sandbox application

This is a sandbox application which uses Vue, webpack4, Docker, and nginx to serve a simple webpage.

Hot module replacement is now supported as well!

## Installation

Before starting, make sure you have the following installed:

- Node
- Yarn
- Docker

Add `127.0.0.1 local.sandbox.com` to your `/private/etc/hosts` file. Feel free to change this to whatever host you want.

1. Install the packages by running `yarn`
2. Build the project for Docker with `docker-compose -f docker-compose.yml up --build`

## Hot module replacement with server-side rendered templates

If your templates are server-side rendered, you can point the browser to the url of the JS file.
Make sure you have the `devServer` `inline: true` arguement in your webpack config.
 
 ```html
<html>
    <!--...-->
    <body>
        <div id="app"></div>
        <script src="http://localhost:3000/js/app.js"></script>
    </body>
</html>
```
# html-errors
Custom Node.js errors for REST API

## Usage

First install the package:

`npm i html-errors --save`

Then require it in the code:

`let errors = require('html-errors')`

then use it to throw errors:

`throw new errors.BadRequest('Invalid email')`

## License

MIT
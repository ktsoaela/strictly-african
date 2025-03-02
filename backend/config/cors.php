<?php
return [

/*
|--------------------------------------------------------------------------
| Default CORS Settings
|--------------------------------------------------------------------------
|
| The settings for CORS are used to determine which origins are allowed
| to access your application's resources, and which methods and headers
| are allowed in the request.
|
*/

'paths' => ['api/*'],

'allowed_methods' => ['*'],

'allowed_origins' => [
    'http://localhost:3000',
],

'allowed_headers' => ['*'],

'exposed_headers' => [],

'max_age' => 0,

'supports_credentials' => false,
];

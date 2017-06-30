# Notify (Laravel)

Notify alert boxes to the browser  and give it a timeout to fly out.
Works great to notify the user after a successfull action (CRUD).
Flash the information from Laravel or create multiple from javascript.

## Installation

First, pull in the package through Composer.

```js
"require": {
	"ghanem/notify": "1.*"
}
```
OR 
```bash
composer require ghanem/notify
```

Include the service provider within `config\app.php`.

```php
'providers' => [
	Ghanem\Notify\NotifyServiceProvider::class,
];
```

Add a facade alias or use the globel helper function `notify()`.

```php
'aliases' => [
	'Notify' => Ghanem\Notify\Facades\Notify::class,
];
```

## Usage

Within any view file (preferable your master layout).

```html
@include('notify::notify')


```

Within any Controller.

```php
public function index()
{
    // helper function - default to the 'info'
    notify('Content');

    // return object first
    notify()->info('Content');

    // via the facade
    Notify::info('Content');
    
    return view('home');
}
```

The different 'levels' are:
- `notify()->info('Content');`
- `notify()->success('Content');`
- `notify()->warning('Content');`
- `notify()->error('Content');`

The different arguments:
- `notify()->info('contnent', 10000, false);` // without Cansel button

If you need to modify the view partial, you can run:

```bash
php artisan vendor:publish --provider="Ghanem\Notify\NotifyServiceProvider" --tag=view
```

The view partial can be found here `resources\views\vendor\notify\notify.blade`.

You need to publish the assets.

```bash
php artisan vendor:publish --provider="Ghanem\Notify\NotifyServiceProvider" --tag=public
```

Find the files here `public\vendor\notify\`.
Move the mp3s to `public\sounds\`.
If you use Laravel Elixir, move the css and js to your `resource\assets` and include them in your gulpfile.js, otherwise link to the individual files in your html header.

## Note

Please keep in mind this is for my personal workflow and might not fit your need.
I developed this to help speed up my day to day workflow. 
Please let me know about any issues or if you have any suggestions.

## My other Packages

- [Rating](https://github.com/abdullahghanem/rating)

<?php

namespace Ghanem\Notify;

use Illuminate\Support\ServiceProvider;

class NotifyServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application events.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'notify');

        $this->publishes([
            __DIR__ . '/../resources/views' => base_path('resources/views/vendor/notify')
        ], 'view');

        $this->publishes([
            __DIR__ . '/../resources/assets' => public_path('vendor/notify'),
        ], 'public');
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('notify', function () {
            return $this->app->make('Bpocallaghan\Notify\Notify');
        });
    }
}

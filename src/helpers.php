<?php

if (!function_exists('notify')) {
    /**
     * Helper notify info() without facade: Notify::info()
     *
     * @param null        $content
     * @return \Illuminate\Foundation\Application|mixed
     */
    function notify($content = null)
    {
        $notifier = app('notify');

        if (!is_null($content)) {
            return $notifier->info($content);
        }

        return $notifier;
    }

}
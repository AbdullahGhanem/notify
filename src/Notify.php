<?php
namespace Ghanem\Notify;

use Illuminate\Session\Store;

class Notify
{
    /**
     * The session writer.
     *
     * @var SessionStore
     */
    private $session;

    /**
     * Create a new flash notifier instance.
     *
     * @param Store $session
     */
    function __construct(Store $session)
    {
        $this->session = $session;
    }

    /**
     * Flash an info notification
     *
     * @param             $content
     */
    public function info($content, $timeout = 5000, $closeButton = true, $location = ['bottom','right'])
    {
        $this->message('info', $content, $timeout, $closeButton, $location);
    }

    /**
     * Flash a success notification
     *
     * @param             $content
     */
    public function success($content, $timeout = 5000, $closeButton = true, $location = ['bottom','right'])
    {
        $this->message('success', $content, $timeout, $closeButton, $location);
    }

    /**
     * Flash an error notification
     *
     * @param             $content
     */
    public function error($content, $timeout = 5000, $closeButton = true, $location = ['bottom','right'])
    {
        $this->message('error', $content, $timeout, $closeButton, $location);
    }

    /**
     * Flash a warning notification
     *
     * @param             $content
     */
    public function warning($content, $timeout = 5000, $closeButton = true, $location = ['bottom','right'])
    {
        $this->message('warning', $content, $timeout, $closeButton, $location);
    }

    /**
     * Flash a notification message
     *
     * @param string      $type
     * @param             $content
     * @param int         $timeout
     * @param bool        $closeButton
     */
    public function message( $type = 'info', $content, $timeout = 5000, $closeButton = true, $location = ['bottom','right']) 
    {
        $this->session->flash('notify.type', $type);
        $this->session->flash('notify.content', $content);
        $this->session->flash('notify.closeButton', $closeButton);
        $this->session->flash('notify.location', $location);
        
        if ($timeout > 0) {
            $this->session->flash('notify.timeout', $timeout);
        }
    }
}

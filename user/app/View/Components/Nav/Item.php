<?php

namespace App\View\Components\Nav;

use Illuminate\View\Component;

class Item extends Component
{
    public string $href;
    public string $text;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($href, $text)
    {
        $this->href = $href;
        $this->text = $text;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.nav.item');
    }
}

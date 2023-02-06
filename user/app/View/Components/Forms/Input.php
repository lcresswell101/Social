<?php

namespace App\View\Components\Forms;

use Illuminate\View\Component;

class Input extends Component
{
    public string $label;
    public string $name;
    public string $type;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($label, $name, $type)
    {
        $this->label = $label;
        $this->name = $name;
        $this->type = $type;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.forms.input');
    }
}

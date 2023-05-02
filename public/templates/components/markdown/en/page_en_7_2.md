## On-Demand Resources Load

With a dynamic components driven architecture, QCObjects is rendering every visual resource that is inside of a component only when the component is building itself, and every component is connected to a tree called global.componentsStack that is actually pointing to every component instance and its subcomponents. Every time a component is rebuilt, visual resources are dynamically reloaded on-demand in the most efficient way, so you can forget all the nasty code that you were needing to controll the resource loading process with other frameworks.

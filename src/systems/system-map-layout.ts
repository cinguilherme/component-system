import {ComponentInterface} from "../components/ComponentInterface";

export interface SystemComponentInterface {
    dependencies: Array<ComponentInterface>
    name: string
    component: ComponentInterface
}

export interface SystemMapLayout {
    components: Array<SystemComponentInterface>
}

const startSystem = (system_map: SystemMapLayout) => {
    system_map.components
        .map((c) => c.component.start())
        .reduce((a, b) => a.concat(b), []);
    console.log("system started");
}

const stopSystem = (system_map: SystemMapLayout) => {
    system_map.components
        .map((c) => c.component.stop())
        .reduce((a, b) => a.concat(b), []);
    console.log("system started");
}

export const system = (system_map: SystemMapLayout) => {
    return {
        system_map: system_map,
        start: () => startSystem(system_map),
        stop: () => stopSystem(system_map)
    }
}
import {ComponentInterface} from "../components/ComponentInterface";

export interface SystemComponentInterface {
    dependencies: Array<ComponentInterface>
    name: string
    component: ComponentInterface
}

export interface SystemMap {
    components: Array<SystemComponentInterface>
}

export interface System {
    system_map: SystemMap,
    start: () => void,
    stop: () => void
}

export type SystemFn = (system_map: SystemMap) => System;

const startSystem = (system_map: SystemMap) => {
    system_map.components
        .map((c) => c.component.start())
        .reduce((a, b) => a.concat(b), []);
    console.log("system started");
}

const stopSystem = (system_map: SystemMap) => {
    system_map.components
        .map((c) => c.component.stop())
        .reduce((a, b) => a.concat(b), []);
    console.log("system started");
}

export const system: SystemFn = (system_map: SystemMap) => {
    return {
        system_map: system_map,
        start: () => startSystem(system_map),
        stop: () => stopSystem(system_map)
    }
}
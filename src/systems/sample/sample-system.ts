import { HttpComponent } from '../../components/http_server_component/http_server_component'
import {SystemMapLayout} from "../system-map-layout";

const http = new HttpComponent();

export const system_map: SystemMapLayout = {
    components: [{
        dependencies: [],
        name: "http",
        component: http
    }]
}

export const startSystem = (system_map: SystemMapLayout) => {
    system_map.components
        .map((c) => c.component.start())
        .reduce((a, b) => a.concat(b), []);
    console.log("system started");
}

export const stopSystem = (system_map: SystemMapLayout) => {
    system_map.components
        .map((c) => c.component.stop())
        .reduce((a, b) => a.concat(b), []);
    console.log("system stopped");
}

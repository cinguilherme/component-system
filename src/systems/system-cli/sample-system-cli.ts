import {SystemMapLayout} from "../system-map-layout";
import {CliComponent} from "../../components/cli_input_component/cli-component";

const cli = new CliComponent();

const system_map: SystemMapLayout = {
    components: [{
        dependencies: [],
        name: "cli",
        component: cli
    }],
}

export const startSystem = (system_map: SystemMapLayout) => {
    system_map.components
        .map((c) => c.component.start())
        .reduce((a, b) => a.concat(b), []);
    console.log("system started");
}
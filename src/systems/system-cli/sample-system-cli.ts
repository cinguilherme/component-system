import {SystemMapLayout, system} from "../system-map-layout";
import {CliComponent} from "../../components/cli_input_component/cli-component";

const cli = new CliComponent();

export const system_map: SystemMapLayout = {
    components: [{
        dependencies: [],
        name: "cli",
        component: cli
    }],
}

export const cli_system = system(system_map);

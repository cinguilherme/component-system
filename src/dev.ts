import {cli_system} from "./systems/system-cli/sample-system-cli";
import {CliComponent} from "./components/cli_input_component/cli-component";

cli_system.start();

const cli = cli_system.system_map.components[0].component as CliComponent;

cli.program.parse()

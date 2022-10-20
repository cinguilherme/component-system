import {ComponentInterface} from "../ComponentInterface";
import {program} from "commander";

export class CliComponent implements ComponentInterface {

    dependencies: Array<string> = [];
    name: string = "cli";

    public state;

    start() {
        this.state = program.command("start").action(() => {
            console.log('bla')
        });
    }

    status() {
    }

    stop() {
    }

}
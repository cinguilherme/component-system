import {ComponentInterface} from "../ComponentInterface";
import { Command} from "commander";
import fetch, { Headers } from "node-fetch";

export class CliComponent implements ComponentInterface {

    dependencies: Array<string> = [];
    name: string = "cli";

    public program: Command;

    constructor() {

    }

    start() {
        const program = new Command();
        program.name('cli')
            .description('cli for the system')
            .version('0.0.1');

        program.command('cat')
            .action(() => {
                fetch('https://catfact.ninja/fact')
                    .then(r => r.json())
                    .then((data) => console.log(data));
            });

        this.program = program;
    }

    status() {
    }

    stop() {
        console.log('cli stopped');
        this.program = null;
    }

}

const command_fetch_cat_fact = new Command("fetch-cat-fact").alias('cat').action(() => {});
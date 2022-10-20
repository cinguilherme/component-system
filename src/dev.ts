import { dev } from "./systems/sample-http/sample-system";

import { program } from "commander";

program.command("start").action(() => {
    console.log('bla')
});


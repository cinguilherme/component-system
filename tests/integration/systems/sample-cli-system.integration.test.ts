import { cli_system } from "../../../src/systems/system-cli/sample-system-cli";

describe("Sample System", () => {

    describe("CLI System", () => {

        it('should start and stop system', function () {

            cli_system.start();

            cli_system.stop();
            
        });

    });

});
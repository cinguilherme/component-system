import {server_system} from "../../../src/systems/sample-http/sample-system";
import supertest from "supertest";

describe("Sample System", () => {

    it('should start and stop the system', () => {
        server_system.start();
        server_system.stop();
    });


    it('should start, expose a working endpoint and stop the system', async () => {
        server_system.start();
        await supertest("http://localhost:3000").get("/").expect(200);

        server_system.stop();
        try {
            await supertest("http://localhost:3000").get("/")
        } catch (e) {
            expect(e.message).toContain("ECONNREFUSED")
        }
    });

});
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");

console.log(new Potion());

const Player = require("../lib/Player");
const { JestHook } = require("jest-watcher");

test("creates player object", () => {
	const player = new Player("Dave");

	expect(player.name).toBe("Dave");
	expect(player.health).toEqual(expect.any(Number));
	expect(player.strength).toEqual(expect.any(Number));
	expect(player.agility).toEqual(expect.any(Number));

	expect(player.inventory).toEqual(
		expect.arrayContaining([expect.any(Object)])
	);
});

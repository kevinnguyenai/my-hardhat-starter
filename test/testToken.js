const { expect } = require("chai");

let owner, alice, bob;
let Token;
let hardhatToken;

beforeEach('init env for test', async() => {
    [owner, alice, bob] = await ethers.getSigners();

    Token = await ethers.getContractFactory("Token");

    hardhatToken = await Token.deploy();
});

describe("Token", function() {
    it("Deployment should assign the total supply of tokens to the owner", async() => {
        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

    });
});

describe('Transfer token from A to B', async() => {
    it('A connect and trasfer to B', async() => {
        const OwnerTransferAlice = await hardhatToken.transfer(alice.address, 50);
        expect(await hardhatToken.balanceOf(alice.address)).to.equal(50);
        const AliceTransferBob = await hardhatToken.connect(alice).transfer(bob.address, 50);
        expect(await hardhatToken.balanceOf(bob.address)).is.equal(50);
    });
});
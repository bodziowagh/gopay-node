import "../utils"
import { expect } from "chai"
import * as nock from "nock"
import { Scope } from "nock"
import { RestAPI, ErrorResponse } from "../../src/api/RestAPI"
import { TransactionTokens } from "../../src/resources/TransactionTokens"
import { VALIDATION_ERROR } from "../../src/errors/ErrorsConstants"

describe("Transaction Tokens", () => {
    let api: RestAPI
    let tokens: TransactionTokens
    let scope: Scope
    const testEndpoint = "http://localhost:80"

    beforeEach(() => {
        api = new RestAPI({endpoint: testEndpoint })
        tokens = new TransactionTokens(api)
        scope = nock(testEndpoint)
    })

    afterEach(() => {
        nock.cleanAll()
    })

    context("route POST /tokens", () => {
        it("should return correct response", () => {
            const okResponse = { action : "create" }
            const okScope = scope
                .post("/tokens")
                .once()
                .reply(201, okResponse, { "Content-Type" : "application/json" })

            const data = {
                paymentType: "test",
                subscription: true,
                email: "test",
                amount: 1,
                currency: "test",
                data: {} as any
            }

            return tokens.create(data).should.eventually.eql(okResponse)
        })

        it("should return validation error if data is invalid", () => {
            const asserts = [
                {}
            ]

            return Promise.all(asserts.map((a: any) => {
                return tokens.create(a).should.be.rejected
                    .then((e: ErrorResponse) => expect(e.code).to.equal(VALIDATION_ERROR))
            }))
        })
    })

    context("route GET /stores/:storeId/tokens/:id", () => {
        it("should return correct response", () => {
            const okResponse = { action : "get" }
            const okScope = scope
                .get(/\/stores\/[a-f-0-9\-]+\/tokens\/[a-f0-9]+$/i)
                .once()
                .reply(200, okResponse, { "Content-Type" : "application/json" })

            return tokens.get("1", "1").should.eventually.eql(okResponse)
        })
    })

})

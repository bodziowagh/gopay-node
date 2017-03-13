import "../utils"
import { test, AssertContext } from "ava"
import * as nock from "nock"
import { Scope } from "nock"
import { RestAPI, ErrorResponse } from "../../src/api/RestAPI"
import { TransactionTokens } from "../../src/resources/TransactionTokens"
import { VALIDATION_ERROR } from "../../src/errors/ErrorsConstants"

let api: RestAPI
let tokens: TransactionTokens
let scope: Scope
const testEndpoint = "http://localhost:80"

test.before(() => {
    api = new RestAPI({endpoint: testEndpoint })
    tokens = new TransactionTokens(api)
    scope = nock(testEndpoint)
})

test.always.after(() => {
    nock.cleanAll()
})

test("route POST /tokens # should return correct response", async (t: AssertContext) => {
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

    const r: any = await t.notThrows(tokens.create(data))

    t.deepEqual(r, okResponse)
})

test("route POST /tokens # should return validation error if data is invalid", (t: AssertContext) => {
    const asserts = [
        {}
    ]

    return Promise.all(asserts.map(async (a: any) => {
        const e: ErrorResponse = await t.throws(tokens.create(a))
        t.deepEqual(e.code, VALIDATION_ERROR)
    }))
})

test("route GET /stores/:storeId/tokens/:id # should return correct response", async (t: AssertContext) => {
    const okResponse = { action : "get" }
    const okScope = scope
        .get(/\/stores\/[a-f-0-9\-]+\/tokens\/[a-f0-9]+$/i)
        .once()
        .reply(200, okResponse, { "Content-Type" : "application/json" })

    const r: any = await t.notThrows(tokens.get("1", "1"))

    t.deepEqual(r, okResponse)
})

import "../utils"
import { test, AssertContext } from "ava"
import * as nock from "nock"
import { Scope } from "nock"
import { RestAPI, ErrorResponse } from "../../src/api/RestAPI"
import { Stores } from "../../src/resources/Stores"
import { VALIDATION_ERROR } from "../../src/errors/ErrorsConstants"

let api: RestAPI
let stores: Stores
let scope: Scope
const testEndpoint = "http://localhost:80"

test.before(() => {
    api = new RestAPI({endpoint: testEndpoint })
    stores = new Stores(api)
    scope = nock(testEndpoint)
})

test.always.after(() => {
    nock.cleanAll()
})

test("route GET /stores # should return correct response", async (t: AssertContext) => {
    const okResponse = { action : "list" }
    const okScope = scope
        .get("/stores")
        .once()
        .reply(200, okResponse, { "Content-Type" : "application/json" })

    const r: any = await t.notThrows(stores.list())

    t.deepEqual(r, okResponse)
})

test("route POST /stores # should return correct response", async (t: AssertContext) => {
    const okResponse = { action : "create" }
    const okScope = scope
        .post("/stores")
        .once()
        .reply(201, okResponse, { "Content-Type" : "application/json" })
    const data = {
        name : "test"
    }

    const r: any = await t.notThrows(stores.create(data))

    t.deepEqual(r, okResponse)
})

test("route POST /stores # should return validation error if data is invalid", (t: AssertContext) => {
    const asserts = [
        {}
    ]

    return Promise.all(asserts.map(async (a: any) => {
        const e: ErrorResponse = await t.throws(stores.create(a))
        t.deepEqual(e.code, VALIDATION_ERROR)
    }))
})

test("route GET /stores/:id # should return correct response", async (t: AssertContext) => {
    const okResponse = { action : "read" }
    const scopeScope = scope
        .get(/\/stores\/[a-f-0-9\-]+$/i)
        .once()
        .reply(200, okResponse, { "Content-Type" : "application/json" })

    const r: any = await t.notThrows(stores.get("1"))

    t.deepEqual(r, okResponse)
})

test("route PATCH /stores/:id # should return correct response", async (t: AssertContext) => {
    const okResponse = { action : "update" }
    const okScope = scope
        .patch(/\/stores\/[a-f-0-9\-]+$/i)
        .once()
        .reply(200, okResponse, { "Content-Type" : "application/json" })
    const data = { name : "test" }

    const r: any = await t.notThrows(stores.update("1", data))

    t.deepEqual(r, okResponse)
})

test("route DELETE /stores/:id # should return correct response", async (t: AssertContext) => {
    const okResponse = { action : "read" }
    const scopeScope = scope
        .delete(/\/stores\/[a-f-0-9\-]+$/i)
        .once()
        .reply(204, okResponse, { "Content-Type" : "application/json" })

    const r: any = await t.notThrows(stores.delete("1"))

    t.deepEqual(r, okResponse)
})

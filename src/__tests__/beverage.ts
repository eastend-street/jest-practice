const beverages = {
    delicious: true,
    sour: false

}

it("delicious", ()=> {
    expect(beverages.delicious).toBeTruthy()
})

it("sour", ()=> {
    expect(beverages.sour).toBeFalsy();
})
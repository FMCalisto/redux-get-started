const addCounter = (list) => {



};

const testAddCounter = () => {

    const listBefore = [];
    const listAfter = [0];

    expect(

        addCounter(listBefore)

    ).toEqual(listAfter);

};

testAddCounter();
console.log('All tests passed.');

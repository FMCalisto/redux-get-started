/*
 * Avoiding Array Mutations.
 *
 * @author: Francisco Maria Calisto
 *
 */

const addCounter = (list) => {

    // Concat Method does not modify the original array.
    myList = list.concat([0]);

    return myList;

};

const removeCounter = (list, index) => {

    return list
        .slice(0, index)
        .concat(list.slice(index + 1));

};

const incrementCounter = (list, index) => {

    return list
        .slice(0, index)
        .concat([list[index] + 1])
        .concat(list.slice(index + 1));

}

const testAddCounter = () => {

    const listBefore = [];
    const listAfter = [0];

    expect(

        addCounter(listBefore)

    ).toEqual(listAfter);

};

const testRemoveCounter = () => {

    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    deepFreeze(listBefore);

    expect(

        removeCounter(listBefore, 1)

    ).toEqual(listAfter);

};

const testIncrementCounter = () => {

    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore);

    expect(

        incrementCounter(listBefore, 1)

    ).toEqual(listAfter);

};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed.');

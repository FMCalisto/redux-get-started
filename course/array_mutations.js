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

    list.splice(index, 1);
    return list;

};

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

    //FIXME
    deepFreeze(listBefore);

    expect(

        removeCounter(listBefore, 1)

    ).toEqual(listAfter);

};

testAddCounter();
testRemoveCounter();
console.log('All tests passed.');

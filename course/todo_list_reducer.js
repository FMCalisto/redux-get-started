/*
 * Todo List Reducer (Adding a Todo).
 *
 * @author: Francisco Maria Calisto
 *
 */

const todos = (state = [], action) => {



};

const testAddTodo = () => {

    const stateBefore = [];

    const action = {

        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'

    };

    const stateAfter = [

        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }

    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(

        todos(stateBefore, action)

    ).toEqual(stateAfter);

};

testAddTodo();
console.log('All tests passed.');

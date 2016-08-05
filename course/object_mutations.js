/*
 * Avoiding Object Mutations.
 *
 * @author: Francisco Maria Calisto
 *
 */

const toggleTodo = (todo) => {

    return {

        id: todo.id,
        text: todo.text,
        completed: !todo.completed

    };

};

const testToggleTodo = () => {

    const todoBefore = {

        id: 0,
        text: 'Learn Redux',
        completed: false

    };

    const todoAfter = {

        id: 0,
        text: 'Learn Redux',
        completed: true

    };

    deepFreeze(todoBefore);

    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter);

};

testToggleTodo();
console.log('All tests passed.');

/*
 * Impure functions.
 *
 * @author: Francisco Maria Calisto
 *
 */

function counter(state, saction) {

    if(typeof state === 'undefined') {

        return 0;

    }

    if (action.type === 'INCREMENT') {

        return state + 1;

    } else if (action.type === 'DECREMENT') {

        return state - 1;

    }

}

expect(

    counter(0, {type: 'INCREMENT'})

).toEqual(1);

expect(

    counter(1, {type: 'INCREMENT'})

).toEqual(2);

expect(

    counter(2, {type: 'DECREMENT'})

).toEqual(1);

expect(

    counter(1, {type: 'DECREMENT'})

).toEqual(0);

expect(

    counter(1, {type: 'SOMETHING_ELSE'})

).toEqual(1);

expect(

    counter(undefined, {})

).toEqual(0);

console.log('Tests passed!');

// - Miss Tick ne vient pas
const personId = action.payload

//? « Classic »
return {
    ...state,
    people: state.people.map(person => person.id !== personId ? person : {
        ...person,
        status: {
            ...person.status,
            confirm: true,
            present: false
        }
    })
}

//? « Immer »
const target = state.people.find(person => person.id === personId);
target.status.confirm = true;
target.status.present = true;


// - Balthazar vient et il prend le Camembert
const { personId, giftId } = action.payload;

//? « Classic »
return {
    ...state,
    people: state.people.map(person => person.id !== personId ? person : {
        ...person,
        status: {
            ...person.status,
            present: true
        }
    }),
    gifts: state.gifts.map(gift => gift.id !==giftId ? gift : {
        ...gift,
        isSelected: true
    })
}

//? « Immer »
state.people.find(person => person.id === personId)?.status.present = true;
state.gifts.find(gift => gift.id === giftId)?.isSelected = true;
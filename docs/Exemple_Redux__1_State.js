// State dans un reducer
const state = {
    people: [
        {
            firstname: 'Della',
            lastname: 'Duck',
            status: {
                confirm: true,
                present: true
            }
        },
        {
            firstname: 'Balthazar',
            lastname: 'Picsou',
            status: {
                confirm: true,
                present: false
            }
        },
        {
            firstname: 'Miss Tick',
            lastname: 'De Spell',
            status: {
                confirm: false
            }
        }
    ],
    gifts: [
        {
            name: 'Lampe lave',
            isSelected: true
        },
        {
            name: 'Camembert',
            isSelected: false
        }
    ],
    lastUpdate: '2024-04-08T12:50:30',
    guest: {
        firstname: 'Zaza',
        lastname: 'Vanderquack'
    }
}
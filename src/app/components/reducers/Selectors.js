import {createSelector} from 'reselect'

const peopleSelector = state => state.data.people 

export const allPeople = createSelector([peopleSelector], people => {
    return people.filter( person => person)
})
export const topTenPeople = createSelector([peopleSelector, allPeople], people => {
    return people.filter ( (person, i) =>
      i < 10 && person
    )
})
export const peopleNamedJohn = createSelector([peopleSelector, allPeople], people => {
    return people.filter( person => {
        if(person.name) {
            return person.name.toLowerCase() === 'john'
        }
    })
})
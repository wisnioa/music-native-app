    
const typeDefinitions = `
type Venue {
    venue: String
}

type Date {
    date: String
}
type Show {
    band: String
    venue: Venue
    date: Date
}
type RootQuery {
    Show(band: String, venue: Venue, date: Date): Show
}
schema {
    query: RootQuery
}
`;

module.exports = [typeDefinitions];
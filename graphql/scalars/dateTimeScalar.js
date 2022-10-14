const { GraphQLScalarType } = require("graphql");

const dateTimeScalarType = new GraphQLScalarType({
  name: "DateTime",
  description: "Data type rep of date-and-time/timestamp.",
  parseValue: str_date_time => {
    const dateTime = new Date(str_date_time);
    if (dateTime.getTime() > 0) return dateTime;
    throw new Error("Invalid date-time");
  },
  serialize: date_time => {
    return date_time.toISOString();
  },
});

module.exports = { DateTimeScalarType: dateTimeScalarType };

// REFERENCE: https://blog.tericcabrel.com/handle-custom-data-type-in-a-graphql-application-with-nodejs/

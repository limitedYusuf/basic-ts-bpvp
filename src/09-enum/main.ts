enum Day {
   Sunday,
   Monday,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturday,
}

let today: Day = Day.Wednesday;

console.log("Enum Example:");

switch (today) {
   // @ts-ignore
   case Day.Sunday:
      console.log("Today is Sunday");
      break;
   // @ts-ignore
   case Day.Monday:
      console.log("Today is Monday");
      break;
   // @ts-ignore
   case Day.Tuesday:
      console.log("Today is Tuesday");
      break;
   // @ts-ignore
   case Day.Wednesday:
      console.log("Today is Wednesday");
      break;
   // @ts-ignore
   case Day.Thursday:
      console.log("Today is Thursday");
      break;
   // @ts-ignore
   case Day.Friday:
      console.log("Today is Friday");
      break;
   // @ts-ignore
   case Day.Saturday:
      console.log("Today is Saturday");
      break;
   default:
      console.log("Invalid day");
      break;
}

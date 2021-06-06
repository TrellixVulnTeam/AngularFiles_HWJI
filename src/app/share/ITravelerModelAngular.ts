interface ITravelerModelAngular {
  travelerId: string,
  fName: string,
  lName: string,
  propertyName: string,
  description: string,
  locationPreferences: [string],
  datePreferences: [Date],
  properties: number,
}

export default ITravelerModelAngular;

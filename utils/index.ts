

export async function fetchCars(filters: { manufacturer?: string; model?: string; year?: number; fuel?: string; limit?: number }) {
	const headers = {
		'x-rapidapi-key': '02730e2ee9msha41ac263234906ep10da5fjsn3de92a935c9a',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	};
	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', {
		method: 'GET',
		headers: headers
	});
    const result = await response.json();
    return result;
}
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1;  // Additional rate per mile driven
  const ageFactor = 0.05;     // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0); // return as string (rounded)
};
export const generateCarImageUrl = (car: { make: string; model: string; year: number }, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, model, year } = car;
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);
}
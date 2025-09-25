import dayjs from "dayjs";

/**
 * Input: the /forecast API result (3-hour intervals for 5 days)
 * Output:
 *  - daily: array of objects { date, dayName, tempMin, tempMax, icon }
 *  - hourly: array of next N hours from now [{ time, temp, icon }]
 */

type ForecastItem = {
  dt: number;
  main: { temp: number; temp_min: number; temp_max: number; pressure?: number };
  weather: { icon: string; description: string }[];
  pop?: number;
  rain?: { "3h"?: number };
};

export function buildDailyAndHourly(forecastList: ForecastItem[], hours = 8) {
  if (!forecastList || !forecastList.length) return { daily: [], hourly: [] };

  // hourly: next `hours` items starting from now (forecastList is chronological)
  const hourly = forecastList.slice(0, hours).map((it) => ({
    time: dayjs.unix(it.dt).format("h A"),
    temp: Math.round(it.main.temp),
    icon: it.weather[0].icon,
  }));

  // daily: group by date
  const groups: Record<string, ForecastItem[]> = {};
  for (const it of forecastList) {
    const key = dayjs.unix(it.dt).format("YYYY-MM-DD");
    if (!groups[key]) groups[key] = [];
    groups[key].push(it);
  }

  const daily = Object.keys(groups)
    .slice(0, 7) // top 7 days
    .map((dateKey) => {
      const items = groups[dateKey];
      const temps = items.map((i) => i.main.temp);
      const min = Math.min(...temps);
      const max = Math.max(...temps);
      // pick the most frequent icon in that day or the midday icon
      const midday = items[Math.floor(items.length / 2)];
      const icon = midday?.weather?.[0]?.icon || items[0]?.weather?.[0]?.icon;
      return {
        date: dateKey,
        dayName: dayjs(dateKey).format("ddd"),
        tempMin: Math.round(min),
        tempMax: Math.round(max),
        icon,
      };
    });

  return { daily, hourly };
}

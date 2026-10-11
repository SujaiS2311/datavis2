
const charts = [
  ["c01", "01_state_choropleth"],
  ["c02", "02_point_map"],
  ["c03", "03_bubble_map"],
  ["c04", "04_order_comparison"],
  ["c05", "05_annual_trend"],
  ["c06", "06_seasonal_heatmap"],
  ["c07", "07_month_by_month"],
  ["c08", "08_state_group_heatmap"],
  ["c09", "09_checklist"],
  ["c10", "10_threatened"],
  ["c11", "11_monthly_source_comparison"]
];

function fixDataPaths(value) {
  if (Array.isArray(value)) {
    value.forEach(fixDataPaths);
  } else if (value && typeof value === "object") {
    if (
      typeof value.url === "string" &&
      value.url.startsWith("data/")
    ) {
      value.url = value.url.slice(5);
    }

    Object.values(value).forEach(fixDataPaths);
  }
}

async function loadChart(element, name) {
  const container = document.getElementById(element);

  try {
    const response = await fetch(`${name}.json`);

    if (!response.ok) {
      throw new Error(`Cannot load ${name}.json`);
    }

    const spec = await response.json();

    fixDataPaths(spec);

    await vegaEmbed(`#${element}`, spec, {
      actions: false
    });
  } catch (error) {
    console.error(name, error);
    container.textContent =
      "Chart unavailable: " + error.message;
  }
}

charts.forEach(([element, name]) => {
  loadChart(element, name);
});

const charts = [
["c01","01_state_choropleth"],["c02","02_point_map"],["c03","03_bubble_map"],
["c04","04_order_comparison"],["c05","05_annual_trend"],["c06","06_seasonal_heatmap"],
["c07","07_month_by_month"],["c08","08_state_group_heatmap"],
["c09","09_checklist"],["c10","10_threatened"],["c11","11_monthly_source_comparison"]
];
for (const [element, name] of charts) {
  vegaEmbed("#"+element, name+".json", {actions: {export:true,source:false,compiled:false,editor:false}})
    .catch(error => { console.error(name,error); document.getElementById(element).textContent = "Chart unavailable: " + error.message; });
}

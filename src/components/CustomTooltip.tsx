import "../styles/customTooltip.css";

export const customTooltip = (data: any): string => {
  const { w, dataPointIndex } = data;

  const currentLabel = w.globals.categoryLabels[dataPointIndex];

  const infosDataPoint = w.globals.series.map((serie: any, index: number) => {
    const currentSerieName = w.globals.seriesNames[index];
    return {
      name: currentSerieName,
      value: serie[dataPointIndex],
    };
  });

  return `
    <div class="tooltip-container">
      <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 10px;"> 
       Month: ${currentLabel}
      </div>
      ${infosDataPoint
        .map((item: any) => {
          return `
            <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 5px;">
              ${item.name}
            </div>
            <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 5px;">
              ${item.value}
            </div>
          `;
        })
        .join("")}
    </div>
  `;
};

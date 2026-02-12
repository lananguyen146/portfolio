import Plot from 'react-plotly.js';

export default function Dashboard() {
  // Campaign Performance Line Chart
  const performanceData = [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    y: [22, 25, 28, 26, 30, 32],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Open Rate %',
    line: { color: '#3b82f6' }
  }, {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    y: [3.2, 3.8, 4.1, 3.9, 4.5, 4.8],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Click Rate %',
    yaxis: 'y2',
    line: { color: '#10b981' }
  }];

  // Channel Performance Bar Chart
  const channelData = [{
    x: ['Email', 'Social Media', 'Paid Search', 'Organic'],
    y: [45000, 32000, 28000, 18000],
    type: 'bar',
    marker: { color: '#8b5cf6' }
  }];

  // Social Engagement
  const socialData = [{
    labels: ['Instagram', 'Facebook', 'LinkedIn', 'TikTok'],
    values: [4200, 3800, 2100, 5600],
    type: 'pie',
    marker: { colors: ['#e11d48', '#3b82f6', '#0077b5', '#000000'] }
  }];

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h4 className="text-xl font-semibold mb-4">Email Campaign Performance</h4>
        <Plot
          data={performanceData}
          layout={{
            autosize: true,
            yaxis: { title: 'Open Rate %' },
            yaxis2: { title: 'Click Rate %', overlaying: 'y', side: 'right' },
            legend: { x: 0, y: 1.2, orientation: 'h' }
          }}
          useResizeHandler
          style={{ width: '100%', height: '400px' }}
          config={{ responsive: true }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-xl font-semibold mb-4">Channel Revenue</h4>
          <Plot
            data={channelData}
            layout={{
              autosize: true,
              yaxis: { title: 'Revenue ($)' }
            }}
            useResizeHandler
            style={{ width: '100%', height: '350px' }}
            config={{ responsive: true }}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-xl font-semibold mb-4">Social Media Engagement</h4>
          <Plot
            data={socialData}
            layout={{ autosize: true }}
            useResizeHandler
            style={{ width: '100%', height: '350px' }}
            config={{ responsive: true }}
          />
        </div>
      </div>
    </div>
  );
}

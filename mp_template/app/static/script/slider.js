const sliders = document.querySelectorAll('.slider');
const predicted_value = document.querySelector('.predicted_value');

function getAttribute(element, attribute) {
  return parseFloat(element.getAttribute(attribute));
}

function normalize_z(input, mean, std) {
  return (input - mean) / std;
}

const parameters = {
  precipitation: {
    mean: 2.57399078e-3,
    std: 9.92409677e3,
  },
  temperature: {
    mean: 2.7237129e1,
    std: 6.68155437,
  },
  ppi: {
    mean: 8.89335484e1,
    std: 3.26032829e1,
  },
  arable_land: {
    mean: 9.92409677e3,
    std: 2.40914704e3,
  },
};

function calcPredVal() {
  const precipitation_elm = document.querySelector(
    '[data-target="graph-precipitation"]'
  );
  const temperature_elm = document.querySelector(
    '[data-target="graph-temperature"]'
  );
  const ppi_elm = document.querySelector('[data-target="graph-ppi"]');
  const arable_land_elm = document.querySelector('[data-target="graph-land"]');

  const y_intercept = getAttribute(precipitation_elm, 'data-yIntercept');
  const precipitation_grad = getAttribute(precipitation_elm, 'data-gradient');
  const temperature_grad = getAttribute(temperature_elm, 'data-gradient');
  const ppi_grad = getAttribute(ppi_elm, 'data-gradient');
  const arable_land_grad = getAttribute(arable_land_elm, 'data-gradient');

  const precipitation = precipitation_elm.value;
  const temperature = temperature_elm.value;
  const ppi = ppi_elm.value;
  const arable_land = arable_land_elm.value;

  const precipitation_z = normalize_z(
    1 / precipitation,
    parameters['precipitation']['mean'],
    parameters['precipitation']['std']
  );
  const temperature_z = normalize_z(
    temperature,
    parameters['temperature']['mean'],
    parameters['temperature']['std']
  );
  const ppi_z = normalize_z(
    ppi,
    parameters['ppi']['mean'],
    parameters['ppi']['std']
  );
  const arable_land_z = normalize_z(
    arable_land,
    parameters['arable_land']['mean'],
    parameters['arable_land']['std']
  );

  const result =
    y_intercept +
    precipitation_z * precipitation_grad +
    temperature_z * temperature_grad +
    ppi_z * ppi_grad +
    arable_land_z * arable_land_grad;

  return result.toFixed(7);
}

sliders.forEach((slider) => {
  const graphId = slider.getAttribute('data-target');
  const minX = getAttribute(slider, 'data-min-x');
  const currX = parseFloat(slider.value);
  const maxX = getAttribute(slider, 'data-max-x');
  const gradient = getAttribute(slider, 'data-gradient');
  const yIntercept = getAttribute(slider, 'data-yIntercept');
  let feature_name;
  if (graphId === 'graph-temperature') {
    feature_name = 'temperature';
  } else if (graphId === 'graph-precipitation') {
    feature_name = 'precipitation';
  } else if (graphId === 'graph-ppi') {
    feature_name = 'ppi';
  } else if (graphId === 'graph-land') {
    feature_name = 'arable_land';
  }

  updateGraph(
    graphId,
    minX,
    currX,
    maxX,
    gradient,
    yIntercept,
    parameters[feature_name]['mean'],
    parameters[feature_name]['std']
  );
  predicted_value.innerHTML = calcPredVal();

  slider.addEventListener('input', function () {
    const graphId = slider.getAttribute('data-target');
    const minX = getAttribute(slider, 'data-min-x');
    const currX = parseFloat(slider.value);
    const maxX = getAttribute(slider, 'data-max-x');
    const gradient = getAttribute(slider, 'data-gradient');
    const yIntercept = getAttribute(slider, 'data-yIntercept');
    updateGraph(
      graphId,
      minX,
      currX,
      maxX,
      gradient,
      yIntercept,
      parameters[feature_name]['mean'],
      parameters[feature_name]['std']
    );
    predicted_value.innerHTML = calcPredVal();
  });
});

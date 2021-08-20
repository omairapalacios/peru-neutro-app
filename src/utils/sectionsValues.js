function getSectionTransport(answer) {
  switch (answer) {
    case 'GASOHOL (86, 90, 95)':
      return 'sectionTransportGasohol01';
    case 'DISSEL':
      return 'sectionTransportDissel01';
    case 'GLP':
      return 'sectionTransportGLP01';
    case 'GNV':
      return 'sectionTransportGNV01';
    default:
      return 'sectionTransportGLP01';
  }
}

function getSectionEnergy(answer) {
  switch (answer) {
    case 'PETROLEO INDUSTRIAL':
      return 'sectionEnergyIndustrial01';
    case 'PETROLEO INDUSTRIAL 6':
      return 'sectionEnergyIndustrial6';
    case 'GASOHOL (86, 90, 95)':
      return 'sectionEnergyGasohol01';
    case 'DIESSEL':
      return 'sectionEnergyDiessel01';
    case 'GLP':
      return 'sectionEnergyGLP01';
    case 'GNV':
      return 'sectionEnergyGNV01';
    default:
      return 'sectionEnergyGLP01';
  }
}

export default function getSection(formId, answer) {
  switch (formId) {
    case 'form-transport-footprint':
      return getSectionTransport(answer);
    case 'form-energy-footprint':
      return getSectionEnergy(answer);
    case 'form-electric-footprint':
      return 'sectionEnergy01';
    case 'form-water-footprint':
      return 'sectionEnergy01';
    case 'form-nf3-footprint':
      return 'sectionEnergy01';
    default:
      return 'sectionEnergy01';
  }
}

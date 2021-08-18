function getSectionTransport(answer) {
  switch (answer) {
    case 'GASOHOL (86, 90, 95)':
      return 'sectionGasohol01';
    case 'DISSEL':
      return 'sectionDissel01';
    case 'GLP':
      return 'sectionGLP01';
    case 'GNV':
      return 'sectionGNV01';
    default:
      return 'sectionGLP01';
  }
}

export default function getSection(formId, answer) {
  switch (formId) {
    case 'form-transport-footprint':
      return getSectionTransport(answer);
    case 'form-energy-footprint':
      return 'sectionEnergy01';
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

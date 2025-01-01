const locations = require('../../data/v1-data.json');

const LocationUtils = {
  // Get all states
  getAllStates: () => {
    return locations.locations.map(loc => loc.state);
  },

  // Get LGAs by state name
  getLGAsByState: (stateName) => {
    const state = locations.locations.find(
      loc => loc.state.toLowerCase() === stateName.toLowerCase()
    );
    return state ? state.localGovt : [];
  },

  // Search LGAs across all states
  searchLGAs: (searchTerm) => {
    return locations.locations.reduce((acc, state) => {
      const matches = state.localGovt.filter(lga =>
        lga.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (matches.length > 0) {
        acc.push({ state: state.state, matches });
      }
      return acc;
    }, []);
  },

  // Check if state exists
  isValidState: (stateName) => {
    return locations.locations.some(
      loc => loc.state.toLowerCase() === stateName.toLowerCase()
    );
  },

  // Check if LGA exists in a state
  isValidLGA: (stateName, lgaName) => {
    const lgas = LocationUtils.getLGAsByState(stateName);
    return lgas.some(lga => 
      lga.toLowerCase() === lgaName.toLowerCase()
    );
  }
};

module.exports = LocationUtils;
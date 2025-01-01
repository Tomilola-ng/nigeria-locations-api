const express = require('express');
const router = express.Router();
const LocationUtils = require('../../utils/locationUtils');

// Get all states
router.get('/states', (req, res) => {
  res.json(LocationUtils.getAllStates());
});

// Get LGAs for a specific state
router.get('/states/:state/lgas', (req, res) => {
  const lgas = LocationUtils.getLGAsByState(req.params.state);
  
  if (!lgas.length) {
    return res.status(404).json({ error: 'State not found' });
  }
  
  res.json(lgas);
});

// Search LGAs across all states
router.get('/search', (req, res) => {
  const { q } = req.query;
  
  if (!q) {
    return res.status(400).json({ error: 'Search query required' });
  }
  
  const results = LocationUtils.searchLGAs(q);
  res.json(results);
});

// New endpoint to validate state and LGA
router.get('/validate', (req, res) => {
  const { state, lga } = req.query;
  
  if (!state) {
    return res.status(400).json({ error: 'State parameter is required' });
  }

  const isStateValid = LocationUtils.isValidState(state);
  
  if (!lga) {
    return res.json({ 
      valid: isStateValid,
      type: 'state'
    });
  }

  const isLGAValid = LocationUtils.isValidLGA(state, lga);
  
  res.json({
    valid: isLGAValid,
    type: 'lga',
    state: isStateValid
  });
});

module.exports = router;
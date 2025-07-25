import React, { useState, useMemo } from 'react';
import { leaguesList, leagueParticipantsList, Leagues, LeagueParticipants } from '../assets/fillerData';
import '../styles/browse.css';

type ViewMode = 'leagues' | 'players';

interface LeagueFilters {
  city: string;
  sport: string;
  season: string;
}

interface PlayerFilters {
  minRating: number;
  maxRating: number;
  minWins: number;
  league: string;
  sport: string;
}

const Browse: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('leagues');
  const [leagueFilters, setLeagueFilters] = useState<LeagueFilters>({
    city: '',
    sport: '',
    season: ''
  });
  const [playerFilters, setPlayerFilters] = useState<PlayerFilters>({
    minRating: 0,
    maxRating: 5,
    minWins: 0,
    league: '',
    sport: ''
  });

  // Get unique filter options
  const uniqueCities = [...new Set(leaguesList.map(league => league.city))];
  const uniqueSports = [...new Set(leaguesList.map(league => league.sport))];
  const uniqueSeasons = [...new Set(leaguesList.map(league => league.season))];

  // Filter leagues
  const filteredLeagues = useMemo(() => {
    return leaguesList.filter(league => {
      return (
        (leagueFilters.city === '' || league.city === leagueFilters.city) &&
        (leagueFilters.sport === '' || league.sport === leagueFilters.sport) &&
        (leagueFilters.season === '' || league.season === leagueFilters.season)
      );
    });
  }, [leagueFilters]);

  // Get players with league info
  const playersWithLeagues = useMemo(() => {
    return leagueParticipantsList.map(participant => {
      const league = leaguesList.find(l => l.id === participant.league_id);
      return {
        ...participant,
        league: league || null
      };
    });
  }, []);

  // Filter players
  const filteredPlayers = useMemo(() => {
    return playersWithLeagues.filter(player => {
      const matchesRating = player.rating >= playerFilters.minRating && player.rating <= playerFilters.maxRating;
      const matchesWins = player.wins >= playerFilters.minWins;
      const matchesLeague = playerFilters.league === '' || player.league?.city === playerFilters.league;
      const matchesSport = playerFilters.sport === '' || player.league?.sport === playerFilters.sport;
      
      return matchesRating && matchesWins && matchesLeague && matchesSport;
    });
  }, [playersWithLeagues, playerFilters]);

  const resetLeagueFilters = () => {
    setLeagueFilters({ city: '', sport: '', season: '' });
  };

  const resetPlayerFilters = () => {
    setPlayerFilters({ minRating: 0, maxRating: 5, minWins: 0, league: '', sport: '' });
  };

  return (
    <div className="browse-container">
      <h1 className="browse-title">Browse</h1>
      
      {/* Toggle Buttons */}
      <div className="browse-toggle">
        <button
          onClick={() => setViewMode('leagues')}
          className={`toggle-btn ${viewMode === 'leagues' ? 'active' : 'inactive'}`}
        >
          Leagues
        </button>
        <button
          onClick={() => setViewMode('players')}
          className={`toggle-btn ${viewMode === 'players' ? 'active' : 'inactive'}`}
        >
          Players
        </button>
      </div>

      {/* League View */}
      {viewMode === 'leagues' && (
        <div>
          <h2 className="section-header">Leagues ({filteredLeagues.length})</h2>
          
          {/* League Filters */}
          <div className="filters-container">
            <h3 className="filters-title">Filters</h3>
            <div className="filters-row">
              <div className="filter-group">
                <label className="filter-label">City:</label>
                <select
                  value={leagueFilters.city}
                  onChange={(e) => setLeagueFilters({...leagueFilters, city: e.target.value})}
                  className="filter-select"
                >
                  <option value="">All Cities</option>
                  {uniqueCities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Sport:</label>
                <select
                  value={leagueFilters.sport}
                  onChange={(e) => setLeagueFilters({...leagueFilters, sport: e.target.value})}
                  className="filter-select"
                >
                  <option value="">All Sports</option>
                  {uniqueSports.map(sport => (
                    <option key={sport} value={sport}>{sport}</option>
                  ))}
                </select>
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Season:</label>
                <select
                  value={leagueFilters.season}
                  onChange={(e) => setLeagueFilters({...leagueFilters, season: e.target.value})}
                  className="filter-select"
                >
                  <option value="">All Seasons</option>
                  {uniqueSeasons.map(season => (
                    <option key={season} value={season}>{season}</option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={resetLeagueFilters}
                className="reset-btn"
              >
                Reset
              </button>
            </div>
          </div>

          {/* League List */}
          <div className="items-grid">
            {filteredLeagues.map(league => (
              <div key={league.id} className="item-card">
                <h3 className="card-title">{league.city} {league.sport}</h3>
                <p className="card-info"><strong>Season:</strong> {league.season}</p>
                <p className="card-info"><strong>Duration:</strong> {league.start_date} to {league.end_date}</p>
                <p className="card-info"><strong>Participants:</strong> {leagueParticipantsList.filter(p => p.league_id === league.id).length}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Player View */}
      {viewMode === 'players' && (
        <div>
          <h2 className="section-header">Players ({filteredPlayers.length})</h2>
          
          {/* Player Filters */}
          <div className="filters-container">
            <h3 className="filters-title">Filters</h3>
            <div className="filters-row">
              <div className="filter-group">
                <label className="filter-label">Min Rating:</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={playerFilters.minRating}
                  onChange={(e) => setPlayerFilters({...playerFilters, minRating: parseFloat(e.target.value) || 0})}
                  className="filter-input"
                />
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Max Rating:</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={playerFilters.maxRating}
                  onChange={(e) => setPlayerFilters({...playerFilters, maxRating: parseFloat(e.target.value) || 5})}
                  className="filter-input"
                />
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Min Wins:</label>
                <input
                  type="number"
                  min="0"
                  value={playerFilters.minWins}
                  onChange={(e) => setPlayerFilters({...playerFilters, minWins: parseInt(e.target.value) || 0})}
                  className="filter-input"
                />
              </div>
              
              <div className="filter-group">
                <label className="filter-label">League City:</label>
                <select
                  value={playerFilters.league}
                  onChange={(e) => setPlayerFilters({...playerFilters, league: e.target.value})}
                  className="filter-select"
                >
                  <option value="">All Cities</option>
                  {uniqueCities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Sport:</label>
                <select
                  value={playerFilters.sport}
                  onChange={(e) => setPlayerFilters({...playerFilters, sport: e.target.value})}
                  className="filter-select"
                >
                  <option value="">All Sports</option>
                  {uniqueSports.map(sport => (
                    <option key={sport} value={sport}>{sport}</option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={resetPlayerFilters}
                className="reset-btn"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Player List */}
          <div className="items-grid">
            {filteredPlayers.map(player => (
              <div key={player.id} className="item-card">
                <h3 className="card-title">{player.name}</h3>
                <p className="card-info"><strong>Rating:</strong> {player.rating}/5.0</p>
                <p className="card-info"><strong>Record:</strong> {player.wins}W - {player.losses}L</p>
                <p className="card-info"><strong>Win Rate:</strong> {((player.wins / (player.wins + player.losses)) * 100).toFixed(1)}%</p>
                {player.league && (
                  <p className="card-info"><strong>League:</strong> {player.league.city} {player.league.sport} ({player.league.season})</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Browse;
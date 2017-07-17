import React from 'react';
// import { Link } from 'react-router';
import { Route, Link } from 'react-router-dom';
import CampaignTile from '../campaigns/campaign_index_item';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    this.props.requestAllCampaigns();
      // .then(action => this.props.history.push('/'));
    console.log("yo")
  }

  launchedCampaigns() {
    return this.props.campaigns.map(campaign =>
      (<CampaignTile key={campaign.id} campaign={campaign} />)
    );
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  renderTiles() {
    let tilesArr = this.props.campaigns;
    this.shuffle(tilesArr);

    return tilesArr.slice(0, 4).map(campaign =>
      (<CampaignTile key={campaign.id} campaign={campaign} />)
    );
  }


  render() {
    debugger;
    // if (Object.keys(this.props.campaign).length === 0) { return null }
    const { campaigns } = this.props;
    const tiles = this.renderTiles();
    // let launchedCampaigns = this.launchedCampaigns();
    if (campaigns.length === 0) { return null; }

    return (
      <div>
      <div className="carousel-img">

      </div>
      <div className="homepage-discovery">
        <div className="camps-discover-bar">
          <div className="discovery-tabs">
            <Link to="/campaigns/all" className="see-all">See all</Link>
            <Link to="/">Top picks for you</Link>
            <Link to="/">Popular near you</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Tech & Innovation</Link>
            <Link to="/">Creative Works</Link>
          </div>
          <ul className="projects">{tiles}</ul>
        </div>
      </div>
      </div>
    );
  }
}

export default Homepage;

import React, { Component } from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { dimensions } from '~/styles';
import { favoriteArtist, unFavoriteArtist } from '~/redux/modules/favorites';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resources } from '../config/artistResources';
import ArtistInfo from '../components/ArtistInfo';
import FetchingArtistIndicator from '../components/FetchingArtistIndicator';

class SingleArtistPanel extends Component {
  static propTypes = {
    artistName: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    favorites: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  };
  state = {
    loadingImage: false,
  };

  handleFavorite = () => {
    const { artistName } = this.props;
    const isFavorited = this.props.favorites[artistName] || false;
    // artist will result in a boolean,
    // fetched by the key of the artist name
    isFavorited
      ? this.props.dispatch(unFavoriteArtist(artistName))
      : this.props.dispatch(favoriteArtist(artistName));
    // depended on the bool value, favorite or unfavorite the
    // artistpanel that has been double tapped
  };
  render() {
    let favoriteStyle = this.props.favorites[this.props.artistName]
      ? { borderWidth: 5, borderColor: '#00FFA8' }
      : null;
    return (
      <TouchableWithoutFeedback onLongPress={this.handleFavorite}>
        <Image
          style={[styles.container, favoriteStyle]}
          resizeMode="cover"
          onLoadStart={() => this.setState({ loadingImage: true })}
          onLoadEnd={() => this.setState({ loadingImage: false })}
          source={resources[this.props.artistName.split(' ').join('')]}>

          {this.state.loadingImage
            ? <FetchingArtistIndicator artistName={this.props.artistName} />
            : <ArtistInfo {...this.props} />}

        </Image>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = ({ favorites }) => {
  return { favorites };
};

export default connect(mapStateToProps)(SingleArtistPanel);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: dimensions.screenWidth - 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#fff',
    marginBottom: 5,
  },
});

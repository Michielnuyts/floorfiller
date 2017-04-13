import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as Animatable from 'react-native-animatable';

import ProgressBar from '~/components/ProgressBar';
import { fetchNews } from '~/redux/modules/news';

class SplashNews extends Component {
  state = {
    currentNewsItem: 0,
    secondsRemaining: 5,
  };
  interval = null;
  showNextNewsItem() {
    if (this.props.loadingNews === false && this.props.news) {
      this.state.currentNewsItem + 1 >= this.props.news.length
        ? this.setState({ currentNewsItem: 0 })
        : this.setState({ currentNewsItem: this.state.currentNewsItem + 1 });
      this.setState({ secondsRemaining: 5 });
    }
  }
  componentWillMount() {
    this.props.dispatch(fetchNews());
  }
  componentDidMount() {
    this.interval = setInterval(
      () => {
        this.state.secondsRemaining <= 0
          ? this.showNextNewsItem()
          : this.setState({
              secondsRemaining: this.state.secondsRemaining - 1,
            });
      },
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  renderCurrentNewsItem() {
    if (this.props.loadingNews === false && this.props.news.length > 0) {
      return (
        <Animatable.View animation="pulse">
          <Text style={styles.text}>
            {this.props.news[this.state.currentNewsItem].headline}
          </Text>
          <ProgressBar
            style={styles.progressBar}
            time={1 - this.state.secondsRemaining / 5}
          />
          <Text style={styles.textSmall}>
            {this.props.news[this.state.currentNewsItem].text}
          </Text>
        </Animatable.View>
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.news && this.renderCurrentNewsItem()}
      </View>
    );
  }
}

const mapStateToProps = ({ news }) => {
  const newsArray = _.map(news.news, (value, key) => {
    return { headline: key, text: value };
  });
  return {
    news: newsArray,
    loadingNews: news.loadingNews,
  };
};

export default connect(mapStateToProps)(SplashNews);

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    color: '#fff',
    fontWeight: '200',
    fontSize: 24,
  },
  textSmall: {
    color: '#fff',
    fontWeight: '100',
    fontSize: 11,
  },
  progressBar: {
    width: 300,
  },
});

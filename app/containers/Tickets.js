import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';
import FloatingMenuButton from '~/components/FloatingMenuButton';
import SingleTicketPanel from '~/components/SingleTicketPanel';
import { platform, dimensions } from '~/styles';

export default class Tickets extends Component {
  static propTypes = {};
  state = { pressed: false };
  handleClick = () => {
    this.setState({ pressed: true });
  };
  ticketData() {
    return [
      { text: 'Friday Ticket €39', smallText: 'National Holiday' },
      {
        text: 'Saturday Ticket €39',
        smallText: 'Incl. Opening Party on Thursday',
      },
      { text: 'Combi Ticket €59', smallText: '' },
      { text: 'Weekend Ticket €79', smallText: '' },
      { text: 'VIP Friday Ticket €89', smallText: '' },
      { text: 'VIP Saturday Ticket €89', smallText: '' },
      { text: 'VIP Combi Ticket €149', smallText: '' },
      { text: 'Camping Ticket €20', smallText: '' },
    ];
  }
  renderHelper() {
    if (this.state.pressed) {
      return (
        <View style={styles.ticketList}>
          <WebView
            style={styles.webview}
            source={{
              uri: 'https://tibbaa.com/order/kg6fwzncw6?lang=en',
            }}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.ticketList}>
          {this.ticketData().map((ticket, i) => (
            <SingleTicketPanel
              delay={i * 100}
              onPress={this.handleClick}
              key={i}
              {...ticket}
            />
          ))}
        </View>
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <FloatingMenuButton onPress={this.props.onPress} />
          <Text style={styles.text}>Tickets</Text>
        </View>
        {this.renderHelper()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: dimensions.marginTop[platform],
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    flex: 2.2,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  ticketList: {
    flex: 8.6,
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    color: '#fff',
    fontWeight: '200',
    fontSize: 18,
    textShadowColor: '#000',
    textShadowOffset: { width: 1.5, height: 1.5 },
  },
  bold: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  webview: {
    flex: 1,
    width: dimensions.screenWidth - 10,
  },
});

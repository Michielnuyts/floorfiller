import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FloatingMenuButton from '~/components/FloatingMenuButton';
import SingleTicketPanel from '~/components/SingleTicketPanel';

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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <FloatingMenuButton onPress={this.props.onPress} />
          <Text style={styles.text}>Tickets</Text>
        </View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
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
});

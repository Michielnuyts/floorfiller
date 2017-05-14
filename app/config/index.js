import asyncStore from 'react-native-simple-store';

export const stages = {
  THURSDAY: ['JOYHAUSER INVITES'],
  FRIDAY: ['MATERIA', 'CDA', 'PANORAMA', 'CAMPING'],
  SATURDAY: ['CULTURE TEK', 'LABYRINTH', 'AFTR', 'CAMPING'],
};

// Check if the app is opening for the first time on the device.
// So we can show a first time boot help message.
export const checkIfFirstBoot = () => {
  asyncStore
    .get('firstBoot')
    .then(firstBoot => {
      console.log('Someone called me cc');
      return false; // App already been booted before
    })
    .catch(error => {
      asyncStore.save('firstBoot', { firstBoot: true });
      console.log('Someone called me');
      return true; // This is the first bootup
    });
};

export const SlidesData = [
  {
    id: 1,
    text: 'Tap The Festival Logo!',
    text2: 'To Open the Menu',
    imgUrl: '../images/slide1.png',
    backgroundColor: '#000',
    color: '#fff',
  },
  {
    id: 2,
    text: 'Tap Artists to Favorite!',
    text2: 'And Receive Notifications',
    imgUrl: '../images/slide2.png',
    backgroundColor: '#00FFA8',
    color: '#000',
  },
  {
    id: 3,
    text: 'Your Custom Lineup!',
    text2: 'You Will Receive Notifications',
    imgUrl: '../images/slide3.png',
    backgroundColor: '#000',
    color: '#fff',
  },
];

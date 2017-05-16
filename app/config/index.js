import asyncStore from 'react-native-simple-store';
import moment from 'moment';

export const stages = {
  THURSDAY: ['JOYHAUSER INVITES'],
  FRIDAY: ['MATERIA', 'CDA', 'PANORAMA', 'CAMPING'],
  SATURDAY: ['CULTURE TEK', 'LABYRINTH', 'AFTR', 'CAMPING'],
};

// Check if the app is opening for the first time on the device.
// So we can show a first time boot help message.
export const firstBoot = async () => {
  await asyncStore
    .get('alreadyLaunched')
    .then(value => {
      if (value == null) {
        asyncStore.save('alreadyLaunched', true);
        console.log('This is my first boot!');
        return true;
      } else {
        console.log('I have been booted before!');
        return false;
      }
    })
    .catch(error => {
      console.log('Error');
    });
};

export const SlidesData = [
  {
    id: 1,
    text: 'Tap The Festival Logo!',
    text2: 'To Open the Menu',
    imgUrl: '../images/Slide1.png',
    backgroundColor: '#000',
    color: '#fff',
  },
  {
    id: 2,
    text: 'Long Press to Favorite!',
    text2: 'And Receive Notifications',
    imgUrl: '../images/Slide2.png',
    backgroundColor: '#00FFA8',
    color: '#000',
  },
  {
    id: 3,
    text: 'Your Custom Lineup!',
    text2: 'You Will Receive Notifications',
    imgUrl: '../images/Slide2.png',
    backgroundColor: '#000',
    color: '#fff',
  },
];

export const getImageURL = artist => {
  const formattedArtistName = artist.split(' ').join('');
  const URLstring = `../images/artists/${formattedArtistName}.png`;
  return URLstring;
};

export const calculateStartTime = (dayFromProps, startTime) => {
  let day = 20;
  switch (dayFromProps) {
    case 'THURSDAY':
      day = 20;
    case 'FRIDAY':
      day = 21;
    case 'SATURDAY':
      day = 22;
    default:
      day = 20;
  }
  const now = moment();
  const future = moment(`2017-07-${day} ${startTime}`);
  return `Starts ${now.to(future)}`;
};

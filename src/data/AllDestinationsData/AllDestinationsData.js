import ZaltanaBoatImg1 from '../../assets/images/zaltanaboatimg1.jpg';
import ZaltanaBoatImg2 from '../../assets/images/zaltanaboatimg2.jpg';
import ZaltanaBoatImg3 from '../../assets/images/zaltanaboatimg3.jpg';
import ZaltanaBoatImg4 from '../../assets/images/zaltanaboatimg4.png';
import ZaltanaBoatImg5 from '../../assets/images/zaltanaboatimg5.png';
import ZaltanaBoatImg6 from '../../assets/images/zaltanaboatimg6.jpg';
import ZaltanaBoatImg7 from '../../assets/images/zaltanaboatimg7.jpg';

export const destinationsData = [
  {
    id: 'zaltana-mothership',
    title: 'The Zaltana Mothership',
    subtitle: "onboard Brazil's #1 Luxury Floating Hotel",
    description:
      'With accommodations for 20 guests, this retreat offers stylish comfort and stunning views. Enjoy 10 spacious, air-conditioned staterooms (double occupancy, featuring full-size beds), each with a private bathroom complete with hot water, river views, ample storage space, and the convenience of daily maid and laundry service.',
    features: [
      { icon: 'Users', text: '16-20 Anglers Per Group' },
      { icon: 'ShipWheel', text: '10 fully equipped bass boats' },
      { icon: 'Ruler', text: 'VIP - 180sf Suites' },
      { icon: 'BedDouble', text: 'Double Occupancy' },
      { icon: 'Waves', text: 'Located on Rio Negro Tributaries' },
      { icon: 'Calendar', text: '7-Nights, 6-Full Days of Fishing' },
      {
        icon: 'BadgePlus',
        text: 'Ask about Private Charters, Single, Couples, Groups & Family Pkgs',
      },
    ],
    images: [
      { src: ZaltanaBoatImg1, alt: 'Zaltana Mothership View 1' },
      { src: ZaltanaBoatImg2, alt: 'Zaltana Mothership View 2' },
      { src: ZaltanaBoatImg3, alt: 'Zaltana Mothership View 3' },
      { src: ZaltanaBoatImg4, alt: 'Zaltana Mothership View 4' },
      { src: ZaltanaBoatImg5, alt: 'Zaltana Mothership View 5' },
      { src: ZaltanaBoatImg6, alt: 'Zaltana Mothership View 6' },
      { src: ZaltanaBoatImg7, alt: 'Zaltana Mothership View 7' },
    ],
  },
  {
    id: 'zaltana-lodge',
    title: 'The Zaltana Lodge',
    subtitle: 'Premium Amazon Riverside Accommodations',
    description:
      'Experience luxury in the heart of the Amazon at our riverside lodge. Featuring spacious rooms with modern amenities, expert guides, and direct access to prime fishing spots. Our lodge combines comfort with adventure for an unforgettable Amazon experience.',
    features: [
      { icon: 'Users', text: '12-16 Anglers Per Group' },
      { icon: 'ShipWheel', text: '8 custom fishing boats' },
      { icon: 'Home', text: 'Deluxe Lodge Rooms' },
      { icon: 'BedDouble', text: 'Double Occupancy Available' },
      { icon: 'Waves', text: 'Prime Amazon River Location' },
      { icon: 'Calendar', text: '5-7 Night Packages Available' },
      { icon: 'BadgePlus', text: 'Custom Group Packages Available' },
    ],
    images: Array(7)
      .fill(null)
      .map((_, i) => ({
        src: `ZaltanaLodgeImg${i + 1}`,
        alt: `Zaltana Lodge View ${i + 1}`,
      })),
  },
  {
    id: 'ecolodge-da-barra',
    title: 'Ecolodge da Barra',
    subtitle: 'Sustainable Luxury in the Amazon',
    description:
      'Our eco-friendly lodge offers an immersive Amazon experience while maintaining environmental responsibility. Enjoy comfortable accommodations, locally sourced cuisine, and world-class peacock bass fishing in protected waters.',
    features: [
      { icon: 'Users', text: '8-12 Anglers Per Group' },
      { icon: 'ShipWheel', text: '6 eco-friendly boats' },
      { icon: 'Leaf', text: 'Sustainable Eco-Lodging' },
      { icon: 'BedDouble', text: 'Private Bungalows' },
      { icon: 'Waves', text: 'Protected Water Access' },
      { icon: 'Calendar', text: 'Flexible Stay Options' },
      { icon: 'BadgePlus', text: 'Eco-Tours Available' },
    ],
    images: Array(7)
      .fill(null)
      .map((_, i) => ({
        src: `EcolodgeImg${i + 1}`,
        alt: `Ecolodge da Barra View ${i + 1}`,
      })),
  },
  {
    id: 'xingu-reservation',
    title: 'Xingu Reservation',
    subtitle: 'Exclusive Indigenous Territory Access',
    description:
      'Fish in pristine waters within protected indigenous territories. Our partnership with local communities provides exclusive access while supporting sustainable practices and cultural preservation.',
    features: [
      { icon: 'Users', text: '6-8 Anglers Per Group' },
      { icon: 'ShipWheel', text: '4 traditional boats' },
      { icon: 'Home', text: 'Traditional Accommodations' },
      { icon: 'Users', text: 'Cultural Immersion' },
      { icon: 'Waves', text: 'Exclusive Territory Access' },
      { icon: 'Calendar', text: 'Limited Seasonal Availability' },
      { icon: 'BadgePlus', text: 'Cultural Exchange Programs' },
    ],
    images: Array(7)
      .fill(null)
      .map((_, i) => ({
        src: `XinguImg${i + 1}`,
        alt: `Xingu Reservation View ${i + 1}`,
      })),
  },
  {
    id: 'peacock-bass-expeditions',
    title: 'Peacock Bass Expeditions',
    subtitle: 'Mobile Camping Adventure',
    description:
      'For the adventurous angler, our mobile expedition camps follow the best fishing opportunities throughout the season. Experience camping in comfort while accessing remote, rarely-fished waters.',
    features: [
      { icon: 'Users', text: '4-6 Anglers Per Group' },
      { icon: 'ShipWheel', text: '3 expedition boats' },
      { icon: 'Tent', text: 'Luxury Camp Setup' },
      { icon: 'Compass', text: 'Remote Locations' },
      { icon: 'Waves', text: 'Virgin Waters Access' },
      { icon: 'Calendar', text: 'Custom Trip Length' },
      { icon: 'BadgePlus', text: 'Photography Tours Available' },
    ],
    images: Array(7)
      .fill(null)
      .map((_, i) => ({
        src: `ExpeditionImg${i + 1}`,
        alt: `Peacock Bass Expedition View ${i + 1}`,
      })),
  },
  {
    id: 'galapagos-fishing',
    title: 'Galapagos Fishing',
    subtitle: 'World Heritage Site Fishing',
    description:
      'Combine world-class fishing with incredible wildlife encounters in the Galapagos Islands. Our specialized programs offer both inshore and offshore fishing opportunities while exploring this unique ecosystem.',
    features: [
      { icon: 'Users', text: '4-8 Anglers Per Group' },
      { icon: 'ShipWheel', text: '4 specialized boats' },
      { icon: 'Home', text: 'Island Lodge' },
      { icon: 'Camera', text: 'Wildlife Photography' },
      { icon: 'Waves', text: 'Multiple Species Target' },
      { icon: 'Calendar', text: 'Year-round Availability' },
      { icon: 'BadgePlus', text: 'Diving Packages Available' },
    ],
    images: Array(7)
      .fill(null)
      .map((_, i) => ({
        src: `GalapagosImg${i + 1}`,
        alt: `Galapagos Fishing View ${i + 1}`,
      })),
  },
];

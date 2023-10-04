import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './Nevbar';

const dataImage = [
  {
    id: 1,
    location: 'Mussoorie',
    images: [
      'massoorie-a.webp',
      'Mussoorie-2.jpg',
      'Mussoorie-3.jpg',
      'Mussoorie-4.jpg',
      'Mussoorie-5.webp',
    ],
    title:
      "Mussoorie, the queen of hill stations, is famous for its scenic beauty, good social life and entertainment. The excellent climate makes it an attractive holiday resort. Thronged by holidayers, it vibrates with gaiety and merry making during the summer season. There are no steep inclines and the more adventurous can undertake enjoyable excursions to various beauty spots in the vicinity. Mussoorie affords glorious views of the mights Himalayan peaks. Kempty falls which are about 11 kms. from the town attract hundreds of people every day. The Bhatta falls are also famous for scenic beauty. Though the tourist here is smaller than that of Kempty yet it is a picnic spot near to the town. Yet another place of interest in the town is Depot Hill, popularly known as ‘Lal Tibba’. It is the highest point in Mussoorie and beautiful Himalayan panorama is visible on all clear days from this spot. The Badrinath, Kedarnath, Bandar-poonch, Sri Kantha and Nanda Devi peaks can be seen from here. Camel’s back hill can be reached by electric trolly. The top commands a very beautiful view both of the hills as well as the valley. On clear days, one can see even the Ganga and the Yamuna from here. Mussoorie is well connected by roads with Dehra Dun, Delhi, Roorkee and Saharanpur. There are some good hotels, recreation clubs and restaurants to cater to the needs of the tourist.",
  },
  {
    id: 2,
    location: 'Manali',
    images: [
      'abhi-manali.jpg',
      // 'manali-3.webp',
      // 'manali-4.jpg',
      // 'manali5.jpg',
      // 'manali6.jpg',
    ],
    title:
      "Manali is a popular hillstation nestled in the ranges of Himachal Pradesh. At 6,398 feet, it enjoys cool weather all year round except winter when it becomes positively cold. Temperatures range from 0 degrees C to 25 degrees C. The best time to visit Manali is between May and October. It's tough to run out of fun things to do in Manali as it has cultivated itself as a major tourist town since many years now Among the many things to do in Manali, visiting the temples and Tibetan monasteries has a unique appeal of its own. The Gadhan Thekchoking Gompa situated near the Mall, is a monastery renowned for wonderful Tibetan handicrafts and carpets that are woven and sold there. The Himalayan Nyingamapa Gompa, near the market place, has a huge statue of Sakyamuni (Lord Buddha) presiding over the monastery. Just west lies the more traditional Panden Ngari Gompa with a beautiful prayer room with idols of Buddhist deities.",
  },
  {
    id: 3,
    location: 'Mount-Abu',
    images: [
      'again-mountabu.jpg',
      // 'mount-abu1.jpg',
      // 'mount-abu3.jpg',
      // 'mount-abu4.jpg',
      // 'mount-abu5.avif',
    ],
    title: 'Mount Abu, situated in the state of Rajasthan, India, is renowned for its captivating blend of natural beauty, ancient history, and cultural richness. At the heart of this hill station lies the exquisite Dilwara Temples, a group of Jain temples adorned with intricate marble carvings that are considered among the worlds most stunning. Overlooking the serene Nakki Lake, this picturesque destination is famous for its romantic Sunset Point and Honeymoon Point, where visitors gather to witness breathtaking sunsets. The lofty Guru Shikhar, the highest peak in the Aravalli Range, offers panoramic vistas of the regions lush landscape. Mount Abus wildlife sanctuary beckons nature enthusiasts, while the historic Achalgarh Fort, with the Achaleshwar Mahadev Temple nestled within its walls, beckons history buffs. Visitors can also indulge in shopping for traditional Rajasthani handicrafts and textiles or partake in the annual Mount Abu Summer Festival to immerse themselves in the local culture. Above all, Mount Abu serves as an oasis of tranquility, providing a cool escape from the sweltering plains during Indias hot summers, making it a cherished destination for all.'
  },
  {
    id: 4,
    location: 'Udaipur',
    images: [
      'udaipur1.jpg',
      // 'udaipur2.jpg',
      // 'udaipur3.jpg',
      // 'udaipur4.jpg',
      // 'udaipur5.webp',
    ],
    title: 'The city of Lakes, Udaipur is a lovely land around the azure water lakes, hemmed in by the lush hills of the Aravalis. A vision in white drenched in romance and beauty, Udaipur is a fascinating blend of sights, sounds and experiences - an inspiration for the imagination of the poets, painters and writers. Its kaleidoscope of fairy-tale palaces, lakes, temples, gardens an narrow lanes strewn with stalls, carry the flavour of heroic past, epitomising valour and chivalry.Udaipur is a popular tourist destination in India. The lakes, palaces and lively workspaces and culture attract foreign and domestic visitors.  Udaipur have three interconnected lakes - the Fateh Sagar Lake, the Lake Pichhola and the smaller Swaroop Sagar Lake; along with forts, palaces, temples, gardens, mountains and narrow lanes lines withdrawn with stalls, relives the reminisces of a heroic past, valor and chivalry.'
  },
  {
    id: 5,
    location: 'jaipur',
    images: [
      'abhi-jaipur.jpg',
      // 'jaipur4.jpg',
      // 'jaipur5.jpg',
      // 'jaipur6.jpg',
      // 'jaipur7.jpg',
    ],
    title: 'Jaipur, often referred to as the "Pink City," is a city in the northwestern state of Rajasthan, India, and it holds a special place in the countrys history and culture. One of the most striking features of Jaipur is its distinct pink-hued architecture, which was implemented in 1876 to welcome the Prince of Wales, later known as King Edward VII. This unique color scheme has since become an iconic symbol of the city.Jaipur is renowned for its rich heritage and historical landmarks. The city boasts several magnificent forts and palaces, including the Amber Fort, Jaigarh Fort, Nahargarh Fort, and the City Palace. Each of these structures reflects the grandeur and opulence of Rajasthans royal past, with intricate architecture, beautiful courtyards, and stunning views of the surrounding landscape.'
  },
  {
    id: 6,
    location: 'Agra',
    images: [
      'agra1.jpeg',
      // 'agra2.jpg',
      // 'agra3.jpg',
      // 'agra4.JPG',
      // 'agra5.jpg',
    ],
    title: 'Agra, located in the northern Indian state of Uttar Pradesh, is most renowned for being home to one of the worlds most iconic monuments, the Taj Mahal. This breathtaking white marble mausoleum, built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, is a symbol of eternal love and a UNESCO World Heritage Site. The Taj Mahals exquisite architectural beauty, intricate marble inlays, and its stunning reflection in the nearby Yamuna River make it a must-visit destination for travelers from around the globe.In addition to the Taj Mahal, Agra boasts several other impressive historical sites, including the Agra Fort, also known as the Red Fort of Agra. This majestic fort, constructed primarily from red sandstone, served as the main residence of the Mughal emperors for generations. Its palaces, mosques, and courtyards provide a glimpse into the opulence and grandeur of the MughalAgra is also famous for its rich Mughlai cuisine, which includes delectable dishes such as biryani, kebabs, and the famous sweet called "petha." Exploring the local markets, particularly in the vicinity of the Taj Mahal, offers a chance to savor these delightful culinary creations and shop for handicrafts, leather goods, and marble artifacts.Another noteworthy attraction in Agra is Fatehpur Sikri, a historical city founded by Emperor Akbar. It houses well-preserved palaces, mosques, and courtyards and is recognized as a UNESCO World Heritage Site.'
  },
  {
    id: 6,
    location: 'Sikkim',
    images: [
      'sikkim1.jpg',
      // 'sikkim2.jpg',
      // 'sikkim3.jpg',
      // 'sikkim4.jpg',
      // 'sikkim5.jpg',
    ],
    title: 'Sikkim, a small and picturesque state nestled in the northeastern part of India, is famous for its natural beauty, stunning landscapes, and rich cultural heritage. HereBreathtaking Himalayan Landscapes: Sikkim is situated in the eastern Himalayas and is known for its stunning mountain scenery. The state is home to several majestic peaks, including Kanchenjunga, the third-highest mountain in the world. The snow-capped mountains, lush valleys, and meandering rivers make it a paradise for nature lovers and trekkers. The Kanchenjunga National Park, a UNESCO World Heritage Site, is located in Sikkim and encompasses the Kanchenjunga mountain. This protected area is rich in biodiversity and offers opportunities for trekking and wildlife spotting.'
  },
  {
    id: 7,
    location: 'Kolkata',
    images: [
      'kolkata1.jpg',
      // 'kolkata2.jpg',
      // 'kolkata3.jpg',
      // 'kolkata4.JPG',
      // 'kolkata5.jpg',
    ],
    title: 'Kolkata, formerly known as Calcutta, is a city in eastern India that exudes a rich historical, cultural, and intellectual legacy. Here are some of the key aspects that Kolkata is famous for:Cultural Hub: Kolkata is often considered the cultural capital of India. It has a long history of nurturing artists, writers, poets, and filmmakers. The city has been home to iconic literary figures like Rabindranath Tagore, who composed the national anthem of India, and filmmakers like Satyajit Ray, a legendary figure in world cinema. The Kolkata International Film Festival and the Kolkata Book Fair are major events that celebrate this cultural heritage.Diverse Cuisine: Kolkata is renowned for its diverse and delectable cuisine. From street food like puchka (pani puri) and kathi rolls to the famous sweets like rasgulla and sandesh, the city offers a gastronomic delight for food enthusiasts. Bengali cuisine, with its emphasis on fish and rice, is a highlight, and local markets like New Market and College Street offer a taste of authentic Kolkata food.'
  },
  {
    id: 8,
    location: 'Goa',
    images: [
      //  'goa1.jpg',
      //  'goa2.jpg',
      //  'goa3.jpg',
      //  'goa4.jpg',
      'goa6.jpg',
    ],
    title: 'Goa, a popular tourist destination in India, is famous for several things: Beaches: Goa is renowned for its beautiful beaches, each with its own unique charm. Some of the most famous ones include Baga Beach, Anjuna Beach, Calangute Beach, and Palolem Beach. These beaches attract visitors for sunbathing, water sports, and vibrant nightlife.Nightlife: Goa has a vibrant and lively nightlife scene. Its known for its beach parties, beach shacks, and numerous nightclubs and bars. The beachside parties are especially famous among tourists.'
  }
];

function Most_Visited_Places() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % dataImage[activeImageIndex].images.length);

    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='first-div'>
      <Navbar />

      <div className="carousel-container" style={{ paddingTop: '40px', marginTop: '50px' }}>

        {dataImage.map((item) => (

          <div key={item.id}>
            <h2 style={{ color: '#C2B280 ', marginRight: '100px', paddingLeft: '500px' }}>{item.location}</h2>
            <Carousel
              showThumbs={false}
              showStatus={false}
              selectedItem={activeImageIndex}
              onChange={(index) => setActiveImageIndex(index)}
            >
              {item.images.map((image, imageIndex) => (
                <div style={{ paddingTop: '20px' }} key={imageIndex}>
                  <img
                    className="image-carousel"
                    style={{ height: '500px', width: '1000px' }}
                    src={image}
                    alt={`Image ${imageIndex + 1}`}
                  />
                </div>
              ))}
            </Carousel>
            <br></br>
            <p style={{ paddingTop: '20px', marginLeft: '5px', width: '100%', justifyContent: 'center', alignItems: 'center', width: 'auto' }}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Most_Visited_Places;

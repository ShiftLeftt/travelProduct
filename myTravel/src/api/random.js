import axios from 'axios';

const SERVICE_KEY = '0noX9haow1qiuxBQPoSBLqDNxb4NLoDSzou7X7ZFXBnxQMtfoah3TOS1UzC4FCyyB5BR42KB9jRcXHJblrliYQ==';

export const fetchTravelPhoto = async (keyword) => {
  try {
    const response = await axios.get('https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1', {
      params: {
        serviceKey: SERVICE_KEY,
        numOfRows: 1,
        pageNo: 1,
        MobileOS: 'ETC',
        MobileApp: 'TravelApp',
        title: keyword,
        _type: 'json'
      }
    });

    const items = response.data.response.body.items.item;
    if (items.length > 0) {
      return items[0].galWebImageUrl;
    } else {
      return '/img/none.png'; 
    }
  } catch (error) {
    console.error('사진 불러오기 실패', error);
    return '/img/none.png'; 
  }
};

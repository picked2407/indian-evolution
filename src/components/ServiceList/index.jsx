import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';
import './servicelist.scss';
const serviceData = [
  {
    title: 'Webinar',
    subtitle:
      'Indian Trade Evolution offers exclusive webinar sessions on the Indian stock market, complemented by a complimentary e-book, and a participation certificate. Our comprehensive approach equips investors with knowledge, resources, and recognition to thrive in the dynamic world of stock trading.',
    imgUrl: 'https://media.discordapp.net/attachments/1172973820156592330/1231945254739906570/3f99bea3-f722-4b50-9f12-a81c51fcb147.png?ex=6638cd6d&is=6626586d&hm=1dca861020b8ab17aeca80b485c43f897e916737bf00a3cb6d9e1874be482937&=&format=webp&quality=lossless&width=367&height=621',
  },
  {
    title: 'Courses',
    subtitle:
      'Indian Trade Evolution is your gateway to mastering the Indian stock market through expert-led courses. From beginners to seasoned traders, our curated curriculum offers comprehensive insights, strategies, and real-world applications. Join us and embark on a transformative journey towards financial success and market expertise with Indian Trade Evolution.',
    imgUrl: 'https://media.discordapp.net/attachments/1172973820156592330/1231946782863523891/shivi_1.png?ex=6638ced9&is=662659d9&hm=e702687ca587896c93c67293375456b0328cfbea526ef6cff5fdb5072d8cf092&=&format=webp&quality=lossless&width=257&height=437',
  },
  {
    title: 'Mentorship',
    subtitle:
      'At Indian Trade Evolution, we believe in personalized growth. Our mentorship program offers 1-to-1 guidance, tailored to your individual needs, to navigate the complexities of the Indian stock market. Experience a transformative journey with expert mentors dedicated to your success, only at Indian Trade Evolution.',
    imgUrl: 'https://media.discordapp.net/attachments/1193183717548638301/1231949679143555092/shivi_2.png?ex=6638d18c&is=66265c8c&hm=55a9dddd03e0fa2f4582a4e5f9ca5504848b095fa8c03fd9b802ec024dcc6d85&=&format=webp&quality=lossless&width=365&height=621',
  },
  {
    title: 'Private Trading Community',
    subtitle:
      '"Welcome to the private trading community of Indian Trade Evolution, your hub for real-time updates and expert analysis in the Indian stock market. Engage with fellow traders, stay informed with daily updates, and leverage insightful analysis to make informed decisions. Join us and elevate your trading journey with the support of a dynamic community, exclusively at Indian Trade Evolution',
    imgUrl: 'https://media.discordapp.net/attachments/1193183717548638301/1231953990665895947/shivi_3.png?ex=6638d58f&is=6626608f&hm=32e55494d847da83f140ba9a2aa6c66a325520dabccc9fb071667f4e89342da4&=&format=webp&quality=lossless&width=257&height=437',
  },
];

export default function ServiceList({ variant }) {
  const [active, setActive] = useState(0);
  const handelActive = index => {
    setActive(index);
  };
  return (
    <Div className={`cs-iconbox_3_list ${variant ? variant : ''}`}>
      {serviceData.map((item, index) => (
        <Div
          className={`cs-hover_tab ${active === index ? 'active' : ''}`}
          key={index}
          onMouseEnter={() => handelActive(index)}
        >
          <Link to={item.href} className="cs-iconbox cs-style3">
            <>
              <Div className="cs-image_layer cs-style1 cs-size_md">
                <Div className="cs-image_layer_in">
                  <img
                    src={item.imgUrl}
                    alt="Thumb"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <span className="cs-iconbox_icon cs-center">
                <svg
                  width={30}
                  height={29}
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <Div className="cs-iconbox_in">
                <h2 className="cs-iconbox_title">{item.title}</h2>
                <Div className="cs-iconbox_subtitle">{item.subtitle}</Div>
              </Div>
            </>
          </Link>
        </Div>
      ))}
    </Div>
  );
}

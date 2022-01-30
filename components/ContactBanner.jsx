/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';

const BannerStyles = styled.div`
  background-color: #262629;
`;
const ContactBanner = () => {
  return (
    <BannerStyles className="py-28 rounded-md px-8 flex flex-col gap-5 justify-center items-center md:flex-row md:justify-between relative">
      <img
        className="absolute top-5 w-8 right-3 md:right-8"
        src="/assets/contact-shape/c-shape1.png"
        alt=""
      />
      <img
        className="absolute bottom-5 w-10 left-3 md:left-5"
        src="/assets/contact-shape/c-shape2.png"
        alt=""
      />
      <h2 className="flex-2 font-bold text-3xl md:text-5xl text-center md:text-left ">
        Contact us for the service you want to use
      </h2>
      <div className="flex-1 flex justify-center">
        <button
          type="button"
          className="btn-color w-40 self-center py-2 rounded-md"
        >
          Our Services
        </button>
      </div>
    </BannerStyles>
  );
};

export default ContactBanner;

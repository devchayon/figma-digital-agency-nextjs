import styled from 'styled-components';

const BannerStyles = styled.div`
  background-color: #262629;
`;
const ContactBanner = () => {
  return (
    <BannerStyles className="py-24 rounded-md px-8 flex flex-col gap-5 justify-center items-center md:flex-row md:justify-between">
      <h2 className="flex-2 font-bold text-2xl md:text-4xl text-center md:text-left ">
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

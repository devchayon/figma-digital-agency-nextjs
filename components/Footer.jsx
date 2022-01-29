import Image from 'next/image';

const Footer = () => {
  return (
    <div className="py-10 pt-24 flex flex-col items-center md:flex-row justify-between gap-10">
      <div className="flex justify-start items-center logo-png ">
        <Image
          className=""
          src="/assets/logo.png"
          alt="logo"
          width="200"
          height="60"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:justify-center items-center cursor-pointer text-left md:text-center">
        {' '}
        <p>
          <a href="#">Support</a>
        </p>
        <p>
          <a href="#">Privacy Policy</a>
        </p>
        <p>
          <a href="#">Terms and Conditions</a>
        </p>
      </div>
      <div>© 2020 Enver, All Rights Reserved</div>
    </div>
  );
};

export default Footer;

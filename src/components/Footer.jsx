const Footer = () => {
  return (
    <div className="container max-w-screen-lg mx-auto flex justify-center mt-10">
      <div className="grid grid-cols-1 justify-items-center text-center">
        <a href="https://buttercms.com" target="_blank">
          <div>
            <img
              src="/assets/butter-b.png"
              alt=""
              className="object-contain w-48 pb-0"
            />
          </div>

          <div className="text-xs to-gray-800">Powered by ButterCMS</div>
        </a>
      </div>
    </div>
  );
};

export default Footer;

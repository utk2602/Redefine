const Footer = () => {
  // items
  const Explore = ["home", "prologue", "about", "contact"];
  const Product = ["Radiant", "Nexus", "Zigma", "Azul"];
  const FollowUs = ["Discord", "X", "Youtube", "Medium"];
  const Resources = ["Media"];

  return (
    <footer className="w-screen bg-violet-300 py-10 text-gray-900 flex flex-col items-center justify-center">
      <div className="container w-full flex py-10  items-start justify-between  ">
        <div className="ZentryLogo relative right-16 ">
          <img src="img/2.png" alt="Logo" className="w-20 h-20" />
        </div>
        <div className="footerItmes flex gap-5 font-medium flex-1 text-3xl capitalize items-start justify-between">
          <div >
            <h3 className="text-sm font-medium mb-4">Explore</h3>
            {Explore.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div >
            <h3 className="text-sm font-medium mb-4">Product</h3>
            {Product.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div >
            <h3 className="text-sm font-medium mb-4">Follow Us</h3>
         {FollowUs.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div >
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            {Resources.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full px-10 pt-24 items-center uppercase justify-between font-semibold font-general text-xs">
        <div>©Zentry 2024. All rights reserved</div>
        <div>Privacy Policy</div>
      </div>
    </footer>
  );
};

export default Footer;

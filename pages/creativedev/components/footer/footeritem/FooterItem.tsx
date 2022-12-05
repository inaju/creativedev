import Image from 'next/image';
import React from 'react'
type footerItem = {
  text: String;
  icon?: any;
};
function FooterItem({text,icon}: footerItem) {
  return <div className="flex items-center hover:cursor-pointer">
    <Image src={icon} className="w-4 mr-1" alt="footer item icon" />
    <div className="text-sm text-white">{text}</div>
  </div>;
}

export default FooterItem
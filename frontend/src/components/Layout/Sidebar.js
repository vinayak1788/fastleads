"use client"; // Required for client-side rendering in Next.js

import React from "react";

const navigationItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ca21d5e0e5ef5f374fe514aab83051aeb0e8dc15622034477330b8b342dfacd?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Dashboard",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c35d24e8dbe5c1966ac377bcaf4d3a03ce067e18ef04a2524f0e969ff0fcb76?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Content Integration",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4dcc8a25406ce3e6a29ed73b822de789beb215144a9958ada7eb0612c0cb3b7?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Interaction Feed",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8a6640b3c8e0e6332af1321870a7df00e5af45af56754af9f6a0b9ae6e72ef5?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Social inbox",
    hasDropdown: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/27e54dd5e89f1a15533e10ee9ca332c6cad303a62db1d77c67ce237f3406bd91?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Leads",
    hasDropdown: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/431135a906834a6769bafa4fa2a0a9d9cff7c31cb4883c0465c07a6ae8af97eb?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Lead Generation",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cf973f77f47c3f9b93b62779a161fd8d18ded1ae16ce28386e5734e6c41e09e?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Ad Campaign",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2eec28e61825a14ba9ebc7bc764553ca5ae9cdf40a6d7635a4717ab08d4e3f44?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Content Push",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/814ae01b6f8a191c1bf671e3dcd7cc902c668c1a4dc7fa341a078fd7431f1398?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Content Scheduler",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4dfbe2131f6df32ca2e2242adf05a6675e247679ec91a645e2e7a4f3b747ea9b?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Industry Trends",
  },
];

const NavItem = ({ icon, label, hasDropdown }) => (
  <div className="flex gap-5 justify-between p-2 mt-2 w-full rounded-lg max-w-[192px]">
    <div className="flex gap-3">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-6 aspect-square"
      />
      <div className="my-auto">{label}</div>
    </div>
    {hasDropdown && (
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/66773275b85593f15e01765b01650e882afb06b9030c66311baa88ad3f43bfba?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12"
        alt=""
        className="object-contain shrink-0 my-auto w-5 aspect-square"
      />
    )}
  </div>
);

const Sidebar = () => (
  <div className="flex overflow-hidden flex-col px-5 pt-5 text-sm text-gray-700 border-r bg-slate-200 bg-opacity-10 border-white border-opacity-60 max-w-[228px] pb-[1187px]">
    <div className="flex flex-col w-full">
      <div className="flex gap-3 items-center p-2 w-full whitespace-nowrap bg-indigo-700 rounded-lg min-h-[40px] text-zinc-100">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ca21d5e0e5ef5f374fe514aab83051aeb0e8dc15622034477330b8b342dfacd?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="self-stretch my-auto">Dashboard</div>
      </div>
      {navigationItems.slice(1).map((item, index) => (
        <NavItem
          key={index}
          icon={item.icon}
          label={item.label}
          hasDropdown={item.hasDropdown}
        />
      ))}
    </div>
  </div>
);

export default Sidebar;
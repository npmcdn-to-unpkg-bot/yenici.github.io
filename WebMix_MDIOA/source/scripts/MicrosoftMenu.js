'use strict';

// Limited up to 3 levels!
let MSMenu = [
  {
    name: 'Sign in',
    link: 'https://login.live.com/login.srf?wa=wsignin1.0&amp;rpsnv=12&amp;ct=1468141168&amp;rver=6.5.6509.0&amp;wp=MBI&amp;wreply=https:%2F%2Fwww.microsoft.com%2Fen-us%2F&amp;lc=1033',
    children: [],
    classes: 'ms-menu__item--signin'
  },
  {
    name: 'Store',
    link: 'javascript:void(0)',
    children: [
      {
        name: 'Store home',
        link: 'http://www.microsoftstore.com/store/msusa/en_US/home',
        children: []
      },
      {
        name: 'Device',
        link: 'javascript:void(0)',
        children: [
          {name: 'Microsoft Surface', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/All-Surface/categoryID.69403400'},
          {name: 'PCs &amp; tablets', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/All-PCs-tablets/categoryID.69404700'},
          {name: 'Xbox', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/categoryID.69405400'},
          {name: 'Virtual reality', link: 'https://www.microsoftstore.com/store/msusa/en_US/cat/Virtual-and-Augmented-Reality/categoryID.594470000?icid=en_US_Store_UH_devices_vr'},
          {name: 'Accessories', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/All-accessories/categoryID.69407900'},
          {name: 'Windows phone', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/All-Windows-Phone/categoryID.69406200'},
          {name: 'Microsoft Band', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/categoryID.69889600'}
        ]
      },
      {
        name: 'Software',
        link: 'javascript:void(0)',
        children: [
          {name: 'Office', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/All-Office/categoryID.69403900'},
          {name: 'Windows', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/categoryID.70036700'},
          {name: 'Additional software', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/All-additional-software/categoryID.69407400'}
        ]
      },
      {
        name: 'Apps',
        link: 'javascript:void(0)',
        children: [
          {name: 'All apps', link: 'https://www.microsoft.com/en-us/store/apps'},
          {name: 'Windows apps', link: 'https://www.microsoft.com/en-us/store/apps/windows'},
          {name: 'Windows phone apps', link: 'https://www.microsoft.com/en-us/store/apps/windows-phone'}
        ]
      },
      {
        name: 'Games',
        link: 'javascript:void(0)',
        children: [
          {name: 'Xbox One games', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/Xbox-One-games/categoryID.69405600'},
          {name: 'Xbox 360 games', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/Xbox-360-games/categoryID.69405800'},
          {name: 'PC games', link: 'http://www.microsoftstore.com/store/msusa/en_US/list/PC-games/categoryID.62688000?icid=en_US_Store_UH_games_PC'},
          {name: 'Windows games', link: 'https://www.microsoft.com/en-us/store/games/windows'},
          {name: 'Windows phone games', link: 'https://www.microsoft.com/en-us/store/games/windows-phone'}
        ]
      },
      {
        name: 'Entertainment',
        link: 'javascript:void(0)',
        children: [
          {name: 'All Entertainment', link: 'https://www.microsoft.com/en-us/store/entertainment'},
          {name: 'Movies &amp; TV', link: 'https://www.microsoft.com/en-us/store/movies-and-tv'},
          {name: 'Music', link: 'https://www.microsoft.com/en-us/store/music'}
        ]
      },
      {
        name: 'Business &amp; Education',
        link: 'javascript:void(0)',
        children: [
          {name: 'Business Store', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/Business/categoryID.69408700'},
          {name: 'Education Store', link: 'http://www.microsoftstore.com/store/msusa/en_US/edu'},
          {name: 'Developer', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/Developer/categoryID.69418300?icid=en_US_Store_UH_BusEd_Dev'}
        ]
      },
      {
        name: 'Sale',
        link: 'javascript:void(0)',
        children: [
          {name: 'Back-to-school essentials', link: 'https://www.microsoftstore.com/store/msusa/en_US/cat/Back-to-school-essentials/categoryID.67998200?icid=en_US_Store_UH_sale_gm_bts',children: []},
          {name: 'Sale', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/Sale/categoryID.69403000'}
        ]
      },
      {
        name: 'Find a store',
        link: 'http://www.microsoft.com/en-us/store/locations/find-a-store?icid=L_navAB_FindAStore',
        children: []
      },
      {
        name: 'Gift cards',
        link: 'https://www.microsoft.com/en-us/store/gift-cards',
        children: []
      }
    ]
  },
  {
    name: 'Products',
    link: 'javascript:void(0)',
    children: [
      {
        name: 'Software &amp; services',
        link: 'javascript:void(0)',
        children: [
          {name: 'Windows', link: '//www.microsoft.com/en-us/windows'},
          {name: 'Office', link: 'https://products.office.com/en-us/home'},
          {name: 'Free downloads &amp; security', link: 'https://www.microsoft.com/en-us/download/default.aspx'},
          {name: 'Internet Explorer', link: 'http://windows.microsoft.com/en-us/internet-explorer/download-ie'},
          {name: 'Microsoft Edge', link: 'http://www.microsoft.com/en-us/windows/microsoft-edge'},
          {name: 'Skype', link: 'http://www.skype.com/en/'},
          {name: 'OneNote', link: 'http://www.onenote.com/'},
          {name: 'OneDrive', link: 'https://onedrive.live.com/about/en-us/'},
          {name: 'Microsoft Health', link: 'http://www.microsoft.com/microsoft-health/en-us'},
          {name: 'MSN', link: 'http://www.msn.com/?ocid=HEA000'},
          {name: 'Bing', link: 'http://www.bing.com'},
          {name: 'Microsoft Groove', link: 'https://www.microsoft.com/en-us/groove'},
          {name: 'Microsoft Movies &amp; TV', link: 'https://www.microsoft.com/en-us/movies-and-tv'}
        ]
      },
      {
        name: 'Devices &amp; Xbox',
        link: 'javascript:void(0)',
        children: [
          {name: 'All Microsoft devices', link: 'https://www.microsoft.com/devices/en-us'},
          {name: 'Microsoft Surface', link: 'http://www.microsoft.com/surface/en-us'},
          {name: 'All Windows PCs &amp; tablets', link: 'http://www.microsoftstore.com/store/msusa/en_US/cat/Computers/categoryID.62684600'},
          {name: 'PC accessories', link: 'https://www.microsoft.com/accessories/en-us'},
          {name: 'Xbox &amp; games', link: 'http://www.xbox.com'},
          {name: 'Microsoft Band', link: 'http://www.microsoft.com/Microsoft-Band/en-us'},
          {name: 'Microsoft Lumia', link: 'http://www.microsoft.com/en-us/mobile/'},
          {name: 'All Windows phones', link: 'https://www.microsoft.com/en-us/windows/phones'},
          {name: 'Microsoft HoloLens', link: 'http://www.microsoft.com/microsoft-hololens/en-us'}
        ]
      },
      {
        name: 'For business',
        link: 'javascript:void(0)',
        children: [
          {name: 'Cloud Platform', link: 'http://www.microsoft.com/en-us/server-cloud/'},
          {name: 'Microsoft Azure', link: 'http://azure.microsoft.com/'},
          {name: 'Microsoft Dynamics', link: 'http://www.microsoft.com/en-us/dynamics/default.aspx'},
          {name: 'Windows for business', link: 'http://www.microsoft.com/en-us/windows/business/default.aspx'},
          {name: 'Office for business', link: 'https://products.office.com/en-us/business/office'},
          {name: 'Skype for business', link: 'https://products.office.com/en-us/skype-for-business'},
          {name: 'Surface for business', link: 'http://www.microsoft.com/surface/en-us/business/overview'},
          {name: 'Enterprise solutions', link: 'http://www.microsoft.com/enterprise'},
          {name: 'Small business solutions', link: 'http://www.microsoft.com/en-us/business/'},
          {name: 'Find a solutions provider', link: 'https://pinpoint.microsoft.com'},
          {name: 'Volume Licensing', link: 'https://www.microsoft.com/en-us/licensing/default.aspx'}
        ]
      },
      {
        name: 'For developers &amp; IT pros',
        link: 'javascript:void(0)',
        children: [
          {name: 'Develop Windows apps', link: 'https://dev.windows.com/en-us'},
          {name: 'Microsoft Azure', link: 'http://azure.microsoft.com/'},
          {name: 'MSDN', link: 'http://msdn.microsoft.com/en-us/'},
          {name: 'TechNet', link: 'http://technet.microsoft.com/en-us/'},
          {name: 'Visual Studio', link: 'http://www.visualstudio.com/'}
        ]
      },
      {
        name: 'For students &amp; educators',
        link: 'javascript:void(0)',
        children: [
          {name: 'Office for students', link: 'http://www.microsoft.com/en-us/education/products/office/default.aspx'},
          {name: 'OneNote in classroom', link: 'http://www.microsoft.com/en-us/education/products/onenote/default.aspx'},
          {name: 'Shop PCs &amp; tablets perfect for students', link: 'http://www.microsoftstore.com/store/msusa/en_US/edu'},
          {name: 'Microsoft in Education', link: 'http://www.microsoft.com/en-us/education'}
        ]
      }
    ]
  },
  {
    name: 'Support',
    link: 'https://support.microsoft.com/en-us',
    children: []
  }
];

export default MSMenu;

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export const valueConstant = {
  //---- External Links ----//
  links: {
    website: {
      terms: 'https://www.IFSguide.com/terms',
      privacy: 'https://www.ifsguide.com/privacy-policy.html',
    },
  },

  //---- PepeFlow and spreadSheet ----//
  googleSheet: {
    baseURL: 'https://sheets.googleapis.com/v4/spreadsheets/',
    spreadId: '171vPEs1BI6VtXeKd59bIg35weG16EjVsMp38nw69zb8',
    API_KEY: 'key=AIzaSyCP378uiHra0jePtCFIBCw42_CrX3crQJk',
  },

  //---- Styles ----//
  iconMoonSize: 20,
  iconArrowSize: 25,
  iconTrashSize: 20,
  iconAddSize: 40,
  counterInputLimit: 25,
  counterInputSessionLimit: 120,
  multilineLimit: 1200,
  formItemWidth: responsiveScreenWidth(83),
  formItemHeight: responsiveScreenHeight(6),
};

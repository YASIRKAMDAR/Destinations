var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('lodash');

var offers = {
  "status": "OK",
  "offpoints" : [{
  "city" : "DXB", 
  "title": "Welcome to Dubai, UAE.",
  "description": "In just over 40 years, Dubai has become the face of modernity – where architectural wonders preside over glittering seas and record-breaking malls." ,
  "offer": [
    {
      "itemId": "4550773",
      "category": "life",
      "startdate": "20171030161237",
      "enddate": "20171231235900",
      "displayenddate": null,
      "formatteddisplayenddate": "31 December 2017",
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "11",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "5",
      "offertier": "Blue",
      "tier": "skywards,gold,platinum,silver",
      "homepageoffer": "Yes",
      "ribbonclass": "skywards",
      "title": "Business news when you need it",
      "summary": null,
      "callouttitle": "Keep your finger on the pulse",
      "calloutsummary": "50% off Wall Street Journal subscriptions",
      "friendlyurl": "Keep-your-finger-on-the-pulse",
      "categorydisplay": "Retail & Lifestyle",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/WSJ%20-%20230_tcm277-4550757.jpg",
      "hash": "f52949a9692f46de992fed271b72592abcab57b3",
      "url": "/ae/english/offers/4550773/keep-your-finger-on-the-pulse",
      "wheretolink": null,
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "4322898",
      "category": "life",
      "startdate": null,
      "enddate": "20171214235900",
      "displayenddate": null,
      "formatteddisplayenddate": "14 December 2017",
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "10",
      "isnew": true,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "15",
      "offertier": "Blue",
      "tier": "skywards,gold,io,platinum,silver",
      "homepageoffer": "No",
      "ribbonclass": "skywards",
      "title": "DXBLaughs presents",
      "summary": "Kevin Bridges, Russell Kane and John Bishop",
      "callouttitle": "World-class comedy in Dubai",
      "calloutsummary": "See three of the UK’s top comedians",
      "friendlyurl": "World-class-comedy-in-Dubai",
      "categorydisplay": "Retail & Lifestyle",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/230x210_tcm277-4322839.jpg",
      "hash": "39e59e6ae54d0d7782457be1f14df916158cb7e6",
      "url": "/ae/english/offers/4322898/world-class-comedy-in-dubai",
      "wheretolink": null,
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "1170609",
      "category": "life",
      "startdate": null,
      "enddate": null,
      "displayenddate": null,
      "formatteddisplayenddate": null,
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "0",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "100",
      "offertier": "public",
      "tier": "skywards,public,gold,io,platinum,silver",
      "homepageoffer": "Yes",
      "ribbonclass": "public",
      "title": "Emirates Official Store",
      "summary": "Emirates branded merchandise",
      "callouttitle": "Emirates Official Store",
      "calloutsummary": "Emirates branded merchandise",
      "friendlyurl": "Emirates-Official-Store",
      "categorydisplay": "Retail & Lifestyle",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/Emirates_Official_Store_230_tcm277-1170591.jpg",
      "hash": "eb35b9648431bb077e49da49aa3cc05723ad7fde",
      "url": "/ae/english/offers/1170609/emirates-official-store",
      "wheretolink": "/ae/english/about/emirates_official_store/emirates_official_store.aspx",
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "1537526",
      "category": "life",
      "startdate": "20140205085930",
      "enddate": null,
      "displayenddate": null,
      "formatteddisplayenddate": null,
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "0",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "100",
      "offertier": "Blue",
      "tier": "skywards,gold,io,platinum,silver",
      "homepageoffer": "No",
      "ribbonclass": "skywards",
      "title": "x",
      "summary": "x",
      "callouttitle": "Culture & Sport",
      "calloutsummary": "Spend Miles on exclusive events",
      "friendlyurl": "Culture-Sport",
      "categorydisplay": "Retail & Lifestyle",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/Skywards_230_tcm277-1593797.jpg",
      "hash": "3d536d75fa751b362a154ace758065f487e0d2ca",
      "url": "/ae/english/offers/1537526/culture-sport",
      "wheretolink": "/account/ae/english/redeem-miles/events/",
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "4558627",
      "category": "cars",
      "startdate": "20171106070000",
      "enddate": "20171130235900",
      "displayenddate": null,
      "formatteddisplayenddate": "30 November 2017",
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "10",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "6",
      "offertier": "Blue",
      "tier": "skywards,gold,io,platinum,silver",
      "homepageoffer": "No",
      "ribbonclass": "skywards",
      "title": "Worldwide rewards with Hertz",
      "summary": null,
      "callouttitle": "More fun with Hertz ",
      "calloutsummary": "Up to 25% off and double Skywards Miles",
      "friendlyurl": "More-fun-with-Hertz",
      "categorydisplay": "Car Rental",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/Special_Offer_1654_230_tcm277-4559058.jpg",
      "hash": "ec32007e9dc6507a8974e9fd314257b0bdc1d21b",
      "url": "/ae/english/offers/4558627/more-fun-with-hertz",
      "wheretolink": null,
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "4558627",
      "category": "cars",
      "startdate": "20171106070000",
      "enddate": "20171130235900",
      "displayenddate": null,
      "formatteddisplayenddate": "30 November 2017",
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "10",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "6",
      "offertier": "Blue",
      "tier": "skywards,gold,io,platinum,silver",
      "homepageoffer": "No",
      "ribbonclass": "skywards",
      "title": "Worldwide rewards with Hertz",
      "summary": null,
      "callouttitle": "More fun with Hertz ",
      "calloutsummary": "Up to 25% off and double Skywards Miles",
      "friendlyurl": "More-fun-with-Hertz",
      "categorydisplay": "Car Rental",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/Special_Offer_1654_230_tcm277-4559058.jpg",
      "hash": "ec32007e9dc6507a8974e9fd314257b0bdc1d21b",
      "url": "/ae/english/offers/4558627/more-fun-with-hertz",
      "wheretolink": null,
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "4558627",
      "category": "cars",
      "startdate": "20171106070000",
      "enddate": "20171130235900",
      "displayenddate": null,
      "formatteddisplayenddate": "30 November 2017",
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "10",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "6",
      "offertier": "Blue",
      "tier": "skywards,gold,io,platinum,silver",
      "homepageoffer": "No",
      "ribbonclass": "skywards",
      "title": "Worldwide rewards with Hertz",
      "summary": null,
      "callouttitle": "More fun with Hertz ",
      "calloutsummary": "Up to 25% off and double Skywards Miles",
      "friendlyurl": "More-fun-with-Hertz",
      "categorydisplay": "Car Rental",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/Special_Offer_1654_230_tcm277-4559058.jpg",
      "hash": "ec32007e9dc6507a8974e9fd314257b0bdc1d21b",
      "url": "/ae/english/offers/4558627/more-fun-with-hertz",
      "wheretolink": null,
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "4558627",
      "category": "cars",
      "startdate": "20171106070000",
      "enddate": "20171130235900",
      "displayenddate": null,
      "formatteddisplayenddate": "30 November 2017",
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "10",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "6",
      "offertier": "Blue",
      "tier": "skywards,gold,io,platinum,silver",
      "homepageoffer": "No",
      "ribbonclass": "skywards",
      "title": "Worldwide rewards with Hertz",
      "summary": null,
      "callouttitle": "More fun with Hertz ",
      "calloutsummary": "Up to 25% off and double Skywards Miles",
      "friendlyurl": "More-fun-with-Hertz",
      "categorydisplay": "Car Rental",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/Special_Offer_1654_230_tcm277-4559058.jpg",
      "hash": "ec32007e9dc6507a8974e9fd314257b0bdc1d21b",
      "url": "/ae/english/offers/4558627/more-fun-with-hertz",
      "wheretolink": null,
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "4558627",
      "category": "cars",
      "startdate": "20171106070000",
      "enddate": "20171130235900",
      "displayenddate": null,
      "formatteddisplayenddate": "30 November 2017",
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "10",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "6",
      "offertier": "Blue",
      "tier": "skywards,gold,io,platinum,silver",
      "homepageoffer": "No",
      "ribbonclass": "skywards",
      "title": "Worldwide rewards with Hertz",
      "summary": null,
      "callouttitle": "More fun with Hertz ",
      "calloutsummary": "Up to 25% off and double Skywards Miles",
      "friendlyurl": "More-fun-with-Hertz",
      "categorydisplay": "Car Rental",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/Special_Offer_1654_230_tcm277-4559058.jpg",
      "hash": "ec32007e9dc6507a8974e9fd314257b0bdc1d21b",
      "url": "/ae/english/offers/4558627/more-fun-with-hertz",
      "wheretolink": null,
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "3856059",
      "category": "hotels",
      "startdate": "20161220101051",
      "enddate": "20171231235900",
      "displayenddate": null,
      "formatteddisplayenddate": "31 December 2017",
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "4",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "10",
      "offertier": "Blue",
      "tier": "skywards,gold,io,platinum,silver",
      "homepageoffer": "No",
      "ribbonclass": "skywards",
      "title": "Triple Skywards Miles ",
      "summary": " with participating Minor Hotels",
      "callouttitle": "Earn more with Minor Hotels",
      "calloutsummary": "Triple Miles, room upgrades and more",
      "friendlyurl": "Earn-more-with-Minor-Hotels",
      "categorydisplay": "Hotels",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/Special_Offer_1339_230_tcm277-3856048.jpg",
      "hash": "8e1137304e3ec679cd7cea54775a889d5ed480b4",
      "url": "/ae/english/offers/3856059/earn-more-with-minor-hotels",
      "wheretolink": null,
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "4245640",
      "category": "hotels",
      "startdate": "20170529070000",
      "enddate": "20171215235900",
      "displayenddate": null,
      "formatteddisplayenddate": "15 December 2017",
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "22",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "10",
      "offertier": "Blue",
      "tier": "skywards,gold,io,platinum,silver",
      "homepageoffer": "No",
      "ribbonclass": "skywards",
      "title": "Fly Emirates to Phnom Penh",
      "summary": "and enjoy exclusive value adds",
      "callouttitle": "Raffles Hotels, Phnom Penh",
      "calloutsummary": "Triple Miles, 20% off, upgrades and more",
      "friendlyurl": "Raffles-Hotels-Phnom-Penh",
      "categorydisplay": "Hotels",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/Special_Offer_1490_230_tcm277-4245645.jpg",
      "hash": "eeff15412e5bfc48db0e99b213e86632b650940d",
      "url": "/ae/english/offers/4245640/raffles-hotels-phnom-penh",
      "wheretolink": null,
      "ishidden": false,
      "istactical": false
    }
  ]},
  {
  "city" : "MAA", 
  "title": "Welcome to Chennai, India.",
  "description": "With its hot climate, fascinating culture and tasty cuisine, it should come as no surprise that Chennai is one of India’s most visited cities." ,
  "offer": [
    {
      "itemId": "4550773",
      "category": "life",
      "startdate": "20171030161237",
      "enddate": "20171231235900",
      "displayenddate": null,
      "formatteddisplayenddate": "31 December 2017",
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "11",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "5",
      "offertier": "Blue",
      "tier": "skywards,gold,platinum,silver",
      "homepageoffer": "Yes",
      "ribbonclass": "skywards",
      "title": "Business news when you need it",
      "summary": null,
      "callouttitle": "Keep your finger on the pulse",
      "calloutsummary": "50% off Wall Street Journal subscriptions",
      "friendlyurl": "Keep-your-finger-on-the-pulse",
      "categorydisplay": "Retail & Lifestyle",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/WSJ%20-%20230_tcm277-4550757.jpg",
      "hash": "f52949a9692f46de992fed271b72592abcab57b3",
      "url": "/ae/english/offers/4550773/keep-your-finger-on-the-pulse",
      "wheretolink": null,
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "4322898",
      "category": "life",
      "startdate": null,
      "enddate": "20171214235900",
      "displayenddate": null,
      "formatteddisplayenddate": "14 December 2017",
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "10",
      "isnew": true,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "15",
      "offertier": "Blue",
      "tier": "skywards,gold,io,platinum,silver",
      "homepageoffer": "No",
      "ribbonclass": "skywards",
      "title": "DXBLaughs presents",
      "summary": "Kevin Bridges, Russell Kane and John Bishop",
      "callouttitle": "World-class comedy in Dubai",
      "calloutsummary": "See three of the UK’s top comedians",
      "friendlyurl": "World-class-comedy-in-Dubai",
      "categorydisplay": "Retail & Lifestyle",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/230x210_tcm277-4322839.jpg",
      "hash": "39e59e6ae54d0d7782457be1f14df916158cb7e6",
      "url": "/ae/english/offers/4322898/world-class-comedy-in-dubai",
      "wheretolink": null,
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "1170609",
      "category": "life",
      "startdate": null,
      "enddate": null,
      "displayenddate": null,
      "formatteddisplayenddate": null,
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "0",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "100",
      "offertier": "public",
      "tier": "skywards,public,gold,io,platinum,silver",
      "homepageoffer": "Yes",
      "ribbonclass": "public",
      "title": "Emirates Official Store",
      "summary": "Emirates branded merchandise",
      "callouttitle": "Emirates Official Store",
      "calloutsummary": "Emirates branded merchandise",
      "friendlyurl": "Emirates-Official-Store",
      "categorydisplay": "Retail & Lifestyle",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/Emirates_Official_Store_230_tcm277-1170591.jpg",
      "hash": "eb35b9648431bb077e49da49aa3cc05723ad7fde",
      "url": "/ae/english/offers/1170609/emirates-official-store",
      "wheretolink": "/ae/english/about/emirates_official_store/emirates_official_store.aspx",
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "1537526",
      "category": "life",
      "startdate": "20140205085930",
      "enddate": null,
      "displayenddate": null,
      "formatteddisplayenddate": null,
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "0",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "100",
      "offertier": "Blue",
      "tier": "skywards,gold,io,platinum,silver",
      "homepageoffer": "No",
      "ribbonclass": "skywards",
      "title": "x",
      "summary": "x",
      "callouttitle": "Culture & Sport",
      "calloutsummary": "Spend Miles on exclusive events",
      "friendlyurl": "Culture-Sport",
      "categorydisplay": "Retail & Lifestyle",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/Skywards_230_tcm277-1593797.jpg",
      "hash": "3d536d75fa751b362a154ace758065f487e0d2ca",
      "url": "/ae/english/offers/1537526/culture-sport",
      "wheretolink": "/account/ae/english/redeem-miles/events/",
      "ishidden": false,
      "istactical": false
    },
    {
      "itemId": "4558627",
      "category": "cars",
      "startdate": "20171106070000",
      "enddate": "20171130235900",
      "displayenddate": null,
      "formatteddisplayenddate": "30 November 2017",
      "cugocode": null,
      "campaigncode": null,
      "flagasnew": "10",
      "isnew": false,
      "flagasexpiring": "0",
      "isexpiring": false,
      "grade": "6",
      "offertier": "Blue",
      "tier": "skywards,gold,io,platinum,silver",
      "homepageoffer": "No",
      "ribbonclass": "skywards",
      "title": "Worldwide rewards with Hertz",
      "summary": null,
      "callouttitle": "More fun with Hertz ",
      "calloutsummary": "Up to 25% off and double Skywards Miles",
      "friendlyurl": "More-fun-with-Hertz",
      "categorydisplay": "Car Rental",
      "tiers": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "indexpageoffer": [
        {
          "key": "skywards",
          "value": "Blue"
        },
        {
          "key": "public",
          "value": "Emirates Special Offer"
        },
        {
          "key": "gold",
          "value": "Gold"
        },
        {
          "key": "io",
          "value": "IO"
        },
        {
          "key": "platinum",
          "value": "Platinum"
        },
        {
          "key": "silver",
          "value": "Silver"
        }
      ],
      "thumbnail": "/ae/english/images/Special_Offer_1654_230_tcm277-4559058.jpg",
      "hash": "ec32007e9dc6507a8974e9fd314257b0bdc1d21b",
      "url": "/ae/english/offers/4558627/more-fun-with-hertz",
      "wheretolink": null,
      "ishidden": false,
      "istactical": false
    }
  ]}]
};

var app = express();

var router = express.Router();

/* POST Login request. */
app.post('/api/login', function(req, res, next) {
  res.send({ LoggedIn: "Y" });
});

/* GET Login request. */
app.post('/api/results', function(req, res, next) {
  console.log('post /api/results called' );
  res.send(offers);
});

/* GET Login request. */
app.get('/api/results', function(req, res, next) {
  console.log('Get /api/results called' );
  res.send(offers);
});


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));  

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
  });
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

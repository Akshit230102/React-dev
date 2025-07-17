import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="hello"
          src="https://i.pinimg.com/474x/84/4d/85/844d8535fb36b860d3a16635ef20fbab.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "667239",
          name: "White Oak Restaurant",
          cloudinaryImageId: "2268b1e3b198e7810435c598e1916bf6",
          locality: "D B Gupta road",
          areaName: "Paharganj",
          costForTwo: "₹1000 for two",
          cuisines: ["Indian", "Mughlai", "Chinese"],
          avgRating: 4.4,
          parentId: "457119",
          avgRatingString: "4.4",
          totalRatingsString: "78",
          promoted: true,
          adTrackingId:
            "cid=c68ec526-be22-4e00-abde-e8318aa275d3~p=0~adgrpid=c68ec526-be22-4e00-abde-e8318aa275d3#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=667239~plpr=COLLECTION~eid=8afdda8d-b8f5-401a-94dc-33acba9e5b2f~srvts=1752692411720~collid=83633",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-23 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.7",
              ratingCount: "1.3K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "c68ec526-be22-4e00-abde-e8318aa275d3",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=667239&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "27038",
          name: "Delhi Darbar",
          cloudinaryImageId: "bxfe30q4wfa8hp47kdoy",
          locality: "Gole Market",
          areaName: "Gole Market",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian", "Chinese"],
          avgRating: 3.7,
          parentId: "3908",
          avgRatingString: "3.7",
          totalRatingsString: "47K+",
          sla: {
            deliveryTime: 16,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-17 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.5",
              ratingCount: "227",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=27038&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "443498",
          name: "EatFit",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/690260ec-df73-49ad-8cee-af9de21243ae_443498.jpg",
          locality: "Payara Lal Road",
          areaName: "Karol Bagh",
          costForTwo: "₹270 for two",
          cuisines: [
            "Chinese",
            "Healthy Food",
            "Tandoor",
            "Pizzas",
            "North Indian",
            "Thalis",
            "Biryani",
          ],
          avgRating: 4.4,
          parentId: "76139",
          avgRatingString: "4.4",
          totalRatingsString: "4.3K+",
          promoted: true,
          adTrackingId:
            "cid=31132852~p=1~adgrpid=31132852#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=443498~plpr=COLLECTION~eid=a5aaeda3-69a4-41e7-9d19-698a2f41aee4~srvts=1752692411720~collid=83633",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 4.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "4.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-17 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31132852",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=443498&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "279869",
          name: "Ghar ka Khana by EatFit",
          cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
          locality: "Pyarelal Road",
          areaName: "Rajendra Place",
          costForTwo: "₹250 for two",
          cuisines: [
            "North Indian",
            "Home Food",
            "Healthy Food",
            "Indian",
            "Punjabi",
            "South Indian",
            "Rajasthani",
            "Maharashtrian",
            "Snacks",
            "Desserts",
          ],
          avgRating: 4.2,
          parentId: "422576",
          avgRatingString: "4.2",
          totalRatingsString: "4.7K+",
          promoted: true,
          adTrackingId:
            "cid=31132863~p=2~adgrpid=31132863#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=279869~plpr=COLLECTION~eid=24cccf4e-bc60-4651-9a76-3e4a8da889ae~srvts=1752692411720~collid=83633",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 4.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "4.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-17 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹79",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31132863",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=279869&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "697263",
          name: "Handi 47",
          cloudinaryImageId: "f60a0596a76581b140ea724a02b7805b",
          locality: "Lakshmi Narayan St",
          areaName: "Karol Bagh",
          costForTwo: "₹300 for two",
          cuisines: ["North Indian"],
          avgRating: 4.2,
          parentId: "417357",
          avgRatingString: "4.2",
          totalRatingsString: "705",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 2.3,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-23 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=697263&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "258199",
          name: "Great Indian Khichdi by EatFit",
          cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
          locality: "Pyarelal Road",
          areaName: "Karol Bagh",
          costForTwo: "₹200 for two",
          cuisines: [
            "Home Food",
            "Indian",
            "North Indian",
            "Healthy Food",
            "Snacks",
            "Desserts",
            "Rajasthani",
            "South Indian",
            "Maharashtrian",
            "Sweets",
          ],
          avgRating: 4.4,
          veg: true,
          parentId: "319582",
          avgRatingString: "4.4",
          totalRatingsString: "6.4K+",
          promoted: true,
          adTrackingId:
            "cid=31132861~p=3~adgrpid=31132861#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=258199~plpr=COLLECTION~eid=abc20607-f0cc-44e6-b153-1290665ebb10~srvts=1752692411720~collid=83633",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 4.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "4.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-17 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "brand",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "brand",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31132861",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=258199&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
        card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "14951",
        name: "Khan Chacha | Rolls, Kebabs And Biryani",
        cloudinaryImageId: "9e9a4f728e2bf1e69f325179d0addd45",
        locality: "Connaught Place",
        areaName: "Connaught Place",
        costForTwo: "₹400 for two",
        cuisines: ["Kebabs", "Mughlai"],
        avgRating: 4.5,
        parentId: "587042",
        avgRatingString: "4.5",
        totalRatingsString: "11K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 0.4,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "0.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-17 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹395",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "3.3K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=14951&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "443497",
          name: "EatFit",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/93d56042-f6d8-4496-8ef1-4d48b98756bf_443497.jpg",
          locality: "BHAGAT SINGH MARKET",
          areaName: "GOLE MARKET",
          costForTwo: "₹270 for two",
          cuisines: [
            "Chinese",
            "Healthy Food",
            "Tandoor",
            "Pizzas",
            "North Indian",
            "Thalis",
            "Biryani",
          ],
          avgRating: 4.3,
          parentId: "76139",
          avgRatingString: "4.3",
          totalRatingsString: "2.9K+",
          promoted: true,
          adTrackingId:
            "cid=31161176~p=4~adgrpid=31161176#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=443497~plpr=COLLECTION~eid=3a9881fe-5751-4083-870b-a796fe681654~srvts=1752758411237~collid=83633",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-17 23:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31161176",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=443497&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "62965",
          name: "LunchBox - Meals and Thalis",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/a01e18fe-fb09-4548-af10-f9adadfff0ee_62965.jpg",
          locality: "Minto Road",
          areaName: "Connaught Place",
          costForTwo: "₹200 for two",
          cuisines: ["Thalis", "North Indian", "Biryani"],
          avgRating: 4.4,
          parentId: "4925",
          avgRatingString: "4.4",
          totalRatingsString: "11K+",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 1.7,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-17 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                description: "bolt!",
              },
            ],
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=62965&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "25175",
          name: "BTW",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/52332556-f0d8-4a89-ba8c-f293a3a5ed68_25175.JPG",
          locality: "GT Karnal Road",
          areaName: "Kamla Nagar",
          costForTwo: "₹300 for two",
          cuisines: [
            "Street Food",
            "Indian",
            "North Indian",
            "Desserts",
            "Beverages",
            "Sweets",
          ],
          avgRating: 4.1,
          veg: true,
          parentId: "10314",
          avgRatingString: "4.1",
          totalRatingsString: "22K+",
          promoted: true,
          adTrackingId:
            "cid=eb0382b4-8d0d-47d9-bfc6-34d8604e5b57~p=5~adgrpid=eb0382b4-8d0d-47d9-bfc6-34d8604e5b57#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=25175~plpr=COLLECTION~eid=87441f41-f50a-4026-be3b-6956942852af~srvts=1752758411237~collid=83633",
          sla: {
            deliveryTime: 56,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            slaString: "55-65 mins",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-17 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Ratnesh_Badges/Rx_Awards_2025/Tikki.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Ratnesh_Badges/Rx_Awards_2025/Tikki.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹42",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "1.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "eb0382b4-8d0d-47d9-bfc6-34d8604e5b57",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=25175&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "8406",
          name: "Havemore Restaurant",
          cloudinaryImageId: "plvkwqxm3egshwzfpba8",
          locality: "Pandara Road",
          areaName: "Pandara Road",
          costForTwo: "₹1000 for two",
          cuisines: ["Indian"],
          avgRating: 4.4,
          parentId: "471065",
          avgRatingString: "4.4",
          totalRatingsString: "2.0K+",
          sla: {
            deliveryTime: 41,
            lastMileTravel: 3.5,
            serviceability: "SERVICEABLE",
            slaString: "40-50 mins",
            lastMileTravelString: "3.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-18 00:55:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹799",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "4.0K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=8406&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "279866",
          name: "Ghar ka Khana by EatFit",
          cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
          locality: "BHAGAT SINGH MARKET",
          areaName: "GOLE MARKET",
          costForTwo: "₹250 for two",
          cuisines: [
            "North Indian",
            "Home Food",
            "Healthy Food",
            "Indian",
            "Punjabi",
            "South Indian",
            "Rajasthani",
            "Maharashtrian",
            "Snacks",
            "Desserts",
          ],
          avgRating: 4.1,
          parentId: "422576",
          avgRatingString: "4.1",
          totalRatingsString: "3.0K+",
          promoted: true,
          adTrackingId:
            "cid=31161187~p=7~adgrpid=31161187#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=279866~plpr=COLLECTION~eid=68f39297-d087-44f5-8077-94cc77f76ada~srvts=1752758411237~collid=83633",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-17 23:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  },
                ],
              },
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹79",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31161187",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=279866&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "12716",
          name: "Pind Balluchi",
          cloudinaryImageId: "mvjqcsegyckbe1asuyck",
          locality: "Connaught Place",
          areaName: "Connaught Place",
          costForTwo: "₹400 for two",
          cuisines: ["North Indian"],
          avgRating: 4.4,
          parentId: "6337",
          avgRatingString: "4.4",
          totalRatingsString: "8.0K+",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-17 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "12K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=12716&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "258198",
          name: "Great Indian Khichdi by EatFit",
          cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
          locality: "BHAGAT SINGH MARKET",
          areaName: "GOLE MARKET",
          costForTwo: "₹200 for two",
          cuisines: [
            "Home Food",
            "Indian",
            "North Indian",
            "Healthy Food",
            "Snacks",
            "Desserts",
            "Rajasthani",
            "South Indian",
            "Maharashtrian",
            "Sweets",
          ],
          avgRating: 4.4,
          veg: true,
          parentId: "319582",
          avgRatingString: "4.4",
          totalRatingsString: "5.1K+",
          promoted: true,
          adTrackingId:
            "cid=31161185~p=9~adgrpid=31161185#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=258198~plpr=COLLECTION~eid=c623771d-e3ad-442a-aed8-a29587d927a6~srvts=1752758411237~collid=83633",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-17 23:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "brand",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "brand",
                      fontColor: "#7E808C",
                    },
                  },
                ],
              },
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31161185",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=258198&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "15607",
          name: "Creme N Crisp",
          cloudinaryImageId: "w7tf65rhxjlm0stnsbsl",
          locality: "Gole Market",
          areaName: "Gole Market",
          costForTwo: "₹400 for two",
          cuisines: ["Desserts", "Bakery", "Sweets"],
          avgRating: 4.5,
          veg: true,
          parentId: "2070",
          avgRatingString: "4.5",
          totalRatingsString: "15K+",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-17 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "985",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=15607&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1107088",
          name: "Dum Biryani By Punjabi Angithi",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/30/fc41c3ef-4409-4ef2-bb93-06d4169865ef_1107088.jpg",
          locality: "KAROL BAGH",
          areaName: "Jhandewalan",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "North Indian", "Tandoor"],
          avgRating: 4.2,
          veg: true,
          parentId: "575605",
          avgRatingString: "4.2",
          totalRatingsString: "20",
          promoted: true,
          adTrackingId:
            "cid=af46af7e-dab1-4dfb-8fdb-31734f1df2e2~p=11~adgrpid=af46af7e-dab1-4dfb-8fdb-31734f1df2e2#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1107088~plpr=COLLECTION~eid=8bca81a9-1561-49d2-87a4-9be3fc3ccaae~srvts=1752758411237~collid=83633",
          sla: {
            deliveryTime: 38,
            lastMileTravel: 3.6,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "3.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-18 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "af46af7e-dab1-4dfb-8fdb-31734f1df2e2",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1107088&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const RestaurantCard = ({resData}) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData.card.card.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3> {name}</h3>
      <h4> {cuisines.slice(0,4).join(", ")}</h4>
      <h4> {avgRating} stars</h4>
      <h4> {costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />)}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

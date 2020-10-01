$(document).ready(function () {

    /* -------------------- Slick Setting -------------------- */

    /* Single Slick */

    $('.slick-responsive-auto.single').slick({
        lazyLoad: 'ondemand',
        mobileFirst: false,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3500,
    });

    /* Quadruple Slick */

    $('.slick-responsive-auto.quadruple').slick({
        lazyLoad: 'ondemand',
        mobileFirst: false,
        dots: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3500,
        responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    /* Quintuple Slick */

    $('.slick-responsive-auto.quintuple').slick({
        lazyLoad: 'ondemand',
        mobileFirst: false,
        dots: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3500,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(window).on('load', async function () {

    //require('../../allTrends.json')

    $(window).scroll(function () {
        $(".navbar").toggleClass("scroll", $(this).scrollTop() > 1)
        $("#scroll-top").toggleClass("scroll", $(this).scrollTop() > 1)
    });

    function insertAt(array, index, ...elementsArray) {
        array.splice(index, 0, ...elementsArray);
    }

    var data = {
      "ZEC-USDC": {
         "0": {
            "trend": "100",
            "difference": "1.004"
         },
         "1": {
            "trend": "33.33",
            "difference": "0.993"
         },
         "2": {
            "trend": "-66.66",
            "difference": "1.018"
         },
         "3": {
            "trend": "-33.33",
            "difference": "1.038"
         },
         "volatility": "9.84 %",
         "5d_volatility": "16.09 %",
         "1d_volatility": "9.53 %",
         "3h_volatility": "2.01 %",
         "1h_volatility": "1.47 %",
         "15m_volatility": "0.50 %"
      },
      "XLM-EUR": {
         "0": {
            "trend": "-33.33",
            "difference": "1.003"
         },
         "1": {
            "trend": "33.33",
            "difference": "0.997"
         },
         "2": {
            "trend": "-100",
            "difference": "0.994"
         },
         "3": {
            "trend": "-100",
            "difference": "0.988"
         },
         "volatility": "4.33 %",
         "5d_volatility": "9.67 %",
         "1d_volatility": "4.33 %",
         "3h_volatility": "1.35 %",
         "1h_volatility": "0.80 %",
         "15m_volatility": "0.18 %"
      },
      "XLM-BTC": {
         "0": {
            "trend": "100",
            "difference": "1.005"
         },
         "1": {
            "trend": "100",
            "difference": "1.002"
         },
         "2": {
            "trend": "66.66",
            "difference": "0.996"
         },
         "3": {
            "trend": "-66.66",
            "difference": "0.992"
         },
         "volatility": "3.26 %",
         "5d_volatility": "6.89 %",
         "1d_volatility": "3.26 %",
         "3h_volatility": "1.18 %",
         "1h_volatility": "0.59 %",
         "15m_volatility": "0.29 %"
      },
      "ETH-EUR": {
         "0": {
            "trend": "33.33",
            "difference": "0.999"
         },
         "1": {
            "trend": "66.66",
            "difference": "0.998"
         },
         "2": {
            "trend": "-100",
            "difference": "0.997"
         },
         "3": {
            "trend": "-100",
            "difference": "0.994"
         },
         "volatility": "2.36 %",
         "5d_volatility": "8.78 %",
         "1d_volatility": "2.18 %",
         "3h_volatility": "0.75 %",
         "1h_volatility": "0.56 %",
         "15m_volatility": "0.24 %"
      },
      "ZEC-BTC": {
         "0": {
            "trend": "100",
            "difference": "1.006"
         },
         "1": {
            "trend": "33.33",
            "difference": "0.998"
         },
         "2": {
            "trend": "-66.66",
            "difference": "1.019"
         },
         "3": {
            "trend": "-66.66",
            "difference": "1.036"
         },
         "volatility": "9.30 %",
         "5d_volatility": "14.06 %",
         "1d_volatility": "9.05 %",
         "3h_volatility": "1.88 %",
         "1h_volatility": "1.19 %",
         "15m_volatility": "0.25 %"
      },
      "ZRX-EUR": {
         "0": {
            "trend": "33.33",
            "difference": "0.996"
         },
         "1": {
            "trend": "-100",
            "difference": "0.986"
         },
         "2": {
            "trend": "-100",
            "difference": "0.994"
         },
         "3": {
            "trend": "-66.66",
            "difference": "0.981"
         },
         "volatility": "7.97 %",
         "5d_volatility": "18.76 %",
         "1d_volatility": "7.45 %",
         "3h_volatility": "1.76 %",
         "1h_volatility": "1.17 %",
         "15m_volatility": "0.21 %"
      },
      "ATOM-BTC": {
         "0": {
            "trend": "100",
            "difference": "1.003"
         },
         "1": {
            "trend": "66.66",
            "difference": "1.011"
         },
         "2": {
            "trend": "100",
            "difference": "1.058"
         },
         "3": {
            "trend": "100",
            "difference": "1.072"
         },
         "volatility": "15.89 %",
         "5d_volatility": "26.21 %",
         "1d_volatility": "14.54 %",
         "3h_volatility": "2.62 %",
         "1h_volatility": "2.21 %",
         "15m_volatility": "0.79 %"
      },
      "ALGO-EUR": {
         "0": {
            "trend": "-66.66",
            "difference": "1.001"
         },
         "1": {
            "trend": "66.66",
            "difference": "0.996"
         },
         "2": {
            "trend": "-100",
            "difference": "0.987"
         },
         "3": {
            "trend": "-100",
            "difference": "0.986"
         },
         "volatility": "7.69 %",
         "5d_volatility": "20.00 %",
         "1d_volatility": "7.65 %",
         "3h_volatility": "1.44 %",
         "1h_volatility": "0.86 %",
         "15m_volatility": "0.21 %"
      },
      "NMR-BTC": {
         "0": {
            "trend": "-33.33",
            "difference": "1.002"
         },
         "1": {
            "trend": "100",
            "difference": "1.006"
         },
         "2": {
            "trend": "66.66",
            "difference": "0.998"
         },
         "3": {
            "trend": "66.66",
            "difference": "0.991"
         },
         "volatility": "7.22 %",
         "5d_volatility": "6.07 %",
         "1d_volatility": "4.34 %",
         "3h_volatility": "1.67 %",
         "1h_volatility": "0.30 %",
         "15m_volatility": "0.02 %"
      },
      "BTC-USDC": {
         "0": {
            "trend": "33.33",
            "difference": "1.000"
         },
         "1": {
            "trend": "33.33",
            "difference": "0.995"
         },
         "2": {
            "trend": "-100",
            "difference": "0.998"
         },
         "3": {
            "trend": "-100",
            "difference": "0.999"
         },
         "volatility": "2.14 %",
         "5d_volatility": "3.73 %",
         "1d_volatility": "2.05 %",
         "3h_volatility": "0.64 %",
         "1h_volatility": "0.52 %",
         "15m_volatility": "0.17 %"
      },
      "BAND-EUR": {
         "0": {
            "trend": "100",
            "difference": "1.002"
         },
         "1": {
            "trend": "33.33",
            "difference": "0.986"
         },
         "2": {
            "trend": "-100",
            "difference": "0.977"
         },
         "3": {
            "trend": "-100",
            "difference": "0.976"
         },
         "volatility": "10.50 %",
         "5d_volatility": "18.60 %",
         "1d_volatility": "9.41 %",
         "3h_volatility": "1.43 %",
         "1h_volatility": "1.43 %",
         "15m_volatility": "0.38 %"
      },
      "ETH-BTC": {
         "0": {
            "trend": "33.33",
            "difference": "1.000"
         },
         "1": {
            "trend": "100",
            "difference": "1.002"
         },
         "2": {
            "trend": "66.66",
            "difference": "0.999"
         },
         "3": {
            "trend": "-100",
            "difference": "0.998"
         },
         "volatility": "1.06 %",
         "5d_volatility": "5.39 %",
         "1d_volatility": "0.94 %",
         "3h_volatility": "0.45 %",
         "1h_volatility": "0.24 %",
         "15m_volatility": "0.12 %"
      },
      "XTZ-EUR": {
         "0": {
            "trend": "100",
            "difference": "1.000"
         },
         "1": {
            "trend": "33.33",
            "difference": "0.990"
         },
         "2": {
            "trend": "-100",
            "difference": "0.981"
         },
         "3": {
            "trend": "-100",
            "difference": "0.974"
         },
         "volatility": "6.86 %",
         "5d_volatility": "12.54 %",
         "1d_volatility": "6.86 %",
         "3h_volatility": "1.38 %",
         "1h_volatility": "0.88 %",
         "15m_volatility": "0.09 %"
      },
      "XRP-EUR": {
         "0": {
            "trend": "-100",
            "difference": "1.000"
         },
         "1": {
            "trend": "-100",
            "difference": "0.997"
         },
         "2": {
            "trend": "-100",
            "difference": "0.993"
         },
         "3": {
            "trend": "-100",
            "difference": "0.990"
         },
         "volatility": "3.68 %",
         "5d_volatility": "7.80 %",
         "1d_volatility": "3.54 %",
         "3h_volatility": "0.59 %",
         "1h_volatility": "0.29 %",
         "15m_volatility": "0.05 %"
      },
      "MANA-USDC": {
         "0": {
            "trend": "-100",
            "difference": "0.998"
         },
         "1": {
            "trend": "-100",
            "difference": "0.992"
         },
         "2": {
            "trend": "-100",
            "difference": "0.983"
         },
         "3": {
            "trend": "-66.66",
            "difference": "1.007"
         },
         "volatility": "7.43 %",
         "5d_volatility": "26.02 %",
         "1d_volatility": "7.91 %",
         "3h_volatility": "0.60 %",
         "1h_volatility": "0.14 %",
         "15m_volatility": "0.00 %"
      },
      "ETH-DAI": {
         "0": {
            "trend": "33.33",
            "difference": "0.999"
         },
         "1": {
            "trend": "33.33",
            "difference": "0.996"
         },
         "2": {
            "trend": "-100",
            "difference": "0.997"
         },
         "3": {
            "trend": "-100",
            "difference": "0.996"
         },
         "volatility": "2.72 %",
         "5d_volatility": "8.89 %",
         "1d_volatility": "2.69 %",
         "3h_volatility": "0.60 %",
         "1h_volatility": "0.51 %",
         "15m_volatility": "0.24 %"
      },
      "UMA-BTC": {
         "0": {
            "trend": "100",
            "difference": "1.006"
         },
         "1": {
            "trend": "66.66",
            "difference": "0.979"
         },
         "2": {
            "trend": "-100",
            "difference": "0.946"
         },
         "3": {
            "trend": "-100",
            "difference": "0.930"
         },
         "volatility": "14.92 %",
         "5d_volatility": "24.25 %",
         "1d_volatility": "14.92 %",
         "3h_volatility": "4.02 %",
         "1h_volatility": "1.58 %",
         "15m_volatility": "0.70 %"
      },
      "CGLD-EUR": {
         "0": {
            "trend": "-100",
            "difference": "0.996"
         },
         "1": {
            "trend": "-100",
            "difference": "0.986"
         },
         "2": {
            "trend": "-100",
            "difference": "0.976"
         },
         "3": {
            "trend": "-100",
            "difference": "0.967"
         },
         "volatility": "9.26 %",
         "5d_volatility": "21.51 %",
         "1d_volatility": "9.26 %",
         "3h_volatility": "2.59 %",
         "1h_volatility": "1.32 %",
         "15m_volatility": "0.26 %"
      },
      "MKR-BTC": {
         "0": {
            "trend": "100",
            "difference": "1.022"
         },
         "1": {
            "trend": "100",
            "difference": "1.005"
         },
         "2": {
            "trend": "-100",
            "difference": "0.994"
         },
         "3": {
            "trend": "-100",
            "difference": "0.988"
         },
         "volatility": "8.44 %",
         "5d_volatility": "12.10 %",
         "1d_volatility": "5.20 %",
         "3h_volatility": "4.97 %",
         "1h_volatility": "2.47 %",
         "15m_volatility": "0.04 %"
      },
      "LTC-EUR": {
         "0": {
            "trend": "66.66",
            "difference": "0.999"
         },
         "1": {
            "trend": "66.66",
            "difference": "1.005"
         },
         "2": {
            "trend": "100",
            "difference": "1.010"
         },
         "3": {
            "trend": "100",
            "difference": "1.002"
         },
         "volatility": "3.00 %",
         "5d_volatility": "6.82 %",
         "1d_volatility": "2.94 %",
         "3h_volatility": "0.67 %",
         "1h_volatility": "0.61 %",
         "15m_volatility": "0.15 %"
      },
      "BAT-USDC": {
         "0": {
            "trend": "-100",
            "difference": "0.993"
         },
         "1": {
            "trend": "-66.66",
            "difference": "1.004"
         },
         "2": {
            "trend": "100",
            "difference": "1.015"
         },
         "3": {
            "trend": "100",
            "difference": "1.010"
         },
         "volatility": "5.37 %",
         "5d_volatility": "10.90 %",
         "1d_volatility": "5.10 %",
         "3h_volatility": "1.60 %",
         "1h_volatility": "1.23 %",
         "15m_volatility": "0.50 %"
      },
      "LOOM-USDC": {
         "0": {
            "trend": "100",
            "difference": "1.002"
         },
         "1": {
            "trend": "33.33",
            "difference": "0.981"
         },
         "2": {
            "trend": "-100",
            "difference": "0.978"
         },
         "3": {
            "trend": "-100",
            "difference": "0.974"
         },
         "volatility": "5.32 %",
         "5d_volatility": "15.95 %",
         "1d_volatility": "5.32 %",
         "3h_volatility": "1.21 %",
         "1h_volatility": "0.37 %",
         "15m_volatility": "0.36 %"
      },
      "OMG-BTC": {
         "0": {
            "trend": "66.66",
            "difference": "0.998"
         },
         "1": {
            "trend": "-100",
            "difference": "0.991"
         },
         "2": {
            "trend": "-100",
            "difference": "0.978"
         },
         "3": {
            "trend": "-100",
            "difference": "0.984"
         },
         "volatility": "9.88 %",
         "5d_volatility": "49.48 %",
         "1d_volatility": "9.46 %",
         "3h_volatility": "1.14 %",
         "1h_volatility": "0.00 %",
         "15m_volatility": "0.00 %"
      },
      "KNC-BTC": {
         "0": {
            "trend": "100",
            "difference": "1.002"
         },
         "1": {
            "trend": "-100",
            "difference": "0.999"
         },
         "2": {
            "trend": "33.33",
            "difference": "0.994"
         },
         "3": {
            "trend": "-100",
            "difference": "0.977"
         },
         "volatility": "2.89 %",
         "5d_volatility": "15.98 %",
         "1d_volatility": "3.70 %",
         "3h_volatility": "0.66 %",
         "1h_volatility": "0.49 %",
         "15m_volatility": "0.31 %"
      },
      "ETC-BTC": {
         "0": {
            "trend": "66.66",
            "difference": "0.999"
         },
         "1": {
            "trend": "-66.66",
            "difference": "1.003"
         },
         "2": {
            "trend": "100",
            "difference": "1.004"
         },
         "3": {
            "trend": "66.66",
            "difference": "0.998"
         },
         "volatility": "4.42 %",
         "5d_volatility": "5.96 %",
         "1d_volatility": "3.85 %",
         "3h_volatility": "1.70 %",
         "1h_volatility": "1.51 %",
         "15m_volatility": "0.00 %"
      },
      "DASH-BTC": {
         "0": {
            "trend": "-100",
            "difference": "0.998"
         },
         "1": {
            "trend": "33.33",
            "difference": "0.997"
         },
         "2": {
            "trend": "-100",
            "difference": "0.998"
         },
         "3": {
            "trend": "-100",
            "difference": "0.997"
         },
         "volatility": "1.95 %",
         "5d_volatility": "4.12 %",
         "1d_volatility": "1.95 %",
         "3h_volatility": "0.36 %",
         "1h_volatility": "0.34 %",
         "15m_volatility": "0.00 %"
      },
      "GNT-USDC": {
         "0": {
            "trend": "100",
            "difference": "1.008"
         },
         "1": {
            "trend": "100",
            "difference": "1.008"
         },
         "2": {
            "trend": "100",
            "difference": "1.025"
         },
         "3": {
            "trend": "100",
            "difference": "1.024"
         },
         "volatility": "7.32 %",
         "5d_volatility": "25.72 %",
         "1d_volatility": "7.32 %",
         "3h_volatility": "1.83 %",
         "1h_volatility": "0.03 %",
         "15m_volatility": "0.03 %"
      },
      "BAND-BTC": {
         "0": {
            "trend": "100",
            "difference": "1.002"
         },
         "1": {
            "trend": "33.33",
            "difference": "0.990"
         },
         "2": {
            "trend": "-100",
            "difference": "0.980"
         },
         "3": {
            "trend": "-100",
            "difference": "0.981"
         },
         "volatility": "8.61 %",
         "5d_volatility": "16.91 %",
         "1d_volatility": "8.52 %",
         "3h_volatility": "1.20 %",
         "1h_volatility": "1.13 %",
         "15m_volatility": "0.26 %"
      },
      "BTC-EUR": {
         "0": {
            "trend": "33.33",
            "difference": "0.999"
         },
         "1": {
            "trend": "-100",
            "difference": "0.996"
         },
         "2": {
            "trend": "-100",
            "difference": "0.997"
         },
         "3": {
            "trend": "-100",
            "difference": "0.996"
         },
         "volatility": "1.91 %",
         "5d_volatility": "3.39 %",
         "1d_volatility": "1.84 %",
         "3h_volatility": "0.55 %",
         "1h_volatility": "0.47 %",
         "15m_volatility": "0.07 %"
      },
      "OMG-EUR": {
         "0": {
            "trend": "100",
            "difference": "1.003"
         },
         "1": {
            "trend": "-100",
            "difference": "0.989"
         },
         "2": {
            "trend": "-100",
            "difference": "0.976"
         },
         "3": {
            "trend": "-100",
            "difference": "0.985"
         },
         "volatility": "10.99 %",
         "5d_volatility": "50.52 %",
         "1d_volatility": "10.24 %",
         "3h_volatility": "1.36 %",
         "1h_volatility": "0.95 %",
         "15m_volatility": "0.40 %"
      },
      "BAT-ETH": {
         "0": {
            "trend": "-100",
            "difference": "0.992"
         },
         "1": {
            "trend": "-66.66",
            "difference": "1.008"
         },
         "2": {
            "trend": "100",
            "difference": "1.018"
         },
         "3": {
            "trend": "100",
            "difference": "1.012"
         },
         "volatility": "4.88 %",
         "5d_volatility": "6.46 %",
         "1d_volatility": "4.88 %",
         "3h_volatility": "2.33 %",
         "1h_volatility": "1.62 %",
         "15m_volatility": "0.00 %"
      },
      "DNT-USDC": {
         "0": {
            "trend": "100",
            "difference": "1.005"
         },
         "1": {
            "trend": "-100",
            "difference": "0.995"
         },
         "2": {
            "trend": "-66.66",
            "difference": "1.001"
         },
         "3": {
            "trend": "-66.66",
            "difference": "0.995"
         },
         "volatility": "5.65 %",
         "5d_volatility": "10.06 %",
         "1d_volatility": "5.65 %",
         "3h_volatility": "2.99 %",
         "1h_volatility": "2.99 %",
         "15m_volatility": "2.99 %"
      },
      "REP-BTC": {
         "0": {
            "trend": "66.66",
            "difference": "0.998"
         },
         "1": {
            "trend": "-100",
            "difference": "0.990"
         },
         "2": {
            "trend": "-100",
            "difference": "0.994"
         },
         "3": {
            "trend": "-100",
            "difference": "0.983"
         },
         "volatility": "5.87 %",
         "5d_volatility": "18.99 %",
         "1d_volatility": "5.63 %",
         "3h_volatility": "1.90 %",
         "1h_volatility": "0.15 %",
         "15m_volatility": "0.15 %"
      },
      "EOS-EUR": {
         "0": {
            "trend": "-100",
            "difference": "0.998"
         },
         "1": {
            "trend": "-100",
            "difference": "0.999"
         },
         "2": {
            "trend": "33.33",
            "difference": "0.998"
         },
         "3": {
            "trend": "-100",
            "difference": "0.997"
         },
         "volatility": "1.28 %",
         "5d_volatility": "6.51 %",
         "1d_volatility": "1.09 %",
         "3h_volatility": "0.55 %",
         "1h_volatility": "0.36 %",
         "15m_volatility": "0.14 %"
      },
      "CVC-USDC": {
         "0": {
            "trend": "-100",
            "difference": "0.987"
         },
         "1": {
            "trend": "-100",
            "difference": "0.989"
         },
         "2": {
            "trend": "-66.66",
            "difference": "1.002"
         },
         "3": {
            "trend": "66.66",
            "difference": "0.999"
         },
         "volatility": "3.80 %",
         "5d_volatility": "9.02 %",
         "1d_volatility": "3.80 %",
         "3h_volatility": "2.74 %",
         "1h_volatility": "1.71 %",
         "15m_volatility": "0.28 %"
      },
      "COMP-BTC": {
         "0": {
            "trend": "100",
            "difference": "1.004"
         },
         "1": {
            "trend": "66.66",
            "difference": "0.998"
         },
         "2": {
            "trend": "-66.66",
            "difference": "1.012"
         },
         "3": {
            "trend": "100",
            "difference": "1.011"
         },
         "volatility": "5.54 %",
         "5d_volatility": "15.20 %",
         "1d_volatility": "4.92 %",
         "3h_volatility": "1.38 %",
         "1h_volatility": "1.18 %",
         "15m_volatility": "0.40 %"
      },
      "LTC-BTC": {
         "0": {
            "trend": "33.33",
            "difference": "1.000"
         },
         "1": {
            "trend": "66.66",
            "difference": "1.009"
         },
         "2": {
            "trend": "100",
            "difference": "1.011"
         },
         "3": {
            "trend": "100",
            "difference": "1.005"
         },
         "volatility": "2.50 %",
         "5d_volatility": "5.13 %",
         "1d_volatility": "2.50 %",
         "3h_volatility": "0.37 %",
         "1h_volatility": "0.35 %",
         "15m_volatility": "0.07 %"
      },
      "DAI-USDC": {
         "0": {
            "trend": "-100",
            "difference": "1.000"
         },
         "1": {
            "trend": "100",
            "difference": "1.000"
         },
         "2": {
            "trend": "100",
            "difference": "1.000"
         },
         "3": {
            "trend": "-66.66",
            "difference": "1.000"
         },
         "volatility": "0.31 %",
         "5d_volatility": "0.54 %",
         "1d_volatility": "0.31 %",
         "3h_volatility": "0.11 %",
         "1h_volatility": "0.09 %",
         "15m_volatility": "0.02 %"
      },
      "BCH-EUR": {
         "0": {
            "trend": "-66.66",
            "difference": "1.000"
         },
         "1": {
            "trend": "100",
            "difference": "1.001"
         },
         "2": {
            "trend": "-66.66",
            "difference": "1.003"
         },
         "3": {
            "trend": "-66.66",
            "difference": "0.999"
         },
         "volatility": "2.41 %",
         "5d_volatility": "11.06 %",
         "1d_volatility": "2.08 %",
         "3h_volatility": "0.72 %",
         "1h_volatility": "0.53 %",
         "15m_volatility": "0.03 %"
      },
      "NMR-EUR": {
         "0": {
            "trend": "-33.33",
            "difference": "1.002"
         },
         "1": {
            "trend": "100",
            "difference": "1.002"
         },
         "2": {
            "trend": "66.66",
            "difference": "0.997"
         },
         "3": {
            "trend": "-66.66",
            "difference": "0.989"
         },
         "volatility": "6.51 %",
         "5d_volatility": "7.04 %",
         "1d_volatility": "4.91 %",
         "3h_volatility": "1.33 %",
         "1h_volatility": "0.36 %",
         "15m_volatility": "0.00 %"
      },
      "XTZ-BTC": {
         "0": {
            "trend": "100",
            "difference": "1.001"
         },
         "1": {
            "trend": "66.66",
            "difference": "0.994"
         },
         "2": {
            "trend": "-100",
            "difference": "0.986"
         },
         "3": {
            "trend": "-100",
            "difference": "0.978"
         },
         "volatility": "5.62 %",
         "5d_volatility": "9.50 %",
         "1d_volatility": "5.35 %",
         "3h_volatility": "1.34 %",
         "1h_volatility": "0.63 %",
         "15m_volatility": "0.09 %"
      },
      "BCH-BTC": {
         "0": {
            "trend": "-66.66",
            "difference": "1.000"
         },
         "1": {
            "trend": "100",
            "difference": "1.004"
         },
         "2": {
            "trend": "100",
            "difference": "1.005"
         },
         "3": {
            "trend": "100",
            "difference": "1.004"
         },
         "volatility": "1.85 %",
         "5d_volatility": "8.14 %",
         "1d_volatility": "1.33 %",
         "3h_volatility": "0.57 %",
         "1h_volatility": "0.19 %",
         "15m_volatility": "0.05 %"
      },
      "EOS-BTC": {
         "0": {
            "trend": "0",
            "difference": "0.999"
         },
         "1": {
            "trend": "-66.66",
            "difference": "1.002"
         },
         "2": {
            "trend": "100",
            "difference": "1.001"
         },
         "3": {
            "trend": "33.33",
            "difference": "0.999"
         },
         "volatility": "1.26 %",
         "5d_volatility": "4.31 %",
         "1d_volatility": "1.26 %",
         "3h_volatility": "0.42 %",
         "1h_volatility": "0.00 %",
         "15m_volatility": "0.00 %"
      },
      "ZRX-BTC": {
         "0": {
            "trend": "33.33",
            "difference": "0.997"
         },
         "1": {
            "trend": "-100",
            "difference": "0.989"
         },
         "2": {
            "trend": "-100",
            "difference": "0.998"
         },
         "3": {
            "trend": "-66.66",
            "difference": "0.982"
         },
         "volatility": "5.91 %",
         "5d_volatility": "15.56 %",
         "1d_volatility": "5.66 %",
         "3h_volatility": "1.39 %",
         "1h_volatility": "0.95 %",
         "15m_volatility": "0.24 %"
      },
      "ETC-EUR": {
         "0": {
            "trend": "-66.66",
            "difference": "0.996"
         },
         "1": {
            "trend": "-100",
            "difference": "0.997"
         },
         "2": {
            "trend": "66.66",
            "difference": "1.000"
         },
         "3": {
            "trend": "66.66",
            "difference": "0.995"
         },
         "volatility": "3.04 %",
         "5d_volatility": "4.71 %",
         "1d_volatility": "3.02 %",
         "3h_volatility": "2.44 %",
         "1h_volatility": "0.56 %",
         "15m_volatility": "0.00 %"
      },
      "XRP-BTC": {
         "0": {
            "trend": "-100",
            "difference": "1.000"
         },
         "1": {
            "trend": "100",
            "difference": "1.002"
         },
         "2": {
            "trend": "66.66",
            "difference": "0.996"
         },
         "3": {
            "trend": "-100",
            "difference": "0.993"
         },
         "volatility": "2.51 %",
         "5d_volatility": "5.49 %",
         "1d_volatility": "2.51 %",
         "3h_volatility": "0.36 %",
         "1h_volatility": "0.27 %",
         "15m_volatility": "0.00 %"
      },
      "ETH-USDC": {
         "0": {
            "trend": "33.33",
            "difference": "1.000"
         },
         "1": {
            "trend": "66.66",
            "difference": "0.997"
         },
         "2": {
            "trend": "-100",
            "difference": "0.996"
         },
         "3": {
            "trend": "-100",
            "difference": "0.996"
         },
         "volatility": "2.36 %",
         "5d_volatility": "8.73 %",
         "1d_volatility": "2.25 %",
         "3h_volatility": "0.75 %",
         "1h_volatility": "0.42 %",
         "15m_volatility": "0.12 %"
      },
      "LINK-ETH": {
         "0": {
            "trend": "100",
            "difference": "1.005"
         },
         "1": {
            "trend": "-100",
            "difference": "0.987"
         },
         "2": {
            "trend": "-100",
            "difference": "0.986"
         },
         "3": {
            "trend": "66.66",
            "difference": "0.974"
         },
         "volatility": "7.00 %",
         "5d_volatility": "16.15 %",
         "1d_volatility": "7.08 %",
         "3h_volatility": "2.06 %",
         "1h_volatility": "0.99 %",
         "15m_volatility": "0.24 %"
      },
      "UMA-EUR": {
         "0": {
            "trend": "100",
            "difference": "1.003"
         },
         "1": {
            "trend": "-100",
            "difference": "0.965"
         },
         "2": {
            "trend": "-100",
            "difference": "0.940"
         },
         "3": {
            "trend": "-100",
            "difference": "0.926"
         },
         "volatility": "23.97 %",
         "5d_volatility": "25.02 %",
         "1d_volatility": "15.73 %",
         "3h_volatility": "3.77 %",
         "1h_volatility": "2.01 %",
         "15m_volatility": "0.58 %"
      },
      "CGLD-BTC": {
         "0": {
            "trend": "-100",
            "difference": "0.996"
         },
         "1": {
            "trend": "-100",
            "difference": "0.992"
         },
         "2": {
            "trend": "-100",
            "difference": "0.979"
         },
         "3": {
            "trend": "-100",
            "difference": "0.970"
         },
         "volatility": "8.16 %",
         "5d_volatility": "20.57 %",
         "1d_volatility": "7.98 %",
         "3h_volatility": "1.96 %",
         "1h_volatility": "1.34 %",
         "15m_volatility": "0.05 %"
      },
      "LINK-EUR": {
         "0": {
            "trend": "-66.66",
            "difference": "1.003"
         },
         "1": {
            "trend": "33.33",
            "difference": "0.985"
         },
         "2": {
            "trend": "-100",
            "difference": "0.988"
         },
         "3": {
            "trend": "-100",
            "difference": "0.970"
         },
         "volatility": "9.03 %",
         "5d_volatility": "17.78 %",
         "1d_volatility": "8.89 %",
         "3h_volatility": "1.85 %",
         "1h_volatility": "1.22 %",
         "15m_volatility": "0.01 %"
      }
   }
    var array = []

    for (var a in data) {
        data[a]['id'] = a
        array.push(data[a])
    }

    array.sort(function (a, b) {
        return parseFloat(b['volatility']) - parseFloat(a['volatility']);
    })

    const max = parseInt(array[0]['volatility'])
    const min = parseInt(array[array.length - 1]['volatility'])

    const max3h = parseInt(array[0]['3h_volatility'])
    const min3h = parseInt(array[array.length - 1]['3h_volatility'])

    const max15m = parseInt(array[0]['15m_volatility'])
    const min15m = parseInt(array[array.length - 1]['15m_volatility'])

    window.showDetails = (id) => {
        //alert(JSON.stringify($(`#${id}-content`)))
        var text = $(`#${id}-alert`).text()
        if (text !== 'Details') {
            $(`#${id}-content`).html(`<div class="analytic-text">
        <div class="desc" style="overflow-y: scroll; height: 120px">
            <p >
                All currencies available on Coinbase Pro are listed and sorted by the 24h volatility here.
                <br>
                The risk score is an indicator for the probability of taking profit on an trade.
                <br>
                sadasd
                <br>
                sadasdasd
            </p>
        </div>
    </div>`)
            $(`#${id}-alert`).text('Details')
            $(`#${id}-footerContent`).html(`<div class="title" style="cursor: pointer">
        <h3 onclick="window.open('https://de.tradingview.com/symbols/${id.replace('-', '')}/?exchange=COINBASE', 'mywindow')">
            <span>
            <i class="fas fa-external-link-alt"></i> Chart view
            </span>
        </h3>
    </div>`)
        
            //$(`#${id}-footer`).css('display', 'none')
        } else {
            //$(`#${id}-footer`).css('display', 'block')
            var currency = array.filter((item) => {
                return item['id'] === id
            })
            const volatility = parseInt(currency[0]['volatility'])
            const volatility3h = parseInt(currency[0]['3h_volatility'])
            console.log(currency)
            $(`#${id}-alert`).text('Up Trends')
            $(`#${id}-content`).html(`<div class="content-inner">
            <div class="progress-label">
                <label class="lab-text">
                    <i class="fas fa-chart-area"></i> Volatility
                </label>
                <label class="lab-time">
                    24h
                </label>
            </div>
            <div class="progress progress-primary">
                <div class="progress-bar" role="progressbar" style="width: ${volatility / max * 100}%;" aria-valuenow="${volatility}" aria-valuemin="0" aria-valuemax="100">
                    ${volatility}%
                </div>
            </div>
        </div>
        <div class="content-inner">
            <div class="progress-label">
                <label class="lab-text">
                    <i class="fas fa-chart-area"></i> Volatility
                </label>
                <label class="lab-time">
                    3h
                </label>
            </div>
            <div class="progress progress-secondary">
                <div class="progress-bar" role="progressbar" style="width: ${volatility3h / max3h * 100}%;" aria-valuenow="${volatility3h}" aria-valuemin="0" aria-valuemax="100">
                    ${volatility3h}%
                </div>
            </div>
        </div>`)
            $(`#${id}-footerContent`).html(`<div class="title">
        <h3>
            <span>
                <i class="fas fa-info-circle"></i> Risk Score :
            </span>
            <span>
                0.5
            </span>
        </h3>
    </div>`)
        }
    }

    for (var a in array) {
        const volatility = parseInt(array[a]['volatility'])
        const volatility3h = parseInt(array[a]['3h_volatility'])
        const volatility15m = parseInt(array[a]['15m_volatility'])
        $('#content').append(`<div class="col-inner col-12 col-md-6 col-lg-4">
        <div class="analytic-card card-primary">
            <div class="analytic-card-header">
                <div class="analytic-text">
                    <div class="title">
                        <h3>
                            ${array[a]['id'].replace('-', ' - ')}
                        </h3>
                    </div>
                </div>
                <div class="analytic-button">
                    <div class="button">
                        <a class="btn btn-block btn-analytic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick="showDetails('${array[a]['id']}')" id="${array[a]['id']}-detailsBtn">
                            Details
                        </a>
                    </div>
                </div>
            </div>
            <div class="analytic-card-content">
                <div class="analytic-wrapper">
                    <div class="wrapper-header">
                        <div class="analytic-text">
                            <div class="title">
                                <h3 id="${array[a]['id']}-alert">
                                    Up Trends
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content" id="${array[a]['id']}-content">
                        <div class="content-inner">
                            <div class="progress-label">
                                <label class="lab-text">
                                    <i class="fas fa-chart-area"></i> Volatility
                                </label>
                                <label class="lab-time">
                                    24h
                                </label>
                            </div>
                            <div class="progress progress-primary">
                                <div class="progress-bar" role="progressbar" style="width: ${volatility / max * 100}%;" aria-valuenow="${volatility}" aria-valuemin="0" aria-valuemax="100">
                                    ${volatility}%
                                </div>
                            </div>
                        </div>
                        <div class="content-inner">
                            <div class="progress-label">
                                <label class="lab-text">
                                    <i class="fas fa-chart-area"></i> Volatility
                                </label>
                                <label class="lab-time">
                                   3h
                                </label>
                            </div>
                            <div class="progress progress-secondary">
                                <div class="progress-bar" role="progressbar" style="width: ${volatility3h / max3h * 100}%;" aria-valuenow="${volatility3h}" aria-valuemin="0" aria-valuemax="100">
                                    ${volatility3h}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="analytic-card-footer" id="${array[a]['id']}-footer">
                <div class="analytic-text" id="${array[a]['id']}-footerContent">
                    <div class="title">
                        <h3>
                            <span>
                                <i class="fas fa-info-circle"></i> Risk Score :
                            </span>
                            <span>
                                0.5
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
});
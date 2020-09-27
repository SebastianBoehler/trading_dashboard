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
        "XTZ-EUR": {
           "0": {
              "trend": "100",
              "difference": "1.008"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.989"
           },
           "2": {
              "trend": "-100",
              "difference": "0.979"
           },
           "3": {
              "trend": "-100",
              "difference": "0.995"
           },
           "volatility": "5.47 %",
           "3h_volatility": "2.02 %",
           "1h_volatility": "1.15 %",
           "15m_volatility": "0.32 %"
        },
        "ATOM-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.013"
           },
           "1": {
              "trend": "100",
              "difference": "1.004"
           },
           "2": {
              "trend": "-33.33",
              "difference": "1.010"
           },
           "3": {
              "trend": "100",
              "difference": "1.022"
           },
           "volatility": "5.23 %",
           "3h_volatility": "3.04 %",
           "1h_volatility": "1.85 %",
           "15m_volatility": "0.46 %"
        },
        "CGLD-BTC": {
           "0": {
              "trend": "33.33",
              "difference": "0.998"
           },
           "1": {
              "trend": "-100",
              "difference": "0.981"
           },
           "2": {
              "trend": "-100",
              "difference": "0.971"
           },
           "3": {
              "trend": "-100",
              "difference": "0.972"
           },
           "volatility": "5.97 %",
           "3h_volatility": "0.62 %",
           "1h_volatility": "0.33 %",
           "15m_volatility": "0.20 %"
        },
        "BCH-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.001"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.998"
           },
           "2": {
              "trend": "-66.66",
              "difference": "1.005"
           },
           "3": {
              "trend": "-33.33",
              "difference": "1.013"
           },
           "volatility": "4.87 %",
           "3h_volatility": "0.69 %",
           "1h_volatility": "0.20 %",
           "15m_volatility": "0.10 %"
        },
        "DASH-BTC": {
           "0": {
              "trend": "-100",
              "difference": "0.999"
           },
           "1": {
              "trend": "-100",
              "difference": "0.992"
           },
           "2": {
              "trend": "-100",
              "difference": "0.992"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.001"
           },
           "volatility": "2.52 %",
           "3h_volatility": "0.94 %",
           "1h_volatility": "0.51 %",
           "15m_volatility": "0.15 %"
        },
        "ETH-DAI": {
           "0": {
              "trend": "-66.66",
              "difference": "1.001"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.995"
           },
           "2": {
              "trend": "-66.66",
              "difference": "1.001"
           },
           "3": {
              "trend": "-33.33",
              "difference": "1.014"
           },
           "volatility": "4.04 %",
           "3h_volatility": "1.45 %",
           "1h_volatility": "0.29 %",
           "15m_volatility": "0.11 %"
        },
        "ETH-BTC": {
           "0": {
              "trend": "-33.33",
              "difference": "1.001"
           },
           "1": {
              "trend": "33.33",
              "difference": "0.997"
           },
           "2": {
              "trend": "-66.66",
              "difference": "1.005"
           },
           "3": {
              "trend": "100",
              "difference": "1.014"
           },
           "volatility": "3.48 %",
           "3h_volatility": "0.98 %",
           "1h_volatility": "0.27 %",
           "15m_volatility": "0.15 %"
        },
        "XRP-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.001"
           },
           "1": {
              "trend": "-100",
              "difference": "0.997"
           },
           "2": {
              "trend": "-100",
              "difference": "0.999"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.014"
           },
           "volatility": "1.75 %",
           "3h_volatility": "0.63 %",
           "1h_volatility": "0.40 %",
           "15m_volatility": "0.40 %"
        },
        "BAND-EUR": {
           "0": {
              "trend": "-33.33",
              "difference": "1.003"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.971"
           },
           "2": {
              "trend": "-100",
              "difference": "0.947"
           },
           "3": {
              "trend": "-100",
              "difference": "0.987"
           },
           "volatility": "11.66 %",
           "3h_volatility": "1.76 %",
           "1h_volatility": "0.56 %",
           "15m_volatility": "0.43 %"
        },
        "CGLD-EUR": {
           "0": {
              "trend": "100",
              "difference": "1.001"
           },
           "1": {
              "trend": "-100",
              "difference": "0.981"
           },
           "2": {
              "trend": "-100",
              "difference": "0.967"
           },
           "3": {
              "trend": "-100",
              "difference": "0.974"
           },
           "volatility": "6.67 %",
           "3h_volatility": "0.76 %",
           "1h_volatility": "0.59 %",
           "15m_volatility": "0.40 %"
        },
        "KNC-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.006"
           },
           "1": {
              "trend": "33.33",
              "difference": "0.977"
           },
           "2": {
              "trend": "-100",
              "difference": "0.974"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.017"
           },
           "volatility": "9.60 %",
           "3h_volatility": "1.40 %",
           "1h_volatility": "0.87 %",
           "15m_volatility": "0.04 %"
        },
        "COMP-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.005"
           },
           "1": {
              "trend": "-100",
              "difference": "0.980"
           },
           "2": {
              "trend": "-100",
              "difference": "0.978"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.001"
           },
           "volatility": "8.00 %",
           "3h_volatility": "1.82 %",
           "1h_volatility": "0.75 %",
           "15m_volatility": "0.10 %"
        },
        "ETH-USDC": {
           "0": {
              "trend": "100",
              "difference": "1.002"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.994"
           },
           "2": {
              "trend": "-66.66",
              "difference": "1.000"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.010"
           },
           "volatility": "4.61 %",
           "3h_volatility": "1.42 %",
           "1h_volatility": "0.37 %",
           "15m_volatility": "0.37 %"
        },
        "BTC-USDC": {
           "0": {
              "trend": "100",
              "difference": "1.002"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.996"
           },
           "2": {
              "trend": "-100",
              "difference": "0.996"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.000"
           },
           "volatility": "1.93 %",
           "3h_volatility": "0.80 %",
           "1h_volatility": "0.19 %",
           "15m_volatility": "0.09 %"
        },
        "EOS-EUR": {
           "0": {
              "trend": "100",
              "difference": "1.002"
           },
           "1": {
              "trend": "33.33",
              "difference": "0.994"
           },
           "2": {
              "trend": "-100",
              "difference": "0.998"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.008"
           },
           "volatility": "3.13 %",
           "3h_volatility": "1.20 %",
           "1h_volatility": "0.37 %",
           "15m_volatility": "0.27 %"
        },
        "LTC-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.000"
           },
           "1": {
              "trend": "-100",
              "difference": "0.992"
           },
           "2": {
              "trend": "-100",
              "difference": "0.994"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.006"
           },
           "volatility": "2.95 %",
           "3h_volatility": "1.57 %",
           "1h_volatility": "0.28 %",
           "15m_volatility": "0.14 %"
        },
        "CVC-USDC": {
           "0": {
              "trend": "100",
              "difference": "1.005"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.986"
           },
           "2": {
              "trend": "-100",
              "difference": "0.979"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.002"
           },
           "volatility": "5.42 %",
           "3h_volatility": "1.40 %",
           "1h_volatility": "1.32 %",
           "15m_volatility": "1.11 %"
        },
        "LTC-EUR": {
           "0": {
              "trend": "100",
              "difference": "1.002"
           },
           "1": {
              "trend": "33.33",
              "difference": "0.989"
           },
           "2": {
              "trend": "-100",
              "difference": "0.989"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.007"
           },
           "volatility": "4.33 %",
           "3h_volatility": "2.00 %",
           "1h_volatility": "0.26 %",
           "15m_volatility": "0.13 %"
        },
        "MKR-BTC": {
           "0": {
              "trend": "-66.66",
              "difference": "1.000"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.978"
           },
           "2": {
              "trend": "-100",
              "difference": "0.978"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.008"
           },
           "volatility": "6.08 %",
           "3h_volatility": "0.93 %",
           "1h_volatility": "0.26 %",
           "15m_volatility": "0.00 %"
        },
        "REP-BTC": {
           "0": {
              "trend": "33.33",
              "difference": "0.996"
           },
           "1": {
              "trend": "-100",
              "difference": "0.983"
           },
           "2": {
              "trend": "-100",
              "difference": "0.997"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.023"
           },
           "volatility": "12.57 %",
           "3h_volatility": "3.97 %",
           "1h_volatility": "1.23 %",
           "15m_volatility": "0.72 %"
        },
        "EOS-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.000"
           },
           "1": {
              "trend": "-100",
              "difference": "0.996"
           },
           "2": {
              "trend": "-66.66",
              "difference": "1.002"
           },
           "3": {
              "trend": "-33.33",
              "difference": "1.008"
           },
           "volatility": "2.98 %",
           "3h_volatility": "0.84 %",
           "1h_volatility": "0.42 %",
           "15m_volatility": "0.42 %"
        },
        "ALGO-EUR": {
           "0": {
              "trend": "100",
              "difference": "1.004"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.985"
           },
           "2": {
              "trend": "-100",
              "difference": "0.973"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.014"
           },
           "volatility": "10.84 %",
           "3h_volatility": "2.90 %",
           "1h_volatility": "1.13 %",
           "15m_volatility": "0.00 %"
        },
        "XTZ-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.006"
           },
           "1": {
              "trend": "-100",
              "difference": "0.991"
           },
           "2": {
              "trend": "-100",
              "difference": "0.985"
           },
           "3": {
              "trend": "-100",
              "difference": "0.995"
           },
           "volatility": "4.38 %",
           "3h_volatility": "1.46 %",
           "1h_volatility": "0.84 %",
           "15m_volatility": "0.13 %"
        },
        "NMR-BTC": {
           "0": {
              "trend": "-100",
              "difference": "0.997"
           },
           "1": {
              "trend": "-33.33",
              "difference": "1.002"
           },
           "2": {
              "trend": "66.66",
              "difference": "0.999"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.000"
           },
           "volatility": "6.25 %",
           "3h_volatility": "2.18 %",
           "1h_volatility": "1.02 %",
           "15m_volatility": "0.12 %"
        },
        "BCH-EUR": {
           "0": {
              "trend": "100",
              "difference": "1.003"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.995"
           },
           "2": {
              "trend": "-66.66",
              "difference": "1.001"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.014"
           },
           "volatility": "5.10 %",
           "3h_volatility": "1.33 %",
           "1h_volatility": "0.36 %",
           "15m_volatility": "0.11 %"
        },
        "LINK-EUR": {
           "0": {
              "trend": "-33.33",
              "difference": "1.011"
           },
           "1": {
              "trend": "100",
              "difference": "1.004"
           },
           "2": {
              "trend": "33.33",
              "difference": "0.991"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.015"
           },
           "volatility": "5.83 %",
           "3h_volatility": "3.51 %",
           "1h_volatility": "1.38 %",
           "15m_volatility": "0.23 %"
        },
        "BAND-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.003"
           },
           "1": {
              "trend": "-100",
              "difference": "0.972"
           },
           "2": {
              "trend": "-100",
              "difference": "0.949"
           },
           "3": {
              "trend": "-100",
              "difference": "0.985"
           },
           "volatility": "10.29 %",
           "3h_volatility": "1.80 %",
           "1h_volatility": "0.38 %",
           "15m_volatility": "0.38 %"
        },
        "OMG-EUR": {
           "0": {
              "trend": "100",
              "difference": "1.003"
           },
           "1": {
              "trend": "-66.66",
              "difference": "0.986"
           },
           "2": {
              "trend": "-100",
              "difference": "0.974"
           },
           "3": {
              "trend": "-100",
              "difference": "0.990"
           },
           "volatility": "6.03 %",
           "3h_volatility": "1.63 %",
           "1h_volatility": "0.68 %",
           "15m_volatility": "0.27 %"
        },
        "BAT-USDC": {
           "0": {
              "trend": "100",
              "difference": "1.006"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.982"
           },
           "2": {
              "trend": "-100",
              "difference": "0.976"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.000"
           },
           "volatility": "6.77 %",
           "3h_volatility": "2.06 %",
           "1h_volatility": "0.62 %",
           "15m_volatility": "0.21 %"
        },
        "ZEC-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.003"
           },
           "1": {
              "trend": "33.33",
              "difference": "0.987"
           },
           "2": {
              "trend": "-100",
              "difference": "0.992"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.003"
           },
           "volatility": "4.10 %",
           "3h_volatility": "1.08 %",
           "1h_volatility": "0.41 %",
           "15m_volatility": "0.00 %"
        },
        "XLM-EUR": {
           "0": {
              "trend": "-33.33",
              "difference": "1.004"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.992"
           },
           "2": {
              "trend": "-100",
              "difference": "0.983"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.010"
           },
           "volatility": "4.42 %",
           "3h_volatility": "1.80 %",
           "1h_volatility": "0.44 %",
           "15m_volatility": "0.28 %"
        },
        "ETC-BTC": {
           "0": {
              "trend": "-100",
              "difference": "0.999"
           },
           "1": {
              "trend": "-100",
              "difference": "0.995"
           },
           "2": {
              "trend": "66.66",
              "difference": "1.000"
           },
           "3": {
              "trend": "66.66",
              "difference": "0.997"
           },
           "volatility": "4.89 %",
           "3h_volatility": "2.63 %",
           "1h_volatility": "1.69 %",
           "15m_volatility": "0.38 %"
        },
        "NMR-EUR": {
           "0": {
              "trend": "0",
              "difference": "0.997"
           },
           "1": {
              "trend": "-100",
              "difference": "0.998"
           },
           "2": {
              "trend": "-100",
              "difference": "0.997"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.001"
           },
           "volatility": "4.87 %",
           "3h_volatility": "2.14 %",
           "1h_volatility": "0.36 %",
           "15m_volatility": "0.00 %"
        },
        "LOOM-USDC": {
           "0": {
              "trend": "100",
              "difference": "1.010"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.984"
           },
           "2": {
              "trend": "-100",
              "difference": "0.986"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.020"
           },
           "volatility": "6.86 %",
           "3h_volatility": "2.41 %",
           "1h_volatility": "2.28 %",
           "15m_volatility": "0.88 %"
        },
        "ZRX-BTC": {
           "0": {
              "trend": "-66.66",
              "difference": "1.001"
           },
           "1": {
              "trend": "33.33",
              "difference": "0.989"
           },
           "2": {
              "trend": "-100",
              "difference": "0.968"
           },
           "3": {
              "trend": "-100",
              "difference": "0.989"
           },
           "volatility": "7.37 %",
           "3h_volatility": "1.42 %",
           "1h_volatility": "0.39 %",
           "15m_volatility": "0.20 %"
        },
        "ETC-EUR": {
           "0": {
              "trend": "-66.66",
              "difference": "1.001"
           },
           "1": {
              "trend": "33.33",
              "difference": "0.992"
           },
           "2": {
              "trend": "-100",
              "difference": "0.992"
           },
           "3": {
              "trend": "-100",
              "difference": "0.997"
           },
           "volatility": "2.84 %",
           "3h_volatility": "2.52 %",
           "1h_volatility": "0.90 %",
           "15m_volatility": "0.24 %"
        },
        "LINK-ETH": {
           "0": {
              "trend": "-33.33",
              "difference": "1.008"
           },
           "1": {
              "trend": "100",
              "difference": "1.011"
           },
           "2": {
              "trend": "66.66",
              "difference": "0.992"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.002"
           },
           "volatility": "5.99 %",
           "3h_volatility": "2.85 %",
           "1h_volatility": "1.73 %",
           "15m_volatility": "0.22 %"
        },
        "DNT-USDC": {
           "0": {
              "trend": "0",
              "difference": "0.990"
           },
           "1": {
              "trend": "-100",
              "difference": "0.986"
           },
           "2": {
              "trend": "-100",
              "difference": "0.988"
           },
           "3": {
              "trend": "-100",
              "difference": "0.999"
           },
           "volatility": "7.07 %",
           "3h_volatility": "1.86 %",
           "1h_volatility": "1.76 %",
           "15m_volatility": "0.00 %"
        },
        "GNT-USDC": {
           "0": {
              "trend": "-66.66",
              "difference": "1.020"
           },
           "1": {
              "trend": "100",
              "difference": "1.018"
           },
           "2": {
              "trend": "-100",
              "difference": "0.992"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.035"
           },
           "volatility": "9.16 %",
           "3h_volatility": "8.52 %",
           "1h_volatility": "3.79 %",
           "15m_volatility": "0.10 %"
        },
        "BTC-EUR": {
           "0": {
              "trend": "100",
              "difference": "1.002"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.997"
           },
           "2": {
              "trend": "-100",
              "difference": "0.995"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.001"
           },
           "volatility": "1.86 %",
           "3h_volatility": "0.67 %",
           "1h_volatility": "0.24 %",
           "15m_volatility": "0.10 %"
        },
        "MANA-USDC": {
           "0": {
              "trend": "100",
              "difference": "1.010"
           },
           "1": {
              "trend": "-66.66",
              "difference": "0.981"
           },
           "2": {
              "trend": "-100",
              "difference": "0.994"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.033"
           },
           "volatility": "7.56 %",
           "3h_volatility": "2.43 %",
           "1h_volatility": "1.69 %",
           "15m_volatility": "0.46 %"
        },
        "UMA-EUR": {
           "0": {
              "trend": "100",
              "difference": "1.002"
           },
           "1": {
              "trend": "-100",
              "difference": "0.968"
           },
           "2": {
              "trend": "-100",
              "difference": "0.973"
           },
           "3": {
              "trend": "-100",
              "difference": "0.992"
           },
           "volatility": "13.30 %",
           "3h_volatility": "4.10 %",
           "1h_volatility": "2.33 %",
           "15m_volatility": "0.41 %"
        },
        "ETH-EUR": {
           "0": {
              "trend": "100",
              "difference": "1.003"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.993"
           },
           "2": {
              "trend": "-100",
              "difference": "0.999"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.013"
           },
           "volatility": "4.39 %",
           "3h_volatility": "1.35 %",
           "1h_volatility": "0.41 %",
           "15m_volatility": "0.06 %"
        },
        "XRP-EUR": {
           "0": {
              "trend": "100",
              "difference": "1.003"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.994"
           },
           "2": {
              "trend": "-100",
              "difference": "0.994"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.015"
           },
           "volatility": "2.94 %",
           "3h_volatility": "1.13 %",
           "1h_volatility": "0.54 %",
           "15m_volatility": "0.29 %"
        },
        "OMG-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.002"
           },
           "1": {
              "trend": "-100",
              "difference": "0.990"
           },
           "2": {
              "trend": "-100",
              "difference": "0.977"
           },
           "3": {
              "trend": "-100",
              "difference": "0.987"
           },
           "volatility": "4.75 %",
           "3h_volatility": "1.32 %",
           "1h_volatility": "0.45 %",
           "15m_volatility": "0.15 %"
        },
        "UMA-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.001"
           },
           "1": {
              "trend": "-100",
              "difference": "0.970"
           },
           "2": {
              "trend": "-100",
              "difference": "0.975"
           },
           "3": {
              "trend": "-100",
              "difference": "0.986"
           },
           "volatility": "15.28 %",
           "3h_volatility": "4.13 %",
           "1h_volatility": "1.36 %",
           "15m_volatility": "0.82 %"
        },
        "XLM-BTC": {
           "0": {
              "trend": "100",
              "difference": "1.003"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.994"
           },
           "2": {
              "trend": "-100",
              "difference": "0.989"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.010"
           },
           "volatility": "2.98 %",
           "3h_volatility": "1.34 %",
           "1h_volatility": "0.29 %",
           "15m_volatility": "0.15 %"
        },
        "BAT-ETH": {
           "0": {
              "trend": "-33.33",
              "difference": "1.002"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.987"
           },
           "2": {
              "trend": "-100",
              "difference": "0.978"
           },
           "3": {
              "trend": "-100",
              "difference": "0.987"
           },
           "volatility": "4.33 %",
           "3h_volatility": "0.55 %",
           "1h_volatility": "0.47 %",
           "15m_volatility": "0.42 %"
        },
        "ZRX-EUR": {
           "0": {
              "trend": "100",
              "difference": "1.003"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.986"
           },
           "2": {
              "trend": "-100",
              "difference": "0.962"
           },
           "3": {
              "trend": "-100",
              "difference": "0.989"
           },
           "volatility": "8.24 %",
           "3h_volatility": "1.56 %",
           "1h_volatility": "0.38 %",
           "15m_volatility": "0.16 %"
        },
        "DAI-USDC": {
           "0": {
              "trend": "-66.66",
              "difference": "1.000"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.999"
           },
           "2": {
              "trend": "-100",
              "difference": "1.000"
           },
           "3": {
              "trend": "66.66",
              "difference": "1.000"
           },
           "volatility": "0.54 %",
           "3h_volatility": "0.13 %",
           "1h_volatility": "0.10 %",
           "15m_volatility": "0.08 %"
        },
        "ZEC-USDC": {
           "0": {
              "trend": "100",
              "difference": "1.005"
           },
           "1": {
              "trend": "66.66",
              "difference": "0.984"
           },
           "2": {
              "trend": "-100",
              "difference": "0.987"
           },
           "3": {
              "trend": "-66.66",
              "difference": "1.002"
           },
           "volatility": "5.99 %",
           "3h_volatility": "1.94 %",
           "1h_volatility": "0.64 %",
           "15m_volatility": "0.27 %"
        }
     }
    var array = []

    for (var a in data) {
        data[a]['id'] = a
        array.push(data[a])
    }

    array.sort(function (a, b) {
        return parseInt(b['volatility']) - parseInt(a['volatility']);
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
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
        "CGLD-BTC": {
            "0": {
                "trend": "100",
                "difference": "1.003"
            },
            "1": {
                "trend": "-100",
                "difference": "0.990"
            },
            "2": {
                "trend": "-100",
                "difference": "0.995"
            },
            "3": {
                "trend": "-100",
                "difference": "0.996"
            },
            "volatility": "7.59 %",
            "3h_volatility": "3.82 %",
            "1h_volatility": "0.89 %",
            "15m_volatility": "0.09 %"
        },
        "UMA-EUR": {
            "0": {
                "trend": "100",
                "difference": "1.007"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.999"
            },
            "2": {
                "trend": "-33.33",
                "difference": "1.000"
            },
            "3": {
                "trend": "-66.66",
                "difference": "1.023"
            },
            "volatility": "5.31 %",
            "3h_volatility": "2.06 %",
            "1h_volatility": "1.14 %",
            "15m_volatility": "0.10 %"
        },
        "GNT-USDC": {
            "0": {
                "trend": "-66.66",
                "difference": "1.001"
            },
            "1": {
                "trend": "-66.66",
                "difference": "1.023"
            },
            "2": {
                "trend": "100",
                "difference": "1.104"
            },
            "3": {
                "trend": "100",
                "difference": "1.114"
            },
            "volatility": "12.61 %",
            "3h_volatility": "5.49 %",
            "1h_volatility": "1.79 %",
            "15m_volatility": "0.00 %"
        },
        "XTZ-BTC": {
            "0": {
                "trend": "-100",
                "difference": "0.995"
            },
            "1": {
                "trend": "-66.66",
                "difference": "0.992"
            },
            "2": {
                "trend": "-100",
                "difference": "0.997"
            },
            "3": {
                "trend": "-66.66",
                "difference": "1.014"
            },
            "volatility": "5.66 %",
            "3h_volatility": "1.21 %",
            "1h_volatility": "1.19 %",
            "15m_volatility": "0.63 %"
        },
        "BAT-ETH": {
            "0": {
                "trend": "66.66",
                "difference": "0.997"
            },
            "1": {
                "trend": "-100",
                "difference": "0.992"
            },
            "2": {
                "trend": "66.66",
                "difference": "1.009"
            },
            "3": {
                "trend": "-33.33",
                "difference": "1.007"
            },
            "volatility": "2.97 %",
            "3h_volatility": "1.79 %",
            "1h_volatility": "0.32 %",
            "15m_volatility": "0.24 %"
        },
        "BCH-EUR": {
            "0": {
                "trend": "100",
                "difference": "1.003"
            },
            "1": {
                "trend": "100",
                "difference": "1.000"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.002"
            },
            "3": {
                "trend": "-33.33",
                "difference": "1.009"
            },
            "volatility": "2.66 %",
            "3h_volatility": "1.17 %",
            "1h_volatility": "0.48 %",
            "15m_volatility": "0.00 %"
        },
        "ZRX-EUR": {
            "0": {
                "trend": "100",
                "difference": "1.003"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.998"
            },
            "2": {
                "trend": "-33.33",
                "difference": "1.037"
            },
            "3": {
                "trend": "100",
                "difference": "1.077"
            },
            "volatility": "4.39 %",
            "3h_volatility": "2.24 %",
            "1h_volatility": "0.57 %",
            "15m_volatility": "0.45 %"
        },
        "ETH-BTC": {
            "0": {
                "trend": "-100",
                "difference": "0.999"
            },
            "1": {
                "trend": "100",
                "difference": "1.005"
            },
            "2": {
                "trend": "-33.33",
                "difference": "1.009"
            },
            "3": {
                "trend": "100",
                "difference": "1.015"
            },
            "volatility": "2.68 %",
            "3h_volatility": "1.38 %",
            "1h_volatility": "0.61 %",
            "15m_volatility": "0.37 %"
        },
        "NMR-BTC": {
            "0": {
                "trend": "-100",
                "difference": "0.997"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.997"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.005"
            },
            "3": {
                "trend": "100",
                "difference": "1.011"
            },
            "volatility": "4.20 %",
            "3h_volatility": "1.61 %",
            "1h_volatility": "1.03 %",
            "15m_volatility": "0.31 %"
        },
        "ETC-EUR": {
            "0": {
                "trend": "-66.66",
                "difference": "1.003"
            },
            "1": {
                "trend": "66.66",
                "difference": "1.000"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.000"
            },
            "3": {
                "trend": "100",
                "difference": "1.005"
            },
            "volatility": "2.28 %",
            "3h_volatility": "1.60 %",
            "1h_volatility": "1.01 %",
            "15m_volatility": "0.00 %"
        },
        "DNT-USDC": {
            "0": {
                "trend": "-66.66",
                "difference": "1.001"
            },
            "1": {
                "trend": "33.33",
                "difference": "0.997"
            },
            "2": {
                "trend": "-33.33",
                "difference": "1.007"
            },
            "3": {
                "trend": "100",
                "difference": "1.028"
            },
            "volatility": "6.27 %",
            "3h_volatility": "0.90 %",
            "1h_volatility": "0.50 %",
            "15m_volatility": "0.49 %"
        },
        "ALGO-EUR": {
            "0": {
                "trend": "100",
                "difference": "1.012"
            },
            "1": {
                "trend": "100",
                "difference": "1.007"
            },
            "2": {
                "trend": "-33.33",
                "difference": "1.050"
            },
            "3": {
                "trend": "100",
                "difference": "1.093"
            },
            "volatility": "10.40 %",
            "3h_volatility": "3.95 %",
            "1h_volatility": "1.88 %",
            "15m_volatility": "0.46 %"
        },
        "REP-BTC": {
            "0": {
                "trend": "66.66",
                "difference": "0.986"
            },
            "1": {
                "trend": "-33.33",
                "difference": "1.052"
            },
            "2": {
                "trend": "100",
                "difference": "1.064"
            },
            "3": {
                "trend": "100",
                "difference": "1.055"
            },
            "volatility": "15.75 %",
            "3h_volatility": "11.77 %",
            "1h_volatility": "2.86 %",
            "15m_volatility": "0.14 %"
        },
        "LINK-EUR": {
            "0": {
                "trend": "-100",
                "difference": "0.998"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.986"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.030"
            },
            "3": {
                "trend": "100",
                "difference": "1.110"
            },
            "volatility": "11.73 %",
            "3h_volatility": "4.09 %",
            "1h_volatility": "2.43 %",
            "15m_volatility": "0.98 %"
        },
        "XRP-EUR": {
            "0": {
                "trend": "-66.66",
                "difference": "1.001"
            },
            "1": {
                "trend": "100",
                "difference": "1.003"
            },
            "2": {
                "trend": "-33.33",
                "difference": "1.022"
            },
            "3": {
                "trend": "100",
                "difference": "1.041"
            },
            "volatility": "3.12 %",
            "3h_volatility": "1.80 %",
            "1h_volatility": "0.68 %",
            "15m_volatility": "0.14 %"
        },
        "BAND-EUR": {
            "0": {
                "trend": "-66.66",
                "difference": "1.006"
            },
            "1": {
                "trend": "33.33",
                "difference": "0.989"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.043"
            },
            "3": {
                "trend": "100",
                "difference": "1.107"
            },
            "volatility": "7.79 %",
            "3h_volatility": "3.87 %",
            "1h_volatility": "1.89 %",
            "15m_volatility": "0.85 %"
        },
        "NMR-EUR": {
            "0": {
                "trend": "-100",
                "difference": "0.998"
            },
            "1": {
                "trend": "100",
                "difference": "1.002"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.010"
            },
            "3": {
                "trend": "100",
                "difference": "1.026"
            },
            "volatility": "4.60 %",
            "3h_volatility": "2.00 %",
            "1h_volatility": "1.04 %",
            "15m_volatility": "0.00 %"
        },
        "XLM-BTC": {
            "0": {
                "trend": "-100",
                "difference": "0.997"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.997"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.023"
            },
            "3": {
                "trend": "-33.33",
                "difference": "1.030"
            },
            "volatility": "4.56 %",
            "3h_volatility": "1.32 %",
            "1h_volatility": "0.73 %",
            "15m_volatility": "0.29 %"
        },
        "XTZ-EUR": {
            "0": {
                "trend": "-100",
                "difference": "0.996"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.994"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.003"
            },
            "3": {
                "trend": "-33.33",
                "difference": "1.029"
            },
            "volatility": "6.18 %",
            "3h_volatility": "1.58 %",
            "1h_volatility": "1.15 %",
            "15m_volatility": "0.36 %"
        },
        "ETH-DAI": {
            "0": {
                "trend": "-66.66",
                "difference": "1.000"
            },
            "1": {
                "trend": "100",
                "difference": "1.007"
            },
            "2": {
                "trend": "100",
                "difference": "1.013"
            },
            "3": {
                "trend": "100",
                "difference": "1.029"
            },
            "volatility": "3.32 %",
            "3h_volatility": "1.66 %",
            "1h_volatility": "0.42 %",
            "15m_volatility": "0.42 %"
        },
        "LOOM-USDC": {
            "0": {
                "trend": "100",
                "difference": "1.001"
            },
            "1": {
                "trend": "-66.66",
                "difference": "1.006"
            },
            "2": {
                "trend": "100",
                "difference": "1.045"
            },
            "3": {
                "trend": "100",
                "difference": "1.068"
            },
            "volatility": "5.30 %",
            "3h_volatility": "3.26 %",
            "1h_volatility": "1.52 %",
            "15m_volatility": "1.15 %"
        },
        "MKR-BTC": {
            "0": {
                "trend": "-33.33",
                "difference": "1.004"
            },
            "1": {
                "trend": "100",
                "difference": "1.010"
            },
            "2": {
                "trend": "100",
                "difference": "1.035"
            },
            "3": {
                "trend": "100",
                "difference": "1.050"
            },
            "volatility": "3.38 %",
            "3h_volatility": "2.22 %",
            "1h_volatility": "0.90 %",
            "15m_volatility": "0.04 %"
        },
        "EOS-EUR": {
            "0": {
                "trend": "-100",
                "difference": "1.000"
            },
            "1": {
                "trend": "100",
                "difference": "1.002"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.007"
            },
            "3": {
                "trend": "100",
                "difference": "1.016"
            },
            "volatility": "2.21 %",
            "3h_volatility": "1.20 %",
            "1h_volatility": "0.32 %",
            "15m_volatility": "0.09 %"
        },
        "ETC-BTC": {
            "0": {
                "trend": "100",
                "difference": "1.005"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.998"
            },
            "2": {
                "trend": "-100",
                "difference": "0.993"
            },
            "3": {
                "trend": "-100",
                "difference": "0.988"
            },
            "volatility": "4.70 %",
            "3h_volatility": "1.69 %",
            "1h_volatility": "0.74 %",
            "15m_volatility": "0.19 %"
        },
        "UMA-BTC": {
            "0": {
                "trend": "100",
                "difference": "1.007"
            },
            "1": {
                "trend": "66.66",
                "difference": "1.000"
            },
            "2": {
                "trend": "33.33",
                "difference": "0.993"
            },
            "3": {
                "trend": "-66.66",
                "difference": "1.009"
            },
            "volatility": "5.76 %",
            "3h_volatility": "3.19 %",
            "1h_volatility": "1.54 %",
            "15m_volatility": "0.44 %"
        },
        "LTC-EUR": {
            "0": {
                "trend": "-100",
                "difference": "1.000"
            },
            "1": {
                "trend": "100",
                "difference": "1.003"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.014"
            },
            "3": {
                "trend": "-33.33",
                "difference": "1.024"
            },
            "volatility": "2.91 %",
            "3h_volatility": "1.77 %",
            "1h_volatility": "0.63 %",
            "15m_volatility": "0.25 %"
        },
        "ETH-EUR": {
            "0": {
                "trend": "-100",
                "difference": "0.998"
            },
            "1": {
                "trend": "100",
                "difference": "1.007"
            },
            "2": {
                "trend": "100",
                "difference": "1.014"
            },
            "3": {
                "trend": "100",
                "difference": "1.031"
            },
            "volatility": "3.37 %",
            "3h_volatility": "2.04 %",
            "1h_volatility": "0.99 %",
            "15m_volatility": "0.67 %"
        },
        "BAT-USDC": {
            "0": {
                "trend": "-100",
                "difference": "0.997"
            },
            "1": {
                "trend": "-100",
                "difference": "0.998"
            },
            "2": {
                "trend": "-33.33",
                "difference": "1.021"
            },
            "3": {
                "trend": "100",
                "difference": "1.034"
            },
            "volatility": "3.36 %",
            "3h_volatility": "1.43 %",
            "1h_volatility": "0.66 %",
            "15m_volatility": "0.28 %"
        },
        "LTC-BTC": {
            "0": {
                "trend": "-100",
                "difference": "1.000"
            },
            "1": {
                "trend": "100",
                "difference": "1.000"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.009"
            },
            "3": {
                "trend": "-33.33",
                "difference": "1.009"
            },
            "volatility": "2.39 %",
            "3h_volatility": "1.28 %",
            "1h_volatility": "0.44 %",
            "15m_volatility": "0.23 %"
        },
        "OMG-BTC": {
            "0": {
                "trend": "100",
                "difference": "1.004"
            },
            "1": {
                "trend": "33.33",
                "difference": "0.990"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.006"
            },
            "3": {
                "trend": "-33.33",
                "difference": "1.019"
            },
            "volatility": "5.73 %",
            "3h_volatility": "1.74 %",
            "1h_volatility": "1.24 %",
            "15m_volatility": "0.76 %"
        },
        "BAND-BTC": {
            "0": {
                "trend": "100",
                "difference": "1.007"
            },
            "1": {
                "trend": "33.33",
                "difference": "0.986"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.035"
            },
            "3": {
                "trend": "100",
                "difference": "1.090"
            },
            "volatility": "6.73 %",
            "3h_volatility": "2.42 %",
            "1h_volatility": "1.59 %",
            "15m_volatility": "0.24 %"
        },
        "ETH-USDC": {
            "0": {
                "trend": "-100",
                "difference": "0.999"
            },
            "1": {
                "trend": "100",
                "difference": "1.006"
            },
            "2": {
                "trend": "100",
                "difference": "1.012"
            },
            "3": {
                "trend": "100",
                "difference": "1.027"
            },
            "volatility": "3.55 %",
            "3h_volatility": "1.94 %",
            "1h_volatility": "0.97 %",
            "15m_volatility": "0.60 %"
        },
        "KNC-BTC": {
            "0": {
                "trend": "66.66",
                "difference": "0.994"
            },
            "1": {
                "trend": "-66.66",
                "difference": "1.023"
            },
            "2": {
                "trend": "100",
                "difference": "1.072"
            },
            "3": {
                "trend": "100",
                "difference": "1.077"
            },
            "volatility": "8.97 %",
            "3h_volatility": "4.91 %",
            "1h_volatility": "0.89 %",
            "15m_volatility": "0.58 %"
        },
        "ZRX-BTC": {
            "0": {
                "trend": "100",
                "difference": "1.005"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.997"
            },
            "2": {
                "trend": "-33.33",
                "difference": "1.031"
            },
            "3": {
                "trend": "100",
                "difference": "1.060"
            },
            "volatility": "4.27 %",
            "3h_volatility": "2.05 %",
            "1h_volatility": "0.75 %",
            "15m_volatility": "0.32 %"
        },
        "LINK-ETH": {
            "0": {
                "trend": "-100",
                "difference": "0.999"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.978"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.017"
            },
            "3": {
                "trend": "100",
                "difference": "1.082"
            },
            "volatility": "8.51 %",
            "3h_volatility": "2.43 %",
            "1h_volatility": "1.58 %",
            "15m_volatility": "0.57 %"
        },
        "BTC-EUR": {
            "0": {
                "trend": "-100",
                "difference": "0.999"
            },
            "1": {
                "trend": "100",
                "difference": "1.002"
            },
            "2": {
                "trend": "-33.33",
                "difference": "1.005"
            },
            "3": {
                "trend": "100",
                "difference": "1.016"
            },
            "volatility": "1.53 %",
            "3h_volatility": "0.52 %",
            "1h_volatility": "0.41 %",
            "15m_volatility": "0.25 %"
        },
        "OMG-EUR": {
            "0": {
                "trend": "100",
                "difference": "1.003"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.994"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.011"
            },
            "3": {
                "trend": "-33.33",
                "difference": "1.034"
            },
            "volatility": "6.19 %",
            "3h_volatility": "1.88 %",
            "1h_volatility": "0.83 %",
            "15m_volatility": "0.67 %"
        },
        "XLM-EUR": {
            "0": {
                "trend": "-100",
                "difference": "0.998"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.998"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.027"
            },
            "3": {
                "trend": "100",
                "difference": "1.045"
            },
            "volatility": "5.31 %",
            "3h_volatility": "1.80 %",
            "1h_volatility": "0.70 %",
            "15m_volatility": "0.31 %"
        },
        "BCH-BTC": {
            "0": {
                "trend": "100",
                "difference": "1.002"
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
                "difference": "0.993"
            },
            "volatility": "2.51 %",
            "3h_volatility": "0.85 %",
            "1h_volatility": "0.40 %",
            "15m_volatility": "0.10 %"
        },
        "ZEC-USDC": {
            "0": {
                "trend": "100",
                "difference": "1.003"
            },
            "1": {
                "trend": "100",
                "difference": "1.001"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.001"
            },
            "3": {
                "trend": "-33.33",
                "difference": "1.011"
            },
            "volatility": "3.57 %",
            "3h_volatility": "1.79 %",
            "1h_volatility": "0.70 %",
            "15m_volatility": "0.24 %"
        },
        "DASH-BTC": {
            "0": {
                "trend": "100",
                "difference": "1.001"
            },
            "1": {
                "trend": "100",
                "difference": "1.000"
            },
            "2": {
                "trend": "-33.33",
                "difference": "1.011"
            },
            "3": {
                "trend": "100",
                "difference": "1.010"
            },
            "volatility": "1.80 %",
            "3h_volatility": "0.74 %",
            "1h_volatility": "0.49 %",
            "15m_volatility": "0.38 %"
        },
        "COMP-BTC": {
            "0": {
                "trend": "100",
                "difference": "1.007"
            },
            "1": {
                "trend": "66.66",
                "difference": "1.010"
            },
            "2": {
                "trend": "100",
                "difference": "1.037"
            },
            "3": {
                "trend": "100",
                "difference": "1.031"
            },
            "volatility": "7.89 %",
            "3h_volatility": "2.48 %",
            "1h_volatility": "1.63 %",
            "15m_volatility": "0.83 %"
        },
        "ATOM-BTC": {
            "0": {
                "trend": "100",
                "difference": "1.004"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.995"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.009"
            },
            "3": {
                "trend": "100",
                "difference": "1.046"
            },
            "volatility": "7.66 %",
            "3h_volatility": "2.63 %",
            "1h_volatility": "0.70 %",
            "15m_volatility": "0.23 %"
        },
        "DAI-USDC": {
            "0": {
                "trend": "-33.33",
                "difference": "1.000"
            },
            "1": {
                "trend": "100",
                "difference": "1.001"
            },
            "2": {
                "trend": "-100",
                "difference": "1.000"
            },
            "3": {
                "trend": "-100",
                "difference": "0.999"
            },
            "volatility": "0.63 %",
            "3h_volatility": "0.25 %",
            "1h_volatility": "0.13 %",
            "15m_volatility": "0.13 %"
        },
        "MANA-USDC": {
            "0": {
                "trend": "100",
                "difference": "1.010"
            },
            "1": {
                "trend": "100",
                "difference": "1.025"
            },
            "2": {
                "trend": "100",
                "difference": "1.056"
            },
            "3": {
                "trend": "100",
                "difference": "1.078"
            },
            "volatility": "9.93 %",
            "3h_volatility": "2.43 %",
            "1h_volatility": "0.74 %",
            "15m_volatility": "0.00 %"
        },
        "EOS-BTC": {
            "0": {
                "trend": "0",
                "difference": "1.000"
            },
            "1": {
                "trend": "100",
                "difference": "1.000"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.003"
            },
            "3": {
                "trend": "-33.33",
                "difference": "1.001"
            },
            "volatility": "2.55 %",
            "3h_volatility": "1.28 %",
            "1h_volatility": "0.00 %",
            "15m_volatility": "0.00 %"
        },
        "XRP-BTC": {
            "0": {
                "trend": "-66.66",
                "difference": "1.002"
            },
            "1": {
                "trend": "100",
                "difference": "1.001"
            },
            "2": {
                "trend": "-66.66",
                "difference": "1.017"
            },
            "3": {
                "trend": "-33.33",
                "difference": "1.025"
            },
            "volatility": "12.60 %",
            "3h_volatility": "1.17 %",
            "1h_volatility": "0.53 %",
            "15m_volatility": "0.22 %"
        },
        "BTC-USDC": {
            "0": {
                "trend": "-100",
                "difference": "1.000"
            },
            "1": {
                "trend": "100",
                "difference": "1.002"
            },
            "2": {
                "trend": "-33.33",
                "difference": "1.003"
            },
            "3": {
                "trend": "100",
                "difference": "1.014"
            },
            "volatility": "1.71 %",
            "3h_volatility": "0.58 %",
            "1h_volatility": "0.34 %",
            "15m_volatility": "0.20 %"
        },
        "CVC-USDC": {
            "0": {
                "trend": "100",
                "difference": "1.002"
            },
            "1": {
                "trend": "100",
                "difference": "1.002"
            },
            "2": {
                "trend": "-33.33",
                "difference": "1.023"
            },
            "3": {
                "trend": "100",
                "difference": "1.043"
            },
            "volatility": "7.52 %",
            "3h_volatility": "1.53 %",
            "1h_volatility": "1.38 %",
            "15m_volatility": "0.83 %"
        },
        "ZEC-BTC": {
            "0": {
                "trend": "100",
                "difference": "1.004"
            },
            "1": {
                "trend": "66.66",
                "difference": "0.998"
            },
            "2": {
                "trend": "-100",
                "difference": "0.998"
            },
            "3": {
                "trend": "-66.66",
                "difference": "0.998"
            },
            "volatility": "2.64 %",
            "3h_volatility": "1.14 %",
            "1h_volatility": "0.77 %",
            "15m_volatility": "0.00 %"
        },
        "CGLD-EUR": {
            "0": {
                "trend": "100",
                "difference": "1.002"
            },
            "1": {
                "trend": "-100",
                "difference": "0.993"
            },
            "2": {
                "trend": "-100",
                "difference": "0.999"
            },
            "3": {
                "trend": "-66.66",
                "difference": "1.011"
            },
            "volatility": "7.42 %",
            "3h_volatility": "3.38 %",
            "1h_volatility": "0.67 %",
            "15m_volatility": "0.20 %"
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
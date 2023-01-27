(this["webpackJsonptalha-food-app"] =
  this["webpackJsonptalha-food-app"] || []).push([
  [0],
  {
    11: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l(1),
        i = l.n(n),
        a = l(3),
        r = l.n(a),
        o = (l(8), l(9), l(0)),
        s = function (e) {
          var t = e.logo;
          return Object(o.jsxs)("div", {
            className: "flex flex-row items-center justify-between h-28",
            children: [
              Object(o.jsx)("a", {
                href: "/",
                className: "pl-7 logo lg:ml-10",
                children: Object(o.jsx)("img", {
                  height: "65%",
                  width: "65%",
                  src: t,
                  alt: "logo",
                }),
              }),
              window.screen.availWidth < 500
                ? Object(o.jsx)("div", {
                    className: "hamburger pr-7",
                    children: Object(o.jsx)("svg", {
                      width: "20",
                      height: "16",
                      viewBox: "0 0 20 16",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: Object(o.jsx)("path", {
                        opacity: "0.6",
                        d: "M0.124103 1.33333C0.124103 0.596954 0.721057 0 1.45744 0H18.6667C19.403 0 20 0.596954 20 1.33333C20 2.06971 19.403 2.66667 18.6667 2.66667H1.45744C0.721056 2.66667 0.124103 2.06971 0.124103 1.33333ZM0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667H18.6667C19.403 6.66667 20 7.26362 20 8C20 8.73638 19.403 9.33333 18.6667 9.33333H1.33333C0.596955 9.33333 0 8.73638 0 8ZM0 14.6667C0 13.9303 0.596953 13.3333 1.33333 13.3333H18.6667C19.403 13.3333 20 13.9303 20 14.6667C20 15.403 19.403 16 18.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667Z",
                        fill: "#737373",
                      }),
                    }),
                  })
                : Object(o.jsxs)("div", {
                    className: "flex justify-around w-2/5 mr-12",
                    children: [
                      Object(o.jsx)("a", {
                        href: "#home",
                        className:
                          "text-lg font-semibold text-blue-800 transition-all hover:text-orange-500",
                        children: "Home",
                      }),
                      Object(o.jsx)("a", {
                        href: "#product",
                        className:
                          "text-lg font-semibold text-blue-800 transition-all hover:text-orange-500",
                        children: "Product",
                      }),
                      Object(o.jsx)("a", {
                        href: "#faq",
                        className:
                          "text-lg font-semibold text-blue-800 transition-all hover:text-orange-500",
                        children: "Faq",
                      }),
                      Object(o.jsx)("a", {
                        href: "#contact",
                        className:
                          "text-lg font-semibold text-blue-800 transition-all hover:text-orange-500",
                        children: "Contact",
                      }),
                    ],
                  }),
            ],
          });
        },
        c = l.p + "static/media/Rectangle_1.461c72a9.png",
        g = l.p + "static/media/Rectangle_2.70fd208a.png",
        x = function (e) {
          var t = e.appType,
            l = e.tagLine,
            n = e.description,
            i = e.mainActionText,
            a = e.extraActionText;
          return Object(o.jsxs)("div", {
            children: [
              Object(o.jsxs)("div", {
                style:
                  window.screen.availWidth > 500
                    ? { textShadow: "0px 1px 5px black" }
                    : null,
                className:
                  "flex flex-col items-center justify-start font-sans min-h-96 bg-gray-50 lg:pt-10 lg:pb-20 lg:bg-hero lg:bg-cover",
                children: [
                  Object(o.jsx)("div", {
                    children: Object(o.jsx)("p", {
                      className:
                        "p-3 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300",
                      children: t,
                    }),
                  }),
                  Object(o.jsx)("div", {
                    children: Object(o.jsx)("p", {
                      className:
                        "p-2 text-4xl font-bold text-center text-blue-800 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100",
                      children: l,
                    }),
                  }),
                  Object(o.jsx)("div", {
                    children: Object(o.jsx)("p", {
                      className:
                        "p-4 pt-6 font-sans text-2xl leading-10 text-center text-gray-500 lg:text-gray-200",
                      children: n,
                    }),
                  }),
                  Object(o.jsxs)("div", {
                    className:
                      "relative z-50 flex flex-col items-center justify-between h-48 pt-7 lg:pt-0 lg:flex-row lg:justify-around lg:w-5/12",
                    children: [
                      Object(o.jsx)("button", {
                        className:
                          "pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-orange-600 rounded-full shadow-2xl lg:ml-5 hover:bg-orange-700 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium ",
                        children: i,
                      }),
                      Object(o.jsx)("button", {
                        className:
                          "pt-3 pb-3 text-2xl font-semibold text-center text-orange-500 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-orange-500 hover:bg-gray-50 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-orange-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white",
                        children: a,
                      }),
                    ],
                  }),
                ],
              }),
              Object(o.jsxs)("div", {
                className:
                  "z-0 flex flex-row items-start justify-center w-screen h-screen pt-20 -mb-16 bg-gray-50 lg:bg-white lg:mb-20 lg:w-full lg:h-96 lg:pt-0",
                children: [
                  Object(o.jsx)("img", {
                    className:
                      "absolute left-0 lg:left-auto lg:-mt64 lg:-ml-1 lg:-w650",
                    src: c,
                    alt: "",
                  }),
                  Object(o.jsx)("img", {
                    className:
                      "absolute right-0 lg:right-auto lg:ml-24 lg:-mt-16 lg:-w650",
                    src: g,
                    alt: "",
                  }),
                ],
              }),
            ],
          });
        },
        d = function (e) {
          var t = e.title,
            l = e.heading,
            n = e.description,
            i = e.img,
            a = e.alternate;
          return Object(o.jsxs)("div", {
            className: a
              ? "lg:items-center lg:flex lg:flex-row lg:justify-end"
              : "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center",
            children: [
              Object(o.jsxs)("div", {
                className:
                  "lg:w-2/6 lg:-ml-20 lg:-mt-10 lg:flex lg:flex-col lg:justify-center lg:items-start",
                children: [
                  Object(o.jsx)("p", {
                    className:
                      "pb-5 text-2xl font-semibold text-center text-orange-400 lg:pb-0 lg:-mb-3 lg:text-lg lg:font-bold lg:text-left",
                    children: t,
                  }),
                  Object(o.jsx)("p", {
                    className:
                      "p-5 text-4xl font-semibold leading-relaxed text-center text-blue-800 lg:pb-4 lg:text-3xl lg:pl-0 lg:font-bold lg:text-left",
                    children: l,
                  }),
                  Object(o.jsx)("p", {
                    className:
                      "p-5 pb-0 pl-10 pr-10 text-2xl leading-10 text-center text-gray-400 lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0",
                    children: n,
                  }),
                ],
              }),
              Object(o.jsx)("div", {
                className: "ml-10 lg:ml-0 lg:w-3/6",
                children: Object(o.jsx)("img", {
                  className: " lg:-mt-24 lg:-mb-20",
                  src: i,
                  alt: "",
                }),
              }),
            ],
          });
        },
        p = function (e) {
          var t = e.actionText,
            l = e.description,
            n = e.mainActionText,
            i = e.extraActionText;
          return Object(o.jsxs)("div", {
            className:
              "flex flex-col justify-center h-screen bg-blue-800 lg:pt-24 lg:pb-14 lg:bg-cover lg:h-full lg:bg-action",
            children: [
              Object(o.jsx)("p", {
                className:
                  "p-5 text-5xl font-bold leading-normal text-center text-white lg:text-4xl lg:pt-10",
                children: t,
              }),
              Object(o.jsx)("p", {
                className:
                  "pl-12 pr-12 text-xl leading-8 text-center text-gray-300 lg:text-gray-200 lg:font-medium",
                children: l,
              }),
              Object(o.jsxs)("div", {
                className:
                  "flex flex-col flex-wrap items-center justify-center w-full h-48 pt-5 lg:flex-row lg:pt-1",
                children: [
                  Object(o.jsx)("button", {
                    className:
                      "pt-3 pb-3 pl-8 pr-8 mt-3 text-2xl font-semibold text-center text-white transition-all bg-orange-600 shadow-2xl lg:mt-0 rounded-xl hover:bg-orange-700 focus:outline-none ring-2 ring-orange-600 ",
                    children: n,
                  }),
                  Object(o.jsx)("button", {
                    className:
                      "pt-3 pb-3 pl-8 pr-8 mt-8 text-2xl font-semibold text-center text-white transition-all shadow-2xl lg:ml-5 lg:mt-0 rounded-xl hover:text-orange-500 hover:bg-gray-50 focus:outline-none ring-2 ring-gray-300 ",
                    children: i,
                  }),
                ],
              }),
            ],
          });
        },
        h = function (e) {
          var t = e.logo;
          return Object(o.jsxs)("div", {
            className:
              "flex flex-row flex-wrap items-center justify-around p-10",
            children: [
              Object(o.jsx)("a", {
                href: "/",
                className:
                  "w-1/2 pl-5 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0",
                children: Object(o.jsx)("img", {
                  width: "70%",
                  src: t,
                  alt: "logo",
                }),
              }),
              Object(o.jsxs)("div", {
                className:
                  "flex items-center justify-around w-2/3 pt-5 lg:pt-0 lg:w-1/3 ",
                children: [
                  Object(o.jsx)("a", {
                    href: "#",
                    children: Object(o.jsx)("svg", {
                      className: "text-orange-600 hover:text-orange-700",
                      width: "30",
                      height: "30",
                      viewBox: "0 0 35 29",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: Object(o.jsx)("path", {
                        d: "M34.145 4.1787C32.9202 4.70704 31.5873 5.08729 30.2144 5.23539C31.6398 4.38858 32.7072 3.05077 33.2164 1.47295C31.8788 2.26862 30.4136 2.82656 28.8855 3.12202C28.2469 2.43928 27.4745 1.89538 26.6165 1.52421C25.7585 1.15304 24.8332 0.962551 23.8983 0.964616C20.1159 0.964616 17.0739 4.03061 17.0739 7.79305C17.0739 8.32139 17.1379 8.84973 17.242 9.35806C11.5783 9.06187 6.52705 6.35611 3.16887 2.21343C2.55697 3.25857 2.23632 4.44858 2.24026 5.65966C2.24026 8.0292 3.44505 10.1186 5.28224 11.3474C4.19955 11.3047 3.14222 11.0071 2.19624 10.4788V10.5628C2.19624 13.881 4.54176 16.6308 7.66779 17.2632C7.08084 17.4157 6.47704 17.4936 5.87062 17.4953C5.42633 17.4953 5.00606 17.4513 4.58178 17.3913C5.44634 20.097 7.96398 22.0623 10.9619 22.1263C8.6164 23.9635 5.67849 25.0442 2.48843 25.0442C1.91605 25.0442 1.38771 25.0242 0.839355 24.9602C3.86532 26.9014 7.45565 28.0222 11.3222 28.0222C23.8743 28.0222 30.7428 17.6234 30.7428 8.59757C30.7428 8.30138 30.7428 8.00518 30.7227 7.70899C32.0516 6.73636 33.2164 5.53158 34.145 4.1787Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  Object(o.jsx)("a", {
                    href: "#",
                    children: Object(o.jsx)("svg", {
                      className: "text-orange-600 hover:text-orange-700",
                      width: "30",
                      height: "30",
                      viewBox: "0 0 33 33",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: Object(o.jsx)("path", {
                        d: "M31.2106 0.48291H1.75153C1.04307 0.48291 0.470703 1.05528 0.470703 1.76374V31.2229C0.470703 31.9313 1.04307 32.5037 1.75153 32.5037H31.2106C31.9191 32.5037 32.4915 31.9313 32.4915 31.2229V1.76374C32.4915 1.05528 31.9191 0.48291 31.2106 0.48291ZM27.5122 9.82897H24.9546C22.9493 9.82897 22.561 10.7816 22.561 12.1825V15.2685H27.3481L26.7237 20.0996H22.561V32.5037H17.5698V20.1036H13.3951V15.2685H17.5698V11.7062C17.5698 7.57151 20.0954 5.31805 23.7858 5.31805C25.555 5.31805 27.072 5.45013 27.5163 5.51017V9.82897H27.5122Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  Object(o.jsx)("a", {
                    href: "#",
                    children: Object(o.jsx)("svg", {
                      className: "text-orange-600 hover:text-orange-700",
                      width: "30",
                      height: "30",
                      viewBox: "0 0 33 33",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: Object(o.jsx)("path", {
                        d: "M31.198 0.48291H1.73884C1.03038 0.48291 0.458008 1.05528 0.458008 1.76374V31.2229C0.458008 31.9313 1.03038 32.5037 1.73884 32.5037H31.198C31.9064 32.5037 32.4788 31.9313 32.4788 31.2229V1.76374C32.4788 1.05528 31.9064 0.48291 31.198 0.48291ZM9.95617 27.7686H5.20509V12.4867H9.95617V27.7686ZM7.58263 10.3973C7.03798 10.3973 6.50557 10.2358 6.05271 9.93325C5.59985 9.63066 5.24689 9.20057 5.03846 8.69738C4.83004 8.1942 4.7755 7.6405 4.88176 7.10632C4.98801 6.57214 5.25029 6.08146 5.63541 5.69634C6.02053 5.31121 6.51121 5.04894 7.04539 4.94268C7.57958 4.83643 8.13327 4.89096 8.63646 5.09939C9.13965 5.30782 9.56973 5.66078 9.87232 6.11363C10.1749 6.56649 10.3364 7.09891 10.3364 7.64356C10.3324 9.16454 9.09962 10.3973 7.58263 10.3973ZM27.7437 27.7686H22.9966V20.3358C22.9966 18.5626 22.9646 16.2852 20.527 16.2852C18.0574 16.2852 17.6772 18.2144 17.6772 20.2077V27.7686H12.9341V12.4867H17.4891V14.5761H17.5531C18.1855 13.3753 19.7345 12.1065 22.048 12.1065C26.8591 12.1065 27.7437 15.2725 27.7437 19.3872V27.7686Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                ],
              }),
              Object(o.jsx)("div", {
                className: "mt-10 text-lg text-blue-800 lg:mt-0",
                children: "Copyright 2021 Bella Onojie",
              }),
            ],
          });
        },
        b = l.p + "static/media/logo.186a9f64.png",
        m = l.p + "static/media/Rectangle_3.0c97c345.png",
        j = l.p + "static/media/Rectangle_4.4f8a5bef.png",
        f = l.p + "static/media/Rectangle_5.c2ad11fe.png";
      var u = function () {
          var e = {
            hero: {
              appType: "Food app",
              tagLine: "Why stay hungry when you can order from Bella Onojie",
              description: "Download the bella onoje\u2019s food app now on",
              mainActionText: "Playstore",
              extraActionText: "App Store",
            },
            step1: {
              title: "Create an account",
              heading: "Create/login to an existing account to get started",
              description:
                "An account is created with your email and a desired password",
              img: m,
              alternate: !1,
            },
            step2: {
              title: "Explore while shopping",
              heading: "Shop for your favorites meal as e dey hot.",
              description:
                "Shop for your favorite meals or drinks and enjoy while doing it.",
              img: j,
              alternate: !0,
            },
            step3: {
              title: "Checkout",
              heading: "When you're done, check out and get it delivered.",
              description:
                "When you're done, check out and get it  delivered with ease.",
              img: f,
              alternate: !1,
            },
            bottomLead: {
              actionText: "Download the app now.",
              description:
                "Available on your favourite store. Start your premium experience now.",
              mainActionText: "Playstore",
              extraActionText: "App Store",
            },
          };
          return Object(o.jsx)("div", {
            className: "box-border",
            children: Object(o.jsxs)("div", {
              className: "flex flex-col",
              children: [
                Object(o.jsx)(s, { logo: b }),
                Object(o.jsx)(x, {
                  appType: e.hero.appType,
                  tagLine: e.hero.tagLine,
                  description: e.hero.description,
                  mainActionText: e.hero.mainActionText,
                  extraActionText: e.hero.extraActionText,
                }),
                Object(o.jsx)("div", {
                  id: "divider",
                  className:
                    "rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto ",
                }),
                Object(o.jsx)("div", {
                  className:
                    "pt-20 mb-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold",
                  children: "How the app works ",
                }),
                Object(o.jsx)(d, {
                  title: e.step1.title,
                  heading: e.step1.heading,
                  description: e.step1.description,
                  img: e.step1.img,
                  alternate: e.step1.alternate,
                }),
                Object(o.jsx)(d, {
                  title: e.step2.title,
                  heading: e.step2.heading,
                  description: e.step2.description,
                  img: e.step2.img,
                  alternate: e.step2.alternate,
                }),
                Object(o.jsx)(d, {
                  title: e.step3.title,
                  heading: e.step3.heading,
                  description: e.step3.description,
                  img: e.step3.img,
                  alternate: e.step3.alternate,
                }),
                Object(o.jsx)(p, {
                  actionText: e.bottomLead.actionText,
                  description: e.bottomLead.description,
                  mainActionText: e.bottomLead.mainActionText,
                  extraActionText: e.bottomLead.extraActionText,
                }),
                Object(o.jsx)(h, { logo: b }),
              ],
            }),
          });
        },
        w = function (e) {
          e &&
            e instanceof Function &&
            l
              .e(3)
              .then(l.bind(null, 12))
              .then(function (t) {
                var l = t.getCLS,
                  n = t.getFID,
                  i = t.getFCP,
                  a = t.getLCP,
                  r = t.getTTFB;
                l(e), n(e), i(e), a(e), r(e);
              });
        };
      r.a.render(
        Object(o.jsx)(i.a.StrictMode, { children: Object(o.jsx)(u, {}) }),
        document.getElementById("root")
      ),
        w();
    },
    8: function (e, t, l) {},
    9: function (e, t, l) {},
  },
  [[11, 1, 2]],
]);
//# sourceMappingURL=main.cd364f57.chunk.js.map

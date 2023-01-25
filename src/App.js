import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Step from "./components/Step";
import BottomLead from "./components/BottomLead";
import Footer from "./components/Footer";
import qr from "./assets/qrcode.png";
import logo from "./assets/logo.png";
import Rectangle_3 from "./assets/Rectangle_3.png";
import Rectangle_4 from "./assets/Rectangle_4.png";
import Rectangle_5 from "./assets/Rectangle_5.png";

function App() {
  const data = {
    hero: {
      appType: "Приложение для еды",
      tagLine: "Мы умеем вкусно готовить и приятно удивлять!",
      description: "Скачайте наше приложение прямо сейчас на",
      mainActionText: "Playstore",
      extraActionText: "App Store",
    },
    step1: {
      title: "Создайте аккаунт",
      heading: "Создайте/Войдите в существующую учетную запись, чтобы начать",
      description:
        "Учетная запись будет создана с вашим адресом электронной почты и паролем ",
      img: Rectangle_3,
      alternate: false,
    },
    step2: {
      title: "Меню",
      heading: "Выбирайте свои любимые блюда или напитки",
      description:
        "Добавляйте в корзину понравившиеся блюда и переходите к оформлению заказа ",
      img: Rectangle_4,
      alternate: true,
    },
    step3: {
      title: "Оформление заказа",
      heading: "Оплачивайте заказ удобным для вас способом",
      description: "Выберите вариант оплаты заказа и способ получения",
      img: Rectangle_5,
      alternate: false,
    },
    bottomLead: {
      actionText: "Загрузить приложение сейчас.",
      description:
        "Доступно для загрузки на любой платформе, начните прямо сейчас",
      mainActionText: "Playstore",
      extraActionText: "App Store",
    },
  };
  return (
    <div className="box-border">
      <div className="flex flex-col">
        <Navbar logo={logo} />
        <Hero
          appType={data.hero.appType}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
        />

        <div
          id="divider"
          className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "
        ></div>

        <div
          id="faq"
          className="pt-20 mb-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold"
        >
          Как работает приложение
        </div>

        <Step
          title={data.step1.title}
          heading={data.step1.heading}
          description={data.step1.description}
          img={data.step1.img}
          alternate={data.step1.alternate}
        />
        <Step
          title={data.step2.title}
          heading={data.step2.heading}
          description={data.step2.description}
          img={data.step2.img}
          alternate={data.step2.alternate}
        />
        <Step
          title={data.step3.title}
          heading={data.step3.heading}
          description={data.step3.description}
          img={data.step3.img}
          alternate={data.step3.alternate}
        />

        <BottomLead
          actionText={data.bottomLead.actionText}
          description={data.bottomLead.description}
          mainActionText={data.bottomLead.mainActionText}
          extraActionText={data.bottomLead.extraActionText}
        />

        <Footer logo={logo} qr={qr} />
      </div>
    </div>
  );
}

export default App;

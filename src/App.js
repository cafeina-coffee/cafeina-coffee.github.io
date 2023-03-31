import "./App.css";

import background from "./assets/menu.jpg";
import { IoIosArrowRoundDown } from "react-icons/io";

function App() {
  return (
    <div className="container">
      <img src={background} alt="" className="image" />
      <h1 className="logo" style={{ marginTop: "50px", marginBottom: "30px" }}>
        Kafeina Coffee
      </h1>
      <div className="page-content">
        <div className="category-area">
          <h3>Espresso Bazlı Kahveler</h3>
          <div className="item-area">
            <p className="item-names">
              Doppio (Double Espresso) <br />
              Espresso <br />
              Macchiato <br />
              Americano
              <br />
              Cortado <br />
              Café Latte <br />
              Flat White <br />
              Cappicuno <br />
              Caramel Macchiato
              <br />
              Café Mocha (Dark/whi̇te) <br />
              Red Eye <br />
              Black Eye <br />
              Dead Eye
              <br />
              Affogato <br />
              Caramel Latte <br />
              Vanilya Latte
              <br />
              Cinnamon Latte <br />
              Toffee Nut Latte <br />
              Salt Caramel Latte
            </p>
            <p className="item-prices">
              34
              <br />
              <br />
              37
              <br />
              42
              <br />
              45
              <br />
              49
              <br />
              49
              <br />
              49
              <br />
              49
              <br />
              52
              <br />
              54
              <br />
              <br />
              48
              <br />
              51
              <br />
              54
              <br />
              65
              <br />
              54
              <br />
              54
              <br />
              54
              <br />
              58
              <br />
              58
            </p>
          </div>
        </div>
        <div className="category-area">
          <h3>Soğuk Kahveler</h3>
          <div className="item-area">
            <p className="item-name">
              Iced Doppio (Double Espresso)
              <br />
              Iced Espresso <br />
              Iced Macchiato <br />
              Iced Americano
              <br />
              Iced Cortado <br />
              Iced Café Latte <br />
              Iced Flat White <br />
              Iced Cappicuno <br />
              Iced Caramel Macchiato
              <br />
              Iced Café Mocha (Dark/whi̇te) <br />
              Iced Red Eye <br />
              Iced Black Eye <br />
              Iced Dead Eye
              <br />
              Iced Affogato <br />
              Iced Caramel Latte <br />
              Iced Vanilya Latte
              <br />
              Iced Cinnamon Latte <br />
              Iced Toffee Nut Latte <br />
              Iced Salt Caramel Latte
            </p>
            <p className="item-prices">
              37
              <br />
              <br />
              40
              <br />
              45
              <br />
              48
              <br />
              52
              <br />
              52
              <br />
              52
              <br />
              52
              <br />
              55
              <br />
              <br />
              57
              <br />
              <br />
              51
              <br />
              54
              <br />
              57
              <br />
              68
              <br />
              57
              <br />
              57
              <br />
              57
              <br />
              61
              <br />
              61
            </p>
          </div>
        </div>
      </div>
      <div className="page-end-info">
        <span className="page-end-info-text">Tatlılar & Dondurmalar</span>
        <IoIosArrowRoundDown size={30} />
      </div>
      <img
        src={background}
        alt=""
        className="image"
        style={{ top: "810px", zIndex: -999, height: "700px" }}
      />
      <div
        className="page-content"
        style={{ marginTop: "160px", marginBottom: "50px" }}
      >
        <div
          className="page-content"
          style={{ flexDirection: "column", padding: 0 }}
        >
          <div className="category-area">
            <h3>Sıcak İçecekler</h3>
            <div className="item-area">
              <p className="item-name">
                Demleme Çay <br />
                Fi̇ncan Çay <br />
                Türk Kahvesi̇
                <br />
                Double Türk Kahvesi̇
                <br />
                Sahlep
                <br />
                Sicak Çi̇kolata
                <br />
                Chai̇ Tea Latte
                <br />
              </p>
              <p className="item-prices">
                15 <br />
                20 <br />
                35
                <br />
                40
                <br />
                52
                <br />
                52
                <br />
                52
              </p>
            </div>
          </div>
          <div className="category-area">
            <h3>3.nesil Kahveler</h3>
            <div className="item-area">
              <p className="item-names">
                Chemex <br />
                Syphon <br />
                French Press <br />
                Cold Brew <br />
                Fi̇ltre Kahve <br />
                Sütlü Fi̇ltre Kahve
              </p>
              <p className="item-prices">
                52
                <br /> 60
                <br /> 52
                <br /> 55
                <br />
                45
                <br />
                49
              </p>
            </div>
          </div>
          <div className="category-area">
            <h3>Bitki Çayları</h3>
            <div className="item-area">
              <p className="item-name">
                Adaçayı <br />
                Ihlamur <br /> Kış Çayı <br />
                Nane Li̇mon <br />
                Papatya Çayı
              </p>
              <p className="item-prices">
                {" "}
                45 <br />
                45 <br />
                45 <br />
                45 <br />
                45
              </p>
            </div>
          </div>
        </div>
        <div
          className="page-content"
          style={{ flexDirection: "column", padding: 0 }}
        >
          <div className="category-area">
            <h3>Soğuk İçecekler</h3>
            <div className="item-area">
              <p className="item-name">
                Uludağ Premium Su <br />
                Uludağ Premium Soda
                <br /> Soda Li̇mon
                <br /> Churchill
                <br /> Pin Soğuk Çay Orijinal <br />
                Pin Soğuk Çay Li̇mon
                <br /> Pin Soğuk Çay Şeftali̇
                <br />
                Coca Cola (Orijinal & Zero)
                <br /> Meyveli̇ Soda <br />
                <span style={{ fontSize: "10px" }}>
                  (Li̇mon, Karpuz-Çi̇lek, Elma)
                </span>
                <br />
                Uludağ Tutti Frutti <br />
                <span style={{ fontSize: "10px" }}>
                  {" "}
                  ( Sari Li̇mon, Yeşi̇l Li̇mon, Armut, Kavun, Mandali̇na, Orman
                  Meyveli̇){" "}
                </span>
                <br />
                Uludağ Gazoz <br />
                <span style={{ fontSize: "10px" }}>
                  (Orijinal & Portakalli)
                </span>
              </p>
              <p className="item-prices">
                20
                <br />
                25 <br />
                30
                <br />
                35
                <br />
                40
                <br />
                40
                <br />
                40
                <br />
                40
                <br />
                <br />
                30
                <br />
                <br />
                30
                <br />
                <br />
                <br />
                <br />
                35
              </p>
            </div>
          </div>
          <div className="category-area">
            <h3>Frappe</h3>
            <div className="item-area">
              <p className="item-name">
                Frappe Fındık <br />
                Frappe Karamel <br />
                Frappe Vanilya <br />
                Frappe Beyaz Çikolata <br />
                Frappe Çikolata <br />
              </p>
              <p className="item-prices">
                59
                <br />
                59 <br />
                59 <br />
                59 <br />
                59 <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

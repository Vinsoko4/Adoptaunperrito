import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './Components/MyCard';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <Header title= 'Adopta un perrito'/>
    <div className='Cards'>
      <MyCard
        image='./src/assets/img/Akamaru-Naruto.jpg'
        Name='Akamaru'
        Desc='Tierno perro albino entrenado como compañero ninja, tiene buen físico, buen olfato, sabe trabajar en conjunto con su dueño usando ninjustu y es muy leal.'
        Text= 'Adóptalo'
        Color='primary'
        />
      <MyCard
        image='./src/assets/img/Bond-Spy_x_Family.jpg'
        Name='Bond'
        Desc='A pesar de su avanzada edad es un perro muy inteligente y capacitado para ser un excelente perro espía, pese a ser pacifista. Tiene la habilidad de ver el futuro, a pesar de que no sepa cómo expresarlo correctamente, muy juguetón y hogareño.'
        Text= 'Adóptalo'
        Color='success'
      />
      <MyCard
        image='./src/assets/img/Taromaru-Gakkou_Gurashi.jpg'
        Name='Taromaru'
        Desc='Un Shiba Inu extremadamente adorable y juguetón. Es el mejor compañero para un apocalipsis zombie, te asegurará conseguir muchos nuevos amigos y las ganas de jugar mordiendo no faltarán.'
        Text= 'Adóptalo'
        Color='warning'
      />
      <MyCard
        image='./src/assets/img/Alexander-Full_Metal_Alchemist.jpg'
        Name='Alexander'
        Desc='El perro prohibido. No está en adopción. Ya sabes por qué.'
        Text= 'No seas cabrón ._.'
        Color='danger'
        />
    </div>
      <Footer footer= 'Estos lindos perritos defantasías animezcas de ayer y hoy esperan ansiosamente a que los adoptes y los quieras. Son muy leales y cariñosos, no necesitan entrenamiento, pero cuidado, que si los descuidas puedas acabar como algunos de sus dueños anteriores.'
      warning= 'Dependerá de ti si conozcas algunos de sus finales. ¡Buena suerte!'/>
    </>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/1.jpeg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import "../styles/Home.css";
import About from "./About";
import Contact from "./Contact";
import Footer from "../Components/Footer";


function Home() {

  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>ALGERIA </h1>
          <p>THE TRUTH WILL MAKE YOU FREE</p>
         
        </div>
      </div>
      <br />
      <br />
      <br />
      <h2>Algeria's History</h2>
      <p>Algeria officially The People's Democratic Republic of Algeria, is a country in the Maghreb region of North Africa on the Mediterranean coast. The country is bordered in the northeast by Tunisia, in the east by Libya and in the west by morocco, in the southwest by Western Sahara, Mauritania, and Mali, in the southeast by Niger, with an estimated population of 37.9 million. Its Arabic name, Al Jazair means the islands.
<br />
<span><h5>Important phases of Algerian History</h5></span>

Discovering and understanding Algeria is synonym of patience. Through painful successions, its history was written. Its different historical phases should be known to understand this country.
 
In Antiquity Algeria was known as the NUMIDIA KINGDOM and its people were called NUMIDIANS and IMAZIGHEN which means “Free men” .
 
At the turn of Europe and Africa, over the centuries, people came. Some have taken root, others left their imprints.
 
In 1250 BC, Phoenician traders arrived on the North African coast around and established “Carthage” ( in present-day Tunisia).
 
As Carthaginian power declined because of successive defeats by the Romans in the Punic Wars, the influence of Numidian leaders in the hinterland grew.
 
The one who succeeded to unify Numidia under his rule was the famous king MASSINISSA. He made CIRTA (nowadays Constantine, the 3rd city of Algeria); the Capital of his Kingdom.</p>
<img src={img1} alt="" srcset="" />
<br />
<p>
Jugurtha (160 B.C - 105 B.C.) was Masinissa's popular ambitious grandson. He tried to unify Numidia again but after a war against the Romans he was executed in 105 B.C.
</p>
<img src={img2} alt="" srcset="" />
<br />
<h5>Roman rule</h5>
<p>
(106 B.C- 430)
 
 By 106 B.C, after defeating King Jugurtha of Numidia, Romans gained control of Algeria, specially the Tell Atlas region and part of the haut Plateaus. The rest of present-day Algeria remained under Numidians rulers and was outside Roman rule.
  
 Under Rome, the cities were built up and impressive public works were constructed, specially Tipaza and Timgad.
  
 By the 5th cent, Roman civilization in Algeria had been eroded by incursions of Numidians and the destruction wreaked by the Vandals in 430–431, marked the end of effective Roman control.
</p>
<img src={img3} alt="" />
<br />
<h5>TIPAZA</h5>
<p>
Tipaza is the ancient city with historic Numidian mausoleum and the exceptional Punic, Roman and Christian ruins along the Mediterranean coast. Since 1982, it has been inscribed on the World Heritage List of UNESCO.


</p>
<img src={img4} alt="" />
<p>
Between 430 and 533, other invaders came from the North of Europe and named Vandale.They established their first State in Algeria, with Bejaia as Capital. After one century of existence, Vandale’s people integrated the Algerian population.  
 
 In 534, Byzantins tried to impose their influence in the region. They stayed in Algeria until the arrival of Islam.
 
 Arrival of Islam
 
 
  
 When Muslim Arabs came to Algeria in the mid-7th century, a large number of locals converted to the new faith.
  
 The introduction of Islam and Arabic had a profound impact on North Africa. The new religion and language introduced changes in social and economic relations, established links with a rich culture, and provided a powerful idiom of political discourse and organization.
</p>
<img src={img5} alt="" />
<img src={img6} alt="" />
<img src={img7} alt="" />
<h5>Raïs Palace</h5>
<p>
also called Bastion 23 is one of the most important historical monuments of the city of Algiers. It is, moreover, one of the last witnesses which attest to the physical extension of Casbah of Algiers to the sea during the Ottoman period. Since 1992, it has been inscribed on the World Heritage List of UNESCO.
</p>
<h5>French Rule</h5>
<img src={img8} alt="" />
<h5>Algerian Resistance</h5>
<p>The French faced many oppositions. The most important one was the resistance of El Amir Abd el-Kader in the West of Algeria, from 1832 to 1847.

He is a great hero of the contemporary history of Algeria.

After the first World War and collective awareness, the resistance started to be organized by the: 

Organization of religious and intellectual associations;

Creation of political partis. The most important one was the ‘’North African Star” (Étoile Nord-Africaine),  in Paris, in 1926 with Messali Hadj as leader. It was the first to call for Algerian independence. 

After the second world war, an important event  will mark the beginning of the end of the French colonization.

On 8th May 1945, Algerian demonstrators came out to the street, in Sétif and Guelma regions, carrying Algerian Nationalist flags and calling for the independence. More than 20 thousands  Algerians were killed by the French forces. 

Those massacres marked the beginning of the Algerian war of independence and are considered as one of the great turning points in colonial history.   

<span><h5>Algerian Revolution </h5></span>

On 1st November, 1954, attacks across Algeria marked the beginning of the independence struggle, which was led by the National Liberation Front (FLN) and only ended in July 1962 with the country’s formal declaration of independence from France.  

During those eight years, 1.5 million Algerians died.
<span><h5>Algerian Independence </h5></span>
 
The Algerian Revolution came to an end with the signature of the Evian Accords that marked the end of 130 years of French colonial rule in Algeria; on the 5th July 1962.
 </p>
<br />
<br />
<br />
<About></About>
     <Contact/>
      
    </>
  );
}

export default Home;

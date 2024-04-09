
import imagenSala1 from '../assets/ImgServicios/PC-gamer-negro rosa.jpg';
import imagencomputo from '../assets/ImgServicios/sala computo 1.jpg';
import imagenasesorio from '../assets/ImgServicios/2149529368.jpg';

function BannerServicios() {

    return (
        <>
        <section className="flotante">
           <div>
            
          <img src={imagencomputo} alt="2149529368.jpg" />
           
           
          <img src={imagenSala1} alt="Sala de computo 1.jpg" />
          
          
          <img src={imagenasesorio} alt="PC-gamer-negro rosa.jpg" />
          
          </div>
          

        </section>
      </>
    )
  }
  
  export default BannerServicios;

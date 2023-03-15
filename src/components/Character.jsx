import eren from '../images/eren.png';
import armin from '../images/armin.png';
import erwin from '../images/erwin.png';
import hange from '../images/hange.png';
import kenny from '../images/kenny.png';
import levi from '../images/levi.png';
import miche from '../images/miche.png';
import mikasa from '../images/mikasa.png';
import ymir from '../images/ymir.png';

const Character = ({ author }) => {

    const authorBank = {
        'Armin Arlert': armin,
        'Armin Arlelt': armin,
        Eren: eren,
        'Erwin Smith': erwin,
        'Hange Zoe': hange,
        'Kenny Ackerman': kenny,
        'Levi Ackerman': levi,
        'Miche Zacharius': miche,
        Mikasa: mikasa,
        Ymir: ymir

    }
    
    return (
        <img src={authorBank[author]} alt="Eren" className='img-fluid character' />
    )
}

export default Character;
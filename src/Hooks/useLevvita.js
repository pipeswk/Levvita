import { useContext } from 'react';
import LevvitaContext from '../Context/LevvitaProvider';

const useLevvita = () => {
    return useContext(LevvitaContext);
}

export default useLevvita;
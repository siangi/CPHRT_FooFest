import React from 'react'
import FavoriteBandCard from './FavoriteBandCard';
import { BandContext } from '../../pages/Favorites';
import H2 from '../typography/H2';


export default function DayWrapper(props) {
    const favoritedBands = React.useContext(BandContext);
  return (

      <div>
          <div className="flex justify-center">
            <H2>{props.day}</H2>
          </div>
        <div>
            {favoritedBands
                .map((band) => (
                    <FavoriteBandCard bandObj={band} />
                    ))}
        </div>
      </div>
  );
}


import React, {FC} from 'react';
import {PlayerEnum} from 'src/hooks/useGame';
import XPlayer from 'src/icons/x.svg';
import OPlayer from 'src/icons/o.svg';
interface Props {
  value: string | null;
}
const Player: FC<Props> = ({value}) => {
  if (value === PlayerEnum.X) {
    return <XPlayer />;
  }
  if (value === PlayerEnum.O) {
    return <OPlayer />;
  }
  return null;
};

export default Player;

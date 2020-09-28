import React, { useRef } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';

import useCharactorIcon from '~/hooks/useCharactorIcon';
import CharactorContainer from '~/containers/CharactorContainer';

// components
import TextRect from './text-rect';

// material-ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// styles
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: theme.spacing(4, -2, 0),
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[100],
    },
    root: {
      display: 'flex',
    },
    output: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      borderLeft: `1px solid ${theme.palette.grey[100]}`,
    },
    actions: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  }),
);

const PreviewDownload = () => {
  const {
    origin,
    job,
    jobText,
    personality,
    getCharactorText,
  } = CharactorContainer.useContainer();

  const image = useCharactorIcon(origin, job);
  const charText = getCharactorText();
  const disable = charText === '';

  const styles = useStyles();

  const ref = useRef<Konva.Stage>(null);
  const onClickToImageDL = () => {
    const charText = getCharactorText();
    if (charText !== '' && ref.current != null) {
      const link = document.createElement('a');
      link.download = `冒ギル2-${charText}.png`;
      link.href = ref.current.toDataURL();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const onClickToCopy = () => {
    if (charText !== '') {
      navigator.clipboard.writeText(charText).then(
        () => {
          console.log(`copy "${charText}"`);
        },
        () => {
          console.log('copy fail');
        },
      );
    }
  };

  return (
    <div className={styles.container}>
      <Card square className={styles.root}>
        <div>
          <Stage width={120} height={120} ref={ref}>
            <Layer>
              <Image image={image} />
              {origin && <TextRect x={2} y={12} text={origin} />}
              {jobText && <TextRect x={2} y={48} text={jobText} />}
              {personality && <TextRect x={2} y={84} text={personality} />}
            </Layer>
          </Stage>
        </div>
        <CardContent className={styles.output}>
          <input type="text" value={charText} readOnly />
          <div className={styles.actions}>
            <input
              type="button"
              value="コピー"
              disabled={disable}
              onClick={onClickToCopy}
            />
            <input
              type="button"
              value="画像DL"
              disabled={disable}
              onClick={onClickToImageDL}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreviewDownload;

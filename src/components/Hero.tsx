import React from 'react';

// material-ui
import Typography from '@material-ui/core/Typography';

// styles
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(0, -2, 4, -2),
      padding: theme.spacing(0, 2, 2, 2),
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
    },
    title: {
      padding: theme.spacing(2, 0),
      fontWeight: 'bold',
      textAlign: 'center',
    },
    description: {
      fontSize: '0.75rem',
    },
  }),
);

const Hero = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Typography component="h1" variant="h6" className={styles.title}>
        冒険者ギルド物語2
        <br />
        キャラクター画像ジェネレーター
      </Typography>
      <Typography variant="body2" className={styles.description}>
        種族・現職業・前職業・個性を選択すると画像がダウンロードできるほか、
        「吸忍(ロ)竜」などのテキストがコピーできるツールです。
      </Typography>
    </div>
  );
};

export default Hero;
